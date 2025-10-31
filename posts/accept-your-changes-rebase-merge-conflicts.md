---
title: Accept your changes - rebase merge conflicts
date: 2025-10-16T15:36:00.000+02:00
tags:
  - git
  - cli
---
<!--
```sh
git rebase -X theirs main
```

```sh
git rebase -X theirs develop -i
```
-->

```sh
git tag branch_before_rebase
git rebase -X theirs develop
```
- Manually compare current branch with `branch_before_rebase`
- Correct whatever needs to be corrected

