---
title: Syntax highlighting i Nano commit diff
date: 2023-10-22
tags:
  - nano
---

nano ~/.nanorc

sett inn

<https://gist.github.com/keithamus/736220/5e069767b22841610ee18fd2f92bd6026f5eb41d>

```
syntax "gitcommit" "COMMIT_EDITMSG$"
color white "#.*"
color green "#.(modified|added|deleted|unmerged|copy-edit|rename).*"
color yellow start="# Changes.*" end="# Changed.*"
color brightgreen "^\+.*"
color brightred "^-.*"
color brightyellow "(diff|index|---|\+\+\+).*"
color brightmagenta "@@.*"
color white "# Changes .*"
color white "# Changed .*"
color white "#.*\(use .*"
color white "#$"
```

=

farger i git commit vinduet!
