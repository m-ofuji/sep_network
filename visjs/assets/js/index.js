
let network;
let allNodes;
let highlightActive = false;
let lastClickTime = new Date();
const doubleClickThreshold = 1 * 1000;
const baseUrl = "https://plato.stanford.edu/entries/";

const nodesDataset = new vis.DataSet(nodes);
const edgesDataset = new vis.DataSet(edges);

const selectedNodeColor = "#9bff61";
const firstDegreeNodeColor = {
  border: "#2B7CE9",
  background: "#D2E5FF"
};
const secondDegreeNodeColor = "#88a7fb9a";
const otherNodeColor = "#414d5d7a";

const nodesOption = {
  color: firstDegreeNodeColor,
  shape: "dot",
  scaling: {
    min: 6,
    max: 160,
    label: {
      min: 8,
      max: 70,
      drawThreshold: 12,
      maxVisible: 50,
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

const redrawAll = () => {
  const container = document.getElementById("network");
  const options = {
    nodes: nodesOption,
    edges: edgesOption,
    physics: false,
  };
  const data = { nodes: nodesDataset, edges: edgesDataset }; // Note: data is coming from ./datasources/WorldCup2014.js

  network = new vis.Network(container, data, options);

  allNodes = nodesDataset.get({ returnType: "Object" });

  network.on("click", onClicked);
}

const onClicked = (params) => {
  const before = lastClickTime;
  lastClickTime = new Date();
  var elapsedTime = lastClickTime.getTime() - before.getTime()
  if (elapsedTime <= doubleClickThreshold) {
    openLink(params);
  } else {
    neighbourhoodHighlight(params);
  }
}

const neighbourhoodHighlight = (params) => {

  allNodes = nodesDataset.get({ returnType: "Object" });

  if (params.nodes.length > 0) {
    highlightActive = true;
    let i, j;
    const selectedNode = params.nodes[0];
    const degrees = 2;

    for (let nodeId in allNodes) {
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
        allNodes[allConnectedNodes[i]].label =allNodes[allConnectedNodes[i]].hiddenLabel;
        allNodes[allConnectedNodes[i]].hiddenLabel = undefined;
      }
    }

    for (i = 0; i < connectedNodes.length; i++) {
      allNodes[connectedNodes[i]].color = firstDegreeNodeColor;
      if (allNodes[connectedNodes[i]].hiddenLabel !== undefined) {
        allNodes[connectedNodes[i]].label = allNodes[connectedNodes[i]].hiddenLabel;
        allNodes[connectedNodes[i]].hiddenLabel = undefined;
      }
    }

    allNodes[selectedNode].color = selectedNodeColor;
    if (allNodes[selectedNode].hiddenLabel !== undefined) {
      allNodes[selectedNode].label = allNodes[selectedNode].hiddenLabel;
      allNodes[selectedNode].hiddenLabel = undefined;
    }
  } else if (highlightActive === true) {
    for (let nodeId in allNodes) {
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
  nodesDataset.update(updateArray);
};

const openLink = (params) => {
  if (params.nodes.length > 0) {
    const nodes = nodesDataset.get({ returnType: "Object" });
    const selectedNode = params.nodes[0];
    window.open(`${baseUrl}${nodes[selectedNode].url}`);
  }
};

redrawAll();
