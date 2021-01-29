/**
 * Check if the input has unique characters only
 *  - Time complexity: O(n)
 *  - Memory complexity: O(n)
 * @param  {string} input
 * @returns boolean
 */
export function uniqueV1(input: string): boolean {
  const dict = {};
  for (const char of input) {
    if (dict[char]) {
      return false;
    }

    dict[char] = 1;
  }

  return true;
}
