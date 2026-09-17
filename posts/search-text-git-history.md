---
title: search for text appearance in a file's git history
date: 2023-11-05T00:00:00Z
ranking: 5
tags:
  - git
  - cli
---


### Git grep way

Eg. Search for "use-query-params" in `package.json`'s git history

```sh
git grep use-query-params $(git rev-list --all -- package.json) -- package.json
```

## As a function in `.bashrc`/`.zshrc`\-file

```bash
# search for word in a file's git history
# usage: filehistorysearch "use-query-params" package.json

filehistorysearch() {
  git grep $1 $(git rev-list --all -- $2) -- $2
}
```

### Alternatively, git log way

```sh
git log -S <pattern>
```

<https://will-keleher.com/posts/small-programming-tricks-matter/>

