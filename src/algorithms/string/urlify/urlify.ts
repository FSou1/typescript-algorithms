/**
 * Replace all spaces in a string with '%20'
 * @param  {string} input
 * @param  {number} len
 * @returns string
 */
export function urlify(input: string, len: number): string {
  return input
    .split("")
    .map((el) => el === " " ? "%20" : el)
    .filter((v, i) => i < len)
    .join('');
}
