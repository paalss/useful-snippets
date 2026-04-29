---
title: navigate git history
date: 2025-12-02T00:00:00Z
tags:
  - git
  - bash
  - zsh
---

## Go forward / List ancestry (later) commits

* [https://stackoverflow.com/questions/6759791/how-do-i-move-forward-and-backward-between-commits-in-git](https://stackoverflow.com/questions/6759791/how-do-i-move-forward-and-backward-between-commits-in-git)

From `HEAD` (older commit) to `main` branch (up-to-date)

```sh
git log --reverse --ancestry-path HEAD^..main
```
* [https://stackoverflow.com/questions/2263674/how-do-i-find-the-next-commit-in-git-child-children-of-ref](https://stackoverflow.com/questions/2263674/how-do-i-find-the-next-commit-in-git-child-children-of-ref)

## stuff

```sh
git checkout HEAD^ # back
git checkout HEAD@{1} # go to previous HEAD position
```
