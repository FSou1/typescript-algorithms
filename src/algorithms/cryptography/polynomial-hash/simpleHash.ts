const DEFAULT_BASE = 23;

/**
 * Simple polynomial hash
 *
 * @export
 * @class SimpleHasher
 */
export class SimpleHasher {
  base: number;

  /**
   *Creates an instance of SimpleHasher
   * @param {*} [base=DEFAULT_BASE]
   * @memberof SimpleHasher
   */
  constructor(base = DEFAULT_BASE) {
    this.base = base;
  }

  /**
   * Creates a hash representation of the word
   *
   * @param {string} word
   * @return {number}
   * @memberof SimpleHasher
   */
  hash(word: string): number {
    if (!word) {
      return 0;
    }

    let hash = 0;

    for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
      hash += word.charCodeAt(charIndex) * (this.base ** charIndex);
    }

    return hash;
  }

  /**
   * Creates hash representation of the word based on
   * previous word (shifted by one character left) hash value
   *
   * @param {number} prevHash
   * @param {string} prevWord
   * @param {string} newWord
   * @return {number}
   * @memberof SimpleHasher
   */
  roll(prevHash: number, prevWord: string, newWord: string): number {
    let hash = prevHash;

    const prevValue = prevWord.charCodeAt(0);
    const newValue = newWord.charCodeAt(newWord.length - 1);

    hash -= prevValue;
    hash /= this.base;
    hash += newValue * (this.base ** (newWord.length - 1));

    return hash;
  }
}
