---
title: Vim
date: 2024-01-24T15:46:29.381Z
ranking: 4
tags:
  - vim
  - webstorm
  - neovim
---
<https://vim.rtorr.com/>

- Delete word
  - n
    - `daw`
- "Ctrl Backspace" sletting
  - i
    - `Ctrl w`
- HTML attribute code omni-completion
  - `Ctrl x`
  - `Ctrl o`
- Return to last opened window (buffer)
  - `Ctrl 6`
- Indent line
  - i
    - `Ctrl t` / `Ctrl d`
  - v
    - mark selection
    - `<` / `>`
    - `.` to repeat
- Telescope - open selected result in new...
  - tab `Ctrl t`
  - vertical split `Ctrl v`
  - horizontal split `Ctrl x`
- Open help pages in new tab
  - Telescope help_tags -> `Ctrl t`
  - `:tab h lualine`
- Seach replace all
  - telescope
  - ctrl Q to add results to quick fix list
  - `:cdo s/blaba/blaba/g`
- Marks
  - Add mark: `m[bokstav]`
  - Navigate away
  - Return to mark: `'[bokstav]`
- Go to definition `gd`
  - IdeaVim: might need to ctrl click the regular way on beforehand
- Ideavim: surround with delimeters <https://stackoverflow.com/questions/48438208/how-to-surround-a-line-with-parentheses-in-intellij-ideavim>
- Go back to where you where you came from `ctrl o`
- Save all files `wa`
- Show definition (eg. typescript) `K` -> `vim.lsp.buf.hover()`
- Go to next error
  - IdeaVim: <https://stackoverflow.com/questions/21018400/ideavim-in-intellij-is-there-a-shortcut-to-goto-next-error>
  - `:x` to exit
- delete until delimeter `dt*` <https://stackoverflow.com/questions/10658230/how-to-delete-until-end-of-delimiter>
- delete including delimeter `da*`
- search replace incl. slash <https://useful-snippets.netlify.app/posts/search-replace-slash-in-vim/>
- more stuff in <https://github.com/paalss/nvim/blob/master/README.md>
- Change content of html `<li>foo</li>` -> citbar -> `<li>bar</li>`
