/* eslint-disable no-unused-vars */
import {Graph} from '../../../data-structures/graph/graph';
import {GraphVertex} from '../../../data-structures/graph/graphVertex';
import {GraphConfig} from '../../../data-structures/graph/graphConfig';

/**
 *
 *
 * @export
 * @param {Graph} graph
 * @param {GraphVertex} startVertex
 * @param {GraphConfig} config
 */
export function depthFirstSearch(
    graph: Graph,
    startVertex: GraphVertex,
    config: GraphConfig = null,
): void {
  if (!graph) {
    return;
  }

  if (!graph.getVertex(startVertex)) {
    return;
  }

  config = initConfig(config);
  depthFirstSearchRecursive(graph, startVertex, config);
}

/**
 *
 *
 * @param {Graph} graph
 * @param {GraphVertex} currentVertex
 * @param {GraphConfig} config
 */
function depthFirstSearchRecursive(
    graph: Graph,
    currentVertex: GraphVertex,
    config: GraphConfig,
) {
  config.enterVertex(currentVertex);

  const neighbors = graph.getNeighbors(currentVertex);
  for (const neighbor of neighbors) {
    depthFirstSearch(graph, neighbor, config);
  }

  config.leaveVertex(currentVertex);
}

/**
 * @param {GraphConfig} config
 * @return {GraphConfig}
 */
function initConfig(config: GraphConfig): GraphConfig {
  config = config || ({} as GraphConfig);
  config.enterVertex = config.enterVertex || ((vertex: GraphVertex) => {});
  config.leaveVertex = config.leaveVertex || ((vertex: GraphVertex) => {});
  config.allowEnterVertex = config.allowEnterVertex || isFirstEnter();
  return config;
}

/**
 * @param {GraphVertex} vertex
 * @return {boolean}
 */
function isFirstEnter(): (vertex: GraphVertex) => boolean {
  const visited = {};

  return (next: GraphVertex) => {
    if (!visited[next.getKey()]) {
      visited[next.getKey()] = true;
      return true;
    }

    return false;
  };
}
