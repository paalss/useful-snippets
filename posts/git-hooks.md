---
title: git hooks
tags:
  - git
---

.git/hooks/pre-push

```sh
branch_name=$(git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)

echo "$branch_name"

if [ "$branch_name" != "feature/min-branch" ]; then
  echo "You can't push directly to main branch."
  exit 1
fi

exit 0
```
