---
layout: ../../layouts/CheatSheet.astro
title: "C# Cheatsheet"
---

## Synopsis

C Sharp is a general-purpose, multi-paradigm programming language encompassing strong typing, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines. It was developed around 2000 by Microsoft within its .NET initiative and later approved as a standard by Ecma (ECMA-334) and ISO (ISO/IEC 23270:2018). C# is one of the programming languages designed for the Common Language Infrastructure.

## Data Types

| Data Type | Description                     | Size     |
| --------- | ------------------------------- | -------- |
| bool      | Boolean data type               | 1 bit    |
| byte      | Unsigned integer                | 1 byte   |
| char      | Character                       | 2 bytes  |
| decimal   | Decimal data type               | 16 bytes |
| double    | Double-precision floating point | 8 bytes  |
| float     | Single-precision floating point | 4 bytes  |
| int       | Integer                         | 4 bytes  |
| long      | Long integer                    | 8 bytes  |
| sbyte     | Signed integer                  | 1 byte   |
| short     | Short integer                   | 2 bytes  |
| uint      | Unsigned integer                | 4 bytes  |
| ulong     | Unsigned long integer           | 8 bytes  |
| ushort    | Unsigned short integer          | 2 bytes  |

## Variables

Variables are containers for storing data values.

```csharp
int myNum = 5;               // Integer (whole number)

double myFloatNum = 5.99D;   // Floating point number

char myLetter = 'D';         // Character

string myText = "Hello";     // String

bool myBool = true;          // Boolean
```

## Operators

| Operator | Description    | Example |
| -------- | -------------- | ------- |
| +        | Addition       | x + y   |
| -        | Subtraction    | x - y   |
| \*       | Multiplication | x \* y  |
| /        | Division       | x / y   |
| %        | Modulus        | x % y   |
| ++       | Increment      | ++x     |
| --       | Decrement      | --x     |

## Access Modifiers

C# has 4 basic types of access modifiers:
- Public
- Private
- Protected
- Internal

C# also has 2 more advanced types of access modifiers, here are all of their access levels:

| Caller's location                      | public | protected internal | protected | internal | private protected | private |
| -------------------------------------- | -------- | -------------------- | ----------- | ---------- | ------------------- | --------- |
| Within the class                       | ✅      | ✅                   | ✅          | ✅         | ✅                  | ✅        |
| Derived class (same assembly)          | ✅       | ✅                   | ✅          | ✅         | ✅                  | ❌         |
| Non-derived class (same assembly)      | ✅       | ✅                   | ❌           | ✅         | ❌                   | ❌         |
| Derived class (different assembly)     | ✅       | ✅                   | ✅          | ❌          | ❌                   | ❌         |
| Non-derived class (different assembly) | ✅       | ❌                    | ❌           | ❌          | ❌                   | ❌         |

## Loops

### For Loop

```csharp
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
```

### While Loop

```csharp
while (condition) {
  // code block to be executed
}
```

### Do While Loop

```csharp
do {
  // code block to be executed
}
while (condition);
```

### For Each Loop

```csharp
foreach (type variableName in arrayName) {
  // code block to be executed
}
```

### Break
When you use break, the loop will stop executing, and the program will continue to execute the code after the loop.

```csharp
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    break;
  }
  Console.WriteLine(i); // 0 1 2 3
}
```

### Continue
When you use continue, the loop will stop the current iteration, and continue with the next.

```csharp
for (int i = 0; i < 10; i++) {
  if (i == 4) {
    continue;
  }
  Console.WriteLine(i); // 0 1 2 3 5 6 7 8 9
}
```

## Switch

```csharp
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```

## Classes

### Creating a Class

```csharp 
class Car {
  public void Manufacturer(string manf) {
    Console.WriteLine(manf);
  }
}
```

### Accessing a method from a class
You should create an object from the class to access its methods.

```csharp
Car tesla = new Car();
tesla.Manufacturer("Tesla Giga Factory"); 
//console prints out "Tesla Giga Factory"
```

### Accessing a static method from a class
Static methods can be accessed without creating an object.

