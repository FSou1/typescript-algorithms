/**
 * Sort an array with a merge sort algorithm
 *
 * @export
 * @param {number[]} array
 * @return {(number[] | null)}
 */
export function sort(array: number[]): number[] | null {
  // Null is a result for a nullable or undefined array
  if (!array) {
    return null;
  }

  if (array.length <= 1) {
    return array;
  }

  // Split array into 2 parts equally
  const left = array.slice(0, array.length / 2);
  const right = array.slice(array.length / 2, array.length);

  // Return a merge result of sorted left and right parts
  return merge(sort(left), sort(right));
}

/**
 * Merge two arrays
 *
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]}
 */
export function merge(left: number[], right:number[]): number[] {
  const result = [];

  let l = 0;
  let r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] <= right[r]) {
      result.push(left[l]);
      l++;
    } else {
      result.push(right[r]);
      r++;
    }
  }

  while (r < right.length) {
    result.push(right[r]);
    r++;
  }

  while (l < left.length) {
    result.push(left[l]);
    l++;
  }

  return result;
}
