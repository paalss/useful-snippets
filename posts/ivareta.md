---
title: Ivareta git historikk ved file renaming
---

Ifølge https://koukia.ca/rename-or-move-files-in-git-e7259bf5a0b7

Hvis du vil være sikker på at file history blir ivaretatt i en fil om du renamer den (eller flytter den), så må du bruke commando-linja og kjøre
```
git mv mycoolclass.cs myCoolClass.cs
```

eller
```
git mv layout/CardList common/List
```

Hvis du renamer direkte i editor-en, så kan du ikke være sikker på at git skjønner at det er samme fil.

Når du ivaretar git history så kan du bruke ting som `git log -p --follow -- path/to/filename`. Se gist: https://gist.github.com/paalss/7127b421ff7f3a862ae8d76c772aeb6a


**Kommentarer:**

Mulig det er unødvendig å bruke `mv`. Da jeg renamet og flyttet layout/CardList til common/List så skjønte git at disse to filene var 74% like.

`git log -p --follow components/common/List/List.tsx` funker fjell. Historikken strekker seg tilbake til før renamingen