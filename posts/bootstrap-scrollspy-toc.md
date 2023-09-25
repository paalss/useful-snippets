---
title: Bootstrap scrollspy react
tags:
- react
- javascript
---

# HTML

## with data attributes :heavy_check_mark:

{%raw%}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div style="display: flex; background: #f5f2f2;">
      <aside>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#heading1">
            Heading 1
          </a>
          <a class="list-group-item list-group-item-action" href="#heading2">
            Heading 2
          </a>
          <a class="list-group-item list-group-item-action" href="#heading3">
            Heading 3
          </a>
          <a class="list-group-item list-group-item-action" href="#heading4">
            Heading 4
          </a>
          <a class="list-group-item list-group-item-action" href="#heading5">
            Heading 5
          </a>
        </div>
      </aside>
      <article
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        tabIndex="0"
        style="position: relative; height: 500px; overflow-y: scroll;"
      >
        <!--<article style="position: relative; height: 500px; overflow-y: scroll;">-->
        <h1>Hello CodeSandbox</h1>
        <h2 id="heading1">Heading 1</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading2">Heading 2</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading3">Heading 3</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading4">Heading 4</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading5">Heading 5</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </article>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      /*const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#list-example"
      });*/
      // $("body").scrollspy({ target: "#navbar-example" });
    </script>
  </body>
</html>

```
{%endraw%}

## with JS :x:

Highlight only goes down

{%raw%}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Static Template</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div style="display: flex; background: #f5f2f2;">
      <aside>
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#heading1">
            Heading 1
          </a>
          <a class="list-group-item list-group-item-action" href="#heading2">
            Heading 2
          </a>
          <a class="list-group-item list-group-item-action" href="#heading3">
            Heading 3
          </a>
          <a class="list-group-item list-group-item-action" href="#heading4">
            Heading 4
          </a>
          <a class="list-group-item list-group-item-action" href="#heading5">
            Heading 5
          </a>
        </div>
      </aside>
      <article style="position: relative; height: 500px; overflow-y: scroll;">
        <h1>Hello CodeSandbox</h1>
        <h2 id="heading1">Heading 1</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading2">Heading 2</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading3">Heading 3</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading4">Heading 4</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading5">Heading 5</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </article>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="jquery-3.6.4.min.js"></script>
    <script>
      const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: "#list-example"
      });
      // $("body").scrollspy({ target: "#navbar-example" });
    </script>
  </body>
</html>

```
{%endraw%}


## With JS :heavy_check_mark:

{%raw%}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Static Template</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div style="background: #f5f2f2;">
      <aside class="navbar navbar-nav fixed-top">
        <div id="list-example" class="list-group">
          <a class="list-group-item list-group-item-action" href="#heading1">
            Heading 1
          </a>
          <a class="list-group-item list-group-item-action" href="#heading2">
            Heading 2
          </a>
          <a class="list-group-item list-group-item-action" href="#heading3">
            Heading 3
          </a>
          <a class="list-group-item list-group-item-action" href="#heading4">
            Heading 4
          </a>
          <a class="list-group-item list-group-item-action" href="#heading5">
            Heading 5
          </a>
        </div>
      </aside>
      <article>
        <!--<article style="position: relative; height: 500px; overflow-y: scroll;">-->

        <h1>Hello CodeSandbox</h1>
        <h2 id="heading1">Heading 1</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading2">Heading 2</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading3">Heading 3</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading4">Heading 4</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading5">Heading 5</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </article>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: "#navbar"
        });
      });
    </script>
  </body>
</html>
```

{%endraw%}

{%raw%}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>
  </head>

  <body class="m-3">
    <center>
      <div id="navbar">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#geeks1">Geeks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#for">For</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#geeks2">Geeks</a>
            </li>
          </ul>
        </nav>
        <br /><br />
        <h1 class="text-success">GeeksforGeeks</h1>
        <strong>Scrollspy in Bootstrap 5 via Javascript</strong>
        <br />
        <div id="geeks1" class="border border-dark" style="padding: 20px 20px;">
          <h1>About Us</h1>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>
            GeeksforGeeks is a one-stop destination for Computer Science
            students. Computer Science is a huge field, thus students must
            select a suitable platform that can meet all their needs, including
            Tutorials & Courses, Placement Preparation, and Interview
            Experiences, among others.
          </p>

          <p></p>
        </div>

        <div id="for" class="border border-warning" style="padding: 20px 20px;">
          <h1>Advantages</h1>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>

          <p>
            1. One-Stop Destination for Algorithms and Data Structures Knowledge
          </p>
          <p>2. Learn Multiple Programming Languages</p>
          <p>
            3. Boost Your Skills with Various GeeksforGeeks Courses
          </p>
        </div>

        <div
          id="geeks2"
          class="border border-secondary"
          style="padding: 20px 20px;"
        >
          <h1>Technology</h1>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>
          <p>EEEEEEEEE</p>

          <p>
            A Computer Science portal for geeks. It contains well written, well
            thought and well explained computer science and programming
            articles, quizzes and practice/competitive programming/company
            interview Questions.
          </p>
          <p>Prepare With Us</p>
          <p>Get Hired With Us</p>
          <p>Grow With Usling!</p>
        </div>
      </div>
    </center>

    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: "#navbar"
        });
      });
    </script>
  </body>
</html>
```
{%endraw%}


# React

## With data attributes :x:

not working at all

## With JS 1: :heavy_check_mark:

{%raw%}

```js
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#list-example"
    });
  }, []);

  return (
    <div
      style={{
        background: "#f5f2f2"
      }}
    >
      <aside class="navbar navbar-nav fixed-top">
        <div id="list-example" className="list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#heading1"
          >
            Heading 1
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading2"
          >
            Heading 2
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading3"
          >
            Heading 3
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading4"
          >
            Heading 4
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading5"
          >
            Heading 5
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading6"
          >
            Heading 6
          </a>
        </div>
      </aside>
      <article>
        <h1>Hello CodeSandbox</h1>
        <h2 id="heading1">Heading 1</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading2">Heading 2</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading3">Heading 3</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading4">Heading 4</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading5">Heading 5</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading6">Heading 6</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </article>
    </div>
  );
}

```
{%endraw%}


## With JS 2: :x:

Highlight only goes down

{%raw%}


```js
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import * as bootstrap from "bootstrap";
//import "bootstrap/dist/js/bootstrap.bundle.min";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { useState, useEffect } from "react";

export default function App() {
  useEffect(() => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: "#list-example"
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        background: "#f5f2f2"
      }}
    >
      <aside>
        <div id="list-example" className="list-group">
          <a
            className="list-group-item list-group-item-action"
            href="#heading1"
          >
            Heading 1
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading2"
          >
            Heading 2
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading3"
          >
            Heading 3
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading4"
          >
            Heading 4
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading5"
          >
            Heading 5
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#heading6"
          >
            Heading 6
          </a>
        </div>
      </aside>
      <article
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        tab-index="0"
        style={{ position: "relative", height: "500px", overflowY: "scroll" }}
      >
        <h1>Hello CodeSandbox</h1>
        <h2 id="heading1">Heading 1</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading2">Heading 2</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading3">Heading 3</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading4">Heading 4</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading5">Heading 5</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <h2 id="heading6">Heading 6</h2>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
        <p>Some text</p>
      </article>
    </div>
  );
}

```

{%endraw%}
