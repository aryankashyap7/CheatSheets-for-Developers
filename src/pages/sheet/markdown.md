---
layout: ../../layouts/CheatSheet.astro
title: "Markdown Cheatsheet"
---

## Synopsis

Markdown is a lightweight markup language with plain text formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Headers

```markdown
# This is an `<h1>` tag

## This is an `<h2>` tag

###### This is an `<h6>` tag
```

## Emphasis

```markdown
_This text will be italic_
_This will also be italic_

**This text will be bold**
**This will also be bold**

_You **can** combine them_
```

## Strikethrough
```markdown
~~ Text goes here ~~
```

## Subscript
```markdown
<sub>This is a subscript text</sub>
```

## Superscript
```markdown
<sup>This is a superscript text</sup>
```

## Lists

```markdown
Unordered

- Item 1
- Item 2
  - Item 2a
  - Item 2b

Ordered

1. Item 1
2. Item 2
3. Item 3
   3.1. Item 3a
   3.2. Item 3b
```

## Links

```markdown
[GitHub](http://github.com)
```

## Images

```markdown
![GitHub Logo](/images/logo.png)

Format: ![Alt Text](url)
```

## Code and Syntax Highlighting

````markdown
Inline `code`

Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```javascript
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: "#foo" });
  }
}
```
````

## Tables

```markdown
| Syntax | Description |
| ------ | ----------- |
| Header | Title       |

| Paragraph | Text |
```

## Blockquotes

```markdown
As Kanye West said:

> We're living the future so

> the present is our past.
```

## Inline HTML

```markdown
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>

    <dt>Markdown in Markdown</dt>
    <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>

</dl>
```

## Horizontal Rule

```markdown
Three or more of these (any):
... Periods
*** Asterisks
--- Hypens
___ Underscores
```

## Line Breaks

There's no such thing as a "line break" in Markdown. If you want a line break, you end the line with two or more spaces, then type return.

```markdown
This is the first line.
This is the second line.
```

## YouTube Videos

```markdown
{% youtube %}https://www.youtube.com/watch?v=-A_WlNu6kVY{% endyoutube %}
```

## GIFs

```markdown
{% gif %}https://media.giphy.com/media/3o7TKSjRrfIPjeiVyE/giphy.gif{% endgif %}
```

## Github Flavored Markdown

```markdown
GitHub supports emoji!
:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat:
```

## Emoji

This is a list of all the emojis that are supported by GitHub. For more information, see "[Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/)".

````markdown
```markdown
🍁🚀🙂🥵🎯⭐🤭❤️👍😊😂
```
````

## Task Lists

```markdown
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

## Dropdowns

```markdown
<details open>
  Text goes here
</details>
```

