# React JS for Developers

## Table of Contents

- [React JS for Developers](#react-js-for-developers)
  - [Table of Contents](#table-of-contents)
  - [Create React App](#create-react-app)
  - [React Components](#react-components)
  - [React Props](#react-props)
  - [React Children Props](#react-children-props)
  - [React Conditional](#react-conditional)
  - [React List](#react-list)
  - [React Context](#react-context)
  - [React Hooks](#react-hooks)
  - [React UseState](#react-usestate)
  - [React UseEffect](#react-useeffect)
  - [React Useref](#react-useref)
  - [React UseContext](#react-usecontext)
  - [React UseCallback](#react-usecallback)
  - [React UseMemo](#react-usememo)

## Create React App

Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

```
npx create-react-app my-app
cd my-app
npm start
```

**[🔼Back to Top](#react-js-for-developers)**

## React Components

```
function App() {
  return <div>Hello World</div>;
}

export default App;
```

**[🔼Back to Top](#react-js-for-developers)**

## React Props

```
function App() {
  return <User name="Dev" />
}

function User(props) {
  return <h1>Hello, {props.name}</h1>; // Hello, Dev!
}
```

**[🔼Back to Top](#react-js-for-developers)**

## React Children Props

```
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

```
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

```
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

```
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

## React useState Hook

it allows us to use stateful values in function components.

```
import { useState } from 'react';

function MyComponent() {
  const [stateValue, setStateValue] = useState(initialValue);
}
```

```
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [title, setTitle] = useState("crash course");
  const handleChange = () => {
    setTitle("react crash course");
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

## React useEffect Hook

If we want to interact with the “outside world”, such as using an API, we use the useEffect hook.

```
import { useEffect } from 'react';

function MyComponent() {
   useEffect(() => {
     // perform side effect here
   }, []);
}
```

```
import {useState, useEffect} from 'react';

export const App = () => {
    const [value, setValue] = useState('');

    useEffect(() => {
      console.log('value changed: ', value);
    }, [value])

	return <div>
        	<input
                type="text"
                name="username"
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </div>
}
```
**[🔼Back to Top](#react-js-for-developers)**

## React useRef

It allows us to get direct access to a JSX element.

```
import { useRef } from 'react';

function MyComponent() {
  const ref = useRef();

  return <div ref={ref} />
}
```

**[🔼Back to Top](#react-js-for-developers)**

## React useContext

It provides an easier way of consuming context than using the standard Context.Consumer component.

The syntax involves passing the entire Context object that we want to consume into useContext. The returned value is the value passed down to Context.

```
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

It prevents functions from being recreated every time our component re-renders, which can hurt the performance of our app.

```
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

It allows us to ‘memoize’ a given operation.

```
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

**[🔼Back to Top](#react-js-for-developers)**
