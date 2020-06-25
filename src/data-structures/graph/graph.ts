/* eslint-disable no-unused-vars */
import {GraphVertex} from './graphVertex';
import {GraphEdge} from './graphEdge';

/**
 *
 *
 * @export
 * @class Graph
 */
export class Graph {
  directed: boolean;
  verticies: {};

  /**
   * Creates an instance of Graph.
   * @param {boolean} directed
   * @memberof Graph
   */
  constructor(directed: boolean) {
    this.directed = directed;
    this.verticies = {};
  }

  /**
   * Add a vertex to the graph
   *
   * @param {GraphVertex} vertex
   * @return {Graph}
   * @memberof Graph
   */
  addVertex(vertex: GraphVertex): Graph {
    this.verticies[vertex.getKey()] = vertex;
    return this;
  }

  /**
   * @param {GraphEdge} edge
   * @return {Graph}
   * @memberof Graph
   */
  addEdge(edge: GraphEdge): Graph {
    const start = edge.startVertex;
    if (!this.getVertex(start)) {
      this.addVertex(edge.startVertex);
    }

    const end = edge.endVertex;
    if (!this.getVertex(end)) {
      this.addVertex(edge.endVertex);
    }

    if (this.directed) {
      this.getVertex(start).addEdge(edge);
    } else {
      this.getVertex(start).addEdge(edge);
      this.getVertex(end).addEdge(edge);
    }

    return this;
  }

  /**
   * @param {GraphVertex} vertex
   * @return {GraphVertex}
   * @memberof Graph
   */
  getVertex(vertex: GraphVertex): GraphVertex {
    return this.verticies[vertex.getKey()] || null;
  }

  /**
   * @param {GraphVertex} vertex
   * @return {GraphVertex[]}
   * @memberof Graph
   */
  getNeighbors(vertex: GraphVertex): GraphVertex[] {
    return this.getVertex(vertex).getNeighbors();
  }

  /**
   * @return {string}
   * @memberof Graph
   */
  toString(): string {
    return Object.keys(this.verticies).toString();
  }
}
