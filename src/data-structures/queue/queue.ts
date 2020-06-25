/**
 *
 *
 * @export
 * @class Queue
 */
export class Queue<T> {
  list: T[];

  /**
   *Creates an instance of Queue.
   * @memberof Queue
   */
  constructor() {
    this.list = [];
  }

  /**
   * @param {*} item
   * @return {Queue}
   * @memberof Queue
   */
  enqueue(item: T): Queue<T> {
    this.list = [...this.list, item];
    return this;
  }

  /**
   *
   *
   * @return {Queue}
   * @memberof Queue
   */
  dequeue(): T {
    const item = this.list[0];
    this.list = this.list.slice(1);
    return item;
  }

  /**
   * @return {boolean}
   * @memberof Queue
   */
  isEmpty(): boolean {
    return this.list.length == 0;
  }

  /**
   * @return {number}
   * @memberof Queue
   */
  getLength(): number {
    return this.list.length;
  }

  /**
   * @return {string}
   * @memberof Queue
   */
  toString(): string {
    return this.list.toString();
  }
}
