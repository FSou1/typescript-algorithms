import {GraphVertex} from '../../../../data-structures/graph/graphVertex';
import {GraphEdge} from '../../../../data-structures/graph/graphEdge';
import {Graph} from '../../../../data-structures/graph/graph';
import {bellmanFord} from '../bellmanFord';

test('should return shortest path to vertices', () => {
  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');
  const vertexD = new GraphVertex('D');
  const vertexE = new GraphVertex('E');
  const vertexF = new GraphVertex('F');
  const vertexG = new GraphVertex('G');
  const vertexH = new GraphVertex('H');

  const edgeAB = new GraphEdge(vertexA, vertexB, 4);
  const edgeAE = new GraphEdge(vertexA, vertexE, 7);
  const edgeAC = new GraphEdge(vertexA, vertexC, 3);
  const edgeBC = new GraphEdge(vertexB, vertexC, 6);
  const edgeBD = new GraphEdge(vertexB, vertexD, 5);
  const edgeEC = new GraphEdge(vertexE, vertexC, 8);
  const edgeED = new GraphEdge(vertexE, vertexD, 2);
  const edgeDC = new GraphEdge(vertexD, vertexC, 11);
  const edgeDG = new GraphEdge(vertexD, vertexG, 10);
  const edgeDF = new GraphEdge(vertexD, vertexF, 2);
  const edgeFG = new GraphEdge(vertexF, vertexG, 3);
  const edgeEG = new GraphEdge(vertexE, vertexG, 5);

  const graph = new Graph(true);
  graph
      .addVertex(vertexH)
      .addEdge(edgeAB)
      .addEdge(edgeAE)
      .addEdge(edgeAC)
      .addEdge(edgeBC)
      .addEdge(edgeBD)
      .addEdge(edgeEC)
      .addEdge(edgeED)
      .addEdge(edgeDC)
      .addEdge(edgeDG)
      .addEdge(edgeDF)
      .addEdge(edgeFG)
      .addEdge(edgeEG);

  const {dist, prev} = bellmanFord(graph, vertexA);

  expect(dist['H']).toBe(Infinity);
  expect(dist['A']).toBe(0);
  expect(dist['B']).toBe(4);
  expect(dist['E']).toBe(7);
  expect(dist['C']).toBe(3);
  expect(dist['D']).toBe(9);
  expect(dist['G']).toBe(12);
  expect(dist['F']).toBe(11);

  expect(prev['F']).toBe('D');
  expect(prev['D']).toBe('B');
  expect(prev['B']).toBe('A');
  expect(prev['G']).toBe('E');
  expect(prev['C']).toBe('A');
  expect(prev['A']).toBeUndefined();
  expect(prev['H']).toBeUndefined();
});

test('should throw a negative cycle exception', () => {
  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');
  const vertexC = new GraphVertex('C');
  const vertexD = new GraphVertex('D');

  const edgeAB = new GraphEdge(vertexA, vertexB, 5);
  const edgeBC = new GraphEdge(vertexB, vertexC, 3);
  const edgeCD = new GraphEdge(vertexC, vertexD, 2);
  const edgeAD = new GraphEdge(vertexA, vertexD, 4);
  const edgeDB = new GraphEdge(vertexD, vertexB, -6);

  const graph = new Graph(true);
  graph
      .addEdge(edgeAB)
      .addEdge(edgeBC)
      .addEdge(edgeCD)
      .addEdge(edgeAD)
      .addEdge(edgeDB);

  expect(() => {
    bellmanFord(graph, vertexA);
  }).toThrowError(new Error('Graph contains a negative-weight cycle'));
});
