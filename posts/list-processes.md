---
title: List processes
ranking: 4
tags:
- process
---

```sh
netstat -nlp | grep tcp
```

eg: `tcp6       0      0 :::3000                 :::*                    LISTEN      1686/node`

```sh
killall -9 _process_id_
```

eg: `killall -9 1686`



Eller

```sh
fuser -k 8080/tcp
```````

