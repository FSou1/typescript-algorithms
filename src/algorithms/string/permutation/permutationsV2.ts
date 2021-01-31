import { sort } from "../../sort/heap/heapSort";

/**
 * Check if the string a is a permutation of the string b
 * @param  {string} a
 * @param  {string} b
 * @returns boolean
 */
export function permutationsV2(a: string, b: string): boolean {
  const combined = a.split("")
    .concat(b.split(""))
    .map((el) => el.charCodeAt(0));

  const sorted = sort(combined);

  for (let i = 0, j = combined.length; i < j; i += 2) {
    if (sorted[i] != sorted[i + 1]) {
      return false;
    }
  }

  return true;
}
