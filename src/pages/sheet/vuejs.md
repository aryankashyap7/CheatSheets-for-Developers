---
layout: ../../layouts/BlogLayout.astro
title: "Vue JS Cheatsheet"
---

_Notice_
- This document is focused on **Vue 3** composition API with concise `<script setup>` syntax

# Table of Contents

- [Table of Contents](#table-of-contents)
- [I. Tools](#i-tools)
  - [1. Create-vue](#1-create-vue)
- [II. Templates](#ii-templates)
  - [1. Templates](#1-templates)
      - [a) Text Interpolation](#a-text-interpolation)
      - [b) Raw HTML](#b-raw-html)
      - [c) Attributes](#c-attributes)
        - [Attributes Binding](#attributes-binding)
      - [d) Directives](#d-directives)
  - [2. Reactivity](#2-reactivity)
      - [a) reactive()](#a-reactive)
      - [b) ref()](#b-ref)
      - [c) Computed Properties](#c-computed-properties)
  - [3. Conditional Rendering](#3-conditional-rendering)
  - [4. List Rendering](#4-list-rendering)
      - [`v-for`](#v-for)
  - [5. Class & Style Binding](#5-class--style-binding)
      - [a) Class Binding](#a-class-binding)
      - [b) Style Binding](#b-style-binding)
  - [6. Event Handling](#6-event-handling)
  - [7. Form Inputs](#7-form-inputs)
      - [a) Text](#a-text)
      - [b) Multiline text using Textarea](#b-multiline-text-using-textarea)
      - [c) Checkbox](#c-checkbox)
      - [d) Multiple Checkboxes bind to one value](#d-multiple-checkboxes-bind-to-one-value)
      - [e) Radio](#e-radio)
      - [f) Select](#f-select)
      - [g) Multiple Select](#g-multiple-select)
      - [h) Form Input Modifiers](#h-form-input-modifiers)
  - [8. Lifecycle Hooks](#8-lifecycle-hooks)
      - [a) Registering Lifecycle Hooks](#a-registering-lifecycle-hooks)
      - [a) Built-in Lifecycle Hooks](#a-built-in-lifecycle-hooks)
  - [9. Watchers](#9-watchers)
      - [a) Simple data types](#a-simple-data-types)
      - [b) Complex data types](#b-complex-data-types)
  - [10. Template Refs](#10-template-refs)
      - [a) Accessing refs](#a-accessing-refs)
      - [b) Refs inside `v-for`](#b-refs-inside-v-for)
- [III. Single-file Components](#iii-single-file-components)
  - [1. Single-file Components using `<script setup>`](#1-single-file-components-using-script-setup)
    - [2. Props](#2-props)
      - [a) Declaring Props](#a-declaring-props)
      - [b) Passing Props](#b-passing-props)
    - [3. Events](#3-events)
      - [a) Emitting & Listening to Events](#a-emitting--listening-to-events)
    - [4. Slots](#4-slots)
      - [a) Using a slot](#a-using-a-slot)
      - [b) Using a slot with fallback](#b-using-a-slot-with-fallback)
      - [c) Named Slots](#c-named-slots)
    - [5. Provide & Inject](#5-provide--inject)
      - [a) Provide](#a-provide)
      - [b) App-level Provide](#b-app-level-provide)
      - [c) Inject](#c-inject)
    - [6. Built-in Components](#6-built-in-components)
      - [a) KeepAlive](#a-keepalive)
      - [b) Suspense](#b-suspense)
      - [c) Teleport](#c-teleport)
      - [d) Transition](#d-transition)



# I. Tools 
## 1. Create-vue 

```sh
# init a project using an interactive scaffolding tool
npm init vue@latest

# run dev server
cd <project-name>
npm install
npm run dev
# project will be available at http://localhost:5173/

```


# II. Templates

## 1. Templates
double curly braces {{Mustache}} syntax and outputs data as plain text
#### a) Text Interpolation
```vue
<!-- variable -->
<span>Message: {{ msg }}</span>
<!-- expression -->
<span>Nr: {{ nr + 1 }}</span>
<span>Accept: {{ ok ? 'YES' : 'NO' }}</span>
```
#### b) Raw HTML
`v-html` directive outputs real HTML
```vue
<span v-html="rawHtml"></span>
```
#### c) Attributes

##### Attributes Binding
- using `v-bind` directive
```vue
<div v-bind:id="dynamicId"></div>
```
- using `:` shorthand
```vue
<div :id="dynamicId"></div>
```
- binding expression using `v-bind` shorthand
```vue
<div :id="`prefix-${dynamicId}`"></div>
```
- boolean attributes
```vue
<button :disabled="isButtonDisabled">Button</button>
```
-  Dynamically Binding Multiple Attributes 
```vue
<template>
    <div v-bind="objectOfAttrs"></div>
</template>
<script setup>
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}
</script>
```
#### d) Directives
-  Directives are special attributes prefixed with `v-`

```vue
<p v-if="seen">Now you see me</p>
```    

- Some directives with an "argument", denoted by a colon 
```vue
<a v-bind:href="url"> ... </a>
<!-- shorthand -->
<a :href="url"> ... </a>
```
```vue
<a v-on:click="doSomething"> ... </a>
<!-- shorthand -->
<a @click="doSomething"> ... </a>
```
Built-in directives:
- `v-text` update the element's text content
- `v-html` update the element's innerHTML
- `v-show` toggle the element's visibility
- `v-if` conditionally render an element or a template fragment
- `v-else` denote the "else block" for v-if or a v-if / v-else-if chain
- `v-else-if` denote the "else if block" for v-if
- `v-for` render the element or template block multiple times based on the source data
- `v-on` attach an event listener to the element
- `v-bind` dynamically binds one or more attributes or a component prop to an expression
- `v-model` create a two-way binding on a form input element or a component
- `v-slot` denote named slots or scoped slots that expect to receive props
- `v-pre` skip compilation for this element and all its children.
- `v-once` render the element and component once only
- `v-memo` memoize a sub-tree of the template
- `v-cloak` hide un-compiled template until it is ready



## 2. Reactivity

#### a) reactive() 
- reactive() can be used to create a reactive object or array.
```vue
<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
function increment() {
  state.count++
}
</script>
<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```
#### b) ref()
- ref() can be used to create reactive variables.
```js
import { ref } from 'vue'
const count = ref(0)
```
- To access ref variable use .value property
```js
const count = ref(0)
console.log(count) // { value: 0 }
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

#### c) Computed Properties 
- Computed Properties are used to quickly calculate a value that depends on other values. 

```vue
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Book 1'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books: {{ publishedBooksMessage }}</p>
</template>

```


## 3. Conditional Rendering

- Render element based on condition using `v-if`, `v-else-if`, `v-else` 

```vue
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else>
  Not A/B
</div>
```
- Display element based on condition `v-show`

`v-show` is similar to `v-if`, but element remains in DOM. It toggles the `display` property under the hood. 
```vue
<h1 v-show="ok">Hello!</h1>
```


## 4. List Rendering
#### `v-for`

- Iterate over `array` 
```js
const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
```
```vue
<li v-for="(item,index) in items">
 {{ index }} - {{ item.message }}
</li>
```
- Iterate over `object` 
```js
const myObject = reactive({
  id: 1
  name: 'name',
})
```
```vue
<li v-for="(value, key) in myObject">
  {{ key }}: {{ value }}
</li>
```
- Iterate over `range`
```vue
<span v-for="n in 10">{{ n }}</span>
```
- Iterate using `template` tag. 
  - When using `v-if` and `v-for` together, they should be used on a different element

```vue
<template v-for="todo in todos">
  <li v-if="!todo.isComplete">
    {{ todo.name }}
  </li>
</template>

```
- Iterate with :key attribute
- `:key` is used by vue internally to track changes of items in a collection. It is always recommended to use `:key`, unless the iterated DOM content is very simple.  
```vue
<div v-for="item in items" :key="item.id">
  <!-- content -->
</div>
```
```vue
<template v-for="todo in todos" :key="todo.name">
  <li>{{ todo.name }}</li>
</template>
```




## 5. Class & Style Binding
#### a) Class Binding
- inline class binding
```vue
<!-- :class can be used together with plain class attribute  -->
<div class="item" :class="{ active: isActive }"></div>
```
- bind class to a reactive variable
```vue
<template>
<div :class="classObject"></div>
</template>
<script setup>
const classObject = reactive({
  active: true,
  'text-danger': false
})
</script>
```
- bind class to an array
```vue
<template>
<div :class="[activeClass, errorClass]"></div>
</template>
<script setup>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>
```
- conditionally bind class using ternary operator
```vue
<div :class="[isActive ? activeClass : '', errorClass]"></div>
```

- conditionally bind class using the object and array syntax
```vue
<div :class="[{ active: isActive }, errorClass]"></div>

```
#### b) Style Binding
- inline styles  binding
```js
const activeColor = ref('red')
const fontSize = ref(30)
```
```vue
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
-  bind styles to a reactive variable
```vue
<div :style="styleObject"></div>
```
```js
const styleObject = reactive({
  color: 'red',
  fontSize: '13px'
})

```
-  bind styles to an array
```vue
<div :style="[baseStyles, overridingStyles]"></div>

```



## 6. Event Handling
- Inline Handlers
```js
const count = ref(0)
```
```vue
<button @click="count++">Add 1</button>
<p>Count is: {{ count }}</p>
```
- Method Handlers 
```js
const name = ref('Vue.js')
function greet(event) {
  alert(`Hello ${name.value}!`)
  // `event` is the native DOM event
  if (event) {alert(event.target.tagName)}
}
```
```vue
<button @click="greet">Greet</button>
```
- Calling Methods with arguments using inline handlers 
```js
function say(message) {
  alert(message)
}
```
```vue
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>
```
- Event Modifiers
  - special postfixes that modify event behavior i.e.
`.prevent` translates to `event.preventDefault()`

- Built-in Event Modifiers
`.stop`,`.prevent`,`.self`,`.capture`,`.once`,`.passive`

```vue
<!-- the click event's propagation will be stopped -->
<a @click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form @submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a @click.stop.prevent="doThat"></a>
<!-- just the modifier -->

<form @submit.prevent></form>
<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div @click.self="doThat">...</div>
```




## 7. Form Inputs 
#### a) Text
```vue
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```
#### b) Multiline text using Textarea 
```vue
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```
#### c) Checkbox 
```vue
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

#### d) Multiple Checkboxes bind to one value 
```vue
const checkedNames = ref([])
```
```vue
<div>Checked names: {{ checkedNames }}</div>

<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>

<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>

```
#### e) Radio 
```vue
<div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
```

#### f) Select
```vue
<div>Selected: {{ selected }}</div>

<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```
#### g) Multiple Select
```vue
<div>Selected: {{ selected }}</div>

<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

#### h) Form Input Modifiers 
- `.lazy` synced after "change" instead of "input"

```vue
<input v-model.lazy="msg" />
```
- `.number`  automatically typecast as a number
```vue
<input v-model.number="age" />
```
`.trim` trim whitespace

```vue
<input v-model.trim="msg" />
```



## 8. Lifecycle Hooks

#### a) Registering Lifecycle Hooks 
```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```
#### a) Built-in Lifecycle Hooks 

- `onMounted()` is called after the component has been mounted.
- `onUpdated()` is called after the component has updated its DOM tree due to a reactive state change.
- `onUnmounted()` is called after the component has been unmounted.
- `onBeforeMount()` is called right before the component is to be mounted.
- `onBeforeUpdate()` is called right before the component is about to update its DOM tree due to a reactive state change.
- `onBeforeUnmount()` is called right before a component instance is to be unmounted
- `onErrorCaptured()` is called when an error propagating from a descendant component has been captured.
- `onActivated()` is called after the component instance is inserted into the DOM as part of a tree cached by <KeepAlive>.
-  `onDeactivated()` is called after the component instance is removed from the DOM as part of a tree cached by <KeepAlive>.


  
## 9. Watchers
`watch`  triggers a callback whenever a piece of reactive state changes

#### a) Simple data types 

```vue
<script setup>
import { watch, ref } from "vue";
const planet = ref("Earth");
watch(planet, (currentValue, oldValue) => {
  console.log(currentValue);
  console.log(oldValue);
});

</script>
```
#### b) Complex data types 
```vue
<script setup>
import { watch, ref } from "vue";
export default {
  setup() {
    // array
    const arr = ref([1, 2, 3]);
    watch(() => [...arr.value], (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    });

    //object
    const obj = ref({
      name: "",
    });   
    watch(obj.value, (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    });

  },
};
<script setup>
```


## 10. Template Refs
- `ref` is a special attribute that can be used to access to a DOM element directly.

#### a) Accessing refs
```vue
<script setup>
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const input = ref(null)

onMounted(() => {
  input.value.focus()
})
</script>

<template>
  <input ref="input" />
</template>

```
#### b) Refs inside `v-for`
```vue
<script setup>
import { ref, onMounted } from 'vue'

const items = ref(["item1","item2"])

const itemRefs = ref([])

onMounted(() => console.log(itemRefs.value.map(i => i.textContent))) // ["item1", "item2"]
</script>

<template>
  <ul>
    <li v-for="item in items" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
</template>
```


# III. Single-file Components

## 1. Single-file Components using `<script setup>`

- A Single-file Component is a file with `.vue` extension containing template, logic and styling.
- In `<script setup>` variables, function declarations, imports etc are directly usable in the template

```vue
<script setup>
// imports
import { capitalize } from './helpers'
import MyComponent from './MyComponent.vue'
// variable
const msg = 'Hello!'

// functions
function log() {
  console.log(msg)
}

</script>

<template>
  <button @click="log">{{ msg }}</button>
  <div>{{ capitalize('hello') }}</div>
  <MyComponent />
  </template>

```
### 2. Props
#### a) Declaring Props
- `defineProps()` macro is used to declare props in `<script setup>`: 

- define props as an array of strings
```vue
<script setup>
const props = defineProps(['foo'])
console.log(props.foo)
</script>
```
- define props as an object with specified validation types
```vue

<script setup>
defineProps({
  title: String,
  likes: Number
})
</script>
```
- The built-in types include `String`,`Number`,`Boolean`,`Array`,`Object`,`Date`,`Function`,`Symbol`


#### b) Passing Props
- MyComponent.vue 
```vue

<template>
  <h1>{{titleText}}</h1>
</template>

<script setup>
defineProps({
  titleText: String
})
</script>
```
- ParentComponent.vue 
- By convention `<PascalCase>` is used for components and `camel-case` for props

```vue
<!-- Passing static string prop -->
<MyComponent title-text="hello" />

<!-- Dynamically assign the value -->
<MyComponent v-bind:title-text="post.title" />

<!-- Dynamically assign the value using shorthand -->
<MyComponent :title-text="post.title" />

<!-- Dynamically assign the value of a complex expression -->
<MyComponent :title="post.title + ' !'" />
<MyComponent :ids="[1, 2, 3]" />
<MyComponent :item="{id:1,lang:'js'}" />
<!-- Including the prop with no value will imply `true`.  -->
<MyComponent has-results />
```

### 3. Events

#### a) Emitting & Listening to Events  
-  In `<script setup>`, `defineEmits` macro is used to define specific events to be emitted  
- By convention `camelCase` for event declaration and `camel-case` for event listener on parent component.

```vue
<template>
<button @click="buttonClick">click me</button>
</template>

<script setup>
const emit = defineEmits(['submit'])
function buttonClick() {
  emit('submit')
}
</script>
```

```vue
<!-- parent component -->
<MyComponent @submit="callback" />
```

### 4. Slots
- Slots can be used to pass any template content to a component

#### a) Using a slot

```vue
<ContentWrapper>
    <p>text</p>
    <AwesomeIcon name="plus" />
</ContentWrapper>

```
```vue
<!--  ContentWrapper.vue  -->
<div class="content-wrapper">
  <slot></slot> <!-- slot outlet will be replaced the template content -->
</div>
```

#### b) Using a slot with fallback 
- fallback content is used as a placeholder when no content is provided 
```vue
<div class="content-wrapper">
  <slot>
    Lorem Ipsum <!-- fallback content -->
  </slot>
</div>
```

#### c) Named Slots 
```vue
<div class="container">
  <header>
    <slot name="header"></slot>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>
    <slot name="footer"></slot>
  </footer>
</div>
```
- `<template v-slot:header>` or its shortcut `<template #header>` can be used to pass content to a named slot

```vue
<BaseLayout>
  <template #header>
    <h1>header</h1>
  </template>
  <template #default>
    <p>Lorem ipsum</p>
  </template>
  <template #footer>
    <p>footer</p>
  </template>
</BaseLayout>
```


### 5. Provide & Inject
#### a) Provide
```vue
<script setup>
import { provide } from 'vue'
provide(/* key */ 'message', /* value */ 'hello!')
</script>
```
#### b) App-level Provide 
```js
import { createApp } from 'vue'
const app = createApp({})
app.provide(/* key */ 'message', /* value */ 'hello!')
```
#### c) Inject
- Inject provided by an ancestor component
```vue
<script setup>
import { inject } from 'vue'
const message = inject('message')

// if no data matching "message" was provided
// `value` will be "default value"
const value = inject('message', 'default value')

</script>
```


### 6. Built-in Components
#### a) KeepAlive
- Conditionally caches component 
```vue
<!-- Inactive components will be cached! -->
<KeepAlive>
  <component :is="activeComponent" />
</KeepAlive>
```


#### b) Suspense
- Orchestrate async dependencies in a component tree.
It can render a loading state while waiting for multiple nested async dependencies to be resolved.The `<Suspense>` component has two slots: `#default` and `#fallback`. 
```vue
<Suspense>
  <!-- component with nested async dependencies -->
  <Dashboard />
  <!-- loading state via #fallback slot -->
  <template #fallback>
    Loading...
  </template>
</Suspense>
```

#### c) Teleport
- Teleport a part of a component's template into a DOM node that exists outside the DOM hierarchy of that component.
```vue
<button @click="open = true">Open Modal</button>
<Teleport to="body">
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
    <button @click="open = false">Close</button>
  </div>
</Teleport>
```

#### d) Transition
- Apply animations when an element or component is entering and leaving the DOM.

```vue
<template>
<button @click="show = !show">Toggle</button>
<Transition>
  <p v-if="show">hello</p>
</Transition>
</template>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

````

#### e) TransitionGroup
- Apply animations when an element or component is inserted into, removed from, or moved within a v-for list

```vue
<template>
<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</TransitionGroup>
</template>
<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
```
