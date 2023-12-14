---
layout: ../../layouts/CheatSheet.astro
title: "HTML Cheatsheet"
---

## Synopsis

HTML is a markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

## Basic Tags of HTML

> Tags are like keywords which defines that how web browser will format and display the content.

| Command                | Description                                                                                                                               |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `<html>...</html>`     | Tag can be thought of as a parent tag for every other tag used in the page.                                                               |
| `<head>...</head>`     | Tag is used to specify meta data about the webpage. It includes the webpage’s name,its dependencies (JS and CSS scripts), font usage etc. |
| `<body>...</body>`     | Container for all the contents of the webpage.                                                                                            |
| `<base/>`              | Used to specify the base URL of your site,this tag makes linking to internal links on your site cleaner.                                  |
| `<meta/>`              | Can be useful for mentioning the page’s author,keywords, original published date etc.                                                     |
| `<link/>`              | This is used to link to scripts external to the webpage. Typically utilized for including stylesheets.                                    |
| `<style>...</style>`   | The style tag can be used as an alternative to an external style sheet, or complement it.Includes the webpage’s appearance information.   |
| `<script>...</script>` | Used to add code snippets, typically in JavaScript,to make webpage dynamic. It can also be used to just link to an external script.       |

## Tags to Structure Document

| Command                        | Description                                                                                                                    |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `<h1..h6> … </h1..h6>`         | Six different variations of writing a heading. `<h1>` Tag has the largest font size, while `<h6>` has the smallest.            |
| `<div>...</div>`               | A webpage’s content is usually divided into blocks, specified by the div tag.                                                  |
| `<span>...</span>`             | This tag injects inline elements, like an image, icon, emoticon without ruining the formatting/styling of the page.            |
| `<p>...</p>`                   | Plain text is placed inside the tag.                                                                                           |
| `<br>`                         | A Line Break for Webpages.It is used when wanting to write a new line.                                                         |
| `<hr/>`                        | In addition to switching to the next line, this tag also drawsa horizontal bar to indicate the end of the section.             |
| `<strike>...</strike>`         | Another old tag, this is used to draw a line atthe center of the text, so as to make it appearunimportant or no longer useful. |
| `<cite>...</cite>`             | Tag for citing author of a quote.                                                                                              |
| `<blockquote> … </blockquote>` | Quotes often go into this tag. Is used in tandem with the `<cite>`tag.                                                         |
| `<q> … </q>`                   | Similar to the above tag, but for shorter quotes.                                                                              |
| `<abbr> … </abbr>`             | Denotes abbreviations, along with the full forms.                                                                              |
| `<address> … </address>`       | Tag for specifying author’s contact details.                                                                                   |
| `<dfn> … </dfn>`               | Tag dedicated for definitions.                                                                                                 |
| `<code> … </code>`             | This is used to display code snippets within a paragraph.                                                                      |
| `<bdo dir="rtl/ltr"> … </bdo>` | Overrides the current directionality of text, so that the text within is rendered in a different direction.                    |

## Semantic Elements

> Semantic element clearly describes its meaning to both the browser and the developer.

| Command                          | Description                                                                                 |
| -------------------------------- | ------------------------------------------------------------------------------------------- |
| `<article> ... </article>`       | Defines independent, self-contained content                                                 |
| `<aside> ... </aside>`           | Defines content aside from the page content                                                 |
| `<details> ... </details>`       | Defines additional details that the user can view or hide                                   |
| `<figcaption> ... </figcaption>` | Defines a caption for a `<figure>` element webpage.                                         |
| `<figure> ... </figure>`         | Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc. |
| `<footer> ... </footer>`         | Defines a footer for a document or section                                                  |
| `<header> ... </header>`         | Specifies a header for a document or section                                                |
| `<main> ... </main>`             | Specifies the main content of a document                                                    |
| `<nav> ... </nav>`               | Defines navigation links                                                                    |
| `<section> ... </section>`       | Defines a section in a document                                                             |
| `<summary> ... </summary>`       | Defines a visible heading for a `<details>` element                                         |
| `<time> ... </time>`             | Defines a date/time                                                                         |
| `<pre> ... </pre>`               | Preserve both spaces and linebreaks                                                         |

