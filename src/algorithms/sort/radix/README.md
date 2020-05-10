# Radix sort

Radix sort is a non-comparative sorting algorithm. It avoids comparison by creating and distributing elements into buckets according to their radix. For elements with more than one significant digit, this bucketing process is repeated for each digit, while preserving the ordering of the prior step, until all digits have been considered. For this reason, radix sort has also been called bucket sort and digital sort.

## Complexity

**Time complexity**: `n * k` - where `k` is length of longest key (algorithm calls a counting sort `k` times for `n` elements).

**Space complexity**: TBD.

## Reference

- [Youtube](https://www.youtube.com/watch?v=Nz1KZXbghj8);
- [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort);