import { compression } from "../compression";

test.each([
  ["aabcccccaaa", "a2b1c5a3"],
  ["abcde", "abcde"]
])("the compressed value of the string '%p' is '%p'", (input, output) => {
  expect(compression(input)).toBe(output);
});
