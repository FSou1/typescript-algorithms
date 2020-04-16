
/**
 * Measures similarity between two non-empty strings
 *
 * @export
 * @param {*} a
 * @param {*} b
 * @return {(number)}
 */
export function documentDistance(a: string, b: string): number {
  const lena = (a || '').length;
  const lenb = (b || '').length;

  // Similarity of [null, null] strings is -1
  if (!lena && !lenb) {
    return -1;
  }

  // Similarity of ['a', null] or [null, 'b'] strings is 0
  if ( (!lena && lenb) || (lena && !lenb)) {
    return 0;
  }

  const aWords = getWordFrequencies(a);
  const bWords = getWordFrequencies(b);

  return cosineSimilarity(aWords, bWords);
}

/**
 * Transforms the 'this is a fox this' string to an array of word frequencies:
 * [['this', 2], ['is', 1], ['a', 1], ['fox', 1]]
 * @param {string} str
 * @return { [string, number][] }
 */
function getWordFrequencies(str: string): [string, number][] {
  const words = str.split(' ').map((s) => s.toLowerCase());
  const obj = {};
  for (const w of words) {
    obj[w] = ++obj[w] || 1;
  }
  return Object.keys(obj).map((k) => [k, obj[k]]);
}

/**
 * Calculates cosine similarity between two non-zero vectors as:
 *   d(x,y) = inner_product(x,y) / (norm(x)*norm(y))
 * where:
 *   inner_product(x,y) = x1*y1 + x2*y2 + ... xn*yn
 *   norm(x) = sqrt(inner_product(x,x))
 * @param {number[]} vector1
 * @param {number[]} vector2
 * @return {number}
 */
function cosineSimilarity(
    vector1: [string, number][],
    vector2: [string, number][],
): number {
  const a = dotProduct(vector1, vector2);
  const b = magnitude(vector1);
  const c = magnitude(vector2);
  return a / (b * c);
}

/**
 * Calculates dotProduct between two vectors
 *
 * @param {number[]} vector1
 * @param {number[]} vector2
 * @return {number}
 */
function dotProduct(
    vector1: [string, number][],
    vector2: [string, number][],
): number {
  let result = 0;

  for (const [str1, val1] of vector1) {
    for (const [str2, val2] of vector2) {
      if (str1 == str2) {
        result += val1 * val2;
      }
    }
  }

  return result;
}

/**
 *
 *
 * @param {number[]} vector
 * @return {number}
 */
function magnitude(vector: [string, number][]): number {
  return Math.sqrt(dotProduct(vector, vector));
}
