# C++ Basic for Developers

## Table of Contents

- [Cpp Basic CheatSheet for Developers](#cpp-basic-cheatsheet-for-developers)
  - [Synopsis](#synopsis)
  - [Structure of a C++ Program](#structure-of-a-c-program)
    - [Header Files](#header-files)
    - [Namespace](#namespace)
    - [Keywords](#keywords)
    - [Operators](#operators)
    - [Comments](#comments)
    - [Data Types](#data-types)
      - [Primitive Data Types](#primitive-data-types)
      - [Derived Data Types](#derived-data-types)
      - [Modifiers](#modifiers)
    - [Variables](#variables)
    - [Constants](#constants)
  - [Input and Output](#input-and-output)
  - [Functions](#functions)
  - [Conditional Statements](#conditional-statements)
  - [Control Statements](#control-statements)
  - [Data Structures](#data-structures)
    - [Arrays](#arrays)
    - [Vectors](#vectors)
    - [Strings](#strings)
    - [Linked Lists](#linked-lists)
    - [Stacks](#stacks)
    - [Queues](#queues)
    - [Trees](#trees)
    - [Graphs](#graphs)
    - [Hash Tables](#hash-tables)
  - [Structures](#structures)
  - [Classes](#classes)
    - [Inheritance](#inheritance)
    - [Polymorphism](#polymorphism)
    - [Encapsulation](#encapsulation)
    - [Abstraction](#abstraction)
    - [Constructor](#constructor)
    - [Destructor](#destructor)
  - [Enumerations](#enumerations)
  - [Unions](#unions)
  - [Pointers](#pointers)
  - [Dynamic Memory Allocation](#dynamic-memory-allocation)
  - [Templates](#templates)
  - [Exception Handling](#exception-handling)
  - [File Handling](#file-handling)
  - [Multithreading](#multithreading)
  - [Web Programming](#web-programming)


## Synopsis

C++ is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation. It was designed with a bias toward system programming and embedded, resource-constrained and large systems, with performance, efficiency and flexibility of use as its design highlights.

Designed by Bjarne Stroustrup starting in 1979 at Bell Labs, C++ runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. The language has been extended and improved after the original C++11 standard was released in 2011; C++14 was released in 2014 with C++17 in 2017. The latest standard is now C++20.

Its main features are:

- Object-oriented programming
- Generic programming
- Procedural programming
- Functional programming
- Low-level memory manipulation
- Automatic memory management
- Fast compilation
- Extensive standard library
- Extensive toolset
- Support for multi-paradigm programming

**[🔼Back to Top](#table-of-contents)**


## Structure of a C++ Program

A C++ program is a collection of objects that communicate via invoking each other's methods. The main() method is the starting point of a C++ program.

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}
```

### Header Files

Header files are used to include the definitions of functions, classes, etc. that are used in the program. Header files are included using the #include preprocessor directive.

```cpp
#include <iostream>
```
**[🔼Back to Top](#table-of-contents)**


### Namespace

A namespace is a declarative region that provides a scope to the identifiers (the names of types, functions, variables, etc) inside it. Namespaces are used to organize code into logical groups and to prevent name collisions that can occur especially when your code base includes multiple libraries. Namespaces are also used in C++ to implement packages, which are a grouping of related classes, functions, variables, and other components.

```cpp
using namespace std;
```
**[🔼Back to Top](#table-of-contents)**


### Keywords

Keywords are the reserved words in C++ that have a predefined meaning and cannot be used for any other purpose. They are used to define the syntax and structure of the C++ language.

```cpp
auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while
```

**[🔼Back to Top](#table-of-contents)**


### Operators

Operators are special symbols in C++ that carry out arithmetic or logical computations. The value that the operator operates on is called the operand.

```cpp
+, -, *, /, %, ++, --, =, +=, -=, *=, /=, %=, ==, !=, >, <, >=, <=, &&, ||, !
```

**[🔼Back to Top](#table-of-contents)**


### Comments

Comments are used to explain C++ code, and to make it more readable. Comments are ignored by compilers and are not executed.

```cpp
// This is a single-line comment

/*
This is a
multi-line comment
*/
```

**[🔼Back to Top](#table-of-contents)**


### Data Types

Data types specify the different sizes and values that can be stored in the variable. C++ is a strongly typed language, and as such, every variable has a specific type, which cannot be changed once declared. The variable type must be declared before using the variable name.

**[🔼Back to Top](#table-of-contents)**


#### Primitive Data Types

Primitive data types are the basic types of data in C++. They are the building blocks of data abstraction. This includes the fundamental arithmetic types, such as int, float, and double, and the void type.

```cpp
int, float, double, char, bool, void
```

#### Derived Data Types

Derived data types are formed by using one or more primitive types. They include arrays, pointers, references, and functions.

```cpp
array, pointer, reference, function
```

|Data Type|Ranges|Description|
|---|---|---|
|char|1 byte|-128 to 127 or 0 to 255|
|unsigned char|1 byte|0 to 255|
|signed char|1 byte|-128 to 127|
|int|2 or 4 bytes|-32,768 to 32,767 or -2,147,483,648 to 2,147,483,647|
|unsigned int|2 or 4 bytes|0 to 65,535 or 0 to 4,294,967,295|
|short int|2 bytes|-32,768 to 32,767|
|unsigned short int|2 bytes|0 to 65,535|
|long int|4 bytes|-2,147,483,648 to 2,147,483,647|
|unsigned long int|4 bytes|0 to 4,294,967,295|
|float|4 bytes|1.2E-38 to 3.4E+38|
|double|8 bytes|2.3E-308 to 1.7E+308|
|long double|10 bytes|3.4E-4932 to 1.1E+4932|
|bool|1 byte|true or false|


**[🔼Back to Top](#table-of-contents)**

### Variables

Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.

```cpp
int a = 10;
```
**[🔼Back to Top](#table-of-contents)**


### Constants

Constants are fixed values that the program may not alter during its execution. Constants are useful for giving names to numbers, so that a program is easier to read and maintain. Constants can be declared with the const keyword.

```cpp
const int a = 10;
```

**[🔼Back to Top](#table-of-contents)**


## Input and Output

### Input

The C++ language provides several ways to get input from the user. The most common way is to use the cin object together with the extraction operator (>>).

```cpp
int a;
cin >> a;
```

**[🔼Back to Top](#table-of-contents)**


### Output

The C++ language provides several ways to produce output. The most common way is to use the cout object together with the insertion operator (<<).

```cpp
cout << "Hello World!";
```

**[🔼Back to Top](#table-of-contents)**


## Functions

A function is a group of statements that together perform a task. Every C++ program has at least one function, which is main(), and all the most trivial programs can define additional functions.

```cpp
int add(int a, int b) {
    return a + b;
}
```

**[🔼Back to Top](#table-of-contents)**

## Conditional Statements

Conditional statements are used to perform different actions based on different conditions.

```cpp
if (a > b) {
    cout << "a is greater than b";
} else if (a < b) {
    cout << "a is less than b";
} else {
    cout << "a is equal to b";
}
```

**[🔼Back to Top](#table-of-contents)**

## Control Statements

The control statements are used to control the flow of execution of the program. The control statements are used to change the execution sequence of the program.

```cpp

// while loop
while (a < 10) {
    cout << a << endl;
    a++;
}

// do while loop
do {
    cout << a << endl;
    a++;
} while (a < 10);

// for loop
for (int i = 0; i < 10; i++) {
    cout << i << endl;
}

// break statement
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    cout << i << endl;
}

// continue statement
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        continue;
    }
    cout << i << endl;
}

// goto statement
int a = 10;
int b = 20;

if (a == 10) {
    goto jump;
}

jump:
cout << "a is 10";
```

**[🔼Back to Top](#table-of-contents)**

## Data Structures

Data structures are used to store collections of data, for example, an array can store a list of items. C++ provides several built-in data structures that you can use in your programs.

**[🔼Back to Top](#table-of-contents)**

### Arrays

An array is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.

```cpp
int a[5] = {1, 2, 3, 4, 5};
```

**[🔼Back to Top](#table-of-contents)**

### Vectors

Vectors are sequence containers representing arrays that can change in size.

```cpp
vector<int> a = {1, 2, 3, 4, 5};
```

**[🔼Back to Top](#table-of-contents)**

### Strings

Strings are objects that represent sequences of characters.

```cpp
string a = "Hello World!";
```

**[🔼Back to Top](#table-of-contents)**

### Linked Lists

A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.

```cpp
struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;
```

**[🔼Back to Top](#table-of-contents)**

### Stacks

Stacks are a type of container adaptors with LIFO(Last In First Out) type of working, where a new element is added at one end and (top) an element is removed from that end only.

```cpp
stack<int> a;
```

**[🔼Back to Top](#table-of-contents)**

### Queues

Queues are a type of container adaptors with FIFO(First In First Out) type of working, where a new element is added at the end (back) and an element is removed from the beginning.

```cpp

queue<int> a;
```

**[🔼Back to Top](#table-of-contents)**

### Trees

A tree is a widely used abstract data type (ADT) or data structure implementing this ADT that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.

```cpp
struct Node {
    int data;
    struct Node *left;
    struct Node *right;
};

struct Node *root = NULL;
```

**[🔼Back to Top](#table-of-contents)**

### Graphs

A graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph.

```cpp

struct Node {
    int data;
    struct Node *next;
};

struct Node *head = NULL;
```

**[🔼Back to Top](#table-of-contents)**

### Hash Tables

A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array of buckets or slots, from which the desired value can be found.

```cpp

class HashTable {
    private:
        static const int hashGroups = 10;
        list<pair<int, string>> table[hashGroups];
    public:
        bool isEmpty() const;
        int hashFunction(int key);
        void insertItem(int key, string value);
        void removeItem(int key);
        string searchTable(int key);
        void printTable();
};
```

**[🔼Back to Top](#table-of-contents)**

## Structures

A structure is a user-defined data type in C++ that can be used to group items of possibly different types into a single type.

```cpp

struct Person {
    string name;
    int age;
    float salary;
};
```

**[🔼Back to Top](#table-of-contents)**

## Classes

A class is a user-defined data type in C++ that can be used to group items of possibly different types into a single type.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};
```

### Inheritance

Inheritance is a way to form new classes using classes that have already been defined. The newly formed classes are called derived classes, the classes that we derive from are called base classes.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};

class Student : public Person {
    private:
        int studentId;
    public:
        void setStudentId(int studentId);
        int getStudentId();
};
```

**[🔼Back to Top](#table-of-contents)**

### Polymorphism

Polymorphism is the ability of a message to be displayed in more than one form.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};

class Student : public Person {
    private:
        int studentId;
    public:
        void setStudentId(int studentId);
        int getStudentId();
};

class Teacher : public Person {
    private:
        int teacherId;
    public:
        void setTeacherId(int teacherId);
        int getTeacherId();
};
```

**[🔼Back to Top](#table-of-contents)**

### Encapsulation

Encapsulation is the mechanism that binds together code and the data it manipulates, and keeps both safe from outside interference and misuse.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};
```

**[🔼Back to Top](#table-of-contents)**

### Abstraction

Abstraction is the process of hiding the implementation details and showing only functionality to the user.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};
```

**[🔼Back to Top](#table-of-contents)**

### Constructors

A constructor is a special member function of a class that is executed whenever we create new objects of that class.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        Person(string name, int age, float salary);
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};
```

**[🔼Back to Top](#table-of-contents)**

### Destructors

A destructor is a special member function of a class that is executed whenever an object of it’s class goes out of scope or whenever the delete expression is applied to a pointer to the object of that class.

```cpp
class Person {
    private:
        string name;
        int age;
        float salary;
    public:
        Person(string name, int age, float salary);
        ~Person();
        void setName(string name);
        string getName();
        void setAge(int age);
        int getAge();
        void setSalary(float salary);
        float getSalary();
};
```

**[🔼Back to Top](#table-of-contents)**

## Enumerations

An enumeration is a user-defined data type in C++ which consists of integral constants that can be used to assign names to the integral constants.

```cpp
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
};
```

**[🔼Back to Top](#table-of-contents)**

## Unions

A union is a special data type available in C that allows to store different data types in the same memory location. You can define a union with many members, but only one member can contain a value at any given time. Unions provide an efficient way of using the same memory location for multiple-purpose.

```cpp
union Data {
    int i;
    float f;
    char str[20];
};
```

**[🔼Back to Top](#table-of-contents)**

## Pointers

A pointer is a variable whose value is the address of another variable, i.e., direct address of the memory location. Like any variable or constant, you must declare a pointer before using it to store any variable address. The general form of a pointer variable declaration is:

```cpp
int a = 10;
int *p;
p = &a;

cout << "Address of a variable: " << &a << endl;
cout << "Address stored in p variable: " << p << endl;
cout << "Value of *p variable: " << *p << endl;
```

```cpp
Output:
Address of a variable: 0x7ffeeb2a5f0c
Address stored in p variable: 0x7ffeeb2a5f0c
Value of *p variable: 10
```

**[🔼Back to Top](#table-of-contents)**

## Dynamic Memory Allocation

Dynamic memory allocation is a process by which a program can obtain a run-time storage during the execution of a program. The C++ language supports two types of dynamic memory allocation:

-   **Dynamic memory allocation using new operator**

    ```cpp
    int *p = new int;
    ```
-   **Dynamic memory allocation using malloc()**

    ```cpp
    int *p = (int *)malloc(sizeof(int));
    ```
-   **Dynamic memory allocation using calloc()**

    ```cpp
    int *p = (int *)calloc(5, sizeof(int));
    ```
-   **Dynamic memory allocation using realloc()**

    ```cpp
    int *p = (int *)realloc(p, 10 * sizeof(int));
    ```
-   **Dynamic memory allocation using free()**

    ```cpp
    free(p);
    ```
-   **Dynamic memory allocation using delete operator**

    ```cpp
    delete p;
    ```
-   **Dynamic memory allocation using delete[] operator**

    ```cpp
    delete[] p;
    ```
-   **Dynamic memory allocation using new[] operator**

    ```cpp
    int *p = new int[5];
    ```

**[🔼Back to Top](#table-of-contents)**

## Templates

Templates are used to create generic classes and functions. A template is a blueprint or formula for creating a generic class or function

```cpp
template <class T>
T sum(T a, T b) {
    T result;
    result = a + b;
    return result;
}
```

**[🔼Back to Top](#table-of-contents)**

## Exception Handling

Exception handling is a process of responding to the occurrence, during computation, of exceptions – anomalous or exceptional conditions requiring special processing – often changing the normal flow of program execution.

```cpp
try {
    // code that might throw an exception
} catch (ExceptionType1 e1) {
    // code to handle ExceptionType1
} catch (ExceptionType2 e2) {
    // code to handle ExceptionType2
} catch (ExceptionType3 e3) {
    // code to handle ExceptionType3
} catch (...) {
    // code to handle any exception
}
```

```cpp

// Example of exception handling

#include <iostream>
using namespace std;

int main() {
    int x = -1;

    // some code
    cout << "Before try \n";
    try {
        cout << "Inside try \n";
        if (x < 0) {
            throw x;
            cout << "After throw (Never executed) \n";
        }
    } catch (int x) {
        cout << "Exception Caught \n";
    }

    cout << "After catch (Will be executed) \n";
    return 0;
}
```

```cpp
Output:
Before try
Inside try
Exception Caught
After catch (Will be executed)
```

**[🔼Back to Top](#table-of-contents)**

## File Handling

File handling is a process of reading and writing data from and to a file. C++ provides a set of classes and functions to perform file handling.

```cpp
#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream outfile;
    outfile.open("afile.dat");

    cout << "Writing to the file" << endl;
    cout << "Enter your name: ";
    string name;
    cin >> name;

    // write inputted data into the file.
    outfile << name << endl;

    cout << "Enter your age: ";
    int age;
    cin >> age;

    // again write inputted data into the file.
    outfile << age << endl;

    // close the opened file.
    outfile.close();

    // open a file in read mode.
    ifstream infile;
    infile.open("afile.dat");

    cout << "Reading from the file" << endl;
    infile >> name;

    // write the data at the screen.
    cout << name << endl;

    // again read the data from the file and display it.
    infile >> age;
    cout << age << endl;

    // close the opened file.
    infile.close();

    return 0;
}
```

```cpp
Output:
Writing to the file
Enter your name: John
Enter your age: 25
Reading from the file
John
25
```

| **Function** | **Description** |
| --- | --- |
| `open()` | This function is used to open a file. |
| `close()` | This function is used to close a file. |
| `eof()` | This function is used to check whether the end of file has been reached. |
| `fail()` | This function is used to check whether a file operation has failed. |
| `get()` | This function is used to read a character from a file. |
| `getline()` | This function is used to read a line from a file. |
| `put()` | This function is used to write a character to a file. |
| `read()` | This function is used to read data from a file. |
| `write()` | This function is used to write data to a file. |

**[🔼Back to Top](#table-of-contents)**

## Multithreading

Multithreading is a process of executing multiple threads simultaneously within a process. A thread is a light-weight process. It is a separate flow of control within a process.

```cpp
#include <iostream>
#include <thread>
using namespace std;

void thread_function() {
    for (int i = 0; i < 10000; i++) {
        cout << "thread function Executing" << endl;
    }
}

int main() {
    thread t(&thread_function);
    for (int i = 0; i < 10000; i++) {
        cout << "Display From MainThread" << endl;
    }
    t.join();
    return 0;
}
```

**[🔼Back to Top](#table-of-contents)**

## Web Programming

Web programming is a process of developing web applications using programming languages. C++ is used to develop web applications.

```cpp
#include <iostream>
#include <string>
#include <cppcms/application.h>
#include <cppcms/applications_pool.h>
#include <cppcms/service.h>
#include <cppcms/http_response.h>
using namespace std;
using namespace cppcms;
using namespace cppcms::http;

class hello_world : public cppcms::application {
public:
    hello_world(cppcms::service &srv) : cppcms::application(srv) {}
    virtual void main(string url);
};

void hello_world::main(string url) {
    response().out() << "<html><body><h1>Hello, world!</h1></body></html>";
}

int main(int argc, char **argv) {
    try {
        service srv(argc, argv);
        srv.applications_pool().mount(
            cppcms::applications_factory<hello_world>()
        );
        srv.run();
    } catch (std::exception const &e) {
        cerr << e.what() << endl;
    }
    return 0;
}
```

**[🔼Back to Top](#table-of-contents)**

