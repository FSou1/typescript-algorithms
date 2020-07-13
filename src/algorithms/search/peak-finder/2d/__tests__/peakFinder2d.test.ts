import {findPeak} from '../peakFinder2d';

test.each([
  [[], null],
  [null, null],
  [undefined, null],
])('a peak of [%p] is %p', (arr, peak) => {
  expect(findPeak(arr)).toBe(peak);
});

test('a peak of [2x2] is 3', () => {
  const arr = [
    [0, 1],
    [2, 3],
  ];
  const peak = 3;
  expect(findPeak(arr)).toBe(peak);
});

test('a peak of [3x3] is 7', () => {
  const arr = [
    [0, 1, 0],
    [2, 3, 4],
    [7, 6, 5],
  ];
  const peak = 7;
  expect(findPeak(arr)).toBe(peak);
});

test('a peak of [4x4] is 21', () => {
  const arr = [
    [10, 8, 10, 10],
    [14, 13, 12, 11],
    [15, 9, 11, 21],
    [16, 17, 19, 20],
  ];
  const peak = 21;
  expect(findPeak(arr)).toBe(peak);
});
