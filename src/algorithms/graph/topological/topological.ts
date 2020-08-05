/* eslint-disable no-unused-vars */
import {Graph} from '../../../data-structures/graph/graph';
import {GraphVertex} from '../../../data-structures/graph/graphVertex';
import {GraphConfig} from '../../../data-structures/graph/graphConfig';
import {depthFirstSearch} from '../depth-first-search/depthFirstSearch';

/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphConfig} config
 * @return {GraphVertex[]}
 */
export function topological(
    graph: Graph,
    config: GraphConfig = null,
): GraphVertex[] {
  if (!graph) {
    return;
  }

  // A set of unvisited vertices
  const unvisited = {};
  graph.getVertices().forEach((vertex) => {
    unvisited[vertex.getKey()] = vertex;
  });

  // A set of visited vertices
  const visited = {};

  // An array, which behaves like a stack (to hold the order)
  const stack = [];

  config = config || ({} as GraphConfig);

  // Visit only unvisited vertices
  config.allowEnterVertex =
    config.allowEnterVertex ||
    ((vertex: GraphVertex) => {
      return !visited[vertex.getKey()];
    });

  config.enterVertex =
    config.enterVertex ||
    ((vertex: GraphVertex) => {
      // Remove a vertex from the unvisited set
      delete unvisited[vertex.getKey()];

      // Mark a vertex as visited
      visited[vertex.getKey()] = vertex;
    });

  /* Push the vertex onto the stack,
   * when all of the vertex neighbors have been visited */
  config.leaveVertex =
    config.leaveVertex ||
    ((vertex: GraphVertex) => {
      // TODO: Replace with an actual stack implementation
      stack.push(vertex);
    });

  while (Object.keys(unvisited).length) {
    const startVertexKey = Object.keys(unvisited)[0];
    const startVertex = unvisited[startVertexKey];

    depthFirstSearch(graph, startVertex, config);
  }

  return stack.reverse();
}
