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

### By name

```sh
killall -9 node
```

`sudo killall -9 caddy` \
`sudo killall -9 http-server`

### By PID

eg: `tcp6       0      0 :::3000                 :::*                    LISTEN      1686/node` \
`__________________________________^^______`

```sh
killall -9 1686
```

### By port


eg: `tcp6       0      0 :::3000                 :::*                    LISTEN      1686/node` \
`________________^^________________________`


```sh
sudo killall $(lsof -t -i:3000)
```

Eller med

```sh
fuser -k 3000/tcp
```````

