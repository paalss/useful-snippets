---
title: Revert changes introduced in old commit
date: 2025-08-11T12:13:00.000+02:00
tags:
  - bash
  - git
---
```sh
git checkout <commit-hash>
git log # copy previous commit hash
git diff <previous-commit-hash> > diff.patch
git checkout <main-or-up-to-date-branch>
git apply diff.patch --reverse
```
