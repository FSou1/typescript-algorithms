import {Graph} from '../graph';
import {GraphVertex} from '../graphVertex';

test('an empty graph returns valid string', () => {
  const graph = new Graph(false);
  expect(graph.toString()).toBe('');
});

test('vertices can be added to graph', () => {
  const graph = new Graph(false);

  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');

  graph
      .addVertex(vertexA)
      .addVertex(vertexB);

  expect(graph.toString()).toBe('A,B');
});

test('existing vertex is returned', () => {
  const graph = new Graph(false);

  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');

  graph
      .addVertex(vertexA)
      .addVertex(vertexB);

  expect(graph.getVertex(vertexA)).toBe(vertexA);
  expect(graph.getVertex(vertexB)).toBe(vertexB);
});

test('missing vertex is returned as null', () => {
  const graph = new Graph(false);

  const vertexA = new GraphVertex('A');
  const vertexB = new GraphVertex('B');

  graph
      .addVertex(vertexA);

  expect(graph.getVertex(vertexB)).toBe(null);
});
