---
layout: ../../layouts/CheatSheet.astro
title: "ReactJS Cheatsheet"
---

## Synopsis

ReactJS is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.

## Create React App

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

```
npx create-react-app my-app
cd my-app
npm start
```

## React Components

```js
function App() {
  return <div>Hello World</div>;
}

export default App;
```

## React Props

```js
function App() {
  return <User name="Dev" />;
}

function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, Dev!
}
```

## React Children Props

```js
function App() {
  return (
    <User>
      <h1>Hello, John Doe!</h1>
    </User>
  );
}

function User({ children }) {
  return children; // Hello, John Doe!
}
```

## React Conditionals

```js
function App() {
  const isAuthUser = useAuth();

  if (isAuthUser) {
    // if our user is authenticated, let them use the app
    return <AuthApp />;
  }

  // if user is not authenticated, show a different screen
  return <UnAuthApp />;
}
```

## React Lists

Lists of React components can be output using the .map() function.

```js
function SoccerPlayers() {
  const players = ["Messi", "Ronaldo", "Laspada"];

  return (
    <div>
      {players.map((playerName) => (
        <SoccerPlayer key={playerName} name={playerName} />
      ))}
    </div>
  );
}
```

## React Context

React context allows us to pass data to our component tree without using props.

```js
function App() {
  return <Body name="John Doe" />;
}

function Body({ name }) {
  return <Greeting name={name} />;
}

function Greeting({ name }) {
  return <h1>Welcome, {name}</h1>;
}
```

## React Hooks

React hooks were introduced in React version 16.8 as a way to easily add reusable, stateful logic to React function components.

## React useState Hooks

it allows us to use stateful values in function components.

```js
import { useState } from "react";

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

## React useEffect Hooks

If we want to interact with the “outside world”, such as using an API, we use the useEffect hook.

```js
import { useEffect } from "react";

function MyComponent() {
  useEffect(() => {
    // perform side effect here
  }, []);
}
```

## React useRef

It allows us to get direct access to a JSX element.

```js
import { useRef } from "react";

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />;
}
```

useRef is a hook that lets you reference a value that’s not needed for rendering.

In this example when we click on the button, we focus and refer to the input.

```
import { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

## React useContext

It provides an easier way of consuming context than using the standard Context.Consumer component.

The syntax involves passing the entire Context object that we want to consume into useContext. The returned value is the value passed down to Context.

```js
import { createContext, useContext } from 'react';

const NameContext = createContext('');

function App() {
  return (
    <NameContext.Provider value="John Doe">
      <Body />
    <NameContext.Provider>
  );
}

function Body() {
  return <Greeting />;
}

function Greeting() {
	const name = useContext(NameContext);

  return (
    <h1>Welcome, {name}</h1>
  );
}
```

## React useCallback

React useCallback is a hook that is used to memoize functions. It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

```js
function App() {
  const [player, setPlayer] = React.useState("");
  const [players, setPlayers] = React.useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback(
    (player) => {
      setPlayers(players.filter((p) => p !== player));
    },
    [players]
  );

  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
}

function PlayerList({ players, handleRemovePlayer }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}
```

## React useMemo

React useMemo is a hook that allows us to memoize the result of a function call.

```js
import * as React from "react";
import { getMDXComponent } from "mdx-bundler/client";

function Post({ code, frontmatter }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <header>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
      </header>
      <main>
        <Component />
      </main>
    </>
  );
}
```

## React Router

React Router is a collection of navigational components that compose declaratively with your application. React Router keeps your UI in sync with the URL.

```js
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}
```

# Configure-React CheatSheet for Developers

## Create React Cluster App (Multiple React App in One Project) Build new React App in Second

Watch this video to create React Cluster App (Multiple React App in One Project)

|                      Command                       |                                                                  Description                                                                  |
| :------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
| `npx configure-react create-cluster <clustername>` | Create Big React Project with Tailwind, React Router Dom, Chakra UI, Context API, Redux, Redux Thunk, Redux Saga, Redux Persist, Utils, Axios |
|  `npx configure-react cluster-app <projectname>`   |    Create Cluster App with Tailwind, React Router Dom, Chakra UI, Context API, Redux, Redux Thunk, Redux Saga, Redux Persist, Utils, Axios    |
|      `npx configure-react ic <package-name>`       |                                                        Install package in Cluster App                                                         |
|             `npx configure-react help`             |                                                           Display help for command                                                            |

For more information about the package visit [Configure-React](https://www.npmjs.com/package/configure-react)
Watch the video on [Youtube](https://www.youtube.com/watch?v=2MO1_mCXuds&t=3s)

## React Commands to Configure React App Faster (Specially for Beginners)

|                       Command                       |                                                                                                         Description                                                                                                          |
| :-------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|           `npx configure-react axios . `            |                                                  Install axios and create a folder named `api` and create a file named `axios.js` login.js, register.js, post.js getdata.js                                                  |
| `npx configure-react react-redux-app <projectname>` |                                          Install react-redux and create a folder named `redux` and create a file named `store.js` and `actions.js` and `reducers.js` and `types.js`                                          |
|          `npx configure-react tailwind . `          |                                                                       Configure Exsisting React App with Tailwind Configuration to use Tailwind class                                                                        |
|       `npx configure-react browser-router . `       | Configure Exsisting React App with React Router Dom Configuration to use React Router Dom also create a folder named `routes` and create a file named `index.js` and `AppRouter.js` and edit `App.js` file and index.js file |
|         `npx configure-react chakra-ui . `          |                                          Configure Exsisting React App with Chakra UI Configuration to use Chakra UI also edit `index.js` file to wrap the App with ChakraProvider                                           |
|        `npx configure-react context-api . `         |              Configure Exsisting React App with Context API Configuration to use Context API also create a folder named `context` and create a file named `context.js` and `reducer.js` and edit `App.js` file               |
|           `npx configure-react redux . `            |                 Configure Exsisting React App with Redux Configuration to use Redux also create a folder named `redux` and create a file named `store.js` and `actions.js` and `reducers.js` and `types.js`                  |
|           `npx configure-react utils . `            |                                          Configure Exsisting React App with Utils Configuration to use Utils also create a folder named `utils` and create a file named `utils.js`                                           |
|        `npx configure-react redux-thunk . `         |           Configure Exsisting React App with Redux Thunk Configuration to use Redux Thunk also create a folder named `redux` and create a file named `store.js` and `actions.js` and `reducers.js` and `types.js`            |
|         `npx configure-react redux-saga . `         |            Configure Exsisting React App with Redux Saga Configuration to use Redux Saga also create a folder named `redux` and create a file named `store.js` and `actions.js` and `reducers.js` and `types.js`             |
|       `npx configure-react redux-persist . `        |         Configure Exsisting React App with Redux Persist Configuration to use Redux Persist also create a folder named `redux` and create a file named `store.js` and `actions.js` and `reducers.js` and `types.js`          |
|          `npx configure-react refresh . `           |                                                                             Refresh the files and update the files if any changes in the package                                                                             |
|             `npx configure-react help`              |                                                                                                   Display help for command                                                                                                   |
