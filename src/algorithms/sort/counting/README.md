# Counting sort

Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers; that is, it is an integer sorting algorithm. It operates by counting the number of objects that have each distinct key value, and using arithmetic on those counts to determine the positions of each key value in the output sequence.

## Complexity

**Time complexity**: `n + k` - since `count` initialization and the second loop takes `O(k)`, and the other loops take `O(n)`. Therefore, the time for the whole algorithm is the sum of the times for these steps;

**Space complexity**: `n + k` - because it uses arrays of length `k + 1` and `n`, the total space usage of the algorithm is also `O(n + k)`.

## Reference

- [Youtube](https://www.youtube.com/watch?v=Nz1KZXbghj8);
- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort);