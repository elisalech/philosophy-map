import React, { Component, useState, useContext } from "react";
import axios from "axios";

import ParserContext from "../../context/ParserContext";

const InPhO = "https://www.inphoproject.org";

class Parser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [],
      edges: []
    };
  }

  handleGetPp = () => {
    let proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://philpapers.org/philpapers/raw/categories.json?apiId=784298&apiKey=65bYvgX7lvNpObRF";
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
    console.log("parseToVis", data);
    // const graph = [];
    let parsedNodes = [],
      parsedEdges = [];

    data.forEach((theme, idx) => {
      let name = theme[0],
        id = parseInt(theme[1]),
        parents = theme[2].split(",").map(el => parseInt(el)),
        primeParent = parseInt(theme[3]);

      parsedNodes.push({
        id: id,
        title: "none",
        label: name,
        value: 10000,
        color: "#fff",
        border: "1px solid black"
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
      nodes: parsedNodes,
      edges: parsedEdges
    });
    console.log("PARSED NODES: ", parsedNodes);
    console.log("PARSED EDGES: ", parsedEdges);
  };

  handleGetInPho = () => {
    axios
      .get(`${InPhO}/taxonomy`)
      // .then(blob => blob.json())
      .then(res => {
        console.log(res);
        const parsed = res.data.responseData.results;
        // console.log("InPhO thinker/:id", res);
        console.groupCollapsed("InPho-data");
        console.table(parsed);
        console.groupEnd();
        console.log("InPhO", parsed);
      })
      .catch(er => {
        console.log("Catch error: ", er);
      });
  };

  render() {
    return (
      <div
        className="Parser"
        style={
          {
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // height: "100vh"
          }
        }
      >
        <ParserContext.Provider
          value={{
            nodes: this.state.nodes,
            edges: this.state.edges
          }}
        >
          <div id="xpapers_gadget">
            Loading papers... (
            <a href="http://philpapers.org/browse/representationalism">here</a>{" "}
            if the papers don't load.)
          </div>
          <br />
          <div>
            <button onClick={this.handleGetPp} style={{ display: "block" }}>
              Phil-get!
            </button>
            <button onClick={this.handleGetInPho} style={{ display: "block" }}>
              InPho-get!
            </button>
            <button
              onClick={() => this.props.handleGraph(this.state)}
              style={{ display: "block" }}
            >
              To Graph!
            </button>
          </div>
        </ParserContext.Provider>
      </div>
    );
  }
}

export default Parser;
