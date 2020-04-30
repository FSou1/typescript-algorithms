import {sort, buildMaxHeap, swap} from '../heapSort';

test.each([
  [[1, 2, 3], 0, 2, [3, 2, 1]],
])('swap of [%p], %p and %p is [%p]', (arr, i, j, result) => {
  swap(arr, i, j);
  expect(arr).toStrictEqual(result);
});

test.each([
  [null, null],
  [[], []],
  [[0], [0]],
  [[1, 2], [2, 1]],
  [[1, 2, 3], [3, 2, 1]],
  [[2, 2, 2], [2, 2, 2]],
  [[4, 10, 3, 5, 1], [10, 5, 3, 4, 1]],
])('heapify of [%p] is [%p]', (arr, result) => {
  expect(buildMaxHeap(arr)).toStrictEqual(result);
});

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
