import {topological} from '../topological';
import {Graph} from '../../../../data-structures/graph/graph';
import {GraphEdge} from '../../../../data-structures/graph/graphEdge';
import {GraphVertex} from '../../../../data-structures/graph/graphVertex';

test('should perform topological on graph', () => {
  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');
  const vertexD = new GraphVertex('D');
  const vertexE = new GraphVertex('E');
  const vertexF = new GraphVertex('F');
  const vertexG = new GraphVertex('G');
  const vertexH = new GraphVertex('H');

  const edgeAC = new GraphEdge(vertexA, vertexC);
  const edgeBC = new GraphEdge(vertexB, vertexC);
  const edgeBD = new GraphEdge(vertexB, vertexD);
  const edgeCE = new GraphEdge(vertexC, vertexE);
  const edgeDF = new GraphEdge(vertexD, vertexF);
  const edgeEF = new GraphEdge(vertexE, vertexF);
  const edgeEH = new GraphEdge(vertexE, vertexH);
  const edgeFG = new GraphEdge(vertexF, vertexG);

  const graph = new Graph(true);

  graph
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeCE)
      .addEdge(edgeDF)
      .addEdge(edgeEF)
      .addEdge(edgeEH)
      .addEdge(edgeFG);

  const sortedVertices = topological(graph);

  expect(sortedVertices).toBeDefined();
  expect(sortedVertices.length).toBe(graph.getVertices().length);
  expect(sortedVertices).toEqual([
    vertexB,
    vertexD,
    vertexA,
    vertexC,
    vertexE,
    vertexH,
    vertexF,
    vertexG,
  ]);
});
