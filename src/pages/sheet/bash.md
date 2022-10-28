---
layout: ../../layouts/BlogLayout.astro
title: "Bash Cheatsheet"
---

Bash is a powerful scripting language that is used by many developers. This cheat sheet is a collection of Bash tips and tricks that will help you write better Bash scripts.

**[🔼Back to Top](#table-of-contents)**

### Bash Basics

| Command   | Description                                                |
| --------- | ---------------------------------------------------------- |
| `echo`    | Print a message to the console                             |
| `printf`  | Print a formatted message to the console                   |
| `cat`     | Print the contents of a file to the console                |
| `pwd`     | Print the current working directory                        |
| `cd`      | Change the current working directory                       |
| `ls`      | List the contents of a directory                           |
| `mkdir`   | Create a new directory                                     |
| `touch`   | Create a new file                                          |
| `cp`      | Copy a file or directory                                   |
| `mv`      | Move a file or directory                                   |
| `rm`      | Remove a file or directory                                 |
| `find`    | Find files or directories                                  |
| `grep`    | Search for a string in a file                              |
| `wc`      | Count the number of lines, words, and characters in a file |
| `sort`    | Sort the lines in a file                                   |
| `uniq`    | Remove duplicate lines in a file                           |
| `head`    | Print the first 10 lines of a file                         |
| `tail`    | Print the last 10 lines of a file                          |
| `man`     | Display the manual page for a command                      |
| `which`   | Display the location of a command                          |
| `type`    | Display the type of a command                              |
| `alias`   | Create an alias for a command                              |
| `history` | Display the command history                                |
| `clear`   | Clear the console                                          |
| `exit`    | Exit the console                                           |

**[🔼Back to Top](#table-of-contents)**

#### Variables

| Command                  | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `var="value"`            | Assign a value to a variable                                                |
| `echo $var`              | Print the value of a variable                                               |
| `echo ${var}`            | Print the value of a variable                                               |
| `echo "$var"`            | Print the value of a variable                                               |
| `echo "${var}"`          | Print the value of a variable                                               |
| `echo '$var'`            | Print the literal value of a variable                                       |
| `echo '${var}'`          | Print the literal value of a variable                                       |
| `echo "${var:-default}"` | Print the value of a variable or a default value if the variable is not set |
| `echo "${var:=default}"` | Assign a default value to a variable if the variable is not set             |
| `echo "${var:?error}"`   | Print an error message if the variable is not set                           |
| `echo "${var:+value}"`   | Print a value if the variable is set                                        |
| `echo "${var:offset}"`   | Print a substring of a variable                                             |

**[🔼Back to Top](#table-of-contents)**

#### Functions

| Command                                   | Description                       |
| ----------------------------------------- | --------------------------------- |
| `function_name() { ... }`                 | Define a function                 |
| `function_name() { echo "Hello World"; }` | Define a function                 |
| `function_name() { echo "Hello $1"; }`    | Define a function with parameters |
| `function_name() { echo "Hello $@"; }`    | Define a function with parameters |

**[🔼Back to Top](#table-of-contents)**

#### Arrays

| Command                        | Description                              |
| ------------------------------ | ---------------------------------------- |
| `array=(value1 value2 value3)` | Define an array                          |
| `echo ${array[0]}`             | Print the value of an array element      |
| `echo ${array[@]}`             | Print the values of an array             |
| `echo ${#array[@]}`            | Print the number of elements in an array |
| `echo ${#array[0]}`            | Print the length of an array element     |
| `array[0]="value"`             | Assign a value to an array element       |
| `array+=(value)`               | Append a value to an array               |
| `unset array[0]`               | Remove an array element                  |
| `unset array`                  | Remove an array                          |

**[🔼Back to Top](#table-of-contents)**

#### Conditionals

| Command                                                                 | Description                        |
| ----------------------------------------------------------------------- | ---------------------------------- |
| `if [ condition ]; then ... fi`                                         | If statement                       |
| `if [ condition ]; then ... else ... fi`                                | If/else statement                  |
| `if [ condition1 ]; then ... elif [ condition2 ]; then ... else ... fi` | If/elif/else statement             |
| `case value in pattern1) ... ;; pattern2) ... ;; esac`                  | Case statement                     |
| `case value in pattern1) ... ;; pattern2) ... ;; *) ... ;; esac`        | Case statement with a default case |

**[🔼Back to Top](#table-of-contents)**

#### Loops

| Command                                        | Description |
| ---------------------------------------------- | ----------- |
| `for var in value1 value2 value3; do ... done` | For loop    |
| `for var in $(command); do ... done`           | For loop    |
| `for (( i=0; i<10; i++ )); do ... done`        | For loop    |
| `while [ condition ]; do ... done`             | While loop  |
| `until [ condition ]; do ... done`             | Until loop  |

**[🔼Back to Top](#table-of-contents)**

#### Input/Output

| Command                          | Description                                            |
| -------------------------------- | ------------------------------------------------------ |
| `read var`                       | Read input from the console                            |
| `read -p "Enter a value: " var`  | Read input from the console with a prompt              |
| `read -a array`                  | Read input from the console into an array              |
| `read -d`                        | Read input from the console until a delimiter is found |
| `read -s`                        | Read input from the console without echoing the input  |
| `read -n`                        | Read a specified number of characters from the console |
| `read -t`                        | Read input from the console with a timeout             |
| `echo "Hello World" > file.txt`  | Redirect output to a file                              |
| `echo "Hello World" >> file.txt` | Append output to a file                                |
| `echo "Hello World" 2> file.txt` | Redirect error output to a file                        |

**[🔼Back to Top](#table-of-contents)**

#### Debugging

| Command  | Description                                     |
| -------- | ----------------------------------------------- |
| `set -x` | Enable debugging                                |
| `set +x` | Disable debugging                               |
| `set -v` | Print shell input lines as they are read        |
| `set +v` | Do not print shell input lines as they are read |
| `set -n` | Read commands but do not execute them           |
| `set +n` | Execute commands read from the command line     |

**[🔼Back to Top](#table-of-contents)**

#### Miscellaneous

| Command                  | Description                            |
| ------------------------ | -------------------------------------- |
| `echo "Hello World"`     | Print a string                         |
| `echo -n "Hello World"`  | Print a string without a newline       |
| `echo -e "Hello\tWorld"` | Print a string with escaped characters |

**[🔼Back to Top](#table-of-contents)**

## Bash Advanced

#### Bash Builtins

| Command    | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| `.`        | Execute a script in the current shell                       |
| `source`   | Execute a script in the current shell                       |
| `:`        | Do nothing                                                  |
| `true`     | Do nothing                                                  |
| `false`    | Do nothing                                                  |
| `break`    | Exit a loop                                                 |
| `continue` | Skip to the next iteration of a loop                        |
| `return`   | Exit a function                                             |
| `exit`     | Exit the shell                                              |
| `set`      | Set shell options                                           |
| `unset`    | Unset shell options                                         |
| `export`   | Export a variable                                           |
| `readonly` | Make a variable read-only                                   |
| `declare`  | Declare a variable                                          |
| `typeset`  | Declare a variable                                          |
| `local`    | Declare a local variable                                    |
| `eval`     | Evaluate a string as a command                              |
| `exec`     | Execute a command                                           |
| `shift`    | Shift positional parameters                                 |
| `wait`     | Wait for a background process to complete                   |
| `pwd`      | Print the current working directory                         |
| `cd`       | Change the current working directory                        |
| `pushd`    | Push the current working directory onto the directory stack |

**[🔼Back to Top](#table-of-contents)**

#### Bash Options

| Command            | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `set -o`           | List shell options                                      |
| `set -o noclobber` | Do not overwrite existing files                         |
| `set -o errexit`   | Exit on error                                           |
| `set -o errtrace`  | Exit on error in a function                             |
| `set -o nounset`   | Exit on unset variable                                  |
| `set -o pipefail`  | Exit on pipe failure                                    |
| `set -o xtrace`    | Print commands and their arguments as they are executed |

**[🔼Back to Top](#table-of-contents)**

#### Bash Aliases

| Command                | Description     |
| ---------------------- | --------------- |
| `alias`                | List aliases    |
| `alias name="command"` | Create an alias |
| `unalias`              | Remove an alias |

**[🔼Back to Top](#table-of-contents)**

#### Bash Functions

| Command                 | Description       |
| ----------------------- | ----------------- |
| `function name { ... }` | Define a function |
| `name() { ... }`        | Define a function |
| `declare -f`            | List functions    |
| `declare -f name`       | List a function   |

**[🔼Back to Top](#table-of-contents)**

#### Bash Arrays

| Command                        | Description                        |
| ------------------------------ | ---------------------------------- |
| `array=(value1 value2 value3)` | Create an array                    |
| `array[0]="value"`             | Assign a value to an array element |
| `array+=(value)`               | Append a value to an array         |
| `unset array[0]`               | Remove an array element            |
| `unset array`                  | Remove an array                    |
| `declare -a`                   | List arrays                        |
| `declare -a array`             | List an array                      |
| `declare -p`                   | List variables                     |
| `declare -p array`             | List a variable                    |

**[🔼Back to Top](#table-of-contents)**

#### Bash Conditionals

| Command                          | Description  |
| -------------------------------- | ------------ | -------------- | ------------ |
| `[[ condition ]]`                | If statement |
| `[[ condition1 && condition2 ]]` | If statement |
| `[[ condition1                   |              | condition2 ]]` | If statement |
| `[[ ! condition ]]`              | If statement |
| `[[ value1 == value2 ]]`         | If statement |
| `[[ value1 != value2 ]]`         | If statement |
| `[[ value1 < value2 ]]`          | If statement |
| `[[ value1 > value2 ]]`          | If statement |

**[🔼Back to Top](#table-of-contents)**

#### Bash Loops

| Command                                    | Description |
| ------------------------------------------ | ----------- |
| `for var in "${array[@]}"; do ... done`    | For loop    |
| `for (( i=0; i<10; i++ )); do ... done`    | For loop    |
| `while [[ condition ]]; do ... done`       | While loop  |
| `until [[ condition ]]; do ... done`       | Until loop  |
| `select var in "${array[@]}"; do ... done` | Select loop |

**[🔼Back to Top](#table-of-contents)**

#### Bash Input/Output

| Command                                | Description                                            |
| -------------------------------------- | ------------------------------------------------------ |
| `read -p "Enter a value: " value`      | Read input from the console                            |
| `read -p "Enter a value: " -s value`   | Read input from the console without echoing the input  |
| `read -p "Enter a value: " -n 5 value` | Read a specified number of characters from the console |

**[🔼Back to Top](#table-of-contents)**
