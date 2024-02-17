---
title: Uninstall node & reinstall with nvm
date: 2024-02-17T20:58:37.786Z
tags:
  - ubuntu
  - wsl
  - node
---
## Node uninstall

```sh
sudo apt-get remove nodejs
sudo apt-get remove npm
```

```sh
rm -rf ~/.npm
rm -rf ~/.node
```

<https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu>

### Confirm uninstallation

```sh
node --version
```


## Nvm install
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Quit WSL

Reopen

```sh
nvm install 20
```

```sh
nvm use 20
```

### Confirm version

```sh
node --version
```
