| **TITLE** | **DESCRIPTION** | **CREATED** | **UPDATED** |
| --- | --- | --- | --- |
| PHP | Hypertext Preprocessor-Web Development | 24/10/2022 | 24/10/2022 |

**PHP:** PHP is a scripting language and normally consists of HTML files

**HELLO WORLD PROGRAM IN PHP:**

\<?php

echo "Hello World!";

?\>

**DEFAULT EXTENSION:**.php

**COMMENTS IN PHP:**

Comments do not get executed.

Multi-line comments can be placed between /\* and \*_/_ .

**OUTPUT DATA IN PHP:**

\<?php echo "\<h1\>Hello PHP!\</h1\>"; ?\>

**Echo:** It is used toprint the output data on to the screen

**H1:** heading

It has no return value

**PHP VARIABLES** :

A "$" sign indicates the beginning of the variable.

**DECLARATION OF VARIABLES IN PHP:**

\<?php

$text = "Hello world!";

$a = 7;

?\>

**PHP FUNCTIONS:**

Functions are statements that are continuously executed in a php program.

**USER DEFINED FUNCTION IN PHP:**

**SYNTAX:**

function function\_name {

Executable code

}

**EG:**

\<?php

function Message() {

echo "Welcome!";

Message(); // Function call

}

?\>

**PHP ARRAYS:**

array() function is used to create an array in PHP

**EG:**

\<?php

$fruits = array("banana", "apple", "mango");

echo count($fruits);

**MYSQL FUNCTIONS:**

| **NAME OF THE FUNCTION** | **DESCRIPTION** |
| --- | --- |
| mysqli\_close() | Closes an open database connection |
| mysqli\_commit() | Commits the current transaction |
| mysqli\_change\_user | Changes user of database connection |
| mysqli\_connect | Open a new connection to MySQL |

**DATE AND TIME FUNCTIONS**

| **NAME OF THE FUNCTION** | **DESCRIPTION** |
| --- | --- |
| checkdate | Checks value of gregorian date |
| date\_create | Creates a new date object |
| date\_date\_set | Sets a new date |
| date\_create\_from\_format | Returns a formatted date object |
| string date\_interval\_format | Formats an interval |
| date\_isodate\_set | Set a date according to ISO 8601 std |
| date\_modify | Modifies the timestamp |
| date\_offset\_get | Returns the offset of the timezone |
| date() | Formats a local date and time |

**PHP ERRORS:**

| **NAME OF ERROR** | **DESCRIPTION** |
| --- | --- |
| error\_get\_last | Gets the last error that occured |
| debug\_backtrace | Used to generate a backtrace |
| error\_reporting | Specifies which PHP errors are reported. |
