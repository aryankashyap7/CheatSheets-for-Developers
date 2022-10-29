---
layout: ../../layouts/BlogLayout.astro
title: "Competitive Programming Cheatsheet"
---

## Table of Contents

- [Competitive programming cheat sheet](#competitive-programming-cheat-sheet)
  - [standard-template](#standard-template)
    - [header-files](#header-files)
    - [macros](#macros)
    - [fast-io](#fast-io)
  - [basic-algorithms](#basic-algorithms)
    - [binary-search](#binary-search)
    - [euclidean-gcd](#euclidean-gcd)
    - [binary-exponentiation](#binary-exponentiation)
    - [modular-inverse](#modular-inverse)
  - [graphs](#graphs)
    - [bfs](#bfs)
    - [disjoint-set-union](#disjoint-set-union)
  - [Geometry](#geometry)
    - [linear-operations](#linear-operations)
    - [dot-product](#dot-product)
    - [cross-product](#cross-product)
    - [intersection](#intersection)
	
# Competitive programming cheat sheet

## standard-template

### header-files

```cpp
#include <bits/stdc++.h>
using namespace std;
```



### macros

```cpp
#define m1 1000000007  //Standard primes used in modulo operations(1e9 + 7)
#define m2 998244353
#define ll long long
#define pll pair<ll,ll>
#define fab(i, a, b) for(ll i=a;i<b;i++)
#define fabr(i, a, b) for(ll i=b-1;i>=a;i--)
#define f(i, n) for(ll i=0;i<n;i++)
#define ff first
#define ss second
#define pb push_back
#define ppb pop_back
#define all(x) x.begin(),x.end()
#define mp make_pair
#define mt make_tuple
#define trav(container, it) for (typeof (container.begin()) it = container.begin(); it != container.end(); it++)
```



### fast-io

```cpp
void fast()
{
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
}
int main()
{
    fast();
    return 0;
}
```



## basic-algorithms

### binary-search

```cpp
int binarySearch(vector<int>&arr,int value)
{
	return binary_search(all(arr),value);
}
```



### euclidean-gcd

```cpp
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
```



### binary-exponentiation

```cpp
int power(int x, int y, int p)
{
    int res = 1;
    while (y > 0) {
        if (y % 2 == 1)
            res = (res * x);
        y = y >> 1;
        x = (x * x);
    }
    return res % p;
}
```



### modular-inverse

```cpp
int modInverse(int a, int m){ 
    int g = gcd(a, m); 
    if (g != 1){
        return -1;
    }else{ 
        return power(a, m-2, m);
    } 
};
```



## graphs

### bfs

```cpp
class Graph
{
	public:
    int V;
    vector<list<int>> adj;  
    Graph(int V);
    void addEdge(int v, int w);
    void BFS(int s); 
};
Graph::Graph(int V)
{
    this->V = V;
    adj.resize(V);
}
 
void Graph::addEdge(int v, int w)
{
    adj[v].push_back(w);
}
 
void Graph::BFS(int s)
{
    vector<bool> visited;
    visited.resize(V,false);
 
    list<int> queue;
 
    visited[s] = true;
    queue.push_back(s);
 
    while(!queue.empty())
    {
        s = queue.front();
        cout << s << " ";
        queue.pop_front();
        for (auto adjecent: adj[s])
        {
            if (!visited[adjecent])
            {
                visited[adjecent] = true;
                queue.push_back(adjecent);
            }
        }
    }
}
```



### disjoint-set-union

```cpp
struct DSU {
	vector<int> e;
	DSU(int N) { e = vector<int>(N, -1); }

	int get(int x) { return e[x] < 0 ? x : e[x] = get(e[x]); }

	bool same_set(int a, int b) { return get(a) == get(b); }

	int size(int x) { return -e[get(x)]; }

	bool unite(int x, int y) {  
		x = get(x), y = get(y);
		if (x == y) return false;
		if (e[x] > e[y]) swap(x, y);
		e[x] += e[y]; e[y] = x;
		return true;
	}
};
```



## Geometry

### linear-operations

1. 2d plane.
```cpp
struct point2d {
    ftype x, y;
    point2d() {}
    point2d(ftype x, ftype y): x(x), y(y) {}
    point2d& operator+=(const point2d &t) {
        x += t.x;
        y += t.y;
        return *this;
    }
    point2d& operator-=(const point2d &t) {
        x -= t.x;
        y -= t.y;
        return *this;
    }
    point2d& operator*=(ftype t) {
        x *= t;
        y *= t;
        return *this;
    }
    point2d& operator/=(ftype t) {
        x /= t;
        y /= t;
        return *this;
    }
    point2d operator+(const point2d &t) const {
        return point2d(*this) += t;
    }
    point2d operator-(const point2d &t) const {
        return point2d(*this) -= t;
    }
    point2d operator*(ftype t) const {
        return point2d(*this) *= t;
    }
    point2d operator/(ftype t) const {
        return point2d(*this) /= t;
    }
};
point2d operator*(ftype a, point2d b) {
    return b * a;
}
```

2. 3d plane

```cpp
struct point3d {
    ftype x, y, z;
    point3d() {}
    point3d(ftype x, ftype y, ftype z): x(x), y(y), z(z) {}
    point3d& operator+=(const point3d &t) {
        x += t.x;
        y += t.y;
        z += t.z;
        return *this;
    }
    point3d& operator-=(const point3d &t) {
        x -= t.x;
        y -= t.y;
        z -= t.z;
        return *this;
    }
    point3d& operator*=(ftype t) {
        x *= t;
        y *= t;
        z *= t;
        return *this;
    }
    point3d& operator/=(ftype t) {
        x /= t;
        y /= t;
        z /= t;
        return *this;
    }
    point3d operator+(const point3d &t) const {
        return point3d(*this) += t;
    }
    point3d operator-(const point3d &t) const {
        return point3d(*this) -= t;
    }
    point3d operator*(ftype t) const {
        return point3d(*this) *= t;
    }
    point3d operator/(ftype t) const {
        return point3d(*this) /= t;
    }
};
point3d operator*(ftype a, point3d b) {
    return b * a;
}
```



### dot-product

```cpp
ftype dot(point2d a, point2d b) {
    return a.x * b.x + a.y * b.y;
}
ftype dot(point3d a, point3d b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
```



### cross-product

```cpp
point3d cross(point3d a, point3d b) {
    return point3d(a.y * b.z - a.z * b.y,
                   a.z * b.x - a.x * b.z,
                   a.x * b.y - a.y * b.x);
}
ftype triple(point3d a, point3d b, point3d c) {
    return dot(a, cross(b, c));
}
ftype cross(point2d a, point2d b) {
    return a.x * b.y - a.y * b.x;
}
```



### intersection

```cpp
point2d intersect(point2d a1, point2d d1, point2d a2, point2d d2) {
    return a1 + cross(a2 - a1, d2) / cross(d1, d2) * d1;
}

point3d intersect(point3d a1, point3d n1, point3d a2, point3d n2, point3d a3, point3d n3) {
    point3d x(n1.x, n2.x, n3.x);
    point3d y(n1.y, n2.y, n3.y);
    point3d z(n1.z, n2.z, n3.z); 
    point3d d(dot(a1, n1), dot(a2, n2), dot(a3, n3));
    return point3d(triple(d, y, z),
                   triple(x, d, z),
                   triple(x, y, d)) / triple(n1, n2, n3);
}
```


