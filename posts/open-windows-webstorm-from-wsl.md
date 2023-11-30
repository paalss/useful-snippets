---
title: open windows Webstorm from WSL
tags:
- webstorm
- wsl
---

.bashrc-file
```
webstorm()
{
     # /mnt/c/Program\ Files/JetBrains/WebStorm\ 2022.1.2/bin/webstorm64.exe "$1" > /dev/null 2>&1 &!
     /mnt/c/Program\ Files/JetBrains/WebStorm\ 2023.2.5/bin/webstorm64.exe .
}
```````
