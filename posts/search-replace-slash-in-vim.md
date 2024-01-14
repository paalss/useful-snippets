---
title: search replace slash in Vim
date: 2024-01-14
tags:
- vim
- neovim
---

To search replace the following:

```html
</b>:
```````

to:

```html
:</b>
```````

You can use [another separator](https://stackoverflow.com/questions/11823616/how-to-include-forward-slash-in-vi-search-replace).

Example using # instead of /:

```sh
:8,27s#</b>:#:</b>
```````
