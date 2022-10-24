# PHP Cheatsheet for Developers

## Table of Contents

- [PHP Cheatsheet for Developers](#php-cheatsheet-for-developers)
  - [Php Variables](#php-variables)
  - [Php Data Types](#php-data-types)
  - [Php Functions](#php-functions)

## Php Variables

```php
<?php
// Variable
$var = "Hello World";
echo $var;
?>
```

**[🔼Back to Top](#table-of-contents)**

## Php Operators

```php
<?php
// Arithmetic Operators
$x = 10;
$y = 6;
echo $x + $y; // 16
echo $x - $y; // 4
echo $x * $y; // 60
echo $x / $y; // 1.6666666666667
echo $x % $y; // 4

// Assignment Operators
$x = 10;
$y = 20;
$x += $y; // $x = $x + $y
$x -= $y; // $x = $x - $y
$x *= $y; // $x = $x * $y
$x /= $y; // $x = $x / $y
$x %= $y; // $x = $x % $y

// Comparison Operators
$x = 100;
$y = "100";
var_dump($x == $y); // returns true because values are equal
var_dump($x === $y); // returns false because types are not equal
var_dump($x != $y); // returns false because values are equal
var_dump($x <> $y); // returns false because values are equal
var_dump($x !== $y); // returns true because types are not equal
var_dump($x < $y); // returns false because $x is greater than $y
var_dump($x > $y); // returns true because $x is greater than $y
var_dump($x <= $y); // returns true because $x is greater than $y
var_dump($x >= $y); // returns true because $x is greater than $y

// Increment/Decrement Operators
$x = 10;
echo ++$x; // 11
echo $x++; // 11
echo --$x; // 10
echo $x--; // 10

// Logical Operators
$x = 100;
$y = 50;
if ($x == 100 and $y == 50) {
    echo "Hello world!";
}

// String Operators
$x = "Hello";
$y = $x . " world!";
echo $y; // outputs "Hello world!"

// Array Operators
$x = array("a" => "red", "b" => "green");
$y = array("c" => "blue", "d" => "yellow");
print_r($x + $y); // $x and $y have the same key, so the value for that key in $x will be used.


```

**[🔼Back to Top](#table-of-contents)**

## Php Data Types

```php
<?php
// String
$str = "Hello World";
echo $str;

// Integer
$int = 123;
echo $int;

// Float
$float = 1.23;
echo $float;

// Boolean
$bool = true;
echo $bool;

// Array
$arr = array("red", "green", "blue");
echo $arr[0];

// Object
class Car {
    function Car() {
        $this->model = "VW";
    }
}
$herbie = new Car();
echo $herbie->model;

// NULL
$x = "Hello World";
$x = null;
var_dump($x);

// Resource
$myfile = fopen("test.txt", "r") or die("Unable to open file!");
echo fread($myfile,filesize("test.txt"));
fclose($myfile);

```

**[🔼Back to Top](#table-of-contents)**

## Php Functions

```php
<?php
// strlen() - Return the length of a string
echo strlen("Hello World");

// str_word_count() - Count words in a string
echo str_word_count("Hello World");

// strrev() - Reverse a string
echo strrev("Hello World");

// strpos() - Search for a text within a string
echo strpos("Hello World", "World");

// str_replace() - Replace text within a string
echo str_replace("World", "Dolly", "Hello World");

```

**[🔼Back to Top](#table-of-contents)**
