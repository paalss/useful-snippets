---
title: Repeatedly run same command
date: 2024-02-06T15:27:00.684Z
tags:
  - bash
---
Run "npm run build" 10 times

```sh
for i in {1..10}; do npm run build; done
```

Wait beetween commands

```sh
for i in {1..10}; do npm run build && sleep 1; done
```
