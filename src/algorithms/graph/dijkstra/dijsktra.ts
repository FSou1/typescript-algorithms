/* eslint-disable no-unused-vars */
import {Graph} from '../../../data-structures/graph/graph';
import {GraphVertex} from '../../../data-structures/graph/graphVertex';
import {Queue} from '../../../data-structures/queue/queue';

/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphVertex} source
 * @return {{
 *   dist: Map<string, number>,
 *   prev: Map<string, string>
 * }}
 */
export function dijkstra(
    graph: Graph,
    source: GraphVertex,
): {
  dist: Map<string, number>;
  prev: Map<string, string>;
} {
  const dist = new Map<string, number>();
  const prev = new Map<string, string>();
  const visited = new Map<string, boolean>();

  for (const vertex of graph.getVertices()) {
    dist[vertex.getKey()] = Infinity;
    prev[vertex.getKey()] = undefined;
  }
  dist[source.getKey()] = 0;

  const queue = new Queue<GraphVertex>();
  queue.enqueue(source);
  while (!queue.isEmpty()) {
    const currentVertex = queue.dequeue();

    const neighbors = currentVertex.getNeighbors();
    for (const neighbor of neighbors) {
      if (!visited[neighbor.getKey()]) {
        const edge = graph.findEdge(currentVertex, neighbor);

        const path = dist[currentVertex.getKey()] + edge.weight;
        if (path < dist[neighbor.getKey()]) {
          // a new s.p. has been found
          dist[neighbor.getKey()] = path;
          prev[neighbor.getKey()] = currentVertex.getKey();
        }
      }
    }

    // mark as visited
    visited[currentVertex.getKey()] = true;

    // enqueue next vertex
    let minDistance = Infinity;
    let nextVertex = null;
    for (const vertex of graph.getVertices()) {
      if (!visited[vertex.getKey()]) {
        if (dist[vertex.getKey()] < minDistance) {
          minDistance = dist[vertex.getKey()];
          nextVertex = vertex;
        }
      }
    }

    // TODO: replace with priority queue
    if (nextVertex) {
      queue.enqueue(nextVertex);
    }
  }

  return {dist, prev};
}
