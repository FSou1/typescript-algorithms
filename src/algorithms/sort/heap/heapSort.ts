/**
 * Sort an array with a heapsort algorithm
 *
 * @export
 * @param {number[]} array
 * @return {(number[] | null)}
 */
export function sort(array: number[]): number[] | null {
  // Result is null for a nullable or undefined array
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  buildMaxHeap(array);

  const n = array.length;

  for (let i = n - 1; i > 0; i--) {
    swap(array, i, 0);

    heapify(array, i, 0);
  }

  return array;
}

/**
 * Build the heap in array so that largest value is at the root
 *
 * @export
 * @param {number[]} array
 * @return {number[]}
 */
export function buildMaxHeap(array: number[]): number[] {
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  return array;
}

/**
 * Heapify a passed array
 *
 * @export
 * @param {number[]} array
 * @param {number} n
 * @param {number} i
 * @return {(number[] | null)}
 */
export function heapify(
    array: number[],
    n: number,
    i: number,
): number[] | null {
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  let largest = i;
  const left = 2*i + 1;
  const right = 2*i + 2;

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than root
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (i != largest) {
    swap(array, i, largest);

    heapify(array, n, largest);
  }

  return array;
}

/**
 * Swap two elements in array
 *
 * @export
 * @param {number[]} array
 * @param {number} i
 * @param {number} j
 * @return {void}
 */
export function swap(array: number[], i: number, j: number): void {
  array[i] = array[i] ^ array[j];
  array[j] = array[i] ^ array[j];
  array[i] = array[i] ^ array[j];
}
