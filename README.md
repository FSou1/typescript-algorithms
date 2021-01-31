# TypeScript Algorithms and Data structures

![CI](https://github.com/FSou1/typescript-algorithms/workflows/CI/badge.svg?branch=master)

🔖 Algorithms and data structures implemented in TypeScript.

## Data structures

A data structure is a data organization, management, and storage format that enables efficient access and modification. More precisely, a data structure is a collection of data values, the relationships among them, and the functions or operations that can be applied to the data.

* [Queue](src/data-structures/queue) - a data structure to follow the FIFO principle;
* [Graph](src/data-structures/graph) - a set of vertices and edges;
* [Stack](src/data-structures/stack) - a data structure to follow the LIFO principle;
* [Linked list](src/data-structures/linked-list) - a data structure to follow the FIFO principle;
* [Vector](src/data-structures/vector) - is used to represent the mathematical vector used in linear algebra;
* [Hash table](src/data-structures/hash-table) - is used for lookup, where keys are hashed;

## Algorithms

An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of problems or to perform a computation.

### Algorithms by Topic

* **Search**
  * [Peak Finder (1d version)](src/algorithms/search/peak-finder/1d) - find a peak in a one-dimensional array;
  * [Peak Finder (2d version)](src/algorithms/search/peak-finder/2d) - find a peak a two-dimensional array;
  * [Binary search](src/algorithms/search/binary) - find a position of the element in a sorted one-dimensional array;
* **String**
  * [Document distance](src/algorithms/string/document-distance) - measure similarity between two strings;
  * [Is unique](src/algorithms/string/unique) - check a string for uniqueness;
  * [Check permutation](src/algorithms/string/permutation) - check if a string is a permutation of the other;
  * [URLify](src/algorithms/string/urlify) - replace all spaces in a string with '%20';
  * [String compression](src/algorithms/string/compression) - perform basic string compression using the counts of repeated characters;
* **Sort**
  * [Insertion sort](src/algorithms/sort/insertion/simple) - sort an array with a simple insertion algorithm;
  * [Merge sort](src/algorithms/sort/merge) - sort an array with a merge sort algorithm;
  * [Heapsort](src/algorithms/sort/heapsort) - sort an array with a heapsort algorithm;
  * [Counting sort](src/algorithms/sort/counting) - sort an array with a counting sort algorithm;
  * [Radix sort](src/algorithms/sort/radix) - sort an array with a radix sort algorithm;
* **Graph**
  * [Breadth-first search](src/algorithms/graph/breadth-first-search) - traverse a graph, explore neighbor vertices first;
  * [Depth-first search](src/algorithms/graph/depth-first-search) - traverse a graph, explore descendant vertices first;
  * [Dijkstra](src/algorithms/graph/dijkstra) - find the shortest path between two vertices in a graph, return a shortest-path tree;
  * [Bellman-Ford](src/algorithms/graph/bellman-ford) - find the shortest path in a graph with negative edges, return a shortest-path tree;
  * [Topological sort](src/algorithms/graph/topological) - an algorithm for topological sorting, which is based on [depth-first search](src/algorithms/graph/depth-first-search);

## How to use this repository

**Install all dependencies**
```
npm install
```

**Run all tests**
```
npm test
```