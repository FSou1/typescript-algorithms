/**
 * Check if the string a is a permutation of the string b
 * @param  {string} a
 * @param  {string} b
 * @returns boolean
 */
export function permutationsV1(a: string, b: string): boolean {
    if(a === b) {
        return true;
    }

    if(a.length !== b.length) {
        return false;
    }

    const dict = {};
    for(let i = 0, j = a.length; i < j; i++) {
        dict[a[i]] = (dict[a[i]] || 0) + 1;
        dict[b[i]] = (dict[b[i]] || 0) + 1;
    }

    return !Object.values(dict).find((v: number) => v % 2 != 0);
}