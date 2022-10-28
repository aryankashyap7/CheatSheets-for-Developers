# React JS for Developers

## Table of Contents

- [React JS for Developers](#react-js-for-developers)
  - [Table of Contents](#table-of-contents)
  - [Create React App](#create-react-app)
  - [React Components](#react-components)
  - [React Props](#react-props)
  - [React Children Props](#react-children-props)
  - [React Conditionals](#react-conditionals)
  - [React Lists](#react-lists)
  - [React Context](#react-context)
  - [React Hooks](#react-hooks)
  - [React UseState Hooks](#react-usestate-hooks)
  - [React UseEffect Hooks](#react-useeffect-hooks)
  - [React Useref](#react-useref)
  - [React UseContext](#react-usecontext)
  - [React UseCallback](#react-usecallback)
  - [React UseMemo](#react-usememo)
  - [React Router](#react-router)

## Create React App

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

```
npx create-react-app my-app
cd my-app
npm start
```

**[🔼Back to Top](#react-js-for-developers)**

## React Components

```js
function App() {
  return <div>Hello World</div>;
}

export default App;
```

**[🔼Back to Top](#react-js-for-developers)**

## React Props

```js
function App() {
  return <User name="Dev" />
}

function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, Dev!
}
```

**[🔼Back to Top](#react-js-for-developers)**

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

**[🔼Back to Top](#react-js-for-developers)**

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

**[🔼Back to Top](#react-js-for-developers)**

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

**[🔼Back to Top](#react-js-for-developers)**

## React Context

React context allows us to pass data to our component tree without using props.

```js
function App() {
  return (
    <Body name="John Doe" />
  );
}

function Body({ name }) {
  return (
    <Greeting name={name} />
  );
}

function Greeting({ name }) {
  return <h1>Welcome, {name}</h1>;
}
```

**[🔼Back to Top](#react-js-for-developers)**

## React Hooks

React hooks were introduced in React version 16.8 as a way to easily add reusable, stateful logic to React function components.

**[🔼Back to Top](#react-js-for-developers)**

## React useState Hooks

it allows us to use stateful values in function components.

```js
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

in this example, we have a title state that store string with "hello world". When we click on the button, the setTitle method update the state to "react cheatcheet"

```
import { useState } from "react";

export default function App() {
  const [title, setTitle] = useState("hello world");
  
  const handleChange = () => {
    setTitle("react cheatcheet");
  };
  
  return (
    <div className="App">
      <h1>{title} useState</h1>
      <button onClick={handleChange}>Change Title</button>
    </div>
  );
}
```

**[🔼Back to Top](#react-js-for-developers)**

## React useEffect Hooks

If we want to interact with the “outside world”, such as using an API, we use the useEffect hook.

```js
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
```

**[🔼Back to Top](#react-js-for-developers)**

## React useRef

It allows us to get direct access to a JSX element.

```js
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
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


**[🔼Back to Top](#react-js-for-developers)**

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

**[🔼Back to Top](#react-js-for-developers)**

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
  const handleRemovePlayer = useCallback(player => {
    setPlayers(players.filter((p) => p !== player));
  }, [players])

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

**[🔼Back to Top](#react-js-for-developers)**

## React useMemo

React useMemo is a hook that allows us to memoize the result of a function call.


```js
import * as React from 'react'
import {getMDXComponent} from 'mdx-bundler/client'

function Post({code, frontmatter}) {
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
  )
}
```

**[🔼Back to Top](#react-router)**

## React Router

React Router is a collection of navigational components that compose declaratively with your application. React Router keeps your UI in sync with the URL.

```js
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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

**[🔼Back to Top](#react-js-for-developers)**
