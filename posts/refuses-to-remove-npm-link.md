---
title: npm link refuses to go away
tags:
- npm link
---

try uninstalling globally and reinstalling dependency:

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
