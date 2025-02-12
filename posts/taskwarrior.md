---
title: Task warrior (CLI todo app)
date: 2023-10-22
tags:
  - productivity
---

## Installer på Ubuntu (WSL)
```
sudo apt-get install taskwarrior
```
https://taskwarrior.org/download/

## Oppstart
```
task version
```
`yes` for å lage config file (.taskrc)

## Bruk

📍 Legg til task
```
task add bla bla bla bla
```

📌 - med priority
```
task priority:H add bla bla bla bla
```

📅📃 List opp alle tasks
```
task next
```
`next` kan sløyfes

✔ Gjennomfør task nr X
```
task X done
```

❌ 🗑 Slett
```
task X delete
```

https://taskwarrior.org/docs/30second/

💬🗨 Se og rediger alle detalljer
```
task X edit
```

🗃 Opprett i prosjekter
```
task add project:Kitchen Select floor tiles
task add project:Kitchen Measure counter-top
task add project:Kitchen Design placement of electrical outlets
task add project:Kitchen Locate ideal placement for extractor duct
task add project:Kitchen Select and order counter-top material
task add project:Kitchen Talk to the Electrician about when the work can start
```

https://taskwarrior.org/docs/best-practices/


## Interessant
- Tools https://taskwarrior.org/tools/
- TUI
  - https://github.com/kdheepak/taskwarrior-tui
  - visual interactive taskwarrior - https://gothenburgbitfactory.org/vit/
- GUI
  - https://github.com/DCsunset/taskwarrior-webui
  - https://github.com/theunraveler/taskwarrior-web
