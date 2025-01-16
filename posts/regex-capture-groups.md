---
title: Regex & capture groups
date: 2025-01-16T15:45:00.000Z
ranking: 2
tags:
  - regex
---
## Match ett ord

- `[^\s]+`
- `[a-z]+`
- `\w+`??

## Search replace capture group

for å replace

```diff
- export default Component;
+ export { Component }
```

Kan man kjøre 

**Search** `export default (\w+)`

**Replace** `export { $1 }`

Se pål-notater for mer...


## Newline i search replace

search replace kan legge til newline med `\n`
