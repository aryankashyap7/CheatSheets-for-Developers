---
layout: ../../layouts/CheatSheet.astro
title: "ExpressJs Cheatsheet"
---

## Synopsis

Express.js is a web application framework for Node.js. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

## Requirements

You need to have [node.js](https://nodejs.org/) installed

## Quick set-up

Run the below command to quickly create an application skeleton

    npx express-generator

And then run

    npm i

to install all necessary modules

# <<<<<<< HEAD:src/pages/sheet/expressjs.md

**[🔼Back to Top](#table-of-contents)**

> > > > > > > b00d371e1e1a7274c54964b33b95484ba97e282a:src/pages/sheet/expressjs-cheatsheet.md

## Start the server

add this code in app.js

    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })

and run app.js to start the serve. Go to localhost:port to see the response

## Routing

## Route definition

The routing definition syntax is

    app.METHOD(PATH, HANDLER)

Here, METHOD is an HTTP request method, and HANDLER is the function executed when the route is matched.

## Serve an HTML file

    app.get('/', (req, res) => {
          res.sendFile(__dirname +'/views/index.html') ;
        })

<<<<<<< HEAD:src/pages/sheet/expressjs.md

=======
**[🔼Back to Top](#table-of-contents)**

> > > > > > > b00d371e1e1a7274c54964b33b95484ba97e282a:src/pages/sheet/expressjs-cheatsheet.md

## Serve Static assets

Static assets include things like css files
app.use('/public',express.static(\_\_dirname + '/public'));

## Serve JSON

Serve a JSON response
app.get('/json',myFunction2);
function myFunction2(req, res) {
res.json({"message": "Hello json"}) ;
}
