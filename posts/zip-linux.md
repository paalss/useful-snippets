---
title: Zip linux
date: 2024-05-03T21:26:00.000Z
tags:
  - linux
  - wsl
  - zip
---

## Unzip file

```
which unzip
```

```
sudo apt-get install unzip
```

```
unzip file.zip
```

---

## Unzip file (tar)

```
cd ~/.local/bin
tar xzvf nvim-linux-x86_64.tar.gz # extract
rm nvim-linux-x86_64.tar.gz  
ln -s ./nvim-linux-x86_64/bin/nvim ./nvim # create symbolic link
```

Fra <https://github.com/paalss/nvim/blob/master/docs/neovim-install.md>
