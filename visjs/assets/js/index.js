
let network;
let allNodes;
let highlightActive = false;

const nodesDataset = new vis.DataSet(nodes);
const edgesDataset = new vis.DataSet(edges);

const selectedNodeColor = "#00adb5";
const firstDegreeNodeColor = "#D2E5FF";
const secondDegreeNodeColor = "#88a7fb9a";
const otherNodeColor = "#414d5d7a";

const nodesOption = {
  color: {
    background: firstDegreeNodeColor
  },
  shape: "dot",
  scaling: {
    min: 6,
    max: 160,
    label: {
      min: 8,
      max: 30,
      drawThreshold: 12,
      maxVisible: 20,
    },
  },
  font: {
    color: "#eeeeee",
    size: 12,
    face: "Tahoma",
  },
};

const edgesOption = {
  width: 0.15,
  color: { inherit: "from" },
  smooth: {
    type: "continuous",
  },
};

const physicsOption = {
  stabilization: false,
  solver: 'barnesHut',
  barnesHut: {
    gravitationalConstant: -80000,
    springConstant: 0.001,
    springLength: 200,
    avoidOverlap: 1
  },
  forceAtlas2Based: {
    theta: 0.5,
    gravitationalConstant: -50,
    centralGravity: 0.01,
    springConstant: 0.08,
    springLength: 100,
    damping: 0.4,
    avoidOverlap: 0
  },
  interaction: {
    tooltipDelay: 200,
    hideEdgesOnDrag: true,
  },
  layout: {
    improvedLayout: false
  }
};

function redrawAll() {
  const container = document.getElementById("network");
  const options = {
    nodes: nodesOption,
    edges: edgesOption,
    physics: false,
  };
  const data = { nodes: nodesDataset, edges: edgesDataset }; // Note: data is coming from ./datasources/WorldCup2014.js

  network = new vis.Network(container, data, options);

  allNodes = nodesDataset.get({ returnType: "Object" });

  network.on("click", neighbourhoodHighlight);
}

const neighbourhoodHighlight = (params) => {

  allNodes = nodesDataset.get({ returnType: "Object" });

  if (params.nodes.length > 0) {
    highlightActive = true;
    let i, j;
    const selectedNode = params.nodes[0];
    const degrees = 2;


    for (const nodeId in allNodes) {
      allNodes[nodeId].color = otherNodeColor;
      if (allNodes[nodeId].hiddenLabel === undefined) {
        allNodes[nodeId].hiddenLabel = allNodes[nodeId].label;
        allNodes[nodeId].label = undefined;
      }
    }
    const connectedNodes = network.getConnectedNodes(selectedNode);
    let allConnectedNodes = [];

    for (i = 1; i < degrees; i++) {
      for (j = 0; j < connectedNodes.length; j++) {
        allConnectedNodes = allConnectedNodes.concat(
          network.getConnectedNodes(connectedNodes[j])
        );
      }
    }

    for (i = 0; i < allConnectedNodes.length; i++) {
      allNodes[allConnectedNodes[i]].color = secondDegreeNodeColor;
      if (allNodes[allConnectedNodes[i]].hiddenLabel !== undefined) {
        allNodes[allConnectedNodes[i]].label =
          allNodes[allConnectedNodes[i]].hiddenLabel;
        allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
      }
    }

    for (i = 0; i < connectedNodes.length; i++) {
      allNodes[connectedNodes[i]].color = firstDegreeNodeColor;
      if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
        allNodes[connectedNodes[i]].label =
          allNodes[connectedNodes[i]].hiddenLabel;
        allNodes[connectedNodes[i]].hiddenLabel = undefined;
      }
    }

    allNodes[selectedNode].color = selectedNodeColor;
    if (allNodes[selectedNode].hiddenLabel !== undefined) {
      allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
      allNodes[selectedNode].hiddenLabel = undefined;
    }
  } else if (highlightActive === true) {
    for (const nodeId in allNodes) {
      allNodes[nodeId].color = firstDegreeNodeColor;
      if (allNodes[nodeId].hiddenLabel !== undefined) {
        allNodes[nodeId].label = allNodes[nodeId].hiddenLabel;
        allNodes[nodeId].hiddenLabel = undefined;
      }
    }
    highlightActive = false;
  }

  const updateArray = [];
  for (nodeId in allNodes) {
    if (allNodes.hasOwnProperty(nodeId)) {
      updateArray.push(allNodes[nodeId]);
    }
  }
  console.log(updateArray);
  nodesDataset.update(updateArray);
}

redrawAll();
