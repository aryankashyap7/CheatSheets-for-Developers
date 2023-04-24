---
layout: ../../layouts/CheatSheet.astro
title: "Competitive Programming Python Cheatsheet"
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

## standard-python-templates

### standard libraries to import 

```python
from math import sqrt, ceil, floor
from time import time 
from itertools import count, combinations 
from functools import reduce
```

### template-for-gcd

```python
def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a%b)

```

### sieve-of-eratosthenes

```python
def SieveOfEratosthenes(n):

    nums = {}
    for i in range(2, n+1):
        nums[i] = 1

    for i in nums:
        if nums[i] == 1:
            k = 2
            m = k*i
            while m <= n:
                k+=1
                nums[m] = 0
                m = k*i

    ans = []
    for k in nums:
        if nums[k] == 1:
            ans.append(k)
    
    return ans
```

### prime-factorization

```python
def PrimeFact(n):
    factors = {}
    for i in range(2, int(sqrt(n)) + 1):
        c = 0
        while n % i == 0:
            n//=i
            c+=1
            factors[i] = c
    if n > 1:
        factors[n] = 1
    return factors
```
