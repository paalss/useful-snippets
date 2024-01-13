---
title: Prosjekt som bruker WSL? Hvordan bytte til Git Bash
date: 2022-06-05
tags:
  - wsl
---

Hvordan bytte fra wsl til git bash i et prosjekt

I et prosjekt hvor du allerede har installert npm modules med wsl er det litt tricky å gå over til git bash. Har opplevd det i hvert fall.

Her er et forsøk som funket, men det er sannsynigvis unødvendige steg her.

Hvorfor bytte? Vel... react-snap og bruk av chromium er visst ikke helt akseptert av WSL

WSL
1. npm cache verify
2. delete node_modules
3. npm cache clean --force

Git bash
1. npm rebuild
2. lukk VS Code og åpne som Admin
3. npm i
4. npm start

Og det funker! "React-scripts is not recognised" – no more!

<https://coder-coder.com/npm-clear-cache/>  
<https://stackoverflow.com/questions/47928735/react-scripts-is-not-recognized-as-an-internal-or-external-command>
