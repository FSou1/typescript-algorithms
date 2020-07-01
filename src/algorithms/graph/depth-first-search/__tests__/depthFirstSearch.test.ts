import {Graph} from '../../../../data-structures/graph/graph';
import {GraphVertex} from '../../../../data-structures/graph/graphVertex';
import {GraphEdge} from '../../../../data-structures/graph/graphEdge';
import {depthFirstSearch} from '../depthFirstSearch';

test('should perform BFS on graph', () => {
  const graph = new Graph(true);

  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');
  const vertexD = new GraphVertex('D');
  const vertexE = new GraphVertex('E');
  const vertexF = new GraphVertex('F');
  const vertexG = new GraphVertex('G');
  const vertexH = new GraphVertex('H');

  const edgeAB = new GraphEdge(vertexA, vertexB);
  const edgeBC = new GraphEdge(vertexB, vertexC);
  const edgeCG = new GraphEdge(vertexC, vertexG);
  const edgeAD = new GraphEdge(vertexA, vertexD);
  const edgeAE = new GraphEdge(vertexA, vertexE);
  const edgeEF = new GraphEdge(vertexE, vertexF);
  const edgeDH = new GraphEdge(vertexD, vertexH);

  graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCG)
      .addEdge(edgeAD)
      .addEdge(edgeAE)
      .addEdge(edgeEF)
      .addEdge(edgeDH);

  expect(graph.toString()).toBe('A,B,C,G,D,E,F,H');

  const enterVertexCallback = jest.fn();
  const leaveVertexCallback = jest.fn();

  // Traverse graphs without callbacks first.
  depthFirstSearch(graph, vertexA);

  // Traverse graph with enterVertex and leaveVertex callbacks.
  depthFirstSearch(graph, vertexA, {
    enterVertex: enterVertexCallback,
    leaveVertex: leaveVertexCallback,
  });

  expect(enterVertexCallback).toHaveBeenCalledTimes(8);
  expect(leaveVertexCallback).toHaveBeenCalledTimes(8);
});
