---
title: Undo soft reset
date: 2024-05-20T21:52:00.000Z
tags:
  - git
---

<https://useful-snippets.netlify.app/posts/git-reset-soft/>

<https://useful-snippets.netlify.app/posts/git-reflog/>

```bash
git reflog
```

copy hash (ex: 56e2f8f)

```bash
git checkout main/develop
git merge 56e2f8f
```
