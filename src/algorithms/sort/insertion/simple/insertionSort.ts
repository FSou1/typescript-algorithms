/**
 * Sort an array with a simple insertion sort algorithm
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

  // i is a global index
  let i = 1;
  while (i < array.length) {
    // j is a local index
    let j = i;

    while (j > 0 && array[j - 1] > array[j]) {
      // swap elements
      array[j - 1] = array[j - 1] ^ array[j];
      array[j] = array[j - 1] ^ array[j];
      array[j - 1] = array[j - 1] ^ array[j];

      // j moves back only
      j--;
    }

    // i moves forward only
    i++;
  }

  return array;
}
