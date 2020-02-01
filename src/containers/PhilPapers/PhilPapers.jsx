import React, { Component } from "react";
import "./PhilPapers.scss";

import Parser from "../Parser/Parser";
import Button from "../../components/Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import Controls from "../../components/Controls/Controls";
import TextComponent from "../../components/TextComponent/TextComponent";

class PhilPapers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedNodes: null,
      parsedEdges: null,
      nodes: null,
      edges: null,
      isWaiting: true,
      isFiltered: false,
      toFind: "",
      preview: null
    };
  }

  handleGetPp = () => {
    const key = "65bYvgX7lvNpObRF";
    const id = "784298";
    let proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl = `https://philpapers.org/philpapers/raw/categories.json?apiId=${id}&apiKey=${key}`;
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        this.parseToVis(data);
      })
      .catch(er => {
        console.log("Catch error: ", er);
      });
  };

  parseToVis = data => {
    let parsedNodes = [],
      parsedEdges = [];

    let mainContainer = [];

    data.forEach((theme, idx) => {
      let name = theme[0],
        id = parseInt(theme[1]),
        parents = theme[2].split(",").map(el => parseInt(el)),
        primeParent = parseInt(theme[3]);
      let mainColor = false,
        mainSize = false;

      if (primeParent === 1) {
        mainContainer.push(theme);
        // mainColor = "#ccc";
        mainSize = 50;
      }

      parsedNodes.push({
        id: id,
        title: "none",
        label: name,
        size: mainSize || 18,
        color: mainColor || "#fff"
      });

      parents.forEach(par => {
        parsedEdges.push({
          from: id,
          to: par === 1 ? undefined : par,
          primeParent: primeParent
        });
      });
    });

    this.setState({
      parsedNodes,
      parsedEdges,
      isWaiting: false
    });
    this.props.toggleLoader();
  };

  componentDidMount() {
    this.handleGetPp();
  }

  passUp = (nodes, edges) => {
    this.props.handleUp(nodes, edges);
  };

  handleSearch = event => {
    if (!event.target.value) {
      this.setState({ nodes: null, edges: null, isFiltered: false });
    }
    let search = event.target.value.toLowerCase();
    this.setState({ toFind: search });

    if (search.length >= 3) {
      let preview = this.state.parsedNodes
        .filter(node => node.label.toLowerCase().includes(search))
        .reduce((ac, el) => [...ac, { label: el.label, id: el.id }], []);
      return this.setState({ preview: preview });
    }
    this.setState({ preview: null });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { parsedNodes, toFind, parsedEdges } = this.state;

    const resNodes = parsedNodes.filter(node =>
      node.label.toLowerCase().includes(toFind)
    );
    const searchIds = [];
    resNodes.forEach(node => {
      // node.color = "#fff";
      node.size = 30;
      searchIds.push(node.id);
    });

    const resEdges = parsedEdges.filter(edge => {
      return searchIds.includes(edge.to) || searchIds.includes(edge.from);
    });

    const childSet = new Set();
    resEdges.forEach(edge => {
      if (!(childSet.has(edge.to) || childSet.has(edge.from))) {
        childSet.add(edge.to);
        childSet.add(edge.from);
      }
    });
    const childIds = [...childSet];

    parsedNodes.forEach(node => {
      if (childIds.includes(node.id) && !resNodes.includes(node)) {
        resNodes.push(node);
      }
    });

    this.setState({ nodes: resNodes, edges: resEdges, isFiltered: true });
    // if (resNodes && resEdges) {
    // }
  };

  handleOption = event => {
    console.log("handleOption");
    const selectedId = event.target.dataset.id;
    const { parsedEdges, parsedNodes } = this.state;

    let relatedIds = [];
    let edges = [];

    parsedEdges.forEach(edge => {
      if (edge.to == selectedId || edge.from == selectedId) {
        edges.push(edge);
        relatedIds.push(edge.to);
        relatedIds.push(edge.from);
      }
    });

    let nodes = [];
    relatedIds.forEach(id => {
      parsedNodes.forEach(node => {
        if (node.id == id) {
          nodes.push(node);
        }
      });
    });

    nodes = [...new Set(nodes)];

    relatedIds = [...new Set(relatedIds)];
    console.log("relatedIds", relatedIds);
    console.log("nodes", nodes);

    this.setState({ nodes, edges, isFiltered: true });
    this.passUp(nodes, edges);
  };

  render() {
    const { isWaiting, isFiltered } = this.state;
    const nodes = this.state.nodes || this.state.parsedNodes;
    const edges = this.state.edges || this.state.parsedEdges;
    let message = isFiltered ? "Update graph" : "See full map";

    if (this.props.draggie) {
      return (
        <div className="draggie">
          <Controls controls={this.props.controls} />
        </div>
      );
    }

    return (
      <div className="philpapers-container">
        <Controls controls={this.props.controls} />
        <TextComponent
          title="PhilPapers"
          description="Data parsed via PhilPapers API. Here you can visualize the full map with more than 5.5 thousand nodes."
          pick="Start typing for an idea:"
          waiting="data is loading..."
          isWaiting={isWaiting}
        />

        {!isWaiting ? (
          <>
            <SearchBar
              handleSubmit={this.handleSubmit}
              handleSearch={this.handleSearch}
              preview={this.state.preview}
              handleOption={this.handleOption}
            />
            <Button
              text={message}
              data="philpapers"
              handleClick={() => this.passUp(nodes, edges)}
            />
          </>
        ) : null}
      </div>
    );
  }
}

export default PhilPapers;
