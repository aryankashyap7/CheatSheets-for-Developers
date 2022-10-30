---
layout: ../../layouts/CheatSheet.astro
title: "Competitive Programming Java Cheatsheet"
---

## Synopsis

Competitive programming is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications. Competitive programming is recognized and supported by several multinational software and Internet companies.

There are many different types of competitive programming competitions, including:

| Type                                                                          | Description                                                                                                                                                      |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ACM-ICPC](https://icpc.baylor.edu/)                                          | The ACM International Collegiate Programming Contest (ICPC) is an annual multi-tiered competitive programming competition among the universities of the world.   |
| [Google Code Jam](https://codingcompetitions.withgoogle.com/codejam)          | Google Code Jam is a programming competition organized and run by Google.                                                                                        |
| [Google Kick Start](https://codingcompetitions.withgoogle.com/kickstart)      | Google Kick Start is a global online coding competition, consisting of three-hour rounds of algorithmic puzzles designed by Google engineers and held virtually. |
| [Google Hash Code](https://codingcompetitions.withgoogle.com/hashcode)        | Google Hash Code is a team-based programming competition, organized by Google for students and professionals around the world.                                   |
| [Facebook Hacker Cup](https://www.facebook.com/codingcompetitions/hacker-cup) | Facebook Hacker Cup is a worldwide programming competition organized by Facebook.                                                                                |

## standard-java-templates

### template-using-scanner-class

```java
import java.io.*;
import java.util.*;

public class Main {
	public static void main(String[] args) throws Exception {
		Scanner s = new Scanner(System.in);

		// example usage
		int num = s.nextInt();
		System.out.println("Num: " + num);

		// code goes here:

	}
}
```

**[🔼Back to Top](#table-of-contents)**

### template-using-buffered-reader-class

```java
import java.io.*;
import java.util.*;

public class Main {
	public static void main(String[] args) throws Exception {
		InputStreamReader isr = new InputStreamReader(System.in);
		BufferedReader br = new BufferedReader(isr);

		// example usage
		int num = Integer.parseInt(br.readLine());
		System.out.println("Num: " + num);

		// code goes here:

	}
}

```

**[🔼Back to Top](#table-of-contents)**

### template-using-custom-fast-reader-class

```java
import java.io.*;
import java.util.*;

public class Main {
	static class FastReader { // custom fast reader class
		InputStreamReader isr;
		BufferedReader br;
		StringTokenizer st;

		public FastReader() {
			isr = new InputStreamReader(System.in);
			br = new BufferedReader(isr);
		}

		String next() { // read a word in the input
			while (st == null || !st.hasMoreElements()) {
				try {
					st = new StringTokenizer(br.readLine());
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return st.nextToken();
		}

		String nextLine() { // read a line in the input
			String str = "";
			try {
				if (st.hasMoreTokens()) {
					str = st.nextToken("\n");
				} else {
					str = br.readLine();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
			return str;
		}
	}

	public static void main(String[] args) throws Exception {
		FastReader fr = new FastReader();

		// example usage
		int num = Integer.parseInt(fr.next());
		System.out.println("Num: " + num);

		// code goes here:

	}
}
```

**[🔼Back to Top](#table-of-contents)**

## Basic Data Structures And Algorithms

### graph representation using Adjacency list

```java
import java.util.ArrayList;
import java.util.List;

public class Graph {
    void AdjacencyArrayGraph(int nodes) { // representation of graph using adjacency array
        // nodes represent number of nodes in the graph
        List<Integer>[] graph = new ArrayList[nodes];
        for (int i = 0; i < nodes; i++)
            graph[i] = new ArrayList<>();

        // example adding edges
        int m = 2; // number of edges
        for (int i = 0; i < m; i++) {
            // if edge is present from u to v;
            int u = 1; // takes input
            int v = 2; // takes input

            // add in both nodes (u, v) if the edge is bidirectional
            graph[u].add(v);
            graph[v].add(u);
        }
    }

    void AdjacencyList(int nodes) { // representation of graph using adjacency list
        // nodes represent number of nodes in the graph
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < nodes; i++)
            graph.add(new ArrayList<>());

        // example adding edges
        int m = 2; // number of edges
        for (int i = 0; i < m; i++) {
            // if edge is present from u to v;
            int u = 1; // takes input
            int v = 2; // takes input

            // add in both nodes (u, v) if the edge is bidirectional
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
    }
}

```

### disjoint-set-union

```java
public class UnionFind {

    private int size;

    private int[] sz;

    private int[] id;

    private int numComponents;

    public UnionFind(int size) {

        if (size <= 0) throw new IllegalArgumentException("Size <= 0 is not allowed");

        this.size = numComponents = size;
        sz = new int[size];
        id = new int[size];

        for (int i = 0; i < size; i++) {
            id[i] = i; // Link to itself (self root)
            sz[i] = 1; // Each component is originally of size one
        }
    }

    public int find(int p) { // finds the root of the component

        // Find the root of the component/set
        int root = p;
        while (root != id[root]) root = id[root];

        // path-compression
        while (p != root) {
            int next = id[p];
            id[p] = root;
            p = next;
        }
        return root;
    }

    public boolean connected(int p, int q) { // check if element belongs to same component
        return find(p) == find(q);
    }

    public int componentSize(int p) { // check if element belongs to same component
        return sz[find(p)];
    }

    public int size() { // returns number of elements
        return size;
    }

    public int components() { // returns number of components
        return numComponents;
    }

    public void unify(int p, int q) { // joins the two components

        if (connected(p, q)) return;

        int root1 = find(p);
        int root2 = find(q);

        if (root1 == root2) return;

        // Merge smaller component into the larger one.
        if (sz[root1] < sz[root2]) {
            sz[root2] += sz[root1];
            id[root1] = root2;
            sz[root1] = 0;
        } else {
            sz[root1] += sz[root2];
            id[root2] = root1;
            sz[root2] = 0;
        }

        numComponents--;
    }
}
```

**[🔼Back to Top](#table-of-contents)**

## Java specific competitive programming utility methods

```java
public class JavaUtil {

    /**
     * checks if a number is a power of 2.
     * @param num
     */
    static boolean isPowerOfTwo(long num) {
        return num != 0 && ((num & (num - 1)) == 0);
    }

    /**
     * Returns sorted array
     * Why this function:
     * because default sorting method in java (Arrays.sort) uses quick sort to sort array which in worst case have O(n^2) complexity.
     * using below function will reduce worst case complexity from quadratic to logarithmic
     *
     * @param arr
     */
    static void sort(int[] arr) {
        List<Integer> list = new ArrayList<>();
        for (int i : arr) list.add(i);
        Collections.sort(list); // uses merge sort internally
        int pt = 0;
        for (int i : list) {
            arr[pt++] = i;
        }
    }

    /**
     * greatest common divisor of two numbers
     */
    static long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }

    /**
     * Converts a number to any base value.
     * @param num
     * @param base
     * @return String in the converted base format
     */
    static String convertNumToBase(long num, int base) {
        if (base < 2 || base > 36) {
            throw new IllegalArgumentException("Invalid Base Value (allowed values are from 2 to 36)");
        }
        return Long.toString(num, base);
    }
}

```