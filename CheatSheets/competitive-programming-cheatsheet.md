## Table of Contents

- [Competitive programming cheat sheet](#cp-cheatsheet-for-developers)
	- [Standard Template](#standard-template)
		- [Header Files](#header-files)
		- [Macros](#macros)
		- [Fast IO](#fast-io)
	- [Basic Algorithms](#basic-algorithms)
		- [Binary Search](#binary-search)
		- [Euclidean GCD](#euclidean-gcd)
		- [Binary Exponentiation](#binary-exponentiation)
		- [Modular Inverse](#modular-inverse)
	- [Graphs](graphs)
		- [BFS](#bfs)
		- [Disjoint Set Union](#disjoint-set-union)
	- [Geometry](#geometry)
		- [Linear Operations](#linear-operations)
		- [Dot Product](#dot-product)
		- [Cross Product](#cross-product)
		- [Intersection Point/Plane](#intersection)
	- [Dynamic Programming](#DP)
		- [Dice Problem](#DiceProb)
		- [Coin Problem I](#Coin1)
		- [Coin Problem II](#Coin2)
		- [Grid Problem](#Grid)
	
# Competitive programming cheat sheet

## standard-template

### header-files

```cpp
#include <bits/stdc++.h>
using namespace std;
```

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

## basic-algorithms

### binary-search

```cpp
int binarySearch(vector<int>&arr,int value)
{
	return binary_search(all(arr),value);
}
```

**[🔼Back to Top](#table-of-contents)**

### euclidean-gcd

```cpp
int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}
```

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

### dot-product

```cpp
ftype dot(point2d a, point2d b) {
    return a.x * b.x + a.y * b.y;
}
ftype dot(point3d a, point3d b) {
    return a.x * b.x + a.y * b.y + a.z * b.z;
}
```

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

## Dynamic Programming

### Dice Problem
Count the number of ways to construct sum n by throwing a dice one or more times. Each throw produces an outcome between 1 and 6.

```cpp
int main() {
    // For Fast I/O.
    ios_base::sync_with_stdio(0); 
    cin.tie(0);
 
    int n;
    cin >> n;
    int arr[n + 1];
    arr[0] = 1;
    
    for (int i = 1; i <= n; i++) {
        arr[i] = 0;
        for (int j = 1; j <= 6 && i - j >= 0; j++) {
            arr[i] += arr[i - j];
            arr[i] %= MOD;
        }
    }
    
    cout << arr[n] << endl;
 
    return 0;
}
```

### Coin Problem I
 Consider a money system consisting of n coins. Each coin has a positive integer value. Produce a sum of money x using the available coins in such a way that the number of coins is minimal.

```cpp
int main() {
    int n, y;
    cin >> n >> y;
 
    int coins[n];
    for (int i = 0; i < n; i++) cin >> coins[i];
 
    int value[(int) 1e6];
    value[0] = 0;
    for (int x = 1; x <= y; x++) {
        value[x] = 2e9;
        for (auto c : coins) {
            if (x-c >= 0) value[x] = min(value[x], value[x-c]+1);        
        }
    }
 
    if (value[y] == 2e9) cout << -1 << endl;
    else cout << value[y] << endl;
 
    return 0;
}
```


### Coin Problem II
 Consider a money system consisting of n coins. Each coin has a positive integer value. Calculate the number of distinct ways you can produce a money sum x using the available coins

```
int main() {
    // For Fast I/O.
    ios_base::sync_with_stdio(0); 
    cin.tie(0);
 
    int n, s;
    cin >> n >> s;
 
    int arr[n];
    flp(i, n) cin >> arr[i];
 
    int dp[s + 1];
    dp[0] = 1;
 
    for (int i = 1; i <= s; i++) {
        dp[i] = 0;
        for (int j : arr) {
            if (i - j >= 0) {
                dp[i] += dp[i - j];
                dp[i] %= MOD;
            }
        }
    }
 
    cout << dp[s] << endl;
 
    return 0;
}
```

## Grid Problem
 Consider an n×n grid whose squares may have traps. It is not allowed to move to a square with a trap.

Calculate the number of paths from the upper-left square to the lower-right square. You can only move right or down.

```cpp
int main() {
    // For Fast I/O.
    ios_base::sync_with_stdio(0); 
    cin.tie(0);
 
    int n;
    cin >> n;
    string arr[n];
 
    for (int i = 0; i < n; i++) cin >> arr[i];
 
    int dp[n][n];
    memset(dp, 0, sizeof(dp));
    dp[0][0] = 1;
 
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++>) {
            if (arr[i][j] == '.') {
                if (i > 0) (dp[i][j] += dp[i - 1][j]) %= MOD;
                if (j > 0) (dp[i][j] += dp[i][j - 1]) %= MOD;
            } else dp[i][j] = 0;
        }
    }
 
    cout << dp[n - 1][n - 1] << endl;
 
    return 0;
}
```


**[🔼Back to Top](#table-of-contents)**
