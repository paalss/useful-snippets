---
title: Undo `git reset --soft HEAD~1` with reflog
date: 2026-03-19
tags:
- git
---

1. `git reflog` find commit before reset
2. `git checkout <commit>`
3. `git log` verify that this commit includes the resetted commit
4. `git branch --force <original-branch-name>`

References

- Docs: <https://git-scm.com/docs/git-branch#Documentation/git-branch.txt--f> 
- SO: <https://stackoverflow.com/questions/5471174/move-branch-pointer-to-different-commit-without-checkout>
