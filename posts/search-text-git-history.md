---
title: search for text appearance in a file's git history
date: 2023-11-05
ranking: 5
tags:
- git
- cli
---

Eg. Search for "use-query-params" in `package.json`'s git history

```sh
git grep use-query-params $(git rev-list --all -- package.json) -- package.json
```````
