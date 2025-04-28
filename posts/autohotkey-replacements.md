---
title: Autohotkey & replacements
date: 2025-04-28T10:07:00.000Z
---
# Windows

## Shift F1 to open <http://localhost:5173/>

**script.ahk**

```
+F1::Run "http://localhost:5173/"
```

## pn1 to print 29090816894 (macro)

**script.ahk**

```
:*:pn1::29090816894 
```

## Alt 3 to print backtick ~ (keyboard shortcut)

**script.ahk**

```
!3::Send "~ "
```

# Mac

## Shift F1 to open <http://localhost:5173/>

**Shortcuts app**

1. New shortcut
2. Open URL
3. Details > Run with: (type Shift F1)

Shortcut app may be closed

![Shortcut app](/images/open-website.png)

## pn1 to print 29090816894

<https://altitudemarketing.com/blog/text-macros-macos/>

![Settings app](/images/mac-macros.png)

## Alt 3 to print backtick ~

**.config/skhd/skhdrc**

```
lalt - 3: skhd -t "~"
```

not sure about how to print backtick (`)

### SKHD links

- documentation: <https://github.com/koekeishiya/skhd>
- blog tutorial example: <https://www.danielcorin.com/til/skhd/intro/>

