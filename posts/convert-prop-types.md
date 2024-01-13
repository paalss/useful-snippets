---
title: Convert React Prop Types to TS type annotations
date: 2023-10-22
tags:
- typescript
- react
- javascript
---

For filer i mappe hvis navn er "pages":
```bash
npx jscodeshift -t https://mskelton.dev/ratchet.ts pages/**/*.{ts,tsx}
```

<https://github.com/mskelton/ratchet>

funker ikke på destructured props, da
