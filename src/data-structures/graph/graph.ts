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
  private directed: boolean;
  private verticies: {};

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
   *
   *
   * @return {GraphVertex[]}
   * @memberof Graph
   */
  getVertices(): GraphVertex[] {
    return Object.keys(this.verticies).map((k) => this.verticies[k]);
  }

  /**
   *
   *
   * @return {GraphEdge[]}
   * @memberof Graph
   */
  getEdges(): GraphEdge[] {
    return [].concat(...this.getVertices().map((v) => v.getEdges()));
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
   * @param {GraphVertex} start
   * @param {GraphVertex} end
   * @return {GraphEdge}
   * @memberof Graph
   */
  findEdge(start: GraphVertex, end: GraphVertex): GraphEdge {
    const vertex = this.getVertex(start);
    if (!vertex) {
      return null;
    }

    return vertex.findEdge(end);
  }

  /**
   * @return {string}
   * @memberof Graph
   */
  toString(): string {
    return Object.keys(this.verticies).toString();
  }
}
