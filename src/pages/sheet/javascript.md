---
layout: ../../layouts/CheatSheet.astro
title: "Javascript Cheatsheet"
---

## Synopsis

Javascript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

## 1. Declaring Variables

| Declaration | Code            | Notes                                     |
| ----------- | --------------- | ----------------------------------------- |
| var         | ` var a = 1;`   | Can be updated and re-declared.           |
| let         | ` let a = 1;`   | Can be updated but cannot be re-declared. |
| const       | ` const a = 1;` | Cannot be updated or re-declared.         |

## 2. Lists

### 2.1. New Array

```
const newArray = [];
```

### 2.2. Add to Array

```
newArray.push(1); //To the end of array
newArray.unshift(1); //To the beginning of array
```

### 2.3. Remove from Array

```
newArray.pop(); //Last element of array
newArray.shift(); //First element of array and return the value of removed element
```

### 2.4. Loop through Array

```
newArray.forEach((item) => {
  console.log(item);
});
```

### 2.5. Loop through Array with Index

```
newArray.forEach((item, index) => {
  console.log(index, item);
});
```

### 2.6. Loop through Array in Reverse

```
newArray.reverse().forEach((item) => {
  console.log(item);
});
```

## 3. Objects

### 3.1. New Object

```
const newObject = {};
```

### 3.2. Add to Object

```
newObject.key = 'value';
```

### 3.3. Remove from Object

```
delete newObject.key;
```

### 3.4. Loop through Object

```
for (const key in newObject) {
  console.log(key, newObject[key]);
}
```

### 3.5. Loop through Object with Index

```
Object.entries(newObject).forEach(([key, value]) => {
  console.log(key, value);
});
```

### 3.6. Loop through Object in Reverse

```
Object.entries(newObject).reverse().forEach(([key, value]) => {
  console.log(key, value);
});
```

## 4. Functions

### 4.1. New Function

```
function newFunction() {
  console.log('newFunction');
}
```

### 4.2 Call Function

```
newFunction();
```

### 4.3. Call Function with Parameter

```
function newFunctionWithParameter(parameter) {
  console.log(parameter);
}
```

### 4.4. Call Function with Parameter and Return Value

```
function newFunctionWithParameterAndReturnValue(parameter) {
  return parameter;
}
```

### 4.5. bind()

With the bind() method, an object can borrow a method from another object.

```
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);
```

## 5. Classes

### 5.1. New Class

```
class NewClass {
  constructor() {
    console.log('NewClass');
  }
}
```

### 5.2. New Class with Constructor

```
class NewClassWithConstructor {
  constructor(parameter) {
    console.log(parameter);
  }
}
```

### 5.3. New Class with Constructor and Method

```
class NewClassWithConstructorAndMethod {
  constructor(parameter) {
    console.log(parameter);
  }

  method() {
    console.log('method');
  }
}
```

### 5.4. New Class with Constructor and Method and Property and Getter

```
class NewClassWithConstructorAndMethodAndPropertyAndGetter {
  constructor(parameter) {
    console.log(parameter);
  }

  method() {
    console.log('method');
  }

  property = 'property';

  get getter() {
    return 'getter';
  }
}
```

### 5.5. New Class with Constructor and Methods and Inheritance

```
class NewClassWithConstructorAndMethodsAndInheritance extends NewClassWithConstructorAndMethod {
  constructor(parameter) {
    super(parameter);
  }

  method() {
    super.method();
    console.log('method');
  }
}
```

## 6. Conditionals

### 6.1. If

```
if (true) {
  console.log('true');
}
```

### 6.2. If Else

```
if (true) {
  console.log('true');
} else {
  console.log('false');
}
```

### 6.3. If Else If

```
if (true) {
  console.log('true');
} else if (false) {
  console.log('false');
}
```

### 6.4. Switch

```
switch (true) {
  case true:
    console.log('true');
    break;
  case false:
    console.log('false');
    break;
}
```

## 7. Loops

### 7.1. For

