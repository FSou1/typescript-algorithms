import {GraphVertex} from '../graphVertex';
import {GraphEdge} from '../graphEdge';

test('edges are added, neighbors are valid', () => {
  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');

  const edgeAB = new GraphEdge(vertexA, vertexB);
  const edgeAC = new GraphEdge(vertexA, vertexC);

  vertexA
      .addEdge(edgeAB)
      .addEdge(edgeAC);

  expect(vertexA.getNeighbors()).toStrictEqual([vertexB, vertexC]);
});
