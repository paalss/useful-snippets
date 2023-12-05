---
title: npm link library
ranking: 4
tags:
- npm link
---

If stuff doesn't update in app, try

- restarting servers
- `npm unlink @scope/library` on both sides and re-link
- Try as suggested in response from `npm cache clean`:


```sh
npm install --cache /tmp/empty-cache
```````

Then restart everything
