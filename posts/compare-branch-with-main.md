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

```bash
git diff develop..$(git branch --show-current)
```

`git branch --show-current` is current branch

# Lazygit

1. Highlight main branch
2. Shift w & hit enter
3. highlight the branch you want to compare with

# Webstorm

1. GitToolBox

<https://useful-snippets.netlify.app/posts/webstorm-compare-with-branch/>

# VS Code

1. Gitlens?

# Neovim

1. Diffview
