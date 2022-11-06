---
layout: ../../layouts/CheatSheet.astro
title: "Nuxt JS Cheatsheet"
---

## Synopsis

Nuxt.js is an open-source JavaScript meta-framework for modern web development. Similar to the relationship between Next.js and React, Nuxt 3 builds on Vue 3 by providing a production-ready application architecture. It is a hybrid framework that leverages SSR and SSG capabilities as needed.

*Nuxt 3 is the latest release candidate version of Nuxt.js. Any future reference to "Nuxt" in this cheatsheet is a reference to Nuxt 3.*

## Quick Start

```bash
npx nuxi init <project-name>
cd <project-name>
yarn install
yarn dev -o
# opens to http://localhost:3000
```

## Directory Structure & Overview

Name            | Purpose
---             | ---
`.nuxt/`        | created when running `nuxt dev` to generate the app for development
`.output/`      | created when running `nuxt build` to build the app for production
`assets/`       | contains stylesheets, fonts, and imgs for the build tool to process
`components/`   | contains `.vue` files for use as components
`composables/`  | contains `.ts` files for use as composables
`content/`      | contains `.md`, `.yml`, `.csv`, and/or `.json` files for the [Nuxt Content module](https://content.nuxtjs.org/) to parse and create a file-based CMS
`layouts/`      | contains `.vue` files for use as layout components
`middleware/`   | contains named and global route middleware for use as navigation guards
`node_modules/` | created by the package manager to store dependencies
`pages/`        | contains `.vue`, `.ts`, and/or `.tsx` files for use by [Vue Router](https://router.vuejs.org/) as routes
`plugins/`      | contains `.vue` and/or `.ts` files for auto-registration as plugins
`public/`       | contains public files to be served at the server root
`server/`       | contains `/api`, `/routes`, and `/middleware` subdirectories to register API and server handlers with hot-module-replacement (HMR) support
`.gitignore`    | specifies intentionally untracked files that git should ignore
`.nuxtignore`   | specifies files in the root directory that Nuxt should ignore during the build phase
`app.config.ts` | defines runtime app configurations
`app.vue`       | the main component of the app
`nuxt.config.ts`| defines custom configurations
`package.json`  | defines dependencies and scripts
`tsconfig.json` | defines custom configurations of the auto-generated `.nuxt/tsconfig.json` file

## Core Elements & Concepts

### Components

Concept                 | Description
---                     | ---
Auto-naming             | <pre>> \| components/<br>> --\| base/<br>> ----\| foo/<br>> ------\| Button.vue<br></pre>becomes `<BaseFooButton />`
Dynamic components      | <pre>\<template><br>&nbsp;\<component :is="clickable ? MyButton : 'div'" /><br>\</template><br><br>\<script setup><br>&nbsp;const MyButton = resolveComponent('MyButton')<br>\</script></pre>
Dynamic (lazy) imports  | `<LazyTheFooter />` instead of `<TheFooter />`
\<ClientOnly>           | renders its wrapped code only on client-side
\<DevOnly>              | renders its wrapped code only during development

### Composables

Concept                 | Description
---                     | ---
Auto-importing          | Top-level files and `index` files of subdirectories are auto-imported into components and other composables.
Nested modules          | To auto-import nested modules, re-export them from `composables/index.ts`.

### Content

Concept                 | Description
---                     | ---
Installation            | 1. `yarn add - D @nuxt/content`<br>2. Add to `modules` section of `nuxt.config.ts`.
Usage                   | View the [Nuxt Content module documentation](https://content.nuxtjs.org/) for usage info.

### Layouts

Concept                 | Description
---                     | ---
Naming                  | Default layout: `layouts/default.vue`<br>Custom layout: `layouts/foo.vue`
Boilerplate             | <pre>*layouts/**.vue*<br><br>\<template><br>&nbsp;\<div><br>&nbsp;&nbsp;\<slot /><br>&nbsp;\</div><br>\</template>
Implementation          | 1. Wrap content of `app.vue` with `<NuxtLayout>`.<br>2. Use one of the following methods:<pre>*pages/**.vue*<br><br>\<script setup><br>definePageMeta({<br>&nbsp;layout: "*layout-name*",<br>});<br>\</script></pre>OR<pre>*app.vue*<br><br>\<template><br>&nbsp;\<NuxtLayout :name="layout"><br>&nbsp;&nbsp;\<NuxtPage /><br>&nbsp;\</NuxtLayout><br>\</template><br><br>\<script setup><br>const layout = "*layout-name*";<br>\</script></pre>
Dynamic layouts         | Use a ref or computed property.

### Middleware

Concept                 | Description
---                     | ---
Formatting              | <pre>*middleware/**/.vue*<br><br>export default defineNuxtRouteMiddleware((to, from) => {<br>&nbsp;if (to.params.id === '1') {<br>&nbsp;&nbsp;return abortNavigation()<br>&nbsp;}<br>&nbsp;return navigateTo('/')<br>})</pre>
Returnable helpers      | 1. `navigateTo ( to: RouteLocationRaw \| undefined \| null, options: { replace: boolean, redirectCode: number, external: boolean })`<br>2. `abortNavigation ( err?: string \| Error )`
Implementation          | <pre>*pages/**.vue*<br><br>\<script setup><br>definePageMeta({<br>&nbsp;middleware: ["auth"]<br>})<br>\<script></pre>

### Pages

Concept                 | Description
---                     | ---
Displaying pages        | Add `<NuxtPage />` to `app.vue`.
Displaying child pages  | 1. Nest the pages in the directory structure:<pre>> \| pages/<br>> --\| parent/<br>> ----\| child.vue/<br>> --\| parent.vue<br></pre>2. Insert `<NuxtPage :foobar="123" />` within the parent page.
Navigation              | Use `<NuxtLink>` in place of Vue Router's `<RouterLink>`.
Dynamic routes          | Square brackets denote a *dynamic route parameter*. Double square brackets denote an *optional parameter*.
Using parameters        | <pre>*pages/users-[group]/[id]*<br><br>\<template><br>&nbsp;\<p>{{ $route.params.group }} - {{ $route.params.id }}\</p><br>\</template></pre>Navigating to `/users-admins/123` would render: `<p>admins - 123</p>`.<br>To access params using Composition API, use `useRoute()`.
Metadata                | Metadata defined within the `definePageMeta` compiler macro can be accessed throughout the rest of the app from the `route.meta` object. See below for default metadata.

**Page Metadata**
Metadata                | Description
---                     | ---
`alias`                 | allows you to access the same page from different paths
`keepalive`             | setting to `true` will wrap the page in the Vue `<KeepAlive>` component
`layout`                | can be set to `false`, a string, or a ref/computed
`layoutTransition` and `pageTransition` | defines transition properties for the layout or page
`middleware`            | can be set to a string, a function, or an array of strings/functions
`name`                  | names the page's route, which can be referenced elsewhere

### Plugins

Concept                 | Description
---                     | ---
Auto-registration       | Top-level files and `index` files of subdirectories are auto-registered as plugins.
Registration order      | Plugins register in order. You can prefix a number to the file names (e.g. `1.myPlugin.ts`) to control the order.
App helper              | To provide a helper on the `NuxtApp` instance, return it from the plugin under a `provide` key.

### Server

Concept                 | Description
---                     | ---
`defineEventHandler()`  | exported from `/server` files; can return JSON data, return a `Promise`, or use `event.res.end()` to send response
`/api/`                 | APIs added to the `server/api/` subdirectory can be called universally using `await $fetch('/api/<file-name>')`. File names can use **dynamic parameters** like page routes, which can then be accessed via `event.context.params`. File names can be suffixed to match request's **HTTP Method**.
`/middleware/`          | Middleware added to the `server/middleware/` subdirectory will run on every request before any other server route to add or check headers, log requests, or extend the event's request object.
`/plugins/`             | Plugins added to the `server/plugins/` subdirectory will be registered as [Nitro plugins](https://nitro.unjs.io/guide/advanced/plugins)

## Rendering

Type                    | Implementation
---                     | ---
Universal rendering     | *Default*
Client-side rendering only  | <pre>export default defineNuxtConfig({<br>&nbsp;ssr: false<br>})</pre>
Hybrid rendering        | <pre>export default defineNuxtConfig({<br>&nbsp;routeRules: {<br>&nbsp;&nbsp;'/\<route-name>/**: { ssr: false }'<br>&nbsp;}<br>})

## TypeScript Support

Nuxt is fully typed, but doesn't check types by default at build or development time. To enable type-checking, install `vue-tsc` and `typescript` as devDependencies and enable the `typescript.typeCheck` option in your config file.
