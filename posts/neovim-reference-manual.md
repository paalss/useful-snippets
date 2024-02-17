---
title: Neovim reference manual - clipboard
date: 2024-02-17T22:25:01.197Z
tags:
  - vim
---
*provider.txt*		Nvim


		 NVIM REFERENCE MANUAL    by Thiago de Arruda


Providers					*provider*

Nvim delegates some features to dynamic "providers". This document describes
the providers and how to install them.
						*E319*
Use of a feature requiring a missing provider is an error:  

    E319: No "foo" provider found. Run ":checkhealth provider"

Run the |:checkhealth| command, and review the sections below.

[...]

==============================================================================
Clipboard integration			      *provider-clipboard* *clipboard*

Nvim has no direct connection to the system clipboard. Instead it depends on
a |provider| which transparently uses shell commands to communicate with the
system clipboard or any other clipboard "backend".

To ALWAYS use the clipboard for ALL operations (instead of interacting with
the "+" and/or "*" registers explicitly): >vim
    set clipboard+=unnamedplus

See 'clipboard' for details and options.

							      *clipboard-tool*
The presence of a working clipboard tool implicitly enables the '+' and '*'
registers. Nvim looks for these clipboard tools, in order of priority:

  - |g:clipboard|
  - pbcopy, pbpaste (macOS)
  - wl-copy, wl-paste (if $WAYLAND_DISPLAY is set)
  - waycopy, waypaste (if $WAYLAND_DISPLAY is set)
  - xclip (if $DISPLAY is set)
  - xsel (if $DISPLAY is set)
  - lemonade (for SSH) https://github.com/pocke/lemonade
  - doitclient (for SSH) https://www.chiark.greenend.org.uk/~sgtatham/doit/
  - win32yank (Windows)
  - termux (via termux-clipboard-set, termux-clipboard-set)
  - tmux (if $TMUX is set)

								 *g:clipboard*
To configure a custom clipboard tool, set g:clipboard to a dictionary.
For example this configuration integrates the tmux clipboard: >vim

```
    let g:clipboard = {
          \   'name': 'myClipboard',
          \   'copy': {
          \      '+': ['tmux', 'load-buffer', '-'],
          \      '*': ['tmux', 'load-buffer', '-'],
          \    },
          \   'paste': {
          \      '+': ['tmux', 'save-buffer', '-'],
          \      '*': ['tmux', 'save-buffer', '-'],
          \   },
          \   'cache_enabled': 1,
          \ }
```

If "cache_enabled" is |TRUE| then when a selection is copied Nvim will cache
the selection until the copy command process dies. When pasting, if the copy
process has not died the cached selection is applied.

g:clipboard can also use functions (see |lambda|) instead of strings.
For example this configuration uses the g:foo variable as a fake clipboard:
>vim

    let g:clipboard = {
          \   'name': 'myClipboard',
          \   'copy': {
          \      '+': {lines, regtype -> extend(g:, {'foo': [lines, regtype]}) },
          \      '*': {lines, regtype -> extend(g:, {'foo': [lines, regtype]}) },
          \    },
          \   'paste': {
          \      '+': {-> get(g:, 'foo', [])},
          \      '*': {-> get(g:, 'foo', [])},
          \   },
          \ }

The "copy" function stores a list of lines and the register type. The "paste"
function returns the clipboard as a `[lines, regtype]` list, where `lines` is
a list of lines and `regtype` is a register type conforming to |setreg()|.

							      *clipboard-wsl*
For Windows WSL, try this g:clipboard definition:
>vim
    let g:clipboard = {
                \   'name': 'WslClipboard',
                \   'copy': {
                \      '+': 'clip.exe',
                \      '*': 'clip.exe',
                \    },
                \   'paste': {
                \      '+': 'powershell.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
                \      '*': 'powershell.exe -c [Console]::Out.Write($(Get-Clipboard -Raw).tostring().replace("`r", ""))',
                \   },
                \   'cache_enabled': 0,
                \ }

==============================================================================
Paste							*provider-paste* *paste*

"Paste" is a separate concept from |clipboard|: paste means "dump a bunch of
text to the editor", whereas clipboard provides features like |quote+| to get
and set the OS clipboard directly.  For example, middle-click or CTRL-SHIFT-v
(macOS: CMD-v) in your terminal is "paste", not "clipboard": the terminal
application (Nvim) just gets a stream of text, it does not interact with the
clipboard directly.

							*bracketed-paste-mode*
Pasting in the |TUI| depends on the "bracketed paste" terminal capability,
which allows terminal applications to distinguish between user input and
pasted text.  https://cirw.in/blog/bracketed-paste
This works automatically if your terminal supports it.

							*ui-paste*
GUIs can paste by calling |nvim_paste()|.

PASTE BEHAVIOR  

Paste inserts text after the cursor.  Lines break at <NL>, <CR>, and <CR><NL>.
When pasting a huge amount of text, screen-updates are throttled and the
message area shows a "..." pulse.

In cmdline-mode only the first line is pasted, to avoid accidentally executing
many commands.  Use the |cmdline-window| if you really want to paste multiple
lines to the cmdline.

You can implement a custom paste handler by redefining |vim.paste()|.
Example: >lua

  vim.paste = (function(lines, phase)
    vim.api.nvim_put(lines, 'c', true, true)
  end)

==============================================================================
X11 selection mechanism			      *clipboard-x11* *x11-selection*

X11 clipboard providers store text in "selections". Selections are owned by an
application, so when the application gets closed, the selection text is lost.
The contents of selections are held by the originating application (e.g., upon
a copy), and only passed to another application when that other application
requests them (e.g., upon a paste).

				*primary-selection* *quotestar* *quoteplus* *quote+*

There are three documented X11 selections: PRIMARY, SECONDARY, and CLIPBOARD.
CLIPBOARD is typically used in X11 applications for copy/paste operations
(CTRL-c/CTRL-v), while PRIMARY is used for the last selected text, which is
generally inserted with the middle mouse button.

Nvim's X11 clipboard providers only use the PRIMARY and CLIPBOARD selections,
for the "*" and "+" registers, respectively.

==============================================================================
 vim:tw=78:ts=8:noet:ft=help:norl:
