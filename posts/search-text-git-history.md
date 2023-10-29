---
title: search text apperance in a file's git history
ranking: 5
tags:
- git
---

Eg. Search for "use-query-params" in `package.json`'s git history

```sh
git grep use-query-params $(git rev-list --all -- package.json) -- package.json
```````
