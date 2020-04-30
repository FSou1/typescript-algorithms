# Heapsort

Heapsort is a comparison-based sorting algorithm. Heapsort can be thought of as an improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted region, and it iteratively shrinks the unsorted region by extracting the largest element from it and inserting it into the sorted region.

## Complexity

**Time complexity**: `O(n*logn)` - the `heapify` function is `O(logn)`, and is called `n` times. Therefore, the performance of this algorithm is `O(n*logn)`.

## Reference

- [Youtube](https://www.youtube.com/watch?v=B7hVxCmfPtM);
- [Wikipedia](https://en.wikipedia.org/wiki/Heapsort);