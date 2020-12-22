import { LinkedListNode } from "./linkedListNode";

/**
 *
 *
 * @export
 * @class LinkedList
 */
export class LinkedList {
    head: LinkedListNode;
    tail: LinkedListNode;
    comparator: (a: any, b: any) => number;

    /**
     * Create an instance of LinkedList.
     * @param  {(a:any,b:any)=>number} comparator?
     */
    constructor(comparator?: (a: any, b: any) => number) {
        this.head = null;
        this.tail = null;
        this.comparator = comparator || defaultComparator;
    }

    /**
     * Append a new element to a linked list
     * @param  {any} value
     * @returns LinkedList
     */
    append(value: any): LinkedList {
        const node = new LinkedListNode(value, null);

        if (!this.head) {
            this.head = node;
        }
        if (this.tail) {
            this.tail.next = node;
        }

        this.tail = node;

        return this;
    }

    /**
     * Prepend a new element to a linked list
     * @param  {any} value
     */
    prepend(value: any) {
        const node = new LinkedListNode(value, this.head);
        this.head = node;

        if (!this.tail) {
            this.tail = node;
        }

        return this;
    }

    /**
     * Delete an element from a linked list
     * @param  {any} value
     * @returns LinkedListNode
     */
    delete(value: any): LinkedListNode {
        if (!this.head) {
            return null;
        }

        let deleted = null;
        while (this.head && this.comparator(this.head.value, value) === 0) {
            deleted = this.head;
            this.head = this.head.next;
        }

        let node = this.head;
        if (node) {
            while (node.next) {
                if (this.comparator(node.next.value, value) === 0) {
                    deleted = node.next;
                    node.next = node.next.next;
                } else {
                    node = node.next;
                }
            }
        }

        if (this.comparator(this.tail.value, value) === 0) {
            this.tail = node;
        }

        return deleted;
    }

    /**
     * Delete a tail of a linked list
     * @returns LinkedListNode
     */
    deleteTail(): LinkedListNode {
        const deleted = this.tail;

        if (this.head == deleted) {
            this.head = null;
            this.tail = null;
            return deleted;
        }

        let node = this.head;
        while (node.next != this.tail) {
            node = node.next;
        }
        node.next = null;

        this.tail = node;

        return deleted;
    }

    /**
     * Delete a head of a linked list
     * @returns LinkedListNode
     */
    deleteHead(): LinkedListNode {
        if (!this.head) {
            return null;
        }

        const deleted = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deleted;
    }

    /**
     * Find an element in a linked list
     * @param  {} {value=null
     * @param  {} callback=null}
     * @returns LinkedListNode
     */
    find({ value = null, callback = null }): LinkedListNode {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node != null) {
            if (callback && callback(node.value)) {
                return node;
            }

            if (this.comparator(node.value, value) === 0) {
                return node;
            }

            node = node.next;
        }

        return null;
    }

    /**
     * Reverse a linked list.
     * Origin: https://github.com/trekhleb/javascript-algorithms/blob/4b6c601158b7b0284c9aad3a899fe97285fc7c1a/src/data-structures/linked-list/LinkedList.js#L215
     * @returns LinkedList
     */
    reverse(): LinkedList {
        let currNode = this.head;
        let prevNode = null;
        let nextNode = null;

        while (currNode) {
            // Store next node.
            nextNode = currNode.next;

            /* Change next node of the current node so
             * it would link to previous node. */
            currNode.next = prevNode;

            // Move prevNode and currNode nodes one step forward.
            prevNode = currNode;
            currNode = nextNode;
        }

        // Reset head and tail.
        this.tail = this.head;
        this.head = prevNode;

        return this;
    }

    /**
     * @param  {any[]} items
     */
    fromArray(items: any[]) {
        for (const item of items) {
            this.append(item);
        }
    }

    /**
     * Returns an array representation of a linked list
     * @returns LinkedListNode
     */
    toArray(): LinkedListNode[] {
        const array = [];

        let node = this.head;
        while (node != null) {
            array.push(node);
            node = node.next;
        }

        return array;
    }

    /**
     * Returns an string representation of a linked list
     * @param  {(value:any)=>string} callback?
     * @returns string
     */
    toString(callback?: (value: any) => string): string {
        return this.toArray().map(node => node.toString(callback)).toString();
    }
}

function defaultComparator(a: any, b: any): number {
    if (a === b) {
        return 0;
    }

    return a > b ? 1 : -1;
}