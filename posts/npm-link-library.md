---
title: npm link library
date: 2024-01-06
ranking: 4
tags:
  - npm link
---
### Start

- `npm link` in library
- `npm link libraryname` in app

### See if npm link works

Run `npm run build` in the library. See if it updates the app.


### If stuff doesn't update in app, try

- Restart app's dev server
- Try as suggested in response from `npm cache clean`:

```sh
npm install --cache /tmp/empty-cache
```
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

```
