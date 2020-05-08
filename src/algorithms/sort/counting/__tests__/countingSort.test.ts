import {sort} from '../countingSort';

test.each([
  [null, null],
  [[], []],
  [[0], [0]],
  [[2, 1], [1, 2]],
  [[2, 2, 2], [2, 2, 2]],
  [[5, 2, 4, 6, 1, 3], [1, 2, 3, 4, 5, 6]],
  [[1, 4, 1, 2, 7, 5, 2], [1, 1, 2, 2, 4, 5, 7]],
])('sorted array of [%p] is [%p]', (arr, result) => {
  expect(sort(arr)).toStrictEqual(result);
});
