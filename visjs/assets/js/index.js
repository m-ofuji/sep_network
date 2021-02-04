
let network;
let allNodes;
let highlightActive = false;
let lastClickTime = new Date();
const doubleClickThreshold = 1 * 1000;
const baseUrl = "https://plato.stanford.edu/entries/";

const nodesDataset = new vis.DataSet(nodes);
const edgesDataset = new vis.DataSet(edges);

const labels = Object.assign({}, ...nodes.map((n) => ({[n.id]: n.label,})));

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
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true,
    }
  };
  const data = { nodes: nodesDataset, edges: edgesDataset };

  network = new vis.Network(container, data, options);

  allNodes = nodesDataset.get({ returnType: "Object" });

  network.on("click", onNetworkClicked);
}

const onNetworkClicked = (params) => {
  document.getElementById("search-text").value = "";
  const before = lastClickTime;
  lastClickTime = new Date();
  const elapsedTime = lastClickTime.getTime() - before.getTime()
  if (elapsedTime <= doubleClickThreshold) {
    openLink(params);
  } else {
    neighbourhoodHighlight(params);
  }
}

const changeNodesObjectColor = (nodes, color, labels) => {
  for (let nodeId in nodes) {
    nodes[nodeId].color = color;
    nodes[nodeId].label = labels ? labels[nodeId] : " ";
  }
}

const changeNodeColor = (nodes, color) => {
  for (i = 0; i < nodes.length; i++) {
    const index = nodes[i];
    allNodes[index].color = color;
    allNodes[index].label = labels[index];
  }
}

const redrawNodes = (nodes) => {
  const updateArray = [];
  for (nodeId in nodes) {
    if (nodes.hasOwnProperty(nodeId)) {
      updateArray.push(nodes[nodeId]);
    }
  }
  nodesDataset.update(updateArray);
};

const neighbourhoodHighlight = (params) => {
  allNodes = nodesDataset.get({ returnType: "Object" });
  if (params.nodes.length > 0) {
    highlightActive = true;
    let i, j;
    const selectedNode = params.nodes[0];
    const degrees = 2;

    changeNodesObjectColor(allNodes, otherNodeColor);

    const connectedNodes = network.getConnectedNodes(selectedNode);
    let allConnectedNodes = [];

    for (i = 1; i < degrees; i++) {
      for (j = 0; j < connectedNodes.length; j++) {
        allConnectedNodes = allConnectedNodes.concat(
          network.getConnectedNodes(connectedNodes[j])
        );
      }
    }

    // change second degree nodes color
    changeNodeColor(allConnectedNodes, secondDegreeNodeColor);

    // change first degree nodes color
    changeNodeColor(connectedNodes, firstDegreeNodeColor);

    // change selected nodes color
    allNodes[selectedNode].color = selectedNodeColor;
    allNodes[selectedNode].label = labels[selectedNode];

  } else if (highlightActive === true) {
    // set default node color
    changeNodesObjectColor(allNodes, firstDegreeNodeColor, labels);
    highlightActive = false;
  }

  redrawNodes(allNodes);

};

// open SEP entry
const openLink = (params) => {
  if (params.nodes.length > 0) {
    const nodes = nodesDataset.get({ returnType: "Object" });
    const selectedNode = params.nodes[0];
    window.open(`${baseUrl}${nodes[selectedNode].url}`);
  }
};

// search nodes which contains input text
const searchNode = (text) => {
  const lowerText = text.toLowerCase();
  const hitNodes = nodes
    .filter((n) => n.label.toLowerCase().indexOf(lowerText) !== -1)
    .map((n) => n.id);
  if (hitNodes.length <= 0) {
    alert("There are no results.");
    return;
  }
  allNodes = nodesDataset.get({ returnType: "Object" });
  changeNodesObjectColor(allNodes, otherNodeColor);
  changeNodeColor(hitNodes, firstDegreeNodeColor);
  highlightActive = true;
  redrawNodes(allNodes);
};

// search button clicked
document.getElementById("search-button").onclick = function() {
  const text = document.getElementById("search-text").value;
  searchNode(text.toLowerCase());
};

redrawAll();
