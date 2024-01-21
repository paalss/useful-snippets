---
title: Convert all JS files in folder to TS
date: 2024-01-01T14:44:55.729Z
ranking: 4
tags:
  - typescript
  - javascript
---

```bash
for f in *.js; do mv -- "$f" "${f%.js}.tsx"; done
```

<https://unix.stackexchange.com/questions/19654/how-do-i-change-the-extension-of-multiple-files>
