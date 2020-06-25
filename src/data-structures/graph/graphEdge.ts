// eslint-disable-next-line no-unused-vars
import {GraphVertex} from './graphVertex';

/**
 *
 *
 * @export
 * @class GraphEdge
 */
export class GraphEdge {
  startVertex: GraphVertex;
  endVertex: GraphVertex;

  /**
   *Creates an instance of GraphEdge.
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @memberof GraphEdge
   */
  constructor(startVertex: GraphVertex, endVertex: GraphVertex) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
  }
}
