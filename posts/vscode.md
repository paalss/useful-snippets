---
title: ulemper med vscode
---

- den raskeste måten å cycle through hver changed file er å klikke på hver fil i source control panel. Ingen mulighet for å navigere gjennom med piltastene.
- man må ofte reloade window på vscode når man avinstallerer/deaktiverer en plugin
- kan ikke stole på statuslinjen, at den alltid viser riktig branch
- Open recent-funksjonaliteten er litt brukken
  - hvis man prøver å åpne recent project-fuzzy-finderen umiddelbart etter at man har åpnet vscode, så vil den først åpnes, og så lukkes automatisk. Man kan jobbe rundt dette ved å åpne den ved å trykke og holde ctrl mens man trykker R, da
- Vscodes git integrasjone er ikke så bra
  - git commit
    - kan bare skrive heading på commit messages
    - kan ikke begynne på commit message øyeblikkelig etter at man har addet med vscodes git add knapp / snarvei
  - git add
    - funker ikke for å markere solved merge conflicts, for en eller annen grunn
- live evaluering, (linting/suggestions) tar tid
  - TS bruker tid på å slå inn
  - usused variables (eslint?) bruker også tid...
  - code suggestions/completions bruker også litt tid...
- feilaktig linting
  - noen ganger så tror TS/eslint eller noe at noen packages ikke er installert. Når de virkelig ER det. Man må restarte VSCode for å se effekten
----------
- reload window forårsaker noen ganger at kommandolinjen hopper til det andre prosjektet du har åpent. F.eks. om du driver og jobber i med et bibliotek-prosjekt og et app-prosjekt, og må reloade vscode vinduet for appen, så kan kommandolinjen finne på å cd-e til biblioteket. Sykt!
- hvis man prøver vim extension må man gi slipp på tastatursnarveier som
  - ctrl+pageUp/Down (noen ganger, ellers så funker det, bare at det er litt tregt. Kanskje forårsaket av vim extension, kanskje ikke)
  - close tabs (ctrl w) (!!! veldig irriterende)
  - noen ganger så føkker det opp angrefunksjonaliteten. jeg klikker på u og den bare sletter linjer under cursor WTF!
  - 
  - Man kan i hvert fall skru av og på vim (deactivated mode (oftest, noen ganger klikker den))

Kanskje du bør prøve webstorm