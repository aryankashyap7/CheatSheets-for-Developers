---
layout: ../../layouts/CheatSheet.astro
title: "Kotlin Cheatsheet"
---

## Synopsis

Kotlin is a statically typed programming language that runs on the Java Virtual Machine and also can be compiled to JavaScript source code or use the LLVM compiler infrastructure. It is developed by JetBrains.

## Basic

- You do not need ; to break statements since it is an interpreted language
- The keyword void common in Java or C# is called Unit in Kotlin
- Unlike Java or C#, you declare the type of a variable after the name, e.g. var firstName : String

## Variables

- There are two keywords for variable declaration, var and val
- var : var is like a general variable and can be assigned multiple times and is known as the mutable variable in Kotlin
- val : val is a constant variable and can not be assigned multiple times and can be Initialized only a single time and is known as the immutable variable in Kotlin

## Print

```kotlin
fun main() {
  println("Hello World")
}
```

## Strings

```kotlin
fun main(args : Array<String>) {
    val name = "Adam"
    val helloName = "Hello, $name"
    val upercaseName = "Hello".uppercase()
}
```

## Booleans

```kotlin
val trueBoolean = true
val falseBoolean = false
val andCondition = trueBoolean && falseBoolean
val orCondition = trueBoolean || falseBoolean
```

## Floats

```kotlin
val intNumber = 10
val doubleNumber = 10.0
val longNumbe = 10L
val floatNum = 10.0F
```

## If Else

Kotlin supports the usual logical conditions from mathematics:

- Less than: a < b
- Less than or equal to: a <= b
- Greater than: a > b
- Greater than or equal to: a >= b
- Equal to a == b
- Not Equal to: a != b

Kotlin has the following conditionals:

- Use if to specify a block of code to be executed, if a specified condition is true
- Use else to specify a block of code to be executed, if the same condition is false
- Use else if to specify a new condition to test, if the first condition is false
- Use when to specify many alternative blocks of code to be executed

```kotlin
val time = 20
if (time < 18) {
  println("Hello")
} else {
  println("Bye")
}
//output - "Bye"
```
## For loop

```kotlin
for (i in 0..5 step 1) 
    {
        print("$i ")
    }
//Will print i from 0 t0 4 (i<5)
```
    
## While Loop

The while loop loops through a block of code as long as a specified condition is true

```kotlin
var i = 0
while (i < 5) {
  println(i)
  i++
}
//Will print i from 0 t0 4 (i<5)
```
## Do While Loop

The do while loop loops through a block of code atleast once even when the condition is not true
```kotlin
var i = 0
do {
  println(i)
  i++
}while (i < 5)
//Will print i from 0 t0 4 (i<5)
```
## Classes

Classes in Kotlin are declared using the keyword class
`class Student{ /*...*/ }`

#### Primary Constructor

```kotlin
class Student(val name: String, val age: Int)
val student1 = Student("Peter", 11)
```

#### Secondary Constructor

```kotlin
class Student(val name: String) {
    private var age: Int? = null
    constructor(name: String, age: Int) : this(name) {
        this.age = age
    }
}
// Above can be replaced with default params
class Student(val name: String, val age: Int? = null)
```

#### Enum Class

```kotlin
enum class Color(val rgb: Int) {
    RED(0xFF0000),
    GREEN(0x00FF00),
    BLUE(0x0000FF)
}
```

#### Data Class

```kotlin
data class Student(val name: String, val age: Int)
```

## Functions

Kotlin functions are declared using the **fun** keyword

```kotlin
fun printStudentName() {
    print("Richa")
}
```

#### Parameters & Return Types

```kotlin
fun printStudentName(student: Student) {
    print(student.name)
}
```

#### Default Parameters

```kotlin
fun getStudentName(student: Student, intro: String = "Hello,") {
    return "$intro ${student.name}"
}
```

## Collections

A collection is a group of related items
| Collections | Syntax |
| ----------- | -------------------------------------------------------------------------- |
| List | val numbers = listOf("one", "two", "three", "four") |
| Set | val numbers = setOf(1, 2, 3, 4) |
| Map | val numbersMap = mapOf("key1" to 1, "key2" to 2, "key3" to 3, "key4" to 1) |
