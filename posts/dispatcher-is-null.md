---
title: dispatcher is null
date: 2023-10-29
ranking: 5
tags:
  - npm link
---

Prøv å npm linke react

# 1

## DISPATCHER IS NULL ved app med og npm link library 


First off: prøv

```sh
# i app
rm package-lock.json
rm -rf node_modules
npm i
# i library prosjektet
npm link ../../app/node_modules/react # <--- nødvendig
npm run build # <--- nødvendig
# i app
npm link @library/package
^C
npm run dev
```

Second: Toggle av og på det kommenterte nedenfor. Restart server mellom hver gang

```ts
// const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: {
  //   alias: {
  //     react: path.resolve('./node_modules/react'),
  //   },
  // },
  async rewrites() {
    return [
      // Rewrite everything else to use `pages/index`
      {
        source: "/:path*",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
```

----------------------------

Kan ikke brue react hooks i react component library?
Får du dispatcher is null? Eller noe a la cannot use usestate of null?

Da er det sikkert noe multiple react-versjoner greier som er trøbbelet.
Du kan fikse dette ved å legge til react og react-dom som peerDependencies i library's package.json

````js
"peerDependencies": {
"bootstrap": ">=5.2.3",
"react": "$react",
    "react-dom": "$react"
},
````

---

Eller fjern package-lock.json, node_modules og reinstaller alle packages
