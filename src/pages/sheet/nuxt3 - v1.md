---
layout: ../../layouts/CheatSheet.astro
title: "Nuxt 3 Cheatsheet"
---

## Synopsis
Nuxt 3 is an open-source JavaScript meta-framework for modern web development. Similar to the relationship between Next.js and React, Nuxt 3 builds on Vue 3 by providing a production-ready application architecture. It is a hybrid framework that leverages SSR and SSG capabilities as needed.

*Nuxt 3 is the latest release candidate version of Nuxt.js. Any future reference to "Nuxt" in this cheatsheet is a reference to Nuxt 3.*

## Quick set-up
```bash
npx nuxi init <project-name>
cd <project-name>
yarn install
```
Start the app in **development mode**:
```bash
yarn dev -o
# opens to http://localhost:3000
```
A **minimal configuration** includes the following in *nuxt.config.ts*:
```ts
export default defineNuxtConfig({
  // My Nuxt config
})
```

## Core Concepts

### Auto-Importing
Nuxt will auto-import the following:
- Functions
- Composables
- Components
- Plugins

### Rendering Modes
By default, Nuxt uses universal rendering. Other options can be specified in the configuration file.

**Client-side rendering only**:
```ts
export default defineNuxtConfig({
  ssr: false
})
```
**Hybrid rendering**: 
```ts
export default defineNuxtConfig({
  routeRules: {
    '/<route-name>/**: { ssr: false }'
  }
})
```

