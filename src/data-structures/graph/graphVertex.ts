// eslint-disable-next-line no-unused-vars
import {GraphEdge} from './graphEdge';

/**
 *
 *
 * @export
 * @class GraphVertex
 */
export class GraphVertex {
  key: string;
  edges: GraphEdge[];

  /**
   *Creates an instance of GraphVertex.
   * @param {string} key
   * @memberof GraphVertex
   */
  constructor(key: string) {
    this.key = key;
    this.edges = [];
  }

  /**
   * @return {string}
   * @memberof GraphVertex
   */
  getKey(): string {
    return this.key;
  }

  /**
   * @param {GraphEdge} edge
   * @return {GraphVertex}
   * @memberof GraphVertex
   */
  addEdge(edge: GraphEdge): GraphVertex {
    this.edges.push(edge);
    return this;
  }

  /**
   * @return {GraphVertex[]}
   * @memberof GraphVertex
   */
  getNeighbors(): GraphVertex[] {
    const edges = this.edges;

    return edges.map((edge) => {
      return edge.startVertex === this ? edge.endVertex : edge.startVertex;
    });
  }
}
