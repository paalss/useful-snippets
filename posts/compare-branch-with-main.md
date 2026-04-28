---
title: compare branch with main
date: 2025-10-31
tags:
  - git
  - cli
  - lazygit
  - vscode
  - webstorm
  - neovim
---

# CLI


```bash
git diff main..HEAD # does not include uncommitted changes
```
---

```bash
git diff main..$(git branch --show-current) # does not include uncommitted changes
```
---

```bash
git show $(git branch --show-current)
```

---

`git branch --show-current` is current branch

# Lazygit

1. Highlight main branch
2. Shift w & hit enter
3. highlight the branch you want to compare with

# Webstorm

1. GitToolBox? Should not be necessary I think

<https://useful-snippets.netlify.app/posts/webstorm-compare-with-branch/>

![image](/images/compare-with-main.png)

# VS Code

1. Gitlens?

# Neovim

1. Diffview
