---
title: Generate CSS module classnames in Vite
tags:
- vite
- css
---

```ts
import { defineConfig } from "vite";
import * as path from "path";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const f = filename.split("?")[0].split(".")[0];
        const file = path.basename(f);
        return `${file}_${name}`;
      }
    }
  },
});


```````
