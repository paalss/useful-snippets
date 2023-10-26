---
title: install multiple versions of same dependency
---

```
npm i bootstrap-toc@npm:bootstrap@5.1.3 --save-exact
```

```
npm i bootstrap@5.2.3 --save-exact
```

usage

```js
const bootstrap = require("bootstrap-toc/dist/js/bootstrap.bundle.min.js");
new bootstrap.ScrollSpy(document.body, {
  target: "#scroll-nav",
  // give space for header
  offset: 100,
});
```
