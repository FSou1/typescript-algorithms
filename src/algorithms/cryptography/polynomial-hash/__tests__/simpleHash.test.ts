import {SimpleHasher} from '../simpleHash';

test.each([
  [null, 0],
  [undefined, 0],
  ['', 0],
  ['a', 97],
  [' a', 2263],
  ['ab', 2351],
  ['abc', 54722],
  ['bcz', 66913],
])('a hash representation of %p is %p', (word, hash) => {
  const hasher = new SimpleHasher();
  expect(hasher.hash(word)).toBe(hash);
});

test.each([
  [97, 'a', 'b', 98],
  [2263, ' a', 'ab', 2351],
  [54722, 'abc', 'bcz', 66913],
])('a rolled hash from %p of %p to %p is %p', (pHash, pWord, nWord, nHash) => {
  const hasher = new SimpleHasher();
  expect(hasher.roll(pHash, pWord, nWord)).toBe(nHash);
});
