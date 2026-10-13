---
title: prepush / git hooks
date: 2026-02-25T00:00:00Z
tags:
  - git
  - git-hooks
  - pre-push
---

To activate pre-push, rename `.git/hooks/pre-push.sample` to `.git/hooks/pre-push`

---

### Example script (ask dev to confirm before pushing on wrong branch)


```sh
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done


#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

# feature/1673_replace_wootric
branch_name=$(git symbolic-ref HEAD 2>/dev/null)

GREEN='\033[0;32m'
RED='\033[1;91m'
RESET='\033[0m'

branch_name="$(git branch --show-current)"
allowed_branch_name="feature/1942_add_missing_translations"

# SPC SPC bran: ----> Copy branch name to clipboard

if [ "$branch_name" != "$allowed_branch_name" ]; then
  echo "Current branch: ${RED}${branch_name}${RESET}"
  echo "Allowed branch (f): ${GREEN}${allowed_branch_name}${RESET}" # = assigned to me - press "f" to checkout to it
  echo
  echo "Are you sure you want to push?"
  echo "  1) Yes, don't ask me again"
  echo "  2) Yes"
  echo "  3) No"
  printf "Choice [1/2/3]: "
  read -r choice < /dev/tty

  case "$choice" in
    1)
      sed -i '' "s|^allowed_branch_name=.*|allowed_branch_name=\"${branch_name}\"|" "$0"
      exit 0
      ;;
    2)
      exit 0
      ;;
    *)
      echo "Push aborted."
      exit 1
      ;;
  esac
fi

# remote="$1"
# url="$2"
#
# zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
#
# while read local_ref local_oid remote_ref remote_oid
# do
#     if test "$local_oid" = "$zero"
#     then
#         # Handle delete
#         :
#     else
#         if test "$remote_oid" = "$zero"
#         then
#             # New branch, examine all commits
#             range="$local_oid"
#         else
#             # Update to existing branch, examine new commits
#             range="$remote_oid..$local_oid"
#         fi
#
#         # Check for WIP commit
#         commit=$(git rev-list -n 1 --grep '^WIP' "$range")
#         if test -n "$commit"
#         then
#             echo >&2 "Found WIP commit in $local_ref, not pushing"
#             exit 1
#         fi
#     fi
# done

exit 0
```

### Example script (prevent pushes on wrong branch)

```sh
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

Evt.

```sh
  echo "Allowed branch (f): ${GREEN}${allowed_branch_name}${RESET}"
```

hvis f er for å checkoute til den branchen:

```sh
alias f="git checkout $(cat ~/assigned-feature-branch.txt)"
````

Se dotfiles

&nbsp;

&nbsp;

### Insert the current branch into the top of the pre-push file

```sh
sed -i "" "s&An example&$(git branch --show-current)\n# An example&" .git/hooks/pre-push
```

> Replace "An example" with current branch \\n \# An example

### Copy current branch to Mac clipboard

```sh
echo $(git branch --show-current) | pbcopy
```

From vim:

```sh
:!echo $(git branch --show-current) | pbcopy
```
