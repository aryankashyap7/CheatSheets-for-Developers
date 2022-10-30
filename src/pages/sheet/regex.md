---
layout: ../../layouts/CheatSheet.astro
title: "Regex Cheatsheet"
---

## Synopsis

> Regular expressions (also referred to as rational expressions) are sequences of characters that specify a search pattern in the text. Such patterns are often used in string-searching algorithms to perform "find" and "find and replace" operations on strings, or to validate inputs.

## Anchors

| Operators |                       Description                       |
| :-------: | :-----------------------------------------------------: |
|    `^`    | Start of string, or start of line in multi-line pattern |
|   `\A`    |                     Start of string                     |
|    `$`    |   End of string, or end of line in multi-line pattern   |
|   `\Z`    |                      End of string                      |
|   `\b`    |                      Word boundary                      |
|   `\B`    |                    Not word boundary                    |
|   `\<`    |                      Start of word                      |
|   `\>`    |                       End of word                       |

## Quanti­fiers

| Operators |  Occurrence   |  Example  |  Description  |
| :-------: | :-----------: | :-------: | :-----------: |
|    `?`    |  **0 or 1**   | **{3,5}** | **3, 4 or 5** |
|    `*`    | **0 or more** |  **{3}**  | **Exactly 3** |
|    `+`    | **1 or more** | **{3,}**  | **3 or more** |

Add a `?` to a quantifier to make it ungreedy.

## Groups and Ranges

| Operator  |            Description             |
| :-------: | :--------------------------------: |
|    `.`    | Any character except new line (\n) |
| `(a\|b)`  |               a or b               |
|  `(...)`  |               Group                |
| `(?:...)` |  Passive (non-c­apt­uring) group   |
|  `[abc]`  |        Range (a or b or c)         |
| `[^abc]`  |         Not (a or b or c)          |
|  `[a-q]`  |   Lower case letter from a to q    |
|  `[A-Q]`  |   Upper case letter from A to Q    |
|  `[0-7]`  |         Digit from 0 to 7          |
|   `\x`    |   Group/­sub­pattern number "­x"   |

Ranges are inclusive.

## Escape Sequences

| Operator |        Description         |
| :------: | :------------------------: |
|   `\`    | Escape following character |
|   `\Q`   |   Begin literal sequence   |
|   `\E`   |    End literal sequence    |

> `Escaping` is a way of treating characters which have a special meaning in regex literally, rather than as special charac­ters.

## Common Meta-characters

| `^` | `[` | `.`  | `$` |
| --- | --- | ---- | --- |
| `{` | `*` | `(`  | `\` |
| `+` | `)` | `\|` | `?` |
| `<` | `>` |      |     |

The escape character is usually `\`

## Special Characters

| Operator |     Description     |
| :------: | :-----------------: |
|   `\n`   |      New line       |
|   `\r`   |   Carriage return   |
|   `\t`   |         Tab         |
|   `\v`   |    Vertical tab     |
|   `\f`   |      Form feed      |
|  `\xxx`  | Octal character xxx |
|  `\xhh`  |  Hex character hh   |

## Assertions

|           Operator           |       Description        |
| :--------------------------: | :----------------------: |
|             `?=`             |   Lookahead assertion    |
|             `?!`             |    Negative lookahead    |
|            `?<=`             |   Lookbehind assertion   |
| `?!=` <br /> or <br /> `?<!` |   Negative lookbehind    |
|             `?>`             | Once-only SubExp­ression |
|            `?()`             |   Condition [if then]    |
|           `?()\|`            | Condition [if then else] |
|             `?#`             |         Comment          |

## String Replacement

| Operator |        Description        |
| :------: | :-----------------------: |
|   `$n`   |   nth non-passive group   |
|   `$2`   |  "xyz" in /^(abc(xyz))$   |
|   `$1`   | "xyz" in /^(?:abc)(xyz)$/ |
| `` $` `` |   Before matched string   |
|   `$'`   |   After matched string    |
|   `$+`   |    Last matched string    |
|   `$&`   |   Entire matched string   |

Some regex implementations use `\` instead of `$`.

## Pattern Modifiers

| Operator |               Description                |
| :------: | :--------------------------------------: |
|   `g`    |               Global match               |
|  `i *`   |            Case-i­nse­nsitive            |
|  `m *`   |              Multiple lines              |
|  `s *`   |       Treat string as single line        |
|  `x *`   | Allow comments and whitespace in pattern |
|  `e *`   |          Evaluate replac­ement           |
|  `U *`   |             Ungreedy pattern             |

> `*` --> **_PCRE modifier_**
