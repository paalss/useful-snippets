---
title: Open Webstorm from terminal (Windows + WSL & Mac)
date: 2023-12-08
ranking: 3
tags:
  - webstorm
  - wsl
  - ubuntu
  - bash
  - mac
---

## WSL

.bashrc

```sh
webstorm()
{
     # /mnt/c/Program\ Files/JetBrains/WebStorm\ 2022.1.2/bin/webstorm64.exe "$1" > /dev/null 2>&1 &!
     /mnt/c/Program\ Files/JetBrains/WebStorm\ 2023.2.5/bin/webstorm64.exe .
}
```````

Usage: Run `webstorm` in terminal

## Mac

.zshrc

```sh
webstorm() {
#   open "/Applications/WebStorm.app" .
    open -na "WebStorm.app" --args "$@"
}
```

Usage: Run `webstorm .` in terminal

## Docs WSL & Mac

<https://www.jetbrains.com/help/webstorm/working-with-the-ide-features-from-command-line.html>

