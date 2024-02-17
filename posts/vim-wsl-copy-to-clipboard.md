---
title: Neovim WSL copy to Windows system clipboard
date: 2024-02-13T09:01:05.897Z
tags:
  - vim
  - wsl
  - ubuntu
---
### Copy entire line

1. Select entire line visual mode
2. Enter command:
```sh
:'<,'>w !clip.exe
```

<https://stackoverflow.com/questions/61550552/how-to-copy-paste-from-vim-in-wsl>

### Click & drag method

1. `:set mouse=`
2. Click & drag
3. Ctrl C

Should be able to paste text content anywhere else

![copy from vim wsl](/images/copy-from-vim-wsl.png)

Image: Copy paste "  - Javascript" to OS system clipboard



---

set clipboard+=unnamed funker for Ideavim (.ideavimrc). Neovim gjennom WSL trenger kanskje mer verktøy for å funke
