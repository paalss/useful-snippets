---
title: IDE functionalities deactivated by Vim
date: 2024-01-13
ranking: 3
tags:
  - vscode
  - webstorm
  - vim
---
hvor mye er deaktivert/ufordel i Webstorm/VSCode når du har på Vim plugin?

### Webstorm IdeaVim

- IDE's multi-select with Ctrl D doesn't work with entering insert mode using eg. using `a`
 - but `c` works
- Annoying to save file that is edited in commit changes window
  - if in normal mode, pressing "Esc" will exit "commit changes"-window
  - unlike when terminal is focused, you can't disable the "Esc-> focus normal file view"
- ~~paste from OS registry (copy paste from UI app into Webstorm in IdeaVim)~~ Kan fikses ved å registrere `ctrl C` og `ctrl V` som IDE-shortcuts (se <https://useful-snippets.netlify.app/posts/webstorm-ideavim-shortcut-settings/>)
- vim search not as good as built-in search
  - vim won't highlight/preview as you search/replace
  - to activate built-in search you would have to give up `ctrl F` and `ctrl H` to IDE

### VSCode's Vim

- Fuzzy finder
- Search?
- Search in files?

