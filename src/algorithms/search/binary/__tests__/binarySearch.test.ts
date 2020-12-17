import {binarySearch} from '../binarySearch';

test.each([
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8, 7],
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12, null],
  [[0, 1, 2, 3, 4], 4, 4],
  [[0, 1, 2, 3, 4], 1, 1],
  [[1, 5], 5, 1],
  [[12], 12, 0],
  [[], 1, null],
  [[], null, null],
  [null, null, null],
  [undefined, null, null],
])('binary search [%s], looking for %s', (arr, element, result) => {
  expect(binarySearch(arr, element, 0, (arr || []).length - 1)).toBe(result);
});
