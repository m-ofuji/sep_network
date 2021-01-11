var s = new sigma(
  {
    renderer: {
      container: document.getElementById('sigma-container'),
      type: 'canvas'
    },
    settings: {
      defaultLabelColor: '#eeeeee',
    }
  }
);

var graph = {
  nodes: [],
  edges: []
};
graph.nodes = nodes.map((node) => {
  return { 
    id:  node.id,
    label: node.label,
    x: Math.random(),
    y: Math.random(),
    size: 1,
    color: '#00adb5'
  }
});
graph.edges = edges.map((edge, i) => {
  return {
    id: i, 
    source: edge.source, 
    target: edge.target,
    color: '#393e46'
  }
});

s.graph.read(graph);
sigma.plugins.relativeSize(s, 1);
s.refresh();
s.startForceAtlas2();
window.setTimeout(function() {s.killForceAtlas2()}, 10000);