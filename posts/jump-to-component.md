---
title: Jump to main component vim
date: 2025-12-15
tags:
  - nvim
  - vim
  - ideavim
---

# Vim/Neovim

yank filename without extension to 'f'-registry

```
:let @f = expand('%:t:r')<CR>
```

search for "const [contents in 'f'-registry]"

```
:execute '/const ' . @f<CR>:nohlsearch<CR>
```

added together

```
:let @f = expand('%:t:r')<CR>:execute '/const ' . @f<CR>:nohlsearch<CR>
```

# Ideavim

Copy file name to + register and search for it. Do not execute immediately (<CR>) as CopyFileName also includes the file extension

```
:action CopyFileName<CR>/const <c-r>+
```
