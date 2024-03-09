---
title: Neovim WSL copy to Windows system clipboard
date: 2024-02-13T09:01:05.897Z
tags:
  - vim
  - wsl
  - ubuntu
---

EDIT:

unnamedplus funker for WSL. men bare ikke i windows 11 ser det ut som?
---

### See if Neovim lacks Clipboard

```
:CheckHealth
```

```
Clipboard (optional) ~
- WARNING No clipboard tool found. Clipboard registers (`"+` and `"*`) will not work.
  - ADVICE:
    - :help |clipboard|
```

Clipboard help: <https://useful-snippets.netlify.app/posts/neovim-reference-manual/>



### Copy entire line

1. Select entire line visual mode
2. Enter command:
```sh
:'<,'>w !clip.exe
```

<https://stackoverflow.com/questions/61550552/how-to-copy-paste-from-vim-in-wsl>

### Click & drag method

1. ~~`:set mouse=`~~ Neovim config already has this set as default
2. Click & drag
3. Ctrl C

Should be able to paste text content anywhere else

![copy from vim wsl](/images/copy-from-vim-wsl.png)

Image: Copy paste "  - Javascript" to OS system clipboard



---

set clipboard+=unnamed funker for Ideavim (.ideavimrc). Neovim gjennom WSL trenger kanskje mer verktøy for å funke
