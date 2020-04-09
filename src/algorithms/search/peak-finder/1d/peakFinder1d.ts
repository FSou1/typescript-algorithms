/**
 * Find a peak in a one-dimensional array
 *
 * @export
 * @param {number[]} array
 * @return {(number | null)}
 */
export function findPeak(array: number[]): number | null {
  // There is no peak in a nullable or undefined array
  if (!array) {
    return null;
  }

  // The only element in array is a peak
  if (array.length == 1) {
    return array[0];
  }

  // The first element is a peak if it's greater or equal than the second
  if (array[0] >= array[1]) {
    return array[0];
  }

  // The last element is a peak if it's greater or equal than the second-to-last
  const len = array.length;
  if (array[len - 1] >= array[len - 2]) {
    return array[len - 1];
  }

  // The middle element is a peak if it's greater or equal than the neighbors
  const middle = Math.floor(len / 2);
  const left = middle - 1;
  const right = middle + 1;
  if (array[middle] >= array[left] && array[middle] >= array[right]) {
    return array[middle];
  }

  // Find a peak in a left chunk of an array
  if (array[middle] < array[left]) {
    return findPeak(array.slice(0, right));
  }

  // Find a peak in a right chunk of an array
  if (array[middle] < array[right]) {
    return findPeak(array.slice(middle, len));
  }

  return null;
}
