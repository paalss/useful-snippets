---
title: npm link library
ranking: 4
tags:
- npm link
---

### If stuff doesn't update in app, try

- Try restaring app dev servers
- Try as suggested in response from `npm cache clean`:
```sh
npm install --cache /tmp/empty-cache
```````
Then restart app dev servers

- `npm unlink @scope/library` on both sides and re-link

### If app cant find css

attempting to import css from app (like with bootstrap css) does not always work for some reason

inject css into js so that the package imports css by itself

### Reference

When npm link works, `npm ls @scope/package` should return:

```sh
app@0.1.0 /home/user/code/app
└── @scope/package@0.1.0 extraneous -> ./../packages/package-components-project

```````
