---
title: npm link library
date: 2024-01-06
ranking: 4
tags:
  - npm link
---
### Start

- `npm link` in library
- `npm link @scope/library` in app

### See if npm link works

Run `npm run build` in the library. See if it updates the app.


### If stuff doesn't update in app, try

- Restart app's dev server
- Try as suggested in response from `npm cache clean`:

```sh
npm install --cache /tmp/empty-cache
```
Then restart app dev server

Maybe try this on the app side

- `npm unlink @scope/library`
- `npm link @scope/library`

Maybe also try this on the library side

- `npm unlink @scope/library`
- `npm link`

I don't think it's necessary to uninstall library from node modules.

### If app cant find css

attempting to import css from app (like with bootstrap css) does not always work for some reason

inject css into js so that the package imports css by itself

### Reference

When npm link works, `npm ls @scope/package` should return:

```sh
app@0.1.0 /home/user/code/app
└── @scope/package@0.1.0 extraneous -> ./../packages/package-components-project

```
