---
title: Accept all --theirs for file during merge (ikke testet mye)
date: 2024-10-21T12:45:00.000Z
tags:
  - git
  - cli
---
```
git ls-files -u | sed -n 's,3\t,0\t,p' | git update-index --index-info
git checkout-index -af
```

<https://stackoverflow.com/questions/73388057/in-git-after-merging-some-files-i-want-to-accept-all-theirs-that-are-left-in?rq=3>
