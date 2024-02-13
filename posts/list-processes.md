---
title: List & kill processes
date: 2023-12-08
ranking: 4
tags:
  - process
---
## List processes

### All

```sh
sudo netstat -nlp | grep tcp
```

Sudo gives more info on process id & stuff

### One specific port

```sh
sudo lsof -i:3000
```

`sudo lsof -i:80` \
`sudo lsof -i:443` \
`sudo lsof -i:4173`

## Kill process

### Kill Node/caddy process

```sh
killall -9 node
```

```sh
sudo killall -9 caddy
```

### Killall

eg: `tcp6       0      0 :::3000                 :::*                    LISTEN      1686/node` \
`__________________________________^^______`

```sh
killall -9 1686
```

Eller
```sh
sudo killall $(lsof -t -i:3000)
```

Eller med

### Fuser


eg: `tcp6       0      0 :::3000                 :::*                    LISTEN      1686/node` \
`________________^^________________________`


```sh
fuser -k 3000/tcp
```````

