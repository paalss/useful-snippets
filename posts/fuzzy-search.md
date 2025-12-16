---
title: Fuzzy search
date: 2025-12-16
tags:
  - neovim
  - vim
  - telescope
  - fzf
---

<table align="left" border="1">
    <tr>
        <th>Action</th>
        <th>Telescope</th>
        <th>Fzf.vim</th>
    </tr>
    <tr>
        <td>Open all items in quickfixlist</td>
        <td>[Q]</td>
        <td>Select all items with [Tab] and hit [Enter]</td>
    </tr>
    <tr>
        <td>List all vim keymaps</td>
        <td>require('telescope.builtin').keymaps</td>
        <td>:Maps</td>
    </tr>
</table>


More on Telescope: <https://useful-snippets.netlify.app/posts/vim/>


# Nice usage of fzf

Restore a file from another branch (here: `main`)

```bash
git checkout main $(fzf)
```
