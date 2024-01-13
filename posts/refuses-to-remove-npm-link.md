---
title: npm link refuses to go away
date: 2024-01-06
ranking: 3
tags:
- npm link
---

1. Try

Maybe unlink package?

```sh
npm unlink @scope/package
```````

clear / swap out cache on either project

```sh
npm install --cache /tmp/empty-cache
```````

restart all servers


2. try uninstalling globally and reinstalling dependency:

```sh
sudo npm rm --global @scope/library
```````

```sh
npm rm --global @scope/library
```````

```sh
npm ls --global @scope/library
```````

```sh
npm uninstall @scope/library
```````

```sh
npm i @scope/librayr@latest --save-exact
```````

try deleting package.json

try restarting servers???
