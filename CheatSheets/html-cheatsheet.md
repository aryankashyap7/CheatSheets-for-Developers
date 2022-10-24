---
title: HTML
description: HTML cheatsheet contains useful tags along with their usage
created: 2022-10-24
updated: 2022-20-24
---

## HTML

### Basic tags

- `<html> </html>` Creates an HTML document.
- `<head> </head>` Sets off the title & other info that isn't displayed.
- `<body> </body>` Sets off the visible portion of the document
- `<title> </title>` Puts name of the document in the title bar

### Body attributes (only used in email newsletters)

- `<body bgcolor=?>`
  Sets background color, using name or hex value
- `<body text=?>`
  Sets text color, using name or hex value
- `<body link=?>`
  Sets color of links, using name or hex value
- `<body vlink=?>`
  Sets color of visited links, using name or hex value
- `<body alink=?>`
  Sets color of active links (while mouse-clicking)

### Formatting

- `<p> </p>`
  Creates a new paragraph
- `<br>`
  Inserts a line break (carriage return)
- `<blockquote> </blockquote>`
  Puts content in a quote - indents text from both sides
- `<div> </div>`
  Used to format block content with CSS
- `<span> </span>`
  Used to format inline content with CSS

### Links

```
<a href="URL">clickable text</a>
```

Creates a hyperlink to a Uniform Resource Locator

```
 <a href="mailto:EMAIL_ADDRESS">clickable text</a>

```

Creates a hyperlink to an email address

- `<a name="NAME">`
  Creates a target location within a document
- `<a href="#NAME">clickable text</a>`
  Creates a link to that target location

### Lists

- `<ul> </ul>` Creates an unordered list
  `<ol start=?> </ol>` Creates an ordered list (start=xx,
  where xx is a counting number)
- `<li> </li>` Encompasses each list item
- `<dl> </dl>` Creates a definition list
- `<dt>` Precedes each defintion term
- `<dd>` Precedes each definition

### Text Tags

- `<pre> </pre>` Creates preformatted text
- `<h1> </h1> --> <h6> </h6>`
  Creates headlines -- H1=largest, H6=smallest
- `<b> </b>` Creates bold text
- `<i> </i>` Creates italicized text
- `<tt> </tt>` Creates typewriter-style text
- `<code> </code>` Used to define source code, usually monospace
- `<cite> </cite>` Creates a citation, usually processed in italics
- `<address> </address>` Creates address section, usually processed in italics
- `<em> </em>` Emphasizes a word (usually processed in italics)
- `<strong> </strong>` Emphasizes a word (usually processed in bold)

### Forms

- `<form> </form>` Defines a form

```
  <select multiple name=? size=?> </select>

```

Creates a scrolling menu. Size sets the number of
menu items visible before user needs to scroll.

- `<select name=?> </select>` Creates a pulldown menu
- `<option>` Sets off each menu item

```<textarea name=? cols="x" rows="y"></textarea>

```

Creates a text box area. Columns set the width;
rows set the height.

- `<input type="checkbox" name=? value=?>` Creates a checkbox.
- `<input type="checkbox" name=? value=? checked>` Creates a checkbox which is pre-checked.
- `<input type="radio" name=? value=?>` Creates a radio button.
- `<input type="radio" name=? value=? checked>` Creates a radio button which is pre-checked.
- `<input type="text" name=? size=?>` Creates a one-line text area. Size sets length, in characters.
- `<input type="submit" value=?>` Creates a submit button. Value sets the text in the submit button.
- `<input type="image" name=? src=? border=? alt=?>` Creates a submit button using an image.
- `<input type="reset">` Creates a reset button

### Tables (use only for data layout - use CSS for page layout)

- `<table> </table>` Creates a table
- `<tr> </tr>` Sets off each row in a table
- `<td> </td>` Sets off each cell in a row
- `<th> </th>` Sets off the table header (a normal cell with bold, centered text)

### Table attributes (only use for email newsletters)

- `<table cellspacing=?>` Sets amount of space between table cells
- `<table cellpadding=?>` Sets amount of space between a cell's border and its contents
- `<table width=?>` Sets width of the table in pixels or as a percentage
- `<tr align=?>` Sets alignment for cells within the row(left/center/right)
- `<tr valign=?>` Sets vertical alignment for cells within the row(top/middle/bottom)
- `<td rowspan=?>` Sets number of rows a cell should span (default=1)
- `<td colspan=?>`Sets number of columns a cell should span
- `<td nowrap>` Prevents lines within a cell from being broken to fit

### Graphical elements

- `<hr>` Inserts a horizontal rule
- `<hr size=?>` Sets size (height) of horizontal rule
- `<hr width=?>` Sets width of rule (as a % or absolute pixel length)
- `<hr noshade>` Creates a horizontal rule without a shadow
- `<img src="URL" />` Adds image; it is a separate file located at the URL
- `<img src="URL" align=?>` Aligns image left/right/center/bottom/top/middle (use CSS)
- `<img src="URL" border=?>` Sets size of border surrounding image (use CSS)
- `<img src="URL" height=?>` Sets height of image, in pixels
- `<img src="URL" width=?>` Sets width of image, in pixels
- `<img src="URL" alt=?>` Sets the alternate text for browsers that can't process images (required by the ADA)
