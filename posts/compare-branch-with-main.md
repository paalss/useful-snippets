---
title: compare branch with main
date: 2025-10-31
tags:
  - git
  - cli
---

```bash
git diff develop..$(git branch --show-current)
```

`git branch --show-current` is current branch
