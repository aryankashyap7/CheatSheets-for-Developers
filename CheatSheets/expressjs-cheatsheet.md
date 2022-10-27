## Table of Contents

- [Requirements](#requirements)
- [Quick set-up](#quick-set-up)
- [Start the server](#start-the-server)
- [Routing]
  - [Route definition]
  - [Serve an HTML file]
  - [Serve Static assets]
  - [Serve JSON]


## Requirements
You need to have [node.js](https://nodejs.org/) installed

## Quick set-up
Run the below command to quickly create an application skeleton

    npx express-generator
And then run 

    npm i
to install all necessary modules

**[🔼Back to Top](#table-of-contents)**
## Start the server
add this code in index.js
    const express = require('express')
    const app = express()
    const port = 3000

    app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })


**[🔼Back to Top](#table-of-contents)**


## Route definition
    app.METHOD(PATH, HANDLER)

## Send an HTML file

    app.get('/', (req, res) => {
          res.send('Hello World!')
        })


**[🔼Back to Top](#table-of-contents)**

## Serve Static assets

    app.use('/public',express.static(__dirname + '/public'));


**[🔼Back to Top](#table-of-contents)**

## Serve JSON

    app.get('/json',myFunction2);
      function myFunction2(req, res) {
      res.json({"message": "Hello json"}) ;
    }


**[🔼Back to Top](#table-of-contents)**
