# Table of Content

- [Data Types](#data-types)
- [Data Conversion](#data-conversion)
- [Operators](#operators)
- [Statements](#statements)
- [String Methods](#string-methods)
- [Collection](#Collection)

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
