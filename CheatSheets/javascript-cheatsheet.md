# Table of Contents

- [Table of Contents](#table-of-contents)
  - [1. Declaring Variables](#1-declaring-variables)
  - [2. Lists](#2-lists)
    - [2.1. New List](#21-new-list)
    - [2.2. List Methods](#22-list-methods)

## 1. Declaring Variables

| Declaration | Code            | Notes                                     |
| ----------- | --------------- | ----------------------------------------- |
| var         | ` var a = 1;`   | Can be updated and re-declared.           |
| let         | ` let a = 1;`   | Can be updated but cannot be re-declared. |
| const       | ` const a = 1;` | Cannot be updated or re-declared.         |

## 2. Lists

### 2.1. New List

```
const newArray = [];
```

### 2.2. List Methods

`let newArray = []`
| Method | Code | Notes |
| ------ | ----------------- | ------------------------- |
|pop()| `newArray.pop()` | Removes last element in the list |
|push()| `newArray.push(1)`| Adds element to end of list |
|shift()| `newArray.shift()` | Removes first element in the list |
|slice()| `newArray.slice(start-position, end-position)`| Copies elements in list from start position to end position. Doesnt affect original list.|
|splice()| `newArray.splice(start-position, end-position, new element(s))`| Removes or Adds element in list. Either adds element in between start-end or removes elements from start-end.|
|unshift() | `newArray.unshift(2)` | Adds element to beginning of list |
