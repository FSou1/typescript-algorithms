import {sort} from '../insertionSort';

test.each([
  [null, null],
  [[], []],
  [[0], [0]],
  [[2, 1], [1, 2]],
  [[2, 2, 2], [2, 2, 2]],
  [[5, 2, 4, 6, 1, 3], [1, 2, 3, 4, 5, 6]],
  [[39, 0, 23, 181, 7, -50], [-50, 0, 7, 23, 39, 181]],
])('sorted array of [%p] is [%p]', (arr, result) => {
  expect(sort(arr)).toStrictEqual(result);
});
