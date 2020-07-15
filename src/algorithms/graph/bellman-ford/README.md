# Bellman-Ford

## Applications

Same as the others algorithms (e.g. Dijkstra) for finding the shortest path:

* Searching for a shortest path
* Build an optimal path at geographical maps
* Network routing protocols

Moreover, due to its ability to work with negative edges, the algorithm is also used for:

* Finding negative cycles

## Complexity

**Time Complexity**: `O(|V| * |E|)` since the algorithm performs one outer (over vertices) and one inner (over edges) loop.

**Space Complexity**: `O(|V|)` since the algorithm persists two dictionaries of length `|V|`.

## References

- [Youtube](https://www.youtube.com/watch?v=ozsuci5pIso);
- [Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm);