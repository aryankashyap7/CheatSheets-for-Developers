## Importing Numpy library


```python
import numpy as np
```

### Declaring the arrays of Different datatypes


```python
a = np.array([1,2,3])
b = np.array([(1.5,2,3), (4,5,6)], dtype = float)
c = np.array([[(1.5,2,3), (4,5,6)],[(3,2,1), (4,5,6)]], dtype = float)
print(a.dtype)
print(b.dtype)
```

    int32
    float64
    

### A 3 X 3 matrix containing all 9's in it


```python
f=np.full((3,3),9)
f
```




    array([[9, 9, 9],
           [9, 9, 9],
           [9, 9, 9]])



### Creating an Identity matrix


```python
np.eye(3)
#by default it will take float values
```




    array([[1., 0., 0.],
           [0., 1., 0.],
           [0., 0., 1.]])




```python
np.eye(3,dtype='int')
#here we mention the datatype as int 
```




    array([[1, 0, 0],
           [0, 1, 0],
           [0, 0, 1]])



### Creating an Array of size 3 X 4 which contains all ones in it


```python
np.ones((3,4))
```




    array([[1., 1., 1., 1.],
           [1., 1., 1., 1.],
           [1., 1., 1., 1.]])


### Creating an Identity Array(n x n array with its main diagonal set to one) 

```python
np.identity(3)
```




    array([[1., 0., 0.],
           [0., 1., 0.],
           [0., 0., 1.]])



### Getting element from a certain range


```python
np.arange(2,20)
```




    array([ 2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
           19])



### Getting k number of elements from range a to b


```python
#np.linspace(a,b,k)
np.linspace(4,20,5)
```




    array([ 4.,  8., 12., 16., 20.])



### Getting a random number from 0 to 1


```python
np.random.random()
```




    0.700839016620331



### Basic operations on an Array


```python
A=np.array([3,4,5,6,2,6,6,3,65])
print(A.max())
print(A.min())
print(len(A))
print(A.dtype)
print(A.shape)
A.astype('float')
print(A)
```

    65
    2
    9
    int32
    (9,)
    [ 3  4  5  6  2  6  6  3 65]
    


```python
np.sqrt(A)
```




    array([1.73205081, 2.        , 2.23606798, 2.44948974, 1.41421356,
           2.44948974, 2.44948974, 1.73205081, 8.06225775])




```python
np.sin(A)
```




    array([ 0.14112001, -0.7568025 , -0.95892427, -0.2794155 ,  0.90929743,
           -0.2794155 , -0.2794155 ,  0.14112001,  0.82682868])




```python
np.log(A)
```




    array([1.09861229, 1.38629436, 1.60943791, 1.79175947, 0.69314718,
           1.79175947, 1.79175947, 1.09861229, 4.17438727])




```python
A/4
```




    array([ 0.75,  1.  ,  1.25,  1.5 ,  0.5 ,  1.5 ,  1.5 ,  0.75, 16.25])




```python
A*4
```




    array([ 12,  16,  20,  24,   8,  24,  24,  12, 260])



### Sorting an Array


```python
A.sort()
A
```




    array([ 2,  3,  3,  4,  5,  6,  6,  6, 65])




```python
A[5]
```




    6



### Array slicing


```python
A[0:5]
```




    array([2, 3, 3, 4, 5])



### Reversing an Array


```python
A[::-1]
```




    array([65,  6,  6,  6,  5,  4,  3,  3,  2])



### Changing shape of an array


```python
A=A.reshape(3,3)
A
```




    array([[ 2,  3,  3],
           [ 4,  5,  6],
           [ 6,  6, 65]])



### Transpose of a matrix or an array


```python
A.transpose()
```




    array([[ 2,  4,  6],
           [ 3,  5,  6],
           [ 3,  6, 65]])



### Getting all the diagonal elements of an array


```python
np.diagonal(A)
```




    array([ 2,  5, 65])



### Filling all the diagonal elements of an array with the given number


```python
np.fill_diagonal(A,3)
A
```




    array([[3, 3, 3],
           [4, 3, 6],
           [6, 6, 3]])




```python
np.mod(A,3)
```




    array([[0, 0, 0],
           [1, 0, 0],
           [0, 0, 0]], dtype=int32)



### All the rows of an array are arranged in an order


```python
np.vstack((A,A.transpose()))
```




    array([[3, 3, 3],
           [4, 3, 6],
           [6, 6, 3],
           [3, 4, 6],
           [3, 3, 6],
           [3, 6, 3]])



### All the columns of an array are arranged in an order


```python
np.hstack((A,A.transpose()))
```




    array([[3, 3, 3, 3, 4, 6],
           [4, 3, 6, 3, 3, 6],
           [6, 6, 3, 3, 6, 3]])


