# Breadth-first search

Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.

## Applications

* Shortest path - in an unweighted graph, the shortest path is the path with least number of edges. With Breadth First, we always reach a vertex from given source using the minimum number of edges
* Peer to peer networks - find all neighbor nodes
* Crawlers in search engines - build index, start from source page and follow all links
* Social networks - find people within a given distance 'k'
* Broadcasting in networks - find all nodes to be reached by a broadcasting packet
* Path finding - find if there is a path between two vertices

## Complexity

**Time Complexity**: `O(|V| + |E|)` - since every vertex and every edge will be explored in the worst case, where |V| is the number of vertices and |E| is the number of edges in the graph;

**Space Complexity**: `O(|V|)` - this is in addition to the space required for the graph itself, which may vary depending on the graph representation;

## Referenes

- [Youtube](https://www.youtube.com/watch?v=s-CYnVz-uh4);