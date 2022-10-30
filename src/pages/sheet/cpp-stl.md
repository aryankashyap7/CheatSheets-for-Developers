---
layout: ../../layouts/CheatSheet.astro
title: "Cpp STL Cheatsheet"
---

## Synopsis

Cpp Stl is a library of container classes, algorithms, and iterators. It is a generalized library and so, its components are parameterized. C++ STL is a set of C++ template classes to provide common programming data structures and functions such as lists, stacks, arrays, etc. It is a library of container classes, algorithms, and iterators. It is a generalized library and so, its components are parameterized. C++ STL is a set of C++ template classes to provide common programming data structures and functions such as lists, stacks, arrays, etc.

## vector

```cpp
    // Vector  initialization
    vector<int> v;

    // Vector  Insetion element
    cout << "Insertion of element in vector: " << endl;
    cout << endl;
    for (int i = 0; i < n; i++)
    {
        v.push_back(a[i]);
    }

    // Vector  Display element
    cout << "Display element of vector " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << " ";
    }
    cout << endl;

    // // Vector  maximum element
    int maximum = *max_element(v.begin(), v.end());

    // Vector  minimum element
    int minimum = *min_element(v.begin(), v.end());
    cout << "Maximum element in vector " << maximum << endl;
    cout << "Minmum element in vector " << minimum << endl;
    sort(v.begin(), v.end());
    // Vector  sort element
    cout << "Sort element of vector " << endl;
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << " ";
    }
    reverse(v.begin(), v.end());
    cout << endl;
    // Vector  reverse element
    cout << "Reverse element of vector " << minimum << endl;
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << " ";
    }
    cout << endl;
      // Vector deletion
    cout << "Delete last element of vector " << endl;
    v.pop_back();
    for (int i = 0; i < n; i++)
    {
        cout << v[i] << " ";
    }
```

## Set

```cpp
     // Set initialization
    set<int> s;
    cout << endl;
      // Set insertion
    cout << "Insertion in set " << endl;
    cout << endl;
    for (int i = 0; i < n; i++)
    {
        s.insert(a[i]);
    }
      // Set display
    cout << "Display of set element" << endl;
    for (auto i = s.begin(); i != s.end(); i++)
    {
        cout << *i << " ";
    }

```

## Unordered Set

```cpp

     //Unordered Set initialization
    unordered_set<int> s1;
    cout << endl;
      // unordered set insertion
    cout << "Insertion in unordered set " << endl;
    for (int i = 0; i < n; i++)
    {
        s1.insert(a[i]);
    }
      // Unordered set display
    cout << "Display of unordered set element" << endl;
    for (auto i = s1.begin(); i != s1.end(); i++)
    {
        cout << *i << " ";
    }
```

## Map

```cpp
   // Map initialization
    map<int, int> m;
    cout << endl;
       // Map insertion
    cout << "Insertion in map " << endl;
    for (int i = 0; i < n; i++)
    {
        m[a[i]]++;
    }
    cout << "Display of map element" << endl;
    // map display
    for (auto i = m.begin(); i != m.end(); i++)
    {
        cout << i->first << " " << i->second << endl;
    }
```

## Stack

```cpp

     // Stack initialization
    stack<int> st;
    cout << endl;
    // Stack insertion
    cout << "Insertion in stack " << endl;
    for (int i = 0; i < n; i++)
    {
        st.push(a[i]);
    }
      // Stack display
    cout << "Display and removal of stack element" << endl;
    for (auto i = s.begin(); i != s.end(); i++)
    {
        cout << st.top() << " ";
        st.pop();
    }
```

## Queue

```queue
    // Queue initialization
	queue<int> q;
    cout << endl;
    // Queue insertion
    cout << "Insertion in queue " << endl;
    for (int i = 0; i < n; i++)
    {
        q.push(a[i]);
    }
      // Queue display

    cout << "Display of queue element" << endl;
    for (auto i = s.begin(); i != s.end(); i++)
    {
        cout << q.front() << " ";
        q.pop();
    }
```

## Deque

```deque
    // Deque initialization
   deque<int> d;
   // Deque insertion
    cout << "Insertion in deqeue " << endl;
    for (int i = 0; i < n; i++)
    {
        d.push_front(a[i]);
    }
    cout << "Display of dequeue element" << endl;
   // Deque display
    for (auto i = s.begin(); i != s.end(); i++)
    {
        cout << d.front() << " ";
        d.pop_back();
    }
    cout << "Deletion of dequeue element" << endl;
    d.pop_back();
```

## Vector Pair

```cpp

   // Vector pair initialization
    vector<pair<int, int>> p;

    // Vector pair insertion
    cout << "Insertion in vector pair " << endl;
    cout << endl;
    for (int i = 0; i < n; i++)
    {
        p.push_back({a[i], i});
    }
    // Vector pair Display
    cout << "Display of vector pair element" << endl;
    for (auto i = 0; i < v.size(); i++)
    {
        cout << p[i].first << " " << p[i].second << endl;
    }
    cout << endl;
```

## List

```cpp
    list <int> LI;
    list <int>::iterator it;
    //inserts elements at end of list
    LI.push_back(4);
    //inserts elements at beginning of list
    LI.push_front(3);
    //returns reference to first element of list
    it = LI.begin();
    //inserts 1 before first element of list
    LI.insert(it,1);
    //list traversal
    for(it = LI.begin();it!=LI.end();it++)
    {
        cout<<*it<<" ";
    }
    cout<<endl;
    //reverse elements of list
    LI.reverse();
    //removes all occurences of 5 from list
    LI.remove(5);
    //removes last element from list
    LI.pop_back();

    //removes first element from list
    LI.pop_front();
```

## Priority Queue

```cpp
	priority_queue<int> pq;
	// priority queue insertion
	pq.push(10);
	pq.push(20);
	// priority queue display
	while (!pq.empty()) {
		cout << '\t' << g.top();
		g.pop();
	}
	cout << '\n';

	cout << "\n size if pq : " << pq.size();
	cout << "\n top element of pq : " << pq.top();

	// priority queue deletion
	pq.pop();
```

## Hidden Functions

```cpp

    __gcd(value1, value2)
    // Return gcd of two numbers, without using Euclidean Algorithm

    __builtin_ffs(x)
    //This function returns 1 + position of least significant 1-bit of x. Here x is int, this function with suffix 'l' gets
    //a long argument and with suffix 'll' gets a long long argument.
    e.g. __builtin_ffs(10) = 2 because 10 is '...10 1 0' in base 2 and first 1-bit from right is at index 1 (0-based) and
    function returns 1 + index.

    __builtin_clz(x)
    //This function returns number of leading 0-bits of x which starts from most significant bit position. x is unsigned int. If
    //this function with suffix 'l gets a unsigned long argument and with suffix 'll' gets a unsigned long long argument. If x =
    //= 0, returns an undefined value.
    e.g. __builtin_clz(16) = 27 because 16 is ' ... 10000' in base-2. Number of bits in a unsigned int is 32. so function
    returns 32 — 5 = 27.

    __builtin_ctz(x)
    //This function returns number of trailing 0-bits of x which starts from least significant bit position. x is unsigned int and
    //like previous function this function with suffix 'l' gets a unsigned long argument and with suffix 'll' gets a unsigned long
    //long argument. If x == 0, returns an undefined value.
    e.g. __builtin_ctz(16) = 4 because 16 is '...1 0000 '. Number of trailing 0-bits is 4.

    __builtin_popcount(x)
    //This function returns number of 1-bits of x. x is unsigned int and like previous function this function with suffix 'l' gets
    //a unsigned long argument and with suffix 'll' gets a unsigned long long argument. If x == 0, returns an undefined value.
    e.g. __builtin_popcount(14) = 3 because 14 is '... 111 0' and has three 1-bits.

    __builtin_parity(x)
    //This function returns 1 if number of 1-bits of x is odd, otherwise returns 0. x is unsigned int and like previous function

    binary_search(arr, arr + n, key)
    // This function returns true if key is present in arr[0..n-1]. Else it returns false.It is a built-in function for binary search in C++.

    lower_bound(arr, arr + n, key)
    // This function returns an iterator pointing to the first element in the range [first,last) which has a value not less than ‘val’.

    upper_bound(arr, arr + n, key)
    // This function returns an iterator pointing to the first element in the range [first,last) which has a value greater than ‘val’.

    next_permutation(arr, arr + n)
    // This function returns true if the next permutation of the sequence is possible. Else it returns false. It is a built-in function for next permutation in C++.

    prev_permutation(arr, arr + n)
    // This function returns true if the previous permutation of the sequence is possible. Else it returns false. It is a built-in function for previous permutation in C++.


```
