const Vertex = require('./vertex.js');
const Edge = require('./edge.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    const adjacencies =  this.adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight));
  }

  print() {
    for (const [k, v] of myGraph.adjacencyList.entries()) {
      console.log('k---->', k);
      console.log('v---->', v);
    }
  }
  getNodes(){
    const list = this.adjacencyList.entries();
    return list;
  }

  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }
    return this.adjacencyList.get(vertex);
  }
  size(){
    return this.adjacencyList.size;
  }
}
module.exports=Graph;

const myGraph = new Graph();
const zero = new Vertex(0);
const one = new Vertex(1);
const two = new Vertex(2);
const three = new Vertex(3);
const four = new Vertex(4);
const five = new Vertex(5);

myGraph.addVertex(zero);
myGraph.addVertex(one);
myGraph.addVertex(two);
myGraph.addVertex(three);
myGraph.addVertex(four);
myGraph.addVertex(five);

myGraph.addDirectedEdge(zero, two);
myGraph.addDirectedEdge(two, three);
myGraph.addDirectedEdge(two, four);
myGraph.addDirectedEdge(three, five);
myGraph.addDirectedEdge(four, five);
myGraph.addDirectedEdge(one, three);
// myGraph.print();
// console.log('-----------------');
// console.log(myGraph.getNeighbors(two));
// console.log(myGraph.getNodes());
// console.log('-----------------');
// console.log(myGraph.getNeighbors(one));
// console.log('-----------------');
// console.log(myGraph.size());

