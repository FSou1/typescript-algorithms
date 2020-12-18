/**
 *
 *
 * @export
 * @class Stack
 */
export class Stack {
    data: any[];
    
  /**
   *Creates an instance of Stack.
   * @memberof Stack
   */
    constructor() {
        this.data = [];
    }

    /**
     * Appends a new element to a stack
     * @param  {any} value
     */
    push(value: any) {
        this.data.push(value);
    }
    
    /**
     * Returns the first element of a stack
     * @returns any
     */
    peek(): any {
        if (this.isEmpty()) {
            return null;
        }

        return this.data[this.data.length - 1];
    }
    
    /**
     * Returns true if a stack is empty
     * @returns boolean
     */
    isEmpty(): boolean {
        return this.data.length == 0;
    }
    
    /**
     * Removes the last element from a stack and returns it
     * @returns any
     */
    pop(): any {
        if (this.isEmpty()) {
            return null;
        }

        return this.data.pop();
    }
    
    /**
     * Returns a string representation of a stack
     * @param  {(value:any)=>string} callback?
     */
    toString(callback?: (value: any) => string) {
        return this.toArray().map(i => callback ? callback(i) : `${i}`).join(',');
    }

    /**
     * Returns an array representation of a stack
     * @returns any
     */
    toArray(): any[] {
        return [...this.data].reverse();
    }
}