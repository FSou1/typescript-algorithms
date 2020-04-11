# Peak Finder (two-dimensional version)

TBD.

## Complexity

**Time Complexity**: `O(n*log(m))` - with `n` rows and `m` columns, since we:
- split search area by two `log(m)` times;
- search a global maximum on every iteration with `O(n)` time complexity;

## Referenes

- [Youtube](https://youtu.be/HtSuA80QTyo?t=2851);
- [Understanding Peak-Finding](https://www.filipekberg.se/2014/02/10/understanding-peak-finding/);