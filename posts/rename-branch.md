---
title: rename branch locally & remote
date: 2026-04-22
tags:
- git
---

notes:

1. rename in lazygit
2. `git push $remote --delete $old_name`
3. `git push origin HEAD`

This will close any existing PR if exists


---

```sh
# Source - https://stackoverflow.com/a/30590238
# Posted by CodeWizard, modified by community. See post 'Timeline' for change history
# Retrieved 2026-04-22, License - CC BY-SA 4.0

# Names of things - allows you to copy/paste commands
old_name=feature/old
new_name=feature/new
remote=origin

# Rename the local branch to the new name
git branch -m $old_name $new_name

# Delete the old branch on remote
git push $remote --delete $old_name

# Or shorter way to delete remote branch [:]
git push $remote :$old_name

# Prevent git from using the old name when pushing in the next step.
# Otherwise, git will use the old upstream name instead of $new_name.
git branch --unset-upstream $new_name

# Push the new branch to remote
git push $remote $new_name

# Reset the upstream branch for the new_name local branch
git push $remote -u $new_name
```

<https://stackoverflow.com/questions/30590083/git-how-to-rename-a-branch-both-local-and-remote/30590238#30590238>

At a glance: Branch renaming commands

Task 	Command

Rename current branch 	`git branch -m new-name`
Rename specific branch 	`git branch -m old-name new-name`
Delete remote branch 	`git push origin --delete branch-name`
Push renamed branch 	`git push origin new-name`
Set upstream tracking 	`git push --set-upstream origin new-name`

<https://www.codecademy.com/article/rename-git-branch>


```sh
git branch -m new-branch-name 
```

<https://www.freecodecamp.org/news/git-rename-branch-how-to-change-a-local-branch-name/>
