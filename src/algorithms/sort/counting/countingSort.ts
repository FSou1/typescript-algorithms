/**
 * Sort an array with a counting sort algorithm
 *
 * @export
 * @param {number[]} array
 * @param {number} k
 * @return {(number[] | null)}
 */
export function sort(array: number[], k: number = 255): number[] | null {
  // Result is null for a nullable or undefined array
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  // Count a number of occurences:
  //  * array: [1, 2, 1, 4] =>
  //  * count: [2, 1, 0, 1]
  const count = new Array(k).fill(0);
  for (const el of array) {
    count[el] = (count[el] + 1) || 1;
  }

  // Summarize a current element with a previous:
  //  * count: [2, 1, 0, 1] =>
  //  * count: [2, 3, 3, 4]
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  // Insert input numbers to appropriate positions
  //  * array: [1, 2, 1, 4]
  //  * count: [2, 3, 3, 4]
  //  * output: [0, 1, 0, 0] => [0, 1, 2, 0] => [1, 1, 2, 0] => [1, 1, 2, 4]
  const output = new Array(array.length).fill(0);
  for (const el of array) {
    output[count[el] - 1] = el;
    count[el] -= 1;
  }

  return output;
}
