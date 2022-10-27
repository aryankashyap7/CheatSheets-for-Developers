# Node JS for Developers

## Table of Contents

- [Node JS for Developers](#nodejs-for-developers)
  - [About Node JS](#about-nodejs)
  - [Running Node JS](#running-node-js)
  
This page contains commands, syntax, and functions for Node JS.

## About Node JS
**Node.js** is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine 
and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

## Running Node JS
For running Node JS:

| Command                       | Description                             |
| ----------------------------- | ----------------------------------------|
| node                          | Run the Node REPL in your terminal      |
| node —version                 | Print your current Node version         |
| node filename.js              | Execute the Node code in filename.js    |

 > 💡 `REPL` stands for *R*ead *E*val *P*rint *L*oop. This is the list of steps that happen when you run the `node` command and then type some code.
---
**[🔼Back to Top](#table-of-contents)**


## NODE JS GLOBAL OBJECT
In Node, we have a `global` object that we can always access. Features that we expect to be available everywhere live in this global object.
For example, to have some code execute after 5 seconds we can use either global.setTimeout or just setTimeout. The global keyword is optional.

```node
setTimeout(() => { 
  console.log('hello');
}, 5000);
```
The most famous global is global.console.log which we write as just console.log.

**[🔼Back to Top](#table-of-contents)**


## Running Node JS
For running Node JS:

| Command                       | Description                             |
| ----------------------------- | ----------------------------------------|
| node                          | Run the Node REPL in your terminal      |

**[🔼Back to Top](#table-of-contents)**
