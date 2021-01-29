import { sort } from "../../sort/heap/heapSort";

/**
 * Check if the input has unique characters only
 *  - Time complexity: O(n * log n)
 * @param  {string} input
 * @returns boolean
 */
export function uniqueV2(input: string): boolean {
  const sorted = sort(input.split("").map((s) => s.charCodeAt(0)));
  for (let i = 0, j = sorted.length - 1; i < j; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return false;
    }
  }
  return true;
}
