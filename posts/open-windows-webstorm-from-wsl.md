---
title: open windows Webstorm from WSL
date: 2023-12-08
tags:
- webstorm
- wsl
---

.bashrc-file
```bash
webstorm()
{
     # /mnt/c/Program\ Files/JetBrains/WebStorm\ 2022.1.2/bin/webstorm64.exe "$1" > /dev/null 2>&1 &!
     /mnt/c/Program\ Files/JetBrains/WebStorm\ 2023.2.5/bin/webstorm64.exe .
}
```````
