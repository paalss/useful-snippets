---
title: Bash: check if a file exists
date: 2026-03-03
tags:
  - sh
  - bash
  - zsh
---

# Check if prepush is activated or not

```bash
lsprepush() {
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