```csharp
class Car {
  public static void Manufacturer(string manf) {
    Console.WriteLine(manf);
  }
}

Car.Manufacturer("Tesla Giga Factory");
//console prints out "Tesla Giga Factory"
```

## Properties
### Creating a Property
```csharp
class Car {
  public string Model { get; set; }
}
```
### Accessing a Property
```csharp
Car tesla = new Car();
tesla.Model = "Model S"; // sets the value of the property
Console.WriteLine(tesla.Model); //prints out "Model S"
```
### Creating and accessing a Static Property
Static properties can be accessed without creating an object.

```csharp
class Car {
  public static string Model { get; set; }
}

Car.Model = "Model S";
Console.WriteLine(Car.Model); //prints out "Model S"
```

## Enums

Enums are a data type that allows you to define a set of named constants.

### Creating an Enum
The compiler automatically assigns different values to the enum members, starting with 0. You can change the default value by explicitly assigning a value to one of the enum members. 

The enum can be of any numeric data type such as byte, int, long, but cannot be a string type.

```csharp
enum Suits : int
{
    Club,         // 0
    Diamond,      // 1
    Heart = 3,    // 3
    Spade = 5     // 5
}
```


### Accessing an Enum
```csharp
Console.WriteLine(Suits.Club);    //Club
Console.WriteLine(Suits.Diamond); //Diamond
int heart = (int)Suits.Heart;     //3
int spade = (int)Suits.Spade;     //5
```

## Inheritance
### Creating a Base Class
```csharp
class Vehicle {
  public string brand = "Ford";
  public void honk() {
    Console.WriteLine("Tuut, tuut!");
  }
}
```
### Creating a Derived Class

This derived class inherits variables, properties, and methods from it's parent/base class.
```csharp
class Car : Vehicle {
  public string modelName = "Mustang";
}
```
### Accessing the Base Class
```csharp
Car myCar = new Car();
myCar.honk(); // Tuut, tuut!
Console.WriteLine(myCar.brand + " " + myCar.modelName); // Ford Mustang
```

## Exception Handling

To catch exceptions, we use a try-catch block

```csharp
try 
{
    string test = "Hello"
    Console.WriteLine(Convert.ToInt32(test) + 5);
}
catch (Exception ex)
{
    Console.WriteLine(ex.Message);
    //Throws an error since you can't convert "Hello" to a number
}
```

Here's a list of a few common System exceptions: 

|Exception Class|Cause of Exception|
|:----|:----|
|IOException|Handles I/O errors|
|SystemException|A failed run time check; used as a base class for other exceptions|
|AccessException|Failure to access a type member, such as a method or field|
|ArgumentException|An argument to a method was invalid|
|ArgumentNullException|A null argument was passed to a method that does not accept it|
|ArgumentOutOfRangeException|Argument value is out of range|
|ArithmeticException|Arithmetic over or underflow has occurred|
|ArrayTypeMismatchException|Attempt to store the wrong type of object in an array|
|BadImageFormatException|Image is in wrong format|
|CoreException|Base class for exceptions thrown by the runtime|
|DevideByZeroException|An attempt was made to divide by zero|
|FormatException|The format of an argument is wrong|
|IndexOutofRangeException|An Array index is out of range|
|InvalidCastException|An attempt was made to cast to an invalid class|
|InvalidOperationException|A method was called at an invalid time|
|MissingmemberException|An invalid version of a DLL was accessed|
|NotFiniteException|A number is not valid|
|NotSupportedException|Indicates that a method is not implemented by a class|
|NullReferenceException|Attempt to use an unassigned reference|
|OutofmemoryException|Not enough memory to continue execution|
|StackOverFlowException|A Stack has overflowed|

### Custom Exceptions

```csharp
private static void ValidateStudent(Student std)
{
    Regex regexOnlyLetters = new Regex("^[a-zA-Z]+$");

    if (!regex.IsMatch(std.StudentName))
          throw new InvalidStudentNameException(std.StudentName);
    // catch (InvalidStudentNameException ex) to catch our custom exception    
}
```    