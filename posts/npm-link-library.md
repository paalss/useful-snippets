---
title: npm link library
ranking: 3
tags:
- npm link
---

Hvis ting i library ikke oppdatere seg på appen gjennom npm run build  så kan du prøve å restarte app serveren. npm run dev altså
EDIT 16.08.23  
Dette er tredje gangen dette skjer og jeg er fortsatt helt overrasket ov uvitende om hva jeg skal gjøre når jeg ser det
EDIT 27.09.2023  
EDIT EDIT EIDT EDIT EDIT EDIT EDIT  
kan hende du må npm unlinke hele library-et også legge det til igjen først  

Prøv:

```sh
npm cache clean
```

og gjør det de foreslår:

```sh
npm install --cache /tmp/empty-cache
```````
