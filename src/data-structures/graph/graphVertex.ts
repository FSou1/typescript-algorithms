/* eslint-disable no-unused-vars */
import {GraphEdge} from './graphEdge';

/**
 *
 *
 * @export
 * @class GraphVertex
 */
export class GraphVertex {
  private key: string;
  private edges: GraphEdge[];

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
   * @param {GraphVertex} vertex
   * @return {GraphEdge}
   * @memberof GraphVertex
   */
  findEdge(vertex: GraphVertex): GraphEdge {
    const edge = this.edges.filter((edge) => {
      return edge.startVertex === vertex || edge.endVertex === vertex;
    });

    return edge[0] ?? null;
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

  /**
   * @return {GraphEdge[]}
   * @memberof GraphVertex
   */
  getEdges(): GraphEdge[] {
    return this.edges;
  }
}