```
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### 7.2. For In

```
const newObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

for (const key in newObject) {
  console.log(key, newObject[key]);
}
```

### 7.3. For Of

```
const newArray = [1, 2, 3];

for (const item of newArray) {
  console.log(item);
}
```

### 7.4. While

```
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
```

### 7.5. Do While

```
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);
```

## 8. Try Catch

### 8.1. Try Catch

```
try {
  console.log('try');
} catch (error) {
  console.log('catch');
}
```

### 8.2. Try Catch Finally

```
try {
  console.log('try');
} catch (error) {
  console.log('catch');
} finally {
  console.log('finally');
}
```

## 9. Promises

### 9.1. New Promise

```
const newPromise = new Promise((resolve, reject) => {
  resolve('resolve');
});
```

### 9.2. New Promise with Resolve

```
const newPromiseWithResolve = new Promise((resolve, reject) => {
  resolve('resolve');
});
```

### 9.3. New Promise with Reject

```
const newPromiseWithReject = new Promise((resolve, reject) => {
  reject('reject');
});
```

### 9.4. New Promise with Resolve and Reject

```
const newPromiseWithResolveAndReject = new Promise((resolve, reject) => {
  resolve('resolve');
  reject('reject');
});
```

### 9.5. New Promise with Resolve and Reject and Async

```
const newPromiseWithResolveAndRejectAndAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolve');
    reject('reject');
  }, 1000);
});
```

## 10. Async Await

### 10.1. New Async Function

```

async function newAsyncFunction() {
console.log('newAsyncFunction');
}

```

### 10.2. New Async Function with Await

```

async function newAsyncFunctionWithAwait() {
await newPromiseWithResolveAndRejectAndAsyncAndAwait;
console.log('newAsyncFunctionWithAwait');
}

```

## 11. Fetch

### 11.1. New Fetch

```

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((json) => console.log(json));

```

### 11.2. New Fetch with URL

```

const newFetchWithUrl = fetch('https://jsonplaceholder.typicode.com/todos/1');

```

### 11.3. New Fetch with URL and Method

```

const newFetchWithUrlAndMethod = fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
});

```

### 11.4. New Fetch with URL and Method and Headers

```

const newFetchWithUrlAndMethodAndHeaders = fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
});

```

### 11.5. New Fetch with URL and Method and Headers and Body

```

const newFetchWithUrlAndMethodAndHeadersAndBody = fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
});

```

### 11.6. New Fetch with URL and Method and Headers and Body and Async

```

const newFetchWithUrlAndMethodAndHeadersAndBodyAndAsync = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
});
const json = await response.json();
console.log(json);
};

```

### 11.7. New Fetch with URL and Method and Headers and Body and Async and Await

```

const newFetchWithUrlAndMethodAndHeadersAndBodyAndAsyncAndAwait = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
});
const json = await response.json();
console.log(json);
};

```

### 11.8. New Fetch with URL and Method and Headers and Body and Async and Await and Response

```

const newFetchWithUrlAndMethodAndHeadersAndBodyAndAsyncAndAwaitAndResponse = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
});
const json = await response.json();
console.log(json);
};

```

### 11.9. New Fetch with URL and Method and Headers and Body and Async and Await and Response and Json

```

const newFetchWithUrlAndMethodAndHeadersAndBodyAndAsyncAndAwaitAndResponseAndJson = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({
title: 'foo',
body: 'bar',
userId: 1,
}),
});
const json = await response.json();
console.log(json);
};

```

## 12. Events

### 12.1. New Event

```

const newEvent = new Event('build');

```

### 12.2. New Event with Type

```

const newEventWithType = new Event('build');

```

### 12.3. New Event with Type and Options

```

const newEventWithTypeAndOptions = new Event('build', {
bubbles: true,
cancelable: true,
});

```
## Visual JavaScript Cheat Sheet

If you're a more visual person, check out this visual [JavaScript cheat sheet](https://www.git-tower.com/learn/cheat-sheets/javascript) available in light and dark modes.
