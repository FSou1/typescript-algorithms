import {sort} from '../radixSort';

test.each([
  [null, null],
  [[], []],
  [[0], [0]],
  [[2, 1], [1, 2]],
  [[2, 2, 2], [2, 2, 2]],
  [[5, 2, 4, 6, 1, 3], [1, 2, 3, 4, 5, 6]],
  [[1, 4, 1, 2, 7, 5, 2], [1, 1, 2, 2, 4, 5, 7]],
  [[6, 1, 13, 2, 189, 0, 17], [0, 1, 2, 6, 13, 17, 189]],
])('sorted array of [%p] is [%p]', (arr, result) => {
  expect(sort(arr)).toStrictEqual(result);
});
