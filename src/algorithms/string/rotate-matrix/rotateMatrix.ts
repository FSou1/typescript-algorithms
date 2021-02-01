/**
 * Rotate the matrix by 90 degrees
 * @param  {number[][]} matrix
 * @returns number
 */
export function rotateMatrix(matrix: number[][]): number[][] {
  const output = JSON.parse(JSON.stringify(matrix));

  const len = output.length - 1;

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length; j++) {
      output[j][len - i] = matrix[i][j];
    }
  }

  return output;
}
