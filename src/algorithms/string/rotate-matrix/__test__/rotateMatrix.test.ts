import { rotateMatrix } from "../rotateMatrix";

test("rotate matrix is successful", () => {
  const input = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ];

  const expected = [
    [3, 2, 1],
    [3, 2, 1],
    [3, 2, 1],
  ];
  debugger;
  expect(rotateMatrix(input)).toStrictEqual(expected);
});
