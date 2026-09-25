---
title: Compare two files
date: 2026-02-23
tags:
  - git
---

## Sammenlign to filer i current directory:

```
git diff --no-index fil1.txt fil2.txt 
```

## Sammenlign to committede filer

```
git diff HEAD:fil1.txt HEAD:fil2.txt 
```

## Uten pager (| delta)

```
git --no-pager diff
```
