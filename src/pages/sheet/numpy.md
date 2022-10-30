---
layout: ../../layouts/CheatSheet.astro
title: "Numpy Cheatsheet"
---

## Synopsis

Numpy is the fundamental package for scientific computing with Python. It is a Python library that provides a multidimensional array object, various derived objects (such as masked arrays and matrices), and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, random simulation and much more.

## Installation

    ```bash
    # Install
    pip install numpy
    ```

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

## Array Indexing

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

## Array Slicing

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5, 6, 7, 8, 9])
    ```

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

## Array Copying

    ```python
    # Create array
    a = np.array([1, 2, 3, 4, 5])
    ```

Output:

    ```python
    array([1, 2, 3, 4, 5])
    ```

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

## Array Searching

    ```python
    # Create array
    a = np.array([1, 2, 3, 2, 3, 4, 3, 4, 5, 6])
    ```

Output:

    ```python
    array([1, 2, 3, 2, 3, 4, 3, 4, 5, 6])
    ```

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

## Array Splitting

    ```python
    # Create array
    a = np.arange(9)
    ```

Output:

    ```python
    array([0, 1, 2, 3, 4, 5, 6, 7, 8])
    ```

## Array Repeating

    ```python
    # Create array
    a = np.array([1, 2, 3])
    ```

Output:

    ```python
    array([1, 2, 3])
    ```

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
