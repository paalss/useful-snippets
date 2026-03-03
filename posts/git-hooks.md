---
title: git hooks
tags:
  - git
---

To activate pre-push, rename `.git/hooks/pre-push.sample` to `.git/hooks/pre-push`

---

Example script:

```sh
branch_name=$(git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3)

echo "$branch_name"

if [ "$branch_name" != "min-branch" ]; then
  echo "You can't push directly to main branch."
  exit 1
fi

exit 0
```

should work given that this command:

```sh
git symbolic-ref HEAD 2>/dev/null
```

gives: `refs/heads/min-branch`

and:

```sh
git symbolic-ref HEAD 2>/dev/null | cut -d"/" -f 3
```

gives `min-branch`
