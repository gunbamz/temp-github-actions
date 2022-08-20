import Graph from "./graph/graph.js";

const graph = new Graph(Graph.UNDIRECTED);
const [first] = graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(10, 6);

let bfsFromFirst = graph.bfs(first);

let a = bfsFromFirst.next().value.value; // 1
let b = bfsFromFirst.next().value.value; // 2
let c = bfsFromFirst.next().value.value; // 3
let d = bfsFromFirst.next().value.value; // 4

console.log (a, b, c, d);


const mooncakeSays = (message) => {
  let mooncake = '(o.o)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}
console.log(mooncakeSays("testerr"));
export default mooncakeSays;