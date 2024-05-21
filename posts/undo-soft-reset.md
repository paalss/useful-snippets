---
title: Undo soft reset
date: 2024-05-20T21:52:00.000Z
tags:
  - git
---
```bash
git reflog
```

copy hash (ex: 56e2f8f)

```bash
git checkout main/develop
git merge 56e2f8f
```
