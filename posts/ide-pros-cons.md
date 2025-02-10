---
title: fordeler/ulemper med VSCode/Webstorm/Neovim
date: 2023-12-25
ranking: 4
tags:
  - webstorm
  - vscode
  - neovim
  - pros-and-cons
---
# VS Code

## Cons

* den raskeste måten å cycle through hver changed file er å klikke på hver fil i source control panel. Ingen mulighet for å navigere gjennom med piltastene.
* man må ofte reloade window på vscode når man avinstallerer/deaktiverer en plugin
* kan ikke stole på statuslinjen, at den alltid viser riktig branch
* Open recent-funksjonaliteten er litt brukken

  * hvis man prøver å åpne recent project-fuzzy-finderen umiddelbart etter at man har åpnet vscode, så vil den først åpnes, og så lukkes automatisk. Man kan jobbe rundt dette ved å åpne den ved å trykke og holde ctrl mens man trykker R, da
* Vscodes git integrasjone er ikke så bra

  * git commit

    * kan bare skrive heading på commit messages
    * kan ikke begynne på commit message øyeblikkelig etter at man har addet med vscodes git add knapp / snarvei
  * git add

    * funker ikke for å markere solved merge conflicts, for en eller annen grunn
* live evaluering, (linting/suggestions) tar tid / er tregt

  * TS bruker tid på å slå inn
  * unused variables (eslint?) bruker også tid...
  * code suggestions/completions bruker også litt tid...

    * f.eks. for å skrive console.log kan man begynne å skrive prefixet: "log". Men da må man først vente litt før suggestions-ene kommer opp
* feilaktig linting

  * noen ganger så tror TS/eslint eller noe at noen packages ikke er installert. Når de virkelig ER det. Man må restarte VSCode for å se effekten
* reload window forårsaker noen ganger at kommandolinjen hopper til det andre prosjektet du har åpent. F.eks. om du driver og jobber i med et bibliotek-prosjekt og et app-prosjekt, og må reloade vscode vinduet for appen, så kan kommandolinjen finne på å cd-e til biblioteket. Sykt!
* hvis man prøver vim extension må man gi slipp på tastatursnarveier som

  * ctrl+pageUp/Down (noen ganger, ellers så funker det, bare at det er litt tregt. Kanskje forårsaket av vim extension, kanskje ikke)
  * close tabs (ctrl w) (!!! veldig irriterende)
  * noen ganger så føkker det opp angrefunksjonaliteten. jeg klikker på u og den bare sletter linjer under cursor WTF!
  *
  * Man kan i hvert fall skru av og på vim (deactivated mode (oftest, noen ganger klikker den))

Kanskje du bør prøve webstorm

# Webstorm

## Pros

* bedre git diff (bilde)
* bedre find code in files & search replace (untatt preview)
* className får curly braces
* kan lime inn filer fra windows explorer til webstorm explorer
* ~~leser classes i css og bringer auto-complete til jsx/html~~
* automatisk sync mellom starting & ending tag renaming
* sier i fra om du endrer på noe i node_modules
* sier i fra om node_modules er i usync med package.json (npm ls)
* lettere å klikke på uncommited changes markøren i venstremargen. Den som viser at noe er fjernet, endret eller lagt til
* ~~log prefix funker bra. Man trenger ikke vente på at LSP skal komme med forslag, man kan bare klikke Enter med én gang~~
* bedre bookmarks enn noe bookmark-extension jeg har funnet til VS Code
* Prettifyer TypeScript errors automatisk. Ingen nødvendighet for Prettier TypeScript Errors Addon slik som i VS Code.
* Hopp-til-linje har en dialog boks som man må klikke enter i for å hoppe til linje, da slipper man å hoppe til nr. 1 og 0 når man skal hoppe til linje nr. 100
* terminal

  * navn lagres til neste gang man åpner programmet
* kan forutse hva en ny variabel kan hete i code suggestion, basert på udefinerte variabler nedenfor

## Cons:

* LSP code suggestion på 'npm link'-ed library funker ikke!
* settings og 'file and code templates' kan resettes av seg selv!!
* kan ikke slå av auto-save helt
* litt slow, generelt

  * slow project panel update

    * og ingen 'refresh'-button
    * man må KLIKKE på filene for at ting skal begynne å oppdateres
  * typescript linting
* ingen search history i "search in all files"
* kan ikke lime inn i terminal med høyre museklikk
* terminal

  * return to normal mode legger igjen en grønn markør og usynliggjør tegnet som er bak markøren
  * ctrl backspace sletter ikke ord for ord (som i vanlig terminal, altså)
* Esc by default returnerer markøren tilbake til editoren. Litt plagsomt når du holder på med vim i terminalen
* babysitter og prøver å gjøre git-operasjoner for deg (kan enkelt slås av)

  * spør om du vil stage
  * spør om du vil npm install
* ~~Man kan ikke hitte "format" og så få single quotes til double quotes i JSON~~
* hvordan lage tastatursnarvei for en enkelt bokstav?? (curly braces = shift alt 8)
* Kan ikke duplisere linje over caret!! HVORFOR????????????

  * Mulig jeg må bruke Vim her
  * Eller autohotkey/autokey
* ~~Man MÅ markere hele comment block for å uncommente~~
* Toggle comment flytter markøren ett hakk ned. Og det er ingen måte å fikse det på
* By default masse overwhelming squiggly lines og symboler over alt

  * squiggly lines for eslint prettier stuff
* vanskelig å se om en fil er lagt til / endret / fjernet i source control (commit) panel

# Neovim

## Pros

* kan bestemme selv hvordan lsp / code suggestion/completion skal funke

  * man kan bestemme at nedover-knappene ikke navigerer i listen, men flytter cursor nedover
* vim motions funker alltid, i motsetning til vim addon i VS Code

## Cons

* MYE manuelt setup
* mangel på ordentlig terminal
  * FTerm, Toggleterm ol. krasjer ofte
  * multiple tmux-panes kan ødelegge hele UI-et om man forminsker WSL-app-skjermbredden
* ukonsistent behavior
  * telescope er litt ukonsistent
    * noen ganger MÅ man esc før man kan velge en fil
  * ikke alltid codesuggestions kan velges med \[tab] (uten å ha endret på lsp.lua eller noe)
* man MÅ sette `:set paste` før man limer inn noe som helst fra annet steds
* vanskelig å kopiere noe fra neovim til OS clipboard (er det i det hele tatt mulig?)
* ekstremt vanskelig/umulig å bruke tastatursnarveier med ctrl og alt. For en eller annen grunn funker ikke ctrl+ø, men alt+ø funker. Men både ctrl og alt funker for "l". Kan gjøre noe magi med Autohotkey/autokey, men det er veldig plundrete
* å få packages til å jobbe sammen
  * problem med merge conflict highlight packagen blir helt upåvirket av colorscheme. Det gjør at conflict marker får STYGGE farger. Man må eksplisitt sette :colorscheme tokyonight-night for å få colorscheme til å overskrive de stygge fargene igjen. Men hele pakken brekker når man åpner lazygit. Så ja.
* cit fungerer ikke på `<></>`
* dat fungerer ikke på self closed tags
