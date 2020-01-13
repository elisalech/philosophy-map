import React from "react";
import "./App.css";
// import axios from "axios";

import Parser from "./containers/Parser/Parser";
// import Graph from "./components/Graph/Graph";
import GraphCy from "./components/Graph/GraphCy";
import GraphVis from "./components/Graph/GraphVis";
import GraphVisPerf from "./components/Graph/GraphVisPerf";
import ReactGraphVisNeibours from "./components/Graph/ReactGraphVisNeibours";
import ParserContext from "./context/ParserContext";

// import { nodes, edges } from "./components/Graph/defaultData";

// const csrfToken = document.querySelector("meta[name=csrf-token]").content;
// axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: [],
      graph: null,
      graphRender: false,
      toFind: ""
    };
  }

  handleGraph = data => {
    console.log("1_in handleGraph:", data);
    const { nodes, edges } = data;
    console.log("2_in handleGraph:", nodes, edges);

    this.setState({
      nodes,
      edges
    });
  };

  handleSearch = event => {
    let title = event.target.value.toLowerCase();
    this.setState({ toFind: title });
    console.log(this.state.toFind);
  };

  handleSubmit = event => {
    event.preventDefault();
    const { nodes, toFind, edges } = this.state;
    console.log("toFind", toFind);
    console.log("nodes", nodes);
    const resNodes = nodes.filter(node =>
      node.label.toLowerCase().includes(toFind)
    );
    const searchIds = [];
    resNodes.forEach(node => {
      node.color = "#ffe";
      node.value = 50000000;
      searchIds.push(node.id);
    });
    console.log("searchIds", searchIds);
    console.log("edges", edges);
    const resEdges = edges.filter(edge => {
      return searchIds.includes(edge.to) || searchIds.includes(edge.from);
    });
    console.log("resEdges", resEdges);

    const childSet = new Set();
    resEdges.forEach(edge => {
      if (!(childSet.has(edge.to) || childSet.has(edge.from))) {
        childSet.add(edge.to);
        childSet.add(edge.from);
      }
    });
    const childIds = [...childSet];

    console.log("resNodes PREV", resNodes);

    nodes.forEach(node => {
      if (childIds.includes(node.id) && !resNodes.includes(node)) {
        resNodes.push(node);
      }
    });

    console.log("resNodes LAST", resNodes);

    this.setState({ nodes: resNodes, edges: resEdges });
  };

  render() {
    // console.log("nodes: ", nodes);
    // console.log("edges: ", edges);
    const { graphRender } = this.state;
    return (
      <div className="App">
        <ParserContext.Provider>
          <p>
            Each entry in this list represents a category. The included fields
            are:{" "}
          </p>
          <ul>
            <li>Name of the category</li>
            <li>ID of the category</li>
            <li>Comma-separated list of IDs of parents</li>
            <li>IDs of the primary parent</li>
          </ul>
          <p>Note that the root category (which has ID 1) is not included.</p>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleSearch}
                placeholder="search Philisophy!"
              />
              <input type="submit" />
            </form>
          </div>
          <Parser handleGraph={this.handleGraph} />
          {/*<GraphCy graph={this.state.graph} />*/}
          <button onClick={() => this.setState({ graphRender: !graphRender })}>
            Toggle graph!
          </button>

          {/*  <GraphVis nodes={nodes} edges={edges} />
          {graphRender ? (
            <GraphVisPerf nodes={this.state.nodes} edges={this.state.edges} />
          ) : null}
          <div
            id="network"
            style={{
              width: "70vw",
              height: "70vh",
              border: "1px solid black"
            }}
          ></div> */}
          {graphRender ? (
            <ReactGraphVisNeibours
              nodes={this.state.nodes}
              edges={this.state.edges}
            />
          ) : null}
        </ParserContext.Provider>
      </div>
    );
  }
}

export default App;
