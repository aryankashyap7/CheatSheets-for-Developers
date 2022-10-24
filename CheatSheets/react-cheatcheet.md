# React Cheatsheet

---

title: React CheatSheet
description: React cheatsheet contains basics of React, JSX, Binding, Virtual DOM, Hooks and more .
created: 2022-10-24
updated: 2022-10-24

---

# Table of Content

- [use state hook](#use-state-hook)
- [use effect hook](#use-effect-hook)
- [use ref hook](#use-ref-hook)

## Data Types

## use state hook

```
const [count, setCounter] = useState(0);

const setCount = () => {
    setCounter(count + 1);
};
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

## use effect hook

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

## use ref hook

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
