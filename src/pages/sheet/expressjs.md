## Table of Contents

- [Requirements](#requirements)
- [Quick set-up](#quick-set-up)
- [Start the server](#start-the-server)
- [Routing](#routing)
  - [Route definition](#route-definition)
  - [Serve an HTML file](#serve-an-html-file)
  - [Serve Static assets](#serve-static-assets)
  - [Serve JSON](#serve-json)


## Requirements
You need to have [node.js](https://nodejs.org/) installed

## Quick set-up
Run the below command to quickly create an application skeleton

    npx express-generator
And then run 

    npm i
to install all necessary modules


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




## Serve Static assets
Static assets include things like css files
    app.use('/public',express.static(__dirname + '/public'));




## Serve JSON
Serve a JSON response
    app.get('/json',myFunction2);
      function myFunction2(req, res) {
      res.json({"message": "Hello json"}) ;
    }



