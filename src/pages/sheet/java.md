---
layout: ../../layouts/BlogLayout.astro
title: "Java Cheatsheet"
---

## Data Types

| Data Type | Size   |
| --------- | ------ |
| boolean   | 1 bit  |
| char      | 2 byte |
| int       | 4 byte |
| short     | 2 byte |
| long      | 8 byte |
| float     | 4 byte |
| double    | 8 byte |

**[🔼Back to Top](#table-of-contents)**

## I/O Methods

### Output Methods

```java
	system.out.print("Hello World!"); // Will not move to the next line.
	system.out.println("Hello World!"); // Will move to the next line.
	
	// There is another type of output method, which is similar to C language.
	int a = 23;
	system.out.printf("value of a is : %d", a);
```

### Input Methods

```java
	import java.util.Scanner
	Scanner s = new Scanner(System.in);
	
	// input for an integer.
	int a = s.nextInt();
	
	// input for a string.
	String str = s.nextLine();
	String ss  = s.next();   // Takes input till 1st whitespace.
	
	// input for a double.
	double d = s.nextDouble();
```
**[🔼Back to Top](#table-of-contents)**

## Data Conversion

### String to Number

```java
        int i = Intege­r.p­ars­eInt(_str_);
 	double d = Double.pa­rse­Double(_str_);
```

### Any Type to String

```java
 	String s = String.va­lueOf(_value_);

```

### Numeric Conver­sions

```java
 	int i = (int) _numeric expression_;
        double i = (double) _numeric expression_;
        long i = (long) _numeric expression_;
```

**[🔼Back to Top](#table-of-contents)**

## Operators

| Operator Category                | Operators                                          |
| -------------------------------- | -------------------------------------------------- |
| Arithmetic operators             | +, -, /, \*, %                                     |
| Relational operators             | <, >, <=, >=,==, !=                                |
| Logical operators                | &&, \|\|                                           |
| Assignment operator              | =, +=, −=, ×=, ÷=, %=, &=, ^=, \|=, <<=, >>=, >>>= |
| Increment and Decrement operator | ++ , - -                                           |
| Conditional operators            | ?, :                                               |
| Bitwise operators                | ^, &, \|                                           |
| Special operators                | . (dot operator to access methods of class)        |

**[🔼Back to Top](#table-of-contents)**

## Statements

### If Statement

```java
if ( _expression_ ) {
­ _statements_
} else if ( _expression_ ) {
­ _statements_
} else {
­ _statements_
}
```

### While Loop

```java
while ( _expression_ ) {
­ _statements_
}
```

### Do-While Loop

```java
do {
­ _statements_
} while ( _expression_ );
```

### For Loop

```java
for ( int i = 0; i < _max_; ++i) {
­ _statements_
}
```

### For Each Loop

```java
for ( _var_ : _collection_ ) {
­ _statements_
}
```

### Switch Statement

```java
switch ( _expression_ ) {
­ case _value_:
­ ­ ­ _statements_
­ ­ ­ ­break;
­ case _value2_:
­ ­ ­ _statements_
­ ­ ­ ­break;
­ ­def­ault:
­ ­ ­ _statements_
}
```

### Exception Handling

```java
try {
­ ­sta­tem­ents;
} catch (_Except­ionType_  _e1_) {
­ ­sta­tem­ents;
} catch (Exception _e2_) {
­ ­cat­ch-all statem­ents;
} finally {
­ ­sta­tem­ents;
}
```

**[🔼Back to Top](#table-of-contents)**
## Arrays

### Initialisation
#### For 1-D array
```java
// datatype array_name[] = new datatype[Size];
int number[] = new int[10];           // An Integer Array
String characters[] = new String[10]; // A String array
int[] number = new int[]{ 1,2,3,4,5,6,7,8,9,10 }; 
```
#### For 2-D array
```java
// datatype array_name[][] = new datatype[row][column];
int number[][] = new int[10][10];            // An Integer Array of dimensions 10 x 10
String characters[][] = new String[10][10];  // A String Array of dimensions 10 x 10
```

### Traversal
```java
// Traditional for loop
for(int i=0;i<number.length;i++) // .length gives the size of the array
{ 
System.out.println(number[i]);
}
// Advanced for loop
for(int i:number)  
{
System.out.println(i);  
}
```

**[🔼Back to Top](#table-of-contents)**


## Strings
#### "In Java, a string is basically an object that represents sequence of char values. An array of characters works same as Java string." : Javatpoint

### Ways to Initialise a string

### Using String Literal
```java
String s = "INPUT";
// Using the new keyword
String s = new String("INPUT");
// From a given character array
char ch[]={'I','N','P','U','T'};    
String s=new String(ch);   
```
The above mentioned methods creates a string that are immutable, to make strings mutable, we can use StringBuilder or StringBuffer

### Using StringBuffer
##### "The string represents fixed-length, immutable character sequences while StringBuffer represents growable and writable character sequences." : GFG
```java
// Create a StringBuffer Object, i.e., empty string buffer
// By default it can take up to a sequence of 16 characters
StringBuffer sb = new StringBuffer();  
// Can be initialised with a string
StringBuffer sb2 = new StringBuffer("Input");
```
##### 1) append(string_data) method : Used to concatenate the entered string and the strings in the buffer
```java
sb.append("Input");  //Now the empty string has been modified to "Input"
```
##### 2) insert(beginIndex, endIndex, string_data) method : Inserts a given string literal to the specified positions
```java
sb.insert(2," A String");
// Now the string is "In A Stringput"
```

##### 3) replace(beginIndex, endIndex, string_data) method : Use to replace a sequence of characters from the specified beginIndex and endIndex-1, with another sequence
```java
sb.replace(11,14," Literal");  
// Now the string is "In A String Literal"
```

##### 4) delete(beginIndex, endIndex) method : Use to delete a sequence of characters from the specified beginIndex and endIndex-1
```java
sb.delete(11,19);
// Now the string is "In A String"
```
##### 5) reverse() method : Reverses the current string
```java
sb.reverse();
// Now the string is "gnirtS A nI"
```

### Using StringBuilder
##### Very similiar to the StringBuffer class but is not Synchronous and neither Thread-Safe. But high in performance, i.e., speedy
```java
//Create a StringBuilder Object, i.e., StringBuilder with no characters
//By default it can take up to a sequence of 16 characters
StringBuilder sb = new StringBuilder(); 
StringBuilder sb2 = new StringBuffer("Input");
```
##### append(),  insert(), replace(), delete(), reverse() are used in the same way as used in the StringBuffer
##### To convert the objects of either StringBuilder or StringBuffer to string, use : toString()
```java
String str = sb.toString();
System.out.println(str);
```
**[🔼Back to Top](#table-of-contents)**

## Array Methods
### The Arrays class of the java.util package contains several static methods that can be used to fill, sort, search, etc in arrays.

| Methods		                                           | Action Performed                                                                                      |
| ---------                                                | ----------------------------------------------------------------------------------------------------- |
| asList()                                                 | Returns a fixed-size list backed by the specified Arrays                                              |
| binarySearch()	              		           		   | Searches for the specified element in the array                                                       |
| binarySearch(array, fromIndex, toIndex, key, Comparator) | Searches a range of the specified array for the specified object using the Binary Search Algorithm    |
| copyOf(originalArray, newLength)	                       | Copies the specified array, truncating or padding with the default value (if necessary) so the copy has the specified length.                                                                                                                                              |
| copyOfRange(originalArray, fromIndex, endIndex)	       | Copies the specified range of the specified array into a new Arrays.                                  |
| deepEquals(Object[] a1, Object[] a2)                     | Returns true if the two specified arrays are deeply equal to one another.                             |
| deepHashCode(Object[] a)                                 | Returns a hash code based on the “deep contents” of the specified Arrays.                             |
| deepToString(Object[] a)                                 | Returns a string representation of the “deep contents” of the specified Arrays.
equals(array1, array2)	Checks if both the arrays are equal or not.                                                                                                |
| fill(originalArray, fillValue)	                       | Assigns this fill value to each index of this arrays.                                                 |
| hashCode(originalArray)                                  | Returns an integer hashCode of this array instance.                                                   |
| mismatch(array1, array2)                                 | Finds and returns the index of the first unmatched element between the two specified arrays.          |
| parallelPrefix(originalArray, fromIndex, endIndex, functionalOperator)	| Performs parallelPrefix for the given range of the array with the specified functional operator.                                                                                                                                                          |
| parallelPrefix(originalArray, operator)	               | Performs parallelPrefix for complete array with the specified functional operator. 
| parallelSetAll(originalArray, functionalGenerator)	   | Sets all the elements of this array in parallel, using the provided generator function. 
| parallelSort(originalArray)	                           | Sorts the specified array using parallel sort.
| setAll(originalArray, functionalGenerator)	           | Sets all the elements of the specified array using the generator function provided. 
| sort(originalArray)	                                   | Sorts the complete array in ascending order. 
| sort(originalArray, fromIndex, endIndex)	               | Sorts the specified range of array in ascending order.
| sort(T[] a, int fromIndex, int toIndex, Comparator< super T> c)	| Sorts the specified range of the specified array of objects according to the order induced by the specified comparator.
| sort(T[] a, Comparator< super T> c)	                   | Sorts the specified array of objects according to the order induced by the specified comparator.
| spliterator(originalArray)	                           | Returns a Spliterator covering all of the specified Arrays.
| spliterator(originalArray, fromIndex, endIndex) 	       | Returns a Spliterator of the type of the array covering the specified range of the specified arrays.
| stream(originalArray) 	                               | Returns a sequential stream with the specified array as its source.
| toString(originalArray) 	                               | Returns a string representation of the contents of this array. The string representation consists of a list of the array’s elements, enclosed in square brackets (“[]”). Adjacent elements are separated by the characters a comma followed by a space. Elements are converted to strings as by String.valueOf() function.

**[🔼Back to Top](#table-of-contents)**

## String Methods

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| length                     | length of string                   |
| charAt(_i_)                | extract \_i_th character           |
| subst­ring(_start_, _end_) | substring from _start_ to _end_-1  |
| toUpp­erC­ase()            | returns copy of _s_ in ALL CAPS    |
| toLow­erC­ase()            | returns copy of _s_ in lowercase   |
| indexOf(_x_)               | index of first occurence of _x_    |
| replace(_old_, _new_)      | search and replace                 |
| split(_regex_)             | splits string into tokens          |
| trim()                     | trims surrou­nding whitespace      |
| equals(_s2_)               | true if s equals s2                |
| compa­reTo(_s2_)           | 0 if equal/+ if s > s2/- if s < s2 |


## StringTokenizer
#### A class in java that is used to break a string into tokens based on given delimeter(s), by default breaks at whitespaces

### Initialising
```java
// To break the string at whitespaces, use the following code
StringTokenizer st = new StringTokenizer(string_value_or_variable);
// To break the string at multiple delimeters, use the following code
StringTokenizer st = new StringTokenizer(string_value_or_variable, delimiter_string);
```
### Functions available in the StringTokeniser Class

| Command                    | Description                                         |
| -------------------------- | --------------------------------------------------- |
| countTokens()              | Returns the number of tokens present                |
| hasMoreToken()             | Checks if there are more tokens in the string       |
| nextElement()              | Return the object of the next element in the stream |
| hasMoreElements()          | Checks if there are more elements in the string     |
| nextToken()                | Returns the next token from the StringTokenizer.    |


#### Example to break the string at whitespaces
```java
StringTokenizer st = new StringTokenizer("Hy there, how are you? Hoping you are doing great!");
while (st.hasMoreTokens())
{
	System.out.print(st.nextToken() + " ; ");
}
```
#### Output : Hy ; there, ; how ; are ; you? ; Hoping ; you ; are ; doing ; great! ;
The semi colon is used to seperate the tokens

#### Example to break the string at multiple delimeters
```java
// The following scheme can be used to break a punctuated string, into words
StringTokenizer st = new StringTokenizer("Hy there, how are you? Hoping you are doing great!", ":,!? ");
while (st.hasMoreTokens())
{
	System.out.print(st.nextToken() + " ; ");
}
```
#### Output : Hy ; there ; how ; are ; you ; Hoping ; you ; are ; doing ; great ;
The semi colon is used to seperate the tokens

**[🔼Back to Top](#table-of-contents)**

## Collection

### List

| Type       | Declaration                        |
| ---------- | ---------------------------------- |
| ArrayList  | List<E> arr = new ArrayList<E>();  |
| LinkedList | List<E> arr = new LinkedList<E>(); |
     

### Set

| Type          | Declaration                       |
| ------------- | --------------------------------- |
| HashSet       | Set<E> set = new HashSet<E>();    |
| TreeSet       | Set<E> set = new TreeSet<E>();    |
| LinkedHashSet | Set<E> set = new LinkedHashSet(); |
     
### Operations on List and Set
     
| Method     | Description                               | Declaration               |
| ---------- | ----------------------------------------- | ------------------------- |
| add        | To add an element into the list           | arr.add(element)          |
| remove     | To remove an element into the list        | arr.remove(element)       |
| get        | To get an element at particular index     | arr.get(element)          |
| set        | To set the element at a particular index  | arr.set(index, element)   |
| size       | To get size of the list                   | arr.size()                |
| contains   | To check if the list contains the element | arr.contains(element)     |
| indexOf    | To get the index of the element           | arr.indexOf(element)      |

### Map

| Type          | Declaration                                              |
| ------------- | -------------------------------------------------------- |
| LinkedHashMap | LinkedHashMap<E> linkedHashMap = new LinkedHashMap<E>(); |
| HashMap       | HashMap<E> hashMap = new HashMap<E>();                   |
| TreeMap       | TreeMap<K> treeMap = new TreeMap<E>();                   |

### Queue

| Type          | Declaration                                           |
| ------------- | ----------------------------------------------------- |
| Queue         | Queue<E> queue = new LinkedList();                    |
| PriorityQueue | PriorityQueue<E> priorityQueue = new PriorityQueue(); |
| ArrayDeque    | ArrayDeque<E> arrayDeque = new ArrayDeque();          |

**[🔼Back to Top](#table-of-contents)**
