---
layout: ../../layouts/CheatSheet.astro
title: "Competitive Programming Cpp Cheatsheet"
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
### LCM of Two Numbers

```cpp
#define ll long long int
ll gcd(ll a, ll b){
  if (b == 0)
    return a;
  return gcd(b, a % b);
}
ll lcm(ll a, ll b){
    return (a / gcd(a, b)) * b;
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
## Sliding window template
```cpp
 int findSubstring(string s){
        vector<int> map(128,0);
        int counter; // check whether the substring is valid
        int begin=0, end=0; //two pointers, one point to tail and one  head
        int d; //the length of substring

        for() { /* initialize the hash map here */ }

        while(end<s.size()){

            if(map[s[end++]]-- ?){  /* modify counter here */ }

            while(/* counter condition */){ 
                 
                 /* update d here if finding minimum*/

                //increase begin to make it invalid/valid again
                
                if(map[s[begin++]]++ ?){ /*modify counter here*/ }
            }  

            /* update d here if finding maximum*/
        }
        return d;
  }
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

<<<<<<< HEAD:src/pages/sheet/competitive-programming.md

=======
**[🔼Back to Top](#table-of-contents)**

## String

### z-algorithm

**Output**: _z[i]_ := length of largest string from index _i_ which is a prefix of _s_.

**Time complexity**: O(_n_)

```cpp
vector<int> z_function(string s) {
	int n = (int) s.length();
	vector<int> z(n);
	for(int i = 1, l = 0, r = 0; i < n; ++i) {
		if(i <= r)
			z[i] = min(r - i + 1, z[i - l]);
		while (i + z[i] < n && s[z[i]] == s[i + z[i]])
			++z[i];
		if(i + z[i] - 1 > r)
			l = i, r = i + z[i] - 1;
	}
	return z;
}
```

Related problem: [Codeforces 126B - Password](https://codeforces.com/contest/126/problem/B)

**[🔼Back to Top](#table-of-contents)**

> > > > > > > b00d371e1e1a7274c54964b33b95484ba97e282a:src/pages/sheet/competitive-programming-cheatsheet.md
