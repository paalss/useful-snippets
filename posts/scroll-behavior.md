---
title: scroll behavior in different css-positions
tags:
- css
---

Discovery:

Set `position: fixed|avsolute` on parent element, and you can choose between instant and smooth scroll-behaviors (`scroll-behavior: initial|smooth`)

But with `position: sticky|relative|static` you can't choose. You're stuck with smooth scrolling

