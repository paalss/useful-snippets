---
title: IDE vim shortcut override settings
date: 2024-01-21T00:00:00Z
tags:
  - webstorm
  - vim
  - ideavim
  - zed
---
### Setup

Install IdeaVim plugin

Setup `ctrl Q` for toggling Vim on/off

![Keymaps](/images/webstorm-keymap-vim-settings.png)

### Settings

Turn Vim on

reserve certain shortcuts to IDE

like:

* `ctrl Q` so we can toggle Vim efficiently
* `ctrl C` to enable copying to OS registry
* `ctrl V` to enable pasting from OS registry

![settings](/images/webstorm-editor-vim-settings.png)

&nbsp;

&nbsp;

### Zed

```json
{
  "context": "Editor && !menu",
  "bindings": {
    "ctrl-f": "buffer_search::Deploy",      // vim default: page down
    "ctrl-c": "editor::Copy",               // vim default: return to normal mode
    "ctrl-x": "editor::Cut",                // vim default: decrement
    "ctrl-v": "editor::Paste",              // vim default: visual block mode
    "ctrl-a": "editor::SelectAll",          // vim default: increment
    "ctrl-y": "editor::Undo",               // vim default: line up
    "ctrl-t": "project_symbols::Toggle",    // vim default: go to older tag
    "ctrl-o": "workspace::Open",            // vim default: go back
    "ctrl-s": "workspace::Save",            // vim default: show signature
    "ctrl-b": "workspace::ToggleLeftDock"   // vim default: down
  }
},
```

<https://zed.dev/docs/vim#restoring-common-text-editing-and-zed-keybindings>









&nbsp;