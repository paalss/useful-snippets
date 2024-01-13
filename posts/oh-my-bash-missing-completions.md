---
title: Oh my bash adding missing code completions
date: 2023-10-22
tags:
- ohmybash
---

```sh
source /usr/share/bash-completion/completions/git
__git_complete gco _git_checkout
__git_complete gb _git_branch
__git_complete gbs _git_bisect
__git_complete ga _git_add
__git_complete gcmsg _git_commit
__git_complete gcs _git_commit
__git_complete gd _git_diff
__git_complete gl _git_pull
__git_complete gp _git_push
__git_complete gm _git_merge
```
