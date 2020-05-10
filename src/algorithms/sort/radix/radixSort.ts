/**
 * Sort an array with a radix sort algorithm
 *
 * @export
 * @param {number[]} array
 * @return {number[]}
 */
export function sort(array: number[]): number[] | null{
  // Result is null for a nullable or undefined array
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  const max = findMax(array);

  // Copy input array to output
  let output = [...array];

  // Do counting sort for every digit (10^i)
  for (let i = 1; i < max; i*=10) {
    output = countingSort(output, i);
  }

  return output;
}

/**
 * Sort an array with a counting sort algorithm, which is based on digit
 *
 * @param {number[]} array
 * @param {number} digit
 * @return {number[]}
 */
function countingSort(array: number[], digit: number): number[] {
  const count = new Array(10).fill(0);

  // Count a number of occurences
  for (const el of array) {
    const key = getDigit(el, digit);
    count[key]++;
  }

  // Summarize pairs of elements
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  const output = new Array(array.length).fill(0);

  // Iterate through input array by saving ordering
  for (let i = array.length - 1; i >= 0; i--) {
    // Insert input numbers to appropriate positions
    const key = getDigit(array[i], digit);
    output[count[key] - 1] = array[i];

    // Decrease a number position
    count[key]--;
  }

  return output;
}

/**
 * Get a max number of an array (e.g. [5, 3, 17] => 17)
 *
 * @export
 * @param {number[]} array
 * @return {number}
 */
export function findMax(array: number[]): number {
  return Math.max(...array);
}

/**
 * Get a specific digit of a number (e.g. (13, 1) => 3)
 *
 * @export
 * @param {number} number
 * @param {number} n
 * @return {number}
 */
export function getDigit(number: number, n: number): number {
  return Math.floor((number / n) % 10);
}
