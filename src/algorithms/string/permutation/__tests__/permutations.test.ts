import { permutationsV1 } from "../permutationsV1";
import { permutationsV2 } from "../permutationsV2";

test.each([
  ["abc", "cab", true],
  ["aaaaaaaaaaaaaaa", "bbbbbbbb", false]
])("#1 the string %p is the permutation of the string %p: %p", (a, b, value) => {
  expect(permutationsV1(a, b)).toBe(value);
});

test.each([
  ["abc", "cab", true],
  ["aaaaaaaaaaaaaaa", "bbbbbbbb", false]
])("#2 the string %p is the permutation of the string %p: %p", (a, b, value) => {
  expect(permutationsV2(a, b)).toBe(value);
});