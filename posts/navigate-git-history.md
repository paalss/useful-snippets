---
title: navigate git history
date: 2025-12-02
tags:
  - git
  - bash
  - zsh
---

```sh
git checkout HEAD^ # back
git checkout HEAD@{1} # go to previous HEAD position
```

## Go forward

- <https://stackoverflow.com/questions/6759791/how-do-i-move-forward-and-backward-between-commits-in-git>

## List ancestry (later) commits

From `HEAD` (older commit) to `main` branch (up-to-date)

```sh
git log --reverse --ancestry-path HEAD^..main
```

- <https://stackoverflow.com/questions/2263674/how-do-i-find-the-next-commit-in-git-child-children-of-ref>