## Formatting

> Formatting elements were designed to display special types of text:

| Command                  | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| `<b> ... </b>`           | Defines bold text                                    |
| `<em> ... </em>`         | Defines emphasized text                              |
| `<i> ... </i>`           | Defines a part of text in an alternate voice or mood |
| `<small> ... </small>`   | Defines smaller text                                 |
| `<strong> ... </strong>` | Defines important text                               |
| `<sub> ... </sub>`       | Defines subscripted text                             |
| `<sup> ... </sup>`       | Defines superscripted text                           |
| `<ins> ... </i>`         | Defines inserted text                                |
| `<del> ... </del>`       | Defines deleted text                                 |
| `<mark> ... </mark>`     | Defines marked/highlighted text                      |

## Links

> Links allow users to click their way from page to page.

| Command                         | Description                                                                                                                    |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `<a href=””> … </a>`            | Anchor tag. Primarily used for including hyperlinks.                                                                           |
| `<a href=”mailto:”> … </a>`     | Tag dedicated to sending emails.                                                                                               |
| `<a href=”tel:###-###”> … </a>` | Anchor tag for mentioning contact numbers. As the numbers are clickable, this can be particularly beneficial for mobile users. |
| `<a name=”name”> … </a>`        | This tag can be used to quickly navigate to a different part of the webpage.                                                   |
| `<a href=”#name”> … </a>`       | A variation of the above tag, this is only meant to navigate to a div section of the webpage.                                  |

## Images

> Images can improve the design and the appearance of a web page.

| Command                  | Description                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `<img />`                | A tag to display images in the webpage.                                                                                        |
| `src=”url”`              | The URL or path where the image is located on your drive or on the web.                                                        |
| `alt=”text”`             | The text written here is displayed when user hovers mouse over the image. Can be used to give additional details of the image. |
| `height=””`              | Specifies image height in pixels or percentages.                                                                               |
| `width=””`               | Specifies image width in pixels or percentages.                                                                                |
| `align=””`               | The relative alignment of the image. Can change with changes to other elements in the webpage.                                 |
| `border=””`              | Specifies border thickness of the image. If not mentioned, defaults to 0.                                                      |
| `<map> … </map>`         | Denotes an interactive (clickable) image.                                                                                      |
| `<map name=””> … </map>` | Name of the map associated between the image and the map.                                                                      |
| `<area />`               | Specifies image map area.                                                                                                      |
| `shape=””`               | Shape of the area.                                                                                                             |
| `coords=””`              | The coords attribute specifies the coordinates of an area in an image map.                                                     |

## Lists

> Lists allow web developers to group a set of related items in lists.

| Command        | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| `<ol> … </ol>` | Tag for ordered or numbered list of items.                  |
| `<ul> … </ul>` | Contrary to the above tag, used for unorderedlist of items. |
| `<li> … </li>` | Individual item as part of a list.                          |
| `<dl> … </dl>` | Tag for list of items with definitions.                     |
| `<dt> … </dt>` | The definition of a single term inline with body content.   |
| `<dd> … </dd>` | The description for the defined term.                       |

## Forms

> Form is used to collect user input. The user input is most often sent to a server for processing.

| Command            | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `<form> … </form>` | The parent tag for an HTML form.                                                 |
| `action=”url”`     | The URL listed here is where the form data will be submitted once user fills it. |
| `method=”POST”`    | It specifies which HTTP method (POST or GET) would be used to submit the form.   |

**Example:**

```html
<form method="POST" action="/page">
  <label for="name">Page Name</label>
  <input id="name" type="text" name="page_name" />
  <input type="submit" value="Create" />
</form>
```

## Input Types

