---
title: sh/bash/zsh parameter and if check
date: 2026-01-08
rating: 3
tags:
  - sh
  - bash
  - zsh
---

```sh
bash script.sh iii
```

```sh
if [[ "$1" == "iii" ]]; then
    echo "første parameter er iii"
else
    echo "første parameter er ikke iii"
fi
```