### Server Engine
Nuxt uses [Nitro](https://github.com/unjs/nitro) as its server engine.

### Modules
Nuxt uses a module system to extend its core framework. Once installed, these modules should be added to you config file:
```ts
export default defineNuxtConfig({
  modules: [
    // Package name (recommended)
    '@nuxtjs/example',

    // Local module
    './modules/example',

    // Module with inline-options
    [ './modules/example', { token: '123' } ]
  ]
})
```

### TypeScript
Nuxt is fully typed, but doesn't check types by default at build or development time. To enable type-checking, install `vue-tsc` and `typescript` as devDependencies and enable the `typescript.typeCheck` option in your config file.

## Directory Structure Overview

Directory Name  | Purpose
---             | ---
`.nuxt/`        | Created when running `nuxt dev` to generate the app for development
`.output/`      | Created when running `nuxt build` to build the app for production
`assets/`       | Contains stylesheets, fonts, and imgs for the build tool to process
`components/`   | Contains `.vue` files for use as components
`composables/`  | Contains `.ts` files for use as composables
`content/`      | Contains `.md`, `.yml`, `.csv`, and/or `.json` files for the [Nuxt Content module](https://content.nuxtjs.org/) to parse and create a file-based CMS
`layouts/`      | Contains `.vue` files for use as layout components
`middleware/`   | Contains named and global route middleware for use as navigation guards
`node_modules/` | Created by the package manager to store dependencies
`pages/`        | Contains `.vue`, `.ts`, and/or `.tsx` files for use by [Vue Router](https://router.vuejs.org/) as routes
`plugins/`      | Contains `.vue` and/or `.ts` files for auto-registration as plugins
`public/`       | Contains public files to be served at the server root
`server/`       | Contains `/api`, `/routes`, and `/middleware` directories to register API and server handlers with hot-module-replacement (HMR) support
`.gitignore`    | Specifies intentionally untracked files that git should ignore
`.nuxtignore`   | Specifies files in the root directory that Nuxt should ignore during the build phase
`app.config.ts` | Defines runtime app configurations
`app.vue`       | The main component of the app
`nuxt.config.ts`| Defines custom configurations
`package.json`  | Defines dependencies and scripts
`tsconfig.json` | Defines custom configurations of the auto-generated `.nuxt/tsconfig.json` file

## Components

### Naming
Components are **auto-named** based on their nested directories and **auto-imported** into other components:
```
> | components/
> --| base/
> ----| foo/
> ------| Button.vue OR BaseFooButton.vue
```
... becomes `<BaseFooButton />`

### Dynamic Components
```vue
<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>

<script setup>
// use resolveComponent()
const MyButton = resolveComponent('MyButton')
</script>
```
### Dynamic (Lazy) Imports
Prepend component name with "Lazy": `<LazyTheFooter />`.

### \<ClientOnly> Component
Wrap code with `<ClientOnly></ClientOnly>` to render only on client-side.
To specify a fallback:
```vue
<!-- This renders the "span" element on the server side -->
<ClientOnly fallbackTag="span">
  <!-- this component will only be rendered on client side -->
  <Comments />
  <template #fallback>
    <!-- this will be rendered on server side -->
    <p>Loading comments...</p>
  </template>
</ClientOnly>
```
### \<DevOnly> Component
Wrap code with `<DevOnly></DevOnly>` to render only during development.

## Composables
Composables are **auto-imported**, can be **nested**, and can access **plugin injections**. Only files at the top level of the directory are scanned. To auto-import nested modules, re-export them from `composables/index.ts`.

## Content
The Nuxt Content module must be installed via `yarn add - D @nuxt/content` then added to the `modules` section of `nuxt.config.ts`. View the [documentation](https://content.nuxtjs.org/) for usage info.

## Layouts

### Creation
Layout boilerplate:
```vue
<template>
  <div>
    <slot />
  </div>
</template>
```
Set a default layout by adding a `layouts/default.vue`, or custom layouts by specifying its name such as `layouts/foo.vue`.

### Implementation
To use layouts, wrap the content of `app.vue` with `<NuxtLayout></NuxtLayout>`, then use of of two methods:

**Method 1**: Set a layout property in a specific page's metadata:
```vue
<script setup>
// This will work in both <script setup> and <script>
definePageMeta({
  layout: "custom",
});
</script>
```
**Method 2**: Specify the layout as a prop to <NuxtLayout> in `app.vue`:
```vue
<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
// You might choose this based on an API call or logged-in status
const layout = "custom";
</script>
```

Layouts can be **changed dynamically** via a ref or computed property.

## Middleware

### Creation
Format example:
```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  return navigateTo('/')
})
```
Returnable helpers:
1. `navigateTo (to: RouteLocationRaw | undefined | null, options: { replace: boolean, redirectCode: number, external: boolean )`
2. `abortNavigation (err?: string | Error)`

### Implementation
To implement named route middleware in a specific page, use the page meta:
```vue
<script setup>
definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})
</script>
```

## Pages

### Basic Usage
- If `pages/` is not added to the directory, the app will not use Vue Router.
- Add `<NuxtPage />` to `app.vue` to display the current page.
- Pages use `<Suspense>`, so they must have a single root element (including comments)
- Insert `<NuxtPage />` within a component to display a child component.
- Use `<NuxtLink>` to navigate between pages (replaces Vue Router's `<RouterLink>`)

### Dynamic Routes
Square brackets denote a **dynamic route parameter**. Double square brackets denote an **optional parameter**.

Parameters can be accessed within a component. Given the following:
```vue
<!-- route: pages/users-[group]/[id].vue -->
<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>
```
... navigating to `/users-admins/123` would render:
```vue
<p>admins - 123</p>
```

To access params using Composition API, use `useRoute()`.

### Metadata
Metadata defined within the `definePageMeta` compiler macro can be accessed throughout the rest of the app from the `route.meta` object.

Predefined metadata:
- [`alias`](https://router.vuejs.org/guide/essentials/redirect-and-alias.html#alias): allows you to access the same page from different paths
- [`keepalive`](https://vuejs.org/guide/built-ins/keep-alive.html#keepalive): setting to `true` will wrap the page in the Vue `<KeepAlive>` component
- [`layout`](https://v3.nuxtjs.org/guide/directory-structure/layouts): can be set to `false`, a string, or a ref/computed
- [`layoutTransition` and `pageTransition`](https://vuejs.org/api/built-in-components.html#transition): defines transition properties for the layout or page
- [`middleware`](https://v3.nuxtjs.org/guide/directory-structure/middleware): can be set to a string, a function, or an array of strings/functions
- `name`: names the page's route, which can be referenced elsewhere

## Plugins
- Only top level files in the `plugins/` directory (or index files within subdirectories) will be registered as plugins.
- `nuxtApp` is the only argument passed to `defineNuxtPlugin`.
- Plugins register in order. You can prefix a number to the file names (e.g. `1.myPlugin.ts`) to control the order.
- Composables can be used in plugins.
- To provide a helper on the `NuxtApp` instance, retrun it from the plugin under a `provide` key.

## Server
Files in the `/server` directory should export a default function using `defineEventHandler()` and can return JSON data, return a `Promise`, or use `event.res.end()` to send response.

### APIs
APIs added to the `server/api/` subdirectory can be called universally using `await $fetch('/api/<file-name>')`. File names can use **dynamic parameters** like page routes, which can then be accessed via `event.context.params`. File names can be suffixed to match request's **HTTP Method**.

### Middleware
Middleware added to the `server/middleware/` subdirectory will run on every request before any other server route to add or check headers, log requests, or extend the event's request object.

### Plugins
Plugins added to the `server/plugins/` subdirectory will be registered as [Nitro plugins](https://nitro.unjs.io/guide/advanced/plugins)
