---
title: dispatcher is null
tags:
  - npm link
---

Prøv å npm linke react

# 1

## :interrobang: :page_facing_up: :no_entry: DISPATCHER IS NULL - på hybel tenant app med og npm link common - ERROR UPDATE -> HOW TO FIX

First off: Toggle av og på det kommenterte nedenfor. Restart server mellom hver gang

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

Second: prøv

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

# 2

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
