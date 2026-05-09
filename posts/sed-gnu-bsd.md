---
title: sed GNU & BSD
date: 2026-05-09T00:00:00+02:00
tags:
  - sed
  - mac
  - linux
  - wsl
---

```sh
# Cross-platform pattern: works on both GNU and BSD/macOS
sed -i'' -e 's/old/new/g' file.txt    # GNU
sed -i '' -e 's/old/new/g' file.txt   # BSD/macOS (note the space)
```

<https://www.commandinline.com/sed-command-cheat-sheet/>