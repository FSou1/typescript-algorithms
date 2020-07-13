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
  weight: number;

  /**
   *Creates an instance of GraphEdge.
   * @param {GraphVertex} startVertex
   * @param {GraphVertex} endVertex
   * @param {number} [weight=0]
   * @memberof GraphEdge
   */
  constructor(startVertex: GraphVertex, endVertex: GraphVertex, weight = 0) {
    this.startVertex = startVertex;
    this.endVertex = endVertex;
    this.weight = weight;
  }
}
