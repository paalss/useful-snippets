---
title: Check if a file exists (pre-push example)
date: 2026-03-03T00:00:00Z
tags:
  - sh
  - bash
  - zsh
  - git-hooks
  - pre-push
---
# Bash

## Check existence

```bash
lpo() {
  if [[ -f ".git/hooks/pre-push" ]]; then
    echo ".git/hooks/pre-push was found:"
    echo "pre-push is activated"
  else
    if [[ -f ".git/hooks/pre-push.sample" ]]; then
      echo ".git/hooks/pre-push was not found:"
      echo "but .git/hooks/pre-push.sample was found:"
      echo "pre-push is deactivated"
    else
      echo "Hmmmmm"
    fi
  fi
}
```

## Nvim edit file

```bash
po() {
  if [[ -f ".git/hooks/pre-push" ]]; then
    echo ".git/hooks/pre-push was found:"
    nvim .git/hooks/pre-push
  else
    if [[ -f ".git/hooks/pre-push.sample" ]]; then
      echo ".git/hooks/pre-push was not found:"
      echo "but .git/hooks/pre-push.sample was found:"
      nvim .git/hooks/pre-push.sample
    else
      echo "Hmmmmm"
    fi
  fi
}
```

# Lua nvim edit file

```lua
function file_exists(name)
   local f=io.open(name,"r")
   if f~=nil then io.close(f) return true else return false end
end

function open_prepush()
  if file_exists(".git/hooks/pre-push") then
    vim.cmd("vsplit .git/hooks/pre-push")
  elseif file_exists(".git/hooks/pre-push.sample") then
    vim.cmd("vsplit .git/hooks/pre-push.sample")
  else
    vim.cmd("echo 'Hmmmmm'")
  end
end

vim.keymap.set("n", "<leader><leader>po", open_prepush, { desc = "Open pre-push a new split" })
```