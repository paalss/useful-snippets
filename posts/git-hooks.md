---
title: git hooks
date: 2026-02-25
tags:
  - git
  - git-hooks
  - pre-push
---

To activate pre-push, rename `.git/hooks/pre-push.sample` to `.git/hooks/pre-push`

---

Example script:

```sh
branch_name=$(git symbolic-ref HEAD 2>/dev/null)

allowed_branch_name="refs/heads/"

allowed_branch_name+="min-branch"

if [ "$branch_name" != "$allowed_branch_name" ]; then
  echo "Current branch: ${branch_name}"
  echo "Allowed branch: ${allowed_branch_name}"
  echo
  echo "You can't push directly to this branch." # also prevents --force-with-lease pushes
  exit 1
fi
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
