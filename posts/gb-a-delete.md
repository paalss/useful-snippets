---
title: Delete all branches listed by `git branch -a`
date: 2023-10-29
tags:
- git
- cli
---

Færre antall branches i code completion suggestion når du skriver `git checkout feat`-[Tab].

**Slett alle branches som ikke finnes på remote:**

```sh
git fetch -p
```

(git fetch prune)

Også, sørg for å slette unødvendige tags

**List tags**

```sh
git tag
```

```sh
git tag -d tagName
```

