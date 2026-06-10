---
title: Neovim
date: 2026-06-10
tags:
- nvim
---

- `nvim --help`
- `nvim --clean`
- `nvim --startuptime time.txt`

```
  --clean               "Factory defaults" (skip user config and plugins, shada)
  --startuptime <file>  Write startup timing messages to <file>
```


## Slow?

Ting som folk har rapportert at kan være årsaken

- treesitter highlight
- lsp
- indent lines
- colorschemes - lsp-zero
- CursorMoved/CursorMovedI autocommands (tror ikke jeg har noe av det?)
