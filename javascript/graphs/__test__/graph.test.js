const Graph = require('../graphs/index');
const Vertex = require('../graphs/vertex');
const Edge = require('../graphs/edge');

describe('graph', () => {
  const myGraph = new Graph();

  const zero = new Vertex(0);
  const one = new Vertex(1);
  const two = new Vertex(2);
  const three = new Vertex(3);
  const four = new Vertex(4);
  const five = new Vertex(5);
  const six = new Vertex(6);

  myGraph.addVertex(zero);
  myGraph.addVertex(one);
  myGraph.addVertex(two);
  myGraph.addVertex(three);
  myGraph.addVertex(four);
  myGraph.addVertex(five);

  myGraph.addUnDirectedEdge(zero, two);
  myGraph.addUnDirectedEdge(two, three);
  myGraph.addUnDirectedEdge(two, four);
  myGraph.addUnDirectedEdge(three, five);
  myGraph.addUnDirectedEdge(four, five);
  myGraph.addUnDirectedEdge(one, three);

  it('Node can be successfully added to the graph', () => {
    expect(myGraph.adjacencyList.has(zero)).toEqual(true);
    expect(myGraph.adjacencyList.has(six)).toEqual(false);
  });
  it('An edge can be successfully added to the graph', () => {
    expect(myGraph.adjacencyList.get(zero)[0].vertex.value).toEqual(2);
  });
  it('A collection of all nodes can be properly retrieved from the graph', () => {
    let i=0;
    for (let item of myGraph.adjacencyList.entries()) {
      i++;
    }
    expect(i).toEqual(6);
  });
  it('All appropriate neighbors can be retrieved from the graph', () => {
    expect(myGraph.getNeighbors(two).length).toEqual(3);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    expect(myGraph.getNeighbors(two)[0].weight).toEqual(undefined);
  });
  it('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(myGraph.size()).toEqual(6);
  });
  it('BFS works', () => {
    expect(myGraph.breadthFirst(one)).toEqual([ 1, 3, 2, 5, 0, 4 ]);
  });
  it('BFS works 2', () => {
    expect(myGraph.breadthFirst(two)).toEqual([ 2, 0, 3, 4, 5, 1 ]);
  });
});