|   Field Type    | HTML Code Notes                                         | Description |
| :-------------: | ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
|   plain text    | `<input type="text">`                                   | the type attribute can be omitted                                                            |
| password field  | `<input type="password">`                               | echoes dots instead of characters                                                            |
|    text area    | `<textarea></textarea>`                                 | a more customizable plain text area                                                          |
|    checkbox     | `<input type="checkbox">`                               | can be toggled on or off                                                                     |
|  radio button   | `<input type="radio">`| can be grouped with other inputs |
| drop-down lists | `<select><option>`                                      | [check here for more info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) |
|   file picker   | `<input type="file">`                                   | pops up an “open file” dialog                                                                |
|  hidden field   | `<input type="hidden">`                                 | nothing there!                                                                               |
|  submit button  | `<input type="submit">`                                 | activates the form's submission <br/>(a `POST` request or <br/>Javascript action)            |

### Important Attributes

**Input Tags Attributes:**

| keyword       | description                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------- |
| `type`        | the type of data that is being input (affects the "widget" that is used to display this element by the browser). |
| `name`        | the key used to describe this data in the HTTP request.                                                          |
| `id`          | the unique identifier that other HTML elements, JavaScript and CSS use to access this element in the browser.    |
| `value`       | the default data that is assigned to the element.                                                                |
| `placeholder` | not a default value, but a useful HTML5 addition of a data "prompt" for an input.                                |
| `disabled`    | a Boolean attribute indicating that the "widget" is not available for interaction.                               |

**Radio Buttons or Checkboxes Attributes:**

| keyword   | description                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------- |
| `checked` | a Boolean that indicates whether the control is selected by default (is false unless).                                |
| `name`    | the group to which this element is connected. For radio buttons, only one element per group (or name) can be checked. |
| `value`   | the data or value that is returned for a specific group (a multi-element control), if this element is checked.        |

## Inputs

| Command                          | Description                                                     |
| -------------------------------- | --------------------------------------------------------------- |
| `<input type="email" name=" ">`  | Sets a single-line textbox for email addresses.                 |
| `<input type="url" name=" ">`    | Sets a single-line textbox for URLs.                            |
| `<input type="number" name=" ">` | Sets a single-line textbox for a number.                        |
| `<input type="range" name=" ">`  | Sets a single-line text box for a range numbers.                |
| `<input type="date" name=" ">`   | Sets a single-line text box with a calendar showing the date .  |
| `<input type="month" name=" ">`  | Sets a single-line text box with a calendar showing the month . |
| `<input type="time" name=" ">`   | Sets a single-line text box with a calendar showing the time .  |
| `<input type="search" name=" ">` | Sets a single-line text box for searching .                     |
| `<input type="color" name=" ">`  | Sets a single-line text box for picking a color.                |

## Tables

> Tables allow web developers to arrange data into rows and columns.

| Command                    | Description                                                        |
| -------------------------- | ------------------------------------------------------------------ |
| `<table> … </table>`       | Marks a table in a webpage.                                        |
| `<caption> … </caption>`   | Description of the table is placed inside this tag.                |
| `<thead> … </thead>`       | Specifies information pertaining to specific columns of the table. |
| `<tbody> … </tbody>`       | The body of a table, where the data is held.                       |
| `<tfoot> … </tfoot>`       | Determines the footer of the table.                                |
| `<tr> … </tr>`             | Denotes a single row in a table.                                   |
| `<th> … </th>`             | The value of a heading of a table’s column.                        |
| `<td> … </td>`             | A single cell of a table. Contains the actual value/data.          |
| `<colgroup> … </colgroup>` | Used for grouping columns together.                                |
| `<col>`                    | Denotes a column inside a table.                                   |

## Graphics

| Command                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `<canvas> … </canvas>` | Used to draw graphics on a web page using javascript. |
| `<svg> … </svg>`       | Used to defines vector-based graphics in XML format.  |

## Media

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `<video> … </video>` | Used to show a video on a web page.       |
| `<audio> … </audio>` | Used to play an audio file on a web page. |

## Visual HTML Cheat Sheet

If you're a more visual person, check out this visual [HTML cheat sheet](https://www.git-tower.com/learn/cheat-sheets/html) available in light and dark versions.
