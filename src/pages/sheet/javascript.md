---
layout: ../../layouts/BlogLayout.astro
title: "Javascript Cheatsheet"
---

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [1. Declaring Variables](#1-declaring-variables)
  - [2. Lists](#2-lists)
    - [2.1. New Array](#21-new-array)
    - [2.2. Add to Array](#22-add-to-array)
    - [2.3. Remove from Array](#23-remove-from-array)
    - [2.4. Loop through Array](#24-loop-through-array)
    - [2.5. Loop through Array with Index](#25-loop-through-array-with-index)
    - [2.6. Loop through Array in Reverse](#26-loop-through-array-in-reverse)
  - [3. Objects](#3-objects)
    - [3.1. New Object](#31-new-object)
    - [3.2. Add to Object](#32-add-to-object)
    - [3.3. Remove from Object](#33-remove-from-object)
    - [3.4. Loop through Object](#34-loop-through-object)
    - [3.5. Loop through Object with Index](#35-loop-through-object-with-index)
    - [3.6. Loop through Object in Reverse](#36-loop-through-object-in-reverse)
  - [4. Functions](#4-functions)
    - [4.1. New Function](#41-new-function)
<<<<<<< HEAD:src/pages/sheet/javascript.md
    - [4.2 Call Function](#42-call-function)
    - [4.3. Call Function with Parameter](#43-call-function-with-parameter)
    - [4.4. Call Function with Parameter and Return Value](#44-call-function-with-parameter-and-return-value)
=======
    - [4.2. Call Function](#42-call-function)
    - [4.3. Call Function with Parameters](#43-call-function-with-parameters)
    - [4.4. Call Function with Parameters and Return Value](#44-call-function-with-parameters-and-return-value)
    - [4.5. bind()](#45-bind)
>>>>>>> 5fd57f53530263c48e3a8f99fb20ec28376199c7:CheatSheets/javascript-cheatsheet.md
  - [5. Classes](#5-classes)
    - [5.1. New Class](#51-new-class)
    - [5.2. New Class with Constructor](#52-new-class-with-constructor)
    - [5.3. New Class with Constructor and Method](#53-new-class-with-constructor-and-method)
    - [5.4. New Class with Constructor and Method and Property and Getter](#54-new-class-with-constructor-and-method-and-property-and-getter)
    - [5.5. New Class with Constructor and Methods and Inheritance](#55-new-class-with-constructor-and-methods-and-inheritance)
  - [6. Conditionals](#6-conditionals)
    - [6.1. If](#61-if)
    - [6.2. If Else](#62-if-else)
    - [6.3. If Else If](#63-if-else-if)
    - [6.4. Switch](#64-switch)
  - [7. Loops](#7-loops)
    - [7.1. For](#71-for)
    - [7.2. For In](#72-for-in)
    - [7.3. For Of](#73-for-of)
    - [7.4. While](#74-while)
    - [7.5. Do While](#75-do-while)
  - [8. Try Catch](#8-try-catch)
    - [8.1. Try Catch](#81-try-catch)
    - [8.2. Try Catch Finally](#82-try-catch-finally)
  - [9. Promises](#9-promises)
    - [9.1. New Promise](#91-new-promise)
    - [9.2. New Promise with Resolve](#92-new-promise-with-resolve)
    - [9.3. New Promise with Reject](#93-new-promise-with-reject)
    - [9.4. New Promise with Resolve and Reject](#94-new-promise-with-resolve-and-reject)
    - [9.5. New Promise with Resolve and Reject and Async](#95-new-promise-with-resolve-and-reject-and-async)
  - [10. Async Await](#10-async-await)
    - [10.1. New Async Function](#101-new-async-function)
    - [10.2. New Async Function with Await](#102-new-async-function-with-await)
  - [11. Fetch](#11-fetch)
    - [11.1. New Fetch](#111-new-fetch)
    - [11.2. New Fetch with URL](#112-new-fetch-with-url)
    - [11.3. New Fetch with URL and Method](#113-new-fetch-with-url-and-method)
    - [11.4. New Fetch with URL and Method and Headers](#114-new-fetch-with-url-and-method-and-headers)
    - [11.5. New Fetch with URL and Method and Headers and Body](#115-new-fetch-with-url-and-method-and-headers-and-body)
    - [11.6. New Fetch with URL and Method and Headers and Body and Async](#116-new-fetch-with-url-and-method-and-headers-and-body-and-async)
    - [11.7. New Fetch with URL and Method and Headers and Body and Async and Await](#117-new-fetch-with-url-and-method-and-headers-and-body-and-async-and-await)
    - [11.8. New Fetch with URL and Method and Headers and Body and Async and Await and Response](#118-new-fetch-with-url-and-method-and-headers-and-body-and-async-and-await-and-response)
    - [11.9. New Fetch with URL and Method and Headers and Body and Async and Await and Response and Json](#119-new-fetch-with-url-and-method-and-headers-and-body-and-async-and-await-and-response-and-json)
  - [12. Events](#12-events)
    - [12.1. New Event](#121-new-event)
    - [12.2. New Event with Type](#122-new-event-with-type)
    - [12.3. New Event with Type and Options](#123-new-event-with-type-and-options)

## 1. Declaring Variables

| Declaration | Code            | Notes                                     |
| ----------- | --------------- | ----------------------------------------- |
| var         | ` var a = 1;`   | Can be updated and re-declared.           |
| let         | ` let a = 1;`   | Can be updated but cannot be re-declared. |
| const       | ` const a = 1;` | Cannot be updated or re-declared.         |

**[🔼Back to Top](#table-of-contents)**

## 2. Lists

### 2.1. New Array

```
const newArray = [];
```

### 2.2. Add to Array

```
newArray.push(1);
```

### 2.3. Remove Last Element from Array

```
newArray.pop();
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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

**[🔼Back to Top](#table-of-contents)**

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

```

```
