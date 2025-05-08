---
title: tmux config
date: 2025-05-08T12:12:00.000Z
tags:
  - tmux
---
# Active colors

## Window/tab bar

In version 3.3 use the answer in comment provided here by @AntK.

```
set-window-option -g window-status-current-style bg=red
In version 2.9 You should change this options to something like:
```

Active window title color

```
setw -g window-status-current-style fg=black,bg=white
```

## Panel

https://stackoverflow.com/questions/4889724/how-can-you-tell-which-pane-in-tmux-is-focused
