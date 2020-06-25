// eslint-disable-next-line no-unused-vars
import {GraphVertex} from './graphVertex';

/**
 *
 *
 * @export
 * @class GraphConfig
 */
export class GraphConfig {
  enterVertex: (vertex: GraphVertex) => void;
  leaveVertex: (vertex: GraphVertex) => void;
  allowEnterVertex?: (vertex: GraphVertex) => boolean;

  /**
   *Creates an instance of GraphConfig.
   * @param {*} {enterVertex, leaveVertex, allowEnterVertex}
   * @memberof GraphConfig
   */
  constructor({enterVertex, leaveVertex, allowEnterVertex}) {
    this.enterVertex = enterVertex;
    this.leaveVertex = leaveVertex;
    this.allowEnterVertex = allowEnterVertex;
  }
}
