## Table of Contents

- [Assembly Language for Developers](#assembly-language)
  - [Assembly Language](#assembly-language)
  - [Assembly Language Instructions](#assembly-language-instructions)
  - [Assembly Language Registers](#assembly-language-registers)
  - [Assembly Language Directives](#assembly-language-directives)
  - [Assembly Language Macros](#assembly-language-macros)
  - [Assembly Language Data Types](#assembly-language-data-types)
  - [Assembly Language Operators](#assembly-language-operators)
  - [Assembly Language Comments](#assembly-language-comments)
  - [Assembly Language Examples](#assembly-language-examples)

## Assembly Language

Assembly language is a low-level programming language for a computer, or other programmable device, in which there is a very strong (but often not one-to-one) correspondence between the language and the architecture's machine code instructions. Each assembly language is specific to a particular computer architecture in use. In contrast, most high-level programming languages are generally portable across multiple architectures but require interpreting or compiling.

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Instructions

| Instruction | Description                                |
| ----------- | ------------------------------------------ |
| ADD         | Adds two operands                          |
| ADC         | Adds two operands with carry               |
| AND         | Performs bitwise AND on two operands       |
| CALL        | Calls a subroutine                         |
| CBW         | Converts byte to word                      |
| CLC         | Clears carry flag                          |
| CMC         | Complements carry flag                     |
| CMP         | Compares two operands                      |
| CWD         | Converts word to double word               |
| DAA         | Adjusts after addition                     |
| DAS         | Adjusts after subtraction                  |
| DEC         | Decrements operand by 1                    |
| DIV         | Divides two operands                       |
| HLT         | Halts the processor                        |
| IDIV        | Divides two signed operands                |
| IMUL        | Multiplies two signed operands             |
| IN          | Inputs a byte from a port into accumulator |
| INC         | Increments operand by 1                    |
| INT         | Performs interrupt                         |
| IRET        | Returns from interrupt                     |
| JA          | Jumps if above (CF=0 and ZF=0)             |
| JAE         | Jumps if above or equal (CF=0)             |
| JB          | Jumps if below (CF=1)                      |
| JBE         | Jumps if below or equal (CF=1 or ZF=1)     |
| JC          | Jumps if carry (CF=1)                      |
| JCXZ        | Jumps if CX register is 0                  |
| JE          | Jumps if equal (ZF=1)                      |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Registers

| Register | Description         |
| -------- | ------------------- |
| AX       | Accumulator         |
| BX       | Base                |
| CX       | Count               |
| DX       | Data                |
| SI       | Source Index        |
| DI       | Destination Index   |
| BP       | Base Pointer        |
| SP       | Stack Pointer       |
| CS       | Code Segment        |
| DS       | Data Segment        |
| SS       | Stack Segment       |
| ES       | Extra Segment       |
| IP       | Instruction Pointer |
| FLAGS    | Flags               |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Directives

| Directive | Description                       |
| --------- | --------------------------------- |
| DB        | Defines a byte                    |
| DW        | Defines a word                    |
| DD        | Defines a double word             |
| DQ        | Defines a quad word               |
| DT        | Defines a ten byte                |
| DO        | Defines a double quad word        |
| DDQ       | Defines a double double quad word |
| DDT       | Defines a double ten byte         |
| EQU       | Defines a constant                |
| END       | Ends a program                    |
| EXTERN    | Declares an external variable     |
| GLOBAL    | Declares a global variable        |
| INCLUDE   | Includes a file                   |
| INCBIN    | Includes a binary file            |
| LABEL     | Defines a label                   |
| ORG       | Defines an origin                 |
| PROC      | Defines a procedure               |
| REPT      | Repeats a block of code           |
| SEGMENT   | Defines a segment                 |
| STRUC     | Defines a structure               |
| SUBSTRUC  | Defines a substructure            |
| ENDS      | Ends a structure                  |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Macros

| Macro            | Description                      |
| ---------------- | -------------------------------- |
| %define          | Defines a macro                  |
| %macro           | Defines a macro                  |
| %endmacro        | Ends a macro                     |
| %rept            | Repeats a block of code          |
| %endrept         | Ends a repeat block              |
| %if              | Defines an if statement          |
| %else            | Defines an else statement        |
| %endif           | Ends an if statement             |
| %include         | Includes a file                  |
| %error           | Displays an error message        |
| %warning         | Displays a warning message       |
| %line            | Defines a line number            |
| %local           | Defines a local variable         |
| %exitmacro       | Exits a macro                    |
| %exitrep         | Exits a repeat block             |
| %exit            | Exits a macro or repeat block    |
| %assign          | Assigns a value to a variable    |
| %eval            | Evaluates an expression          |
| %strlen          | Returns the length of a string   |
| %substr          | Returns a substring              |
| %substrcount     | Returns the number of substrings |
| %substrindex     | Returns the index of a substring |
| %substrreplace   | Replaces a substring             |
| %substrsplit     | Splits a string into substrings  |
| %substrtrim      | Trims a string                   |
| %substrtrimleft  | Trims the left side of a string  |
| %substrtrimright | Trims the right side of a string |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Data Types

| Data Type | Description              |
| --------- | ------------------------ |
| BYTE      | 8-bit unsigned integer   |
| WORD      | 16-bit unsigned integer  |
| DWORD     | 32-bit unsigned integer  |
| QWORD     | 64-bit unsigned integer  |
| TBYTE     | 80-bit unsigned integer  |
| OWORD     | 128-bit unsigned integer |
| YWORD     | 256-bit unsigned integer |
| ZWORD     | 512-bit unsigned integer |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Operators

| Operator | Description           |
| -------- | --------------------- |
| +        | Addition              |
| -        | Subtraction           |
| \*       | Multiplication        |
| /        | Division              |
| &        | Bitwise AND           |
| \|       | Bitwise OR            |
| ^        | Bitwise XOR           |
| ~        | Bitwise NOT           |
| <<       | Bitwise left shift    |
| >>       | Bitwise right shift   |
| ==       | Equality              |
| !=       | Inequality            |
| <        | Less than             |
| <=       | Less than or equal    |
| >        | Greater than          |
| >=       | Greater than or equal |
| &&       | Logical AND           |
| \|\|     | Logical OR            |
| !        | Logical NOT           |
| ?        | Ternary operator      |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Comments

| Comment | Description |
| ------- | ----------- |
| ;       | Comment     |
| //      | Comment     |
| /\*     | Comment     |
| \*/     | Comment     |

**[🔼Back to Top](#table-of-contents)**

## Assembly Language Examples

| Example              | Description                                 |
| -------------------- | ------------------------------------------- |
| MOV AX, 0x1234       | Moves 0x1234 into AX                        |
| MOV [0x1234], 0x5678 | Moves 0x5678 into memory location 0x1234    |
| ADD AX, BX           | Adds the contents of BX to AX               |
| SUB AX, BX           | Subtracts the contents of BX from AX        |
| INC AX               | Increments AX by 1                          |
| DEC AX               | Decrements AX by 1                          |
| MUL BX               | Multiplies AX by BX                         |
| DIV BX               | Divides AX by BX                            |
| AND AX, BX           | Performs a bitwise AND on AX and BX         |
| OR AX, BX            | Performs a bitwise OR on AX and BX          |
| XOR AX, BX           | Performs a bitwise XOR on AX and BX         |
| NOT AX               | Performs a bitwise NOT on AX                |
| SHL AX, 1            | Shifts AX left by 1 bit                     |
| SHR AX, 1            | Shifts AX right by 1 bit                    |
| CMP AX, BX           | Compares AX and BX                          |
| JZ 0x1234            | Jumps to 0x1234 if the zero flag is set     |
| JNZ 0x1234           | Jumps to 0x1234 if the zero flag is not set |
| JA 0x1234            | Jumps to 0x1234 if the carry flag is set    |

**[🔼Back to Top](#table-of-contents)**
