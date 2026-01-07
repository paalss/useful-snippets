---
title: Quit Caddy process
date: 2023-12-25
tags:
- process
- cli
---

```sh
sudo caddy stop
```````

---

related
- list & kill processes: <https://useful-snippets.netlify.app/posts/list-processes/>

1. Try: `sudo ps -eaf | grep -i caddy`
2. Try: `sudo -s` (Enter sudo shell)
   1. `caddy stop`
   2. `exit`

