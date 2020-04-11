import {findPeak as findPeak1d} from '../1d/peakFinder1d';

/**
 *
 *
 * @export
 * @param {number[]} array
 * @return {(number | null)}
 */
export function findPeak(array: number[][]): number | null {
  // There is no peak in a nullable or undefined array
  if (!array) {
    return null;
  }

  // There is no peak in an empty array
  if (array.length == 0) {
    return null;
  }

  // Use a 1d version of findPeak for an array with a single element
  if (array.length == 1) {
    return findPeak1d(array[0]);
  }

  // Get a number of columns
  const len = array[0].length;

  // Get a middle column index
  const j = Math.floor(len / 2);

  // Get column values
  const column = array.map((arr) => arr[j]);

  // Get an index of max value on column
  const i = column.indexOf(Math.max(...column));

  // The current element is a peak if it's:
  //  - greater or equal than the neighbors
  //  - a max in a single column array
  const current = array[i][j];
  const left = array[i][j - 1] || current;
  const right = array[i][j + 1] || current;
  if (current >= left && current >= right) {
    return current;
  }

  if (current < left) {
    return findPeak(array.map((arr) => arr.slice(0, j)));
  }

  if (current < right) {
    return findPeak(array.map((arr) => arr.slice(j, len)));
  }

  return null;
}
