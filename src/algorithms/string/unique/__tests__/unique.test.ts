import { uniqueV1 } from "../uniqueV1";
import { uniqueV2 } from "../uniqueV2";

test.each([
  ["abc", true],
  ["aab", false],
  ["abcdefghijklmnopqrstuvwxyz123456789a", false],
  ["abcdefghijklmnopqrst uvwxyz123456789ABCDEFGHJ0_!';,.", true]
])("#1 the string %p has unique characters only: %p", (input, value) => {
  expect(uniqueV1(input)).toBe(value);
});

test.each([
  ["abc", true],
  ["aab", false],
  ["abcdefghijklmnopqrstuvwxyz123456789a", false],
  ["abcdefghijklmnopqrst uvwxyz123456789ABCDEFGHJ0_!';,.", true]
])("#2 the string %p has unique characters only: %p", (input, value) => {
  expect(uniqueV2(input)).toBe(value);
});
