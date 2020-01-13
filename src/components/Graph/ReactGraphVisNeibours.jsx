import React, { Component, useContext, useState } from "react";
import Graph from "react-graph-vis";

import ParserContext from "../../context/ParserContext";

class ReactGraphVisNeibours extends Component {
  constructor(props) {
    super(props);

    this.state = {
      graph: {
        nodes: this.props.nodes,
        edges: this.props.edges
      },
      options: {
        nodes: {
          shape: "dot",
          // scaling: {
          //   min: 10,
          //   max: 30,
          //   label: {
          //     min: 8,
          //     max: 30,
          //     drawThreshold: 12,
          //     maxVisible: 20
          //   }
          // },
          font: {
            size: 30,
            face: "Tahoma"
          }
        },
        edges: {
          width: 0.15,
          color: "#777",
          smooth: {
            type: "continuous"
          }
        },
        physics: {
          stabilization: false
          // ,
          // barnesHut: {
          //   gravitationalConstant: 80,
          //   springConstant: 0.00001,
          //   springLength: 1
          // }
        },
        interaction: {
          hover: true,
          tooltipDelay: 200,
          hideEdgesOnDrag: true,
          hoverConnectedEdges: true
        }
        // physics: {
        //   stabilization: false,
        //   barnesHut: {
        //     gravitationalConstant: -80000,
        //     springConstant: 0.001,
        //     springLength: 200
        //   }
        // },
      },
      events: {
        // select: event => {
        //   console.log("select");
        //   console.log("Event:");
        //   this.neighbourhoodHighlight(event);
        //   console.log(event);
        //   var { nodes, edges } = event;
        //   console.log("Selected nodes:");
        //   console.log(nodes);
        //   console.log("Selected edges:");
        //   console.log(edges);
        // },
        select: event => {
          console.log("select");
          this.handleChangeColor(event);
        }
        // ,
        // deselectNode: event => {
        //   this.handleDeselectNode;
        // }
      },
      network: null,
      highlightActive: false
    };
  }

  componentDidMount() {
    console.log("Finished ReactGraphVisNeibours");
    // this.state.network.on("click", this.neighbourhoodHighlight);
    console.log(this.state.network);
  }

  setNetworkInstance = nw => {
    this.setState({
      network: nw
    });
  };

  handleDeselectNode = () => {
    console.log("handleDeselectNode");
  };

  neighbourhoodHighlight = params => {
    console.log("neighbourhoodHighlight");
    let highlightActive = false;
    let allNodes = { ...this.props.nodes };
    let { network } = this.state;
    // if something is selected:
    if (params.nodes.length > 0) {
      highlightActive = true;
      var i, j;
      var selectedNode = params.nodes[0];
      console.log("selectedNode_1", selectedNode);
      var degrees = 2;
      // mark all nodes as hard to read.
      for (var nodeId in allNodes) {
        allNodes[nodeId].color = "#000";
        if (allNodes[nodeId].hiddenLabel === undefined) {
          allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
          allNodes[nodeId].label = undefined;
        }
      }
      var connectedNodes = network.getConnectedNodes(selectedNode);
      var allConnectedNodes = [];
      // get the second degree nodes
      for (i = 1; i < degrees; i++) {
        for (j = 0; j < connectedNodes.length; j++) {
          allConnectedNodes = allConnectedNodes.concat(
            network.getConnectedNodes(connectedNodes[j])
          );
        }
      }
      // all second degree nodes get a different color and their label back
      for (i = 0; i < allConnectedNodes.length; i++) {
        // allNodes[allConnectedNodes[i]].color = "rgba(150,150,150,0.75)";
        allNodes[allConnectedNodes[i]].color = "#000";
        if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
          allNodes[allConnectedNodes[i]].label =
            allNodes[allConnectedNodes[i]].hiddenLabel;
          allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
        }
      }
      // all first degree nodes get their own color and their label back
      for (i = 0; i < connectedNodes.length; i++) {
        allNodes[connectedNodes[i]].color = undefined;
        if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
          allNodes[connectedNodes[i]].label =
            allNodes[connectedNodes[i]].hiddenLabel;
          allNodes[connectedNodes[i]].hiddenLabel = undefined;
        }
      }
      // the main node gets its own color and its label back.
      console.log("selectedNode_2", selectedNode);
      console.log("allNodes[selectedNode]", allNodes[selectedNode]);
      allNodes[selectedNode].color = undefined;
      if (allNodes[selectedNode].hiddenLabel !== undefined) {
        allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
        allNodes[selectedNode].hiddenLabel = undefined;
      }
    } else if (highlightActive === true) {
      // reset all nodes
      for (var nodeId in allNodes) {
        allNodes[nodeId].color = undefined;
        if (allNodes[nodeId].hiddenLabel !== undefined) {
          allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
          allNodes[nodeId].hiddenLabel = undefined;
        }
      }
      highlightActive = false;
    }
    // transform the object into an array
    var updateArray = [];
    for (nodeId in allNodes) {
      if (allNodes.hasOwnProperty(nodeId)) {
        updateArray.push(allNodes[nodeId]);
      }
    }
    // network.setData({nodes: })
    this.setState({ graph: { nodes: updateArray }, network });
  };

  handleChangeColor = event => {
    console.log("handleChangeColor");
    console.log("event", event);
    let nodeId = event.nodes[0];
    console.log(nodeId);
    let { nodes } = this.state.graph;
    let selectedNode;
    for (let node of nodes) {
      if (node.id === nodeId) {
        // selectedNode = node;
        node.color = "#000";
        break;
      }
    }
    // this.setState({
    //   graph: { nodes: nodes }
    // });
    // selectedNode.color = "#000";
    // console.log("selectedNode", selectedNode);
  };

  render() {
    const { graph, options, events, network } = this.state;
    return (
      <div>
        <Graph
          style={{
            width: "100vw",
            height: "90vh",
            border: "1px solid lightgray"
          }}
          graph={graph}
          options={options}
          events={events}
          getNetwork={this.setNetworkInstance}
        />
      </div>
    );
  }
}

export default ReactGraphVisNeibours;
