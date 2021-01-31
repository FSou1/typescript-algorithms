import { urlify } from "../urlify";

test.each([
  ["Mr John Smith      ", 13, "Mr%20John%20Smith"],
  ["Hey", 3, "Hey"],
  ["L o L", 5, "L%20o%20L"]
])(
  "if you urlify the %p string of %p len you should get '%p'",
  (input, len, value) => {
    expect(urlify(input, len)).toBe(value);
  },
);
