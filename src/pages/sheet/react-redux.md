---
layout: ../../layouts/CheatSheet.astro
title: "React-redux Cheatsheet"
---

## Synopsis

React-redux lets your React components read data from a Redux store, and dispatch actions to the store to update state.
Your React components may communicate with a Redux store without having to manually write the interaction code thanks to the react-redux package, the official Redux-UI binding module for React. This makes it possible for an application to rely on Redux to handle the overall state and React to render the user interface in accordance with the state.

## Install react-redux

**_npm install react-redux_**
An initial npm installation of the react-redux package is required before adding it to a React/Redux project.

```
npm install react-redux
```

A handful of the react-redux resources that were imported are:

- [Provider]
- [useSelector]
- [useDispatch]

## The Provider Component

A nested child component can access the Redux store thanks to the <Provider /> component. The store itself should be used as a prop.
All child components of the <Provider /> component are now able to access the Redux store, get data, and dispatch actions using the react-redux resources.

```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './App';
import { createStore } from 'redux';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## The useSelector() Hook

Each time the state is updated, the useSelector() hook uses a selector function to get state data from the Redux store. Using useSelector (), any component contained within <Provider /> may access state. Inline selectors or pre-defined functions may be used with useSelector().

whenever a React component is called, Selector (selector) achieves two objectives:

- [returns the data that the selector retrieved.]
- [allows you to force a re-render if the selector's result changes and subscribes the React component to changes in the store.]

```
import React from 'react';
import { useSelector } from 'react-redux';

// Pre-defined selector function
const selectPosts = state => state.posts;

const App = (props) => {
  const posts = useSelector(selectPosts);

  // Alternatively, selectors can be used inline
  // const posts = useSelector(state => state.posts);

  // code to render posts is omitted...
};
```

## The useDispatch() Hook

A reference to the store.dispatch() method is returned by the useDispatch() hook. The <Provider /> component must be nested inside of a React component before it can be used.

By convention, a React component assigns the reference returned by useDispatch() and defines dispatch. The component can then dispatch action objects by using dispatch().

```
import React from 'react';
import { useDispatch } from 'react-redux';

const MyComponent = () => {
  const dispatch = useDispatch();

  return (
    <button
    	onClick={() => dispatch(
    		{ type: 'buttonClicked' }
  	)} >
      Click Me
    </button>
  );
};
```

## Selectors

Selectors are user-defined Redux functions that pull out particular data from a store state value. React components can utilize selectors to retrieve specific data from the store since they are pure functions that accept the state as an argument.

As a rule, the names of selector functions begin with select and provide information about the data they get from the store.

```
/*
state = {
	todos: [
  	{id: 1, content: 'Work'},
    {id: 2, content: 'Shop'},
    {id: 3, content: 'Sleep'}
  ]
}
*/

// This selector retrieves the todos array.
const selectTodos = state => state.todos;


// This selector retrieves an array of todo ids.
const selectTodoIDs = state => state.todos
  .map(todo => todo.id);
```
