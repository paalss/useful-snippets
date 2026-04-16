---
title: prepush / git hooks
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

GREEN='\033[0;32m'
RED='\033[1;91m'
RESET='\033[0m'

branch_name="$(git branch --show-current)"
allowed_branch_name="my-branch"

if [ "$branch_name" != "$allowed_branch_name" ]; then
  echo "Current branch: ${RED}${branch_name}${RESET}"
  echo "Allowed branch: ${GREEN}${allowed_branch_name}${RESET}" 
  echo
  echo "You can't push directly to this branch."
  exit 1
fi
```

