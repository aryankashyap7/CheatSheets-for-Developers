## Table of Contents

- [C for Developers](#c-for-developer)
- [Data Types](#data-types)
- [Operators](#operators)
- [Control Flow](#control-flow)
- [Functions](#functions)
- [Arrays](#arrays)
- [Pointers](#pointers)
- [Structures](#structures)
- [Unions](#unions)
- [Enumerations](#enumerations)
- [Bit Fields](#bit-fields)
- [Typedef](#typedef)
- [Storage Classes](#storage-classes)
- [Preprocessor](#preprocessor)
- [Input/Output](#inputoutput)
- [String](#string)
- [Math](#math)
- [Time](#time)
- [File](#file)

## C for Developers

C is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. It keeps fluctuating at number one scale of popularity along with Java programming language, which is also equally popular and most widely used among modern software programmers.

**[🔼Back to Top](#table-of-contents)**

## Data Types

| Data Type | Description    | Size         |
| :-------- | :------------- | :----------- |
| char      | Character      | 1 byte       |
| int       | Integer        | 2 or 4 bytes |
| float     | Floating point | 4 bytes      |
| double    | Floating point | 8 bytes      |
| void      | Void           | 1 byte       |

**[🔼Back to Top](#table-of-contents)**

## Operators

| Operator | Description    | Example |
| :------- | :------------- | :------ |
| +        | Addition       | a + b   |
| -        | Subtraction    | a - b   |
| \*       | Multiplication | a \* b  |
| /        | Division       | a / b   |
| %        | Modulus        | a % b   |
| ++       | Increment      | a++     |
| --       | Decrement      | a--     |
| =        | Assignment     | a = b   |
| ==       | Equal to       | a == b  |
| !=       | Not equal to   | a != b  |
| >        | Greater than   | a > b   |
| <        | Less than      | a < b   |

**[🔼Back to Top](#table-of-contents)**

## Control Flow

| Statement  | Description                                                                               |
| :--------- | :---------------------------------------------------------------------------------------- |
| if         | Executes a block of code if a condition is true                                           |
| if...else  | Executes a block of code if a condition is true, otherwise executes another block of code |
| switch     | Executes a block of code depending on the value of a variable                             |
| while      | Executes a block of code while a condition is true                                        |
| do...while | Executes a block of code while a condition is true, and then executes the code once more  |

**[🔼Back to Top](#table-of-contents)**

## Functions

| Function | Description                                                       |
| :------- | :---------------------------------------------------------------- |
| printf() | Prints formatted output                                           |
| scanf()  | Reads formatted input                                             |
| strlen() | Returns the length of a string                                    |
| strcpy() | Copies a string                                                   |
| strcat() | Concatenates two strings                                          |
| strcmp() | Compares two strings                                              |
| strrev() | Reverses a string                                                 |
| strlwr() | Converts a string to lowercase                                    |
| strupr() | Converts a string to uppercase                                    |
| getch()  | Reads a character from the keyboard                               |
| getche() | Reads a character from the keyboard and displays it on the screen |
| putch()  | Writes a character to the screen                                  |

**[🔼Back to Top](#table-of-contents)**

## Arrays

| Function                    | Description                                                          |
| :-------------------------- | :------------------------------------------------------------------- |
| int a[10];                  | Declares an array of 10 integers                                     |
| int a[5] = {1, 2, 3, 4, 5}; | Declares an array of 5 integers and initializes it                   |
| int a[] = {1, 2, 3, 4, 5};  | Declares an array of 5 integers and initializes it                   |
| int a[5] = {1, 2, 3};       | Declares an array of 5 integers and initializes the first 3 elements |

**[🔼Back to Top](#table-of-contents)**

## Pointers

| Function        | Description                                                             |
| :-------------- | :---------------------------------------------------------------------- |
| int \*p;        | Declares a pointer to an integer                                        |
| int \*p = &a;   | Declares a pointer to an integer and initializes it to the address of a |
| int \*p = a;    | Declares a pointer to an integer and initializes it to the address of a |
| int \*p = NULL; | Declares a pointer to an integer and initializes it to NULL             |
| \*p = 10;       | Assigns the value 10 to the variable pointed to by p                    |
| p++;            | Increments the pointer p by 1                                           |
| p--;            | Decrements the pointer p by 1                                           |

**[🔼Back to Top](#table-of-contents)**

## Structures

| Function                                                   | Description                                               |
| :--------------------------------------------------------- | :-------------------------------------------------------- |
| struct student { int rollno; char name[20]; };             | Declares a structure named student                        |
| struct student s1;                                         | Declares a variable s1 of type student                    |
| struct student s1 = {1, "John"};                           | Declares a variable s1 of type student and initializes it |
| struct student s1 = {.name = "John", .rollno = 1};         | Declares a variable s1 of type student and initializes it |
| struct student s1; s1.rollno = 1; strcpy(s1.name, "John"); | Declares a variable s1 of type student and initializes it |

**[🔼Back to Top](#table-of-contents)**

## Unions

| Function                                      | Description                                               |
| :-------------------------------------------- | :-------------------------------------------------------- |
| union student { int rollno; char name[20]; }; | Declares a union named student                            |
| union student s1;                             | Declares a variable s1 of type student                    |
| union student s1 = {1};                       | Declares a variable s1 of type student and initializes it |

**[🔼Back to Top](#table-of-contents)**

## Enumerations

| Function                                                                      | Description                                             |
| :---------------------------------------------------------------------------- | :------------------------------------------------------ |
| enum week { Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday }; | Declares an enumeration named week                      |
| enum week day;                                                                | Declares a variable day of type week                    |
| enum week day = Tuesday;                                                      | Declares a variable day of type week and initializes it |

**[🔼Back to Top](#table-of-contents)**

## Bit Fields

| Function                                                                               | Description                              |
| :------------------------------------------------------------------------------------- | :--------------------------------------- |
| struct { unsigned int widthValidated; unsigned int heightValidated; } status1;         | Declares a structure with two bit fields |
| struct { unsigned int widthValidated : 1; unsigned int heightValidated : 1; } status1; | Declares a structure with two bit fields |

**[🔼Back to Top](#table-of-contents)**

## Typedef

| Function                                               | Description                       |
| :----------------------------------------------------- | :-------------------------------- |
| typedef int INTEGER;                                   | Declares a new type named INTEGER |
| typedef struct { int rollno; char name[20]; } STUDENT; | Declares a new type named STUDENT |

**[🔼Back to Top](#table-of-contents)**

## Preprocessor Directives

| Directive | Description                                      |
| :-------- | :----------------------------------------------- |
| #include  | Includes a header file                           |
| #define   | Defines a macro                                  |
| #undef    | Undefines a macro                                |
| #ifdef    | Checks if a macro is defined                     |
| #ifndef   | Checks if a macro is not defined                 |
| #if       | Checks if a condition is true                    |
| #else     | Executes a block of code if a condition is false |
| #elif     | Checks if a condition is true                    |
| #endif    | Ends an if statement                             |
| #error    | Generates an error                               |
| #pragma   | Generates a compiler directive                   |

**[🔼Back to Top](#table-of-contents)**

## Input/Output

| Function  | Description                         |
| :-------- | :---------------------------------- |
| printf()  | Prints formatted output             |
| scanf()   | Reads formatted input               |
| fprintf() | Prints formatted output to a file   |
| fscanf()  | Reads formatted input from a file   |
| sprintf() | Prints formatted output to a string |
| sscanf()  | Reads formatted input from a string |
| puts()    | Prints a string                     |
| gets()    | Reads a string                      |
| putchar() | Prints a character                  |
| getchar() | Reads a character                   |

**[🔼Back to Top](#table-of-contents)**

## String Functions

| Function | Description                    |
| :------- | :----------------------------- |
| strlen() | Returns the length of a string |
| strcpy() | Copies a string                |
| strcat() | Concatenates two strings       |
| strcmp() | Compares two strings           |
| strrev() | Reverses a string              |
| strlwr() | Converts a string to lowercase |

**[🔼Back to Top](#table-of-contents)**

## Math Functions

| Function | Description                                                                   |
| :------- | :---------------------------------------------------------------------------- |
| abs()    | Returns the absolute value of an integer                                      |
| fabs()   | Returns the absolute value of a floating point number                         |
| ceil()   | Returns the smallest integer greater than or equal to a floating point number |
| floor()  | Returns the largest integer less than or equal to a floating point number     |
| sqrt()   | Returns the square root of a number                                           |
| pow()    | Returns the value of a number raised to a power                               |
| exp()    | Returns the value of e raised to a power                                      |

**[🔼Back to Top](#table-of-contents)**

## Time Functions

| Function    | Description                                                              |
| :---------- | :----------------------------------------------------------------------- |
| time()      | Returns the current time                                                 |
| clock()     | Returns the number of clock ticks elapsed since the program was launched |
| difftime()  | Returns the number of seconds between two times                          |
| mktime()    | Converts a time structure to a time value                                |
| asctime()   | Converts a time structure to a string                                    |
| ctime()     | Converts a time value to a string                                        |
| gmtime()    | Converts a time value to a time structure in UTC                         |
| localtime() | Converts a time value to a time structure in the local time zone         |

**[🔼Back to Top](#table-of-contents)**

## File Functions

| Function  | Description                                                                     |
| :-------- | :------------------------------------------------------------------------------ |
| fopen()   | Opens a file                                                                    |
| fclose()  | Closes a file                                                                   |
| fgetc()   | Reads a character from a file                                                   |
| fputc()   | Writes a character to a file                                                    |
| fgets()   | Reads a string from a file                                                      |
| fputs()   | Writes a string to a file                                                       |
| fread()   | Reads data from a file                                                          |
| fwrite()  | Writes data to a file                                                           |
| fseek()   | Sets the position indicator associated with a file                              |
| ftell()   | Returns the current value of the position indicator of a file                   |
| rewind()  | Sets the position indicator associated with a file to the beginning of the file |
| remove()  | Deletes a file                                                                  |
| rename()  | Renames a file                                                                  |
| tmpfile() | Creates a temporary file                                                        |
| tmpnam()  | Generates a temporary file name                                                 |

**[🔼Back to Top](#table-of-contents)**
