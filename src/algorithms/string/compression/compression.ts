/**
 * A method to perform basic string compression using the counts of repeated characters.
 * - The string aabcccccaaa would become a2blc5a3;
 * - If the "compressed" string is not smaller than the original one, the method returns the original string.
 * @param  {string} input
 * @returns string
 */
export function compression(input: string): string {
  const len = input.length;
  const output = [];

  let counter = 1;
  for (let i = 0; i < len; i++) {
    if (input[i] === input[i + 1]) {
      counter++;
    } else {
      output.push(input[i], counter);
      counter = 1;
    }
  }

  const result = output.join("");

  return result.length > len ? input : result;
}
