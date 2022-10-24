# Numpy Cheat Sheet

## Table of Contents

- [Numpy Cheat Sheet](#numpy-cheat-sheet)
  - [Installation](#installation)
  - [Basic Commands](#basic-commands)
  - [Array](#array)
  - [Array Indexing](#array-indexing)
  - [Array Slicing](#array-slicing)
  - [Array Reshaping](#array-reshaping)
  - [Array Concatenation](#array-concatenation)
  - [Array Splitting](#array-splitting)
  - [Array Copying](#array-copying)
  - [Array Sorting](#array-sorting)
  - [Array Searching](#array-searching)
  - [Array Iterating](#array-iterating)
  - [Array Joining](#array-joining)
  - [Array Stacking](#array-stacking)
  - [Array Splitting](#array-splitting-1)
  - [Array Repeating](#array-repeating)
  - [Array Manipulation](#array-manipulation)
  - [Array Math](#array-math)
  - [Array Statistics](#array-statistics)
  - [Array Random](#array-random)

## Installation

    ```bash
    # Install
    pip install numpy
    ```

**[🔼Back to Top](#table-of-contents)**

## Basic Commands

    ```python
    # Import
    import numpy as np
    ```


    ```python
        # Create array
        np.array([1, 2, 3])
        np.array([[1, 2, 3], [4, 5, 6]])
        np.array([1, 2, 3], ndmin=2)
        np.array([1, 2, 3], dtype=complex)
    ```

## Array

    ```python
    # Create array
    np.array([1, 2, 3])
    np.array([[1, 2, 3], [4, 5, 6]])
    np.array([1, 2, 3], ndmin=2)
    np.array([1, 2, 3], dtype=complex)
    ```

Output:

    ```python
    array([1, 2, 3])
    array([[1, 2, 3],
           [4, 5, 6]])
    array([[1, 2, 3]])
    array([1.+0.j, 2.+0.j, 3.+0.j])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Indexing

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Slicing

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Reshaping

    ```python
    # Create array
    a = np.array([[1, 2, 3], [4, 5, 6]])
    ```

Output:

    ```python
    array([[1, 2, 3],
           [4, 5, 6]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Concatenation

    ```python
    # Create array
    a = np.array([[1, 2], [3, 4]])
    b = np.array([[5, 6], [7, 8]])
    ```

Output:

    ```python
    array([[1, 2],
           [3, 4]])
    array([[5, 6],
           [7, 8]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Splitting

    ```python
    # Create array
    a = np.array([[1, 2, 3], [4, 5, 6]])
    ```

Output:

    ```python
    array([[1, 2, 3],
           [4, 5, 6]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Copying

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Sorting

    ```python
    # Create array
    a = np.array([[1, 4], [3, 1]])
    ```

Output:

    ```python
    array([[1, 4],
           [3, 1]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Searching

    ```python
    # Create array
    a = np.array([1, 2, 3, 2, 3, 4, 3, 4, 5, 6])
    ```

Output:

    ```python
    array([1, 2, 3, 2, 3, 4, 3, 4, 5, 6])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Iterating

    ```python
    # Create array
    a = np.arange(0, 60, 5)
    a = a.reshape(3, 4)
    ```

Output:

    ```python
    array([[ 0,  5, 10, 15],
           [20, 25, 30, 35],
           [40, 45, 50, 55]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Joining

    ```python
    # Create array
    a = np.array([[1, 2], [3, 4]])
    b = np.array([[5, 6], [7, 8]])
    ```

Output:

    ```python
    array([[1, 2],
           [3, 4]])
    array([[5, 6],
           [7, 8]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Stacking

    ```python
    # Create array
    a = np.array([[1, 2], [3, 4]])
    b = np.array([[5, 6], [7, 8]])
    ```

Output:

    ```python
    array([[1, 2],
           [3, 4]])
    array([[5, 6],
           [7, 8]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Splitting

    ```python
    # Create array
    a = np.arange(9)
    ```

Output:

    ```python
    array([0, 1, 2, 3, 4, 5, 6, 7, 8])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Repeating

    ```python
    # Create array
    a = np.array([1, 2, 3])
    ```

Output:

    ```python
    array([1, 2, 3])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Manipulation

    ```python
    # Create array
    a = np.array([[1, 2, 3], [4, 5, 6]])
    ```

Output:

    ```python
    array([[1, 2, 3],
           [4, 5, 6]])
    ```

**[🔼Back to Top](#table-of-contents)**

## Array Math

        ```python
        # Create array
        a = np.array([1, 2, 3, 4])
        b = np.array([4, 3, 2, 1])
        ```
    Output:

        ```python
        array([1, 2, 3, 4])
        array([4, 3, 2, 1])
        ```
    **[🔼Back to Top](#table-of-contents)**

## Array Statistics

    ```python
    # Create array
    a = np.array([[3, 7, 5], [8, 4, 3], [2, 4, 9]])
    ```

Output:

    ```python
    array([[3, 7, 5],
           [8, 4, 3],
           [2, 4, 9]])
    ```

**[🔼Back to Top](#table-of-contents)**
