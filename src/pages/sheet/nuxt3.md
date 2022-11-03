---
layout: ../../layouts/CheatSheet.astro
title: "Nuxt 3 Cheatsheet"
---

## Synopsis
Nuxt 3 is an open-source JavaScript meta-framework for modern web development. Similar to the relationship between Next.js and React, Nuxt 3 builds on Vue 3 by providing a production-ready application architecture. It is a hybrid framework that leverages SSR and SSG capabilities as needed. Nuxt 3 is the latest release candidate version of Nuxt.js.

## Quick set-up
In VS Code, use the following commands to **create a new project** and install the dependencies:
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
