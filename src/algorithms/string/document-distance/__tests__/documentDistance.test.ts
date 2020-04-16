import {documentDistance} from '../documentDistance';

test.each([
  [null, null, -1],
  ['this is a fox', null, 0],
  [null, 'this is a fox', 0],
  ['this is a fox', 'this is a fox', 1],
  ['Julie loves me more than Linda loves me',
    'Jane likes me more than Julie loves me',
    0.822],
])('a document distance of [%p] and [%p] is %p', (str1, str2, distance) => {
  const result = documentDistance(str1, str2);
  expect(Number(result.toFixed(3))).toBe(distance);
});

