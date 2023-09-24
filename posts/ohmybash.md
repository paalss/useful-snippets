---
title: Ohmybash
tags:
- ohmybash
- vscode
---

Hvordan starte med ohmybash, velge theme og laste ned nødvendig font icons

## Installasjon
```
bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
```

Du får med masse aliases med dette. List alle med `alias`

## Velge theme

```
nano ~/.bashrc
```

```
OSH_THEME="agnoster"
```

Save & exit: `ctrl + x`, `y`, [Enter]

Reload:
```
. ~/.bashrc
```

Hvis du har mellomrom i path to oh-my-bash insallation, slik:
```
# Path to your oh-my-bash installation.
export OSH=/c/Users/Pål Stakvik/.oh-my-bash
```
Må du enkapsulere path-en i quotes, ellers får du error

## skaffe nødvendige font icons
evt. se på [agnoster-zsh-theme](https://github.com/agnoster/agnoster-zsh-theme)

last ned Hack-fonten

1. Gå til https://sourcefoundry.org/hack/ og last ned font. Windows executable funker for WSL og VS Code
2. Kjør executable i nedlastninger
3. Godta restart

## Sette WSL til å bruke riktig font
1. Åpne WSL
2. høyreklikk toppmeny, velg 'properties'
3. velg "Hack" fonten 

![ubuntu-omb](https://user-images.githubusercontent.com/39744024/168896635-0ca7ddee-5db2-4150-b6d5-b0e7fa985a74.jpg)

## Sette VS Code til å bruke riktig font
1. ctrl + shift + p
2. settings.json
3. lim inn `"terminal.integrated.fontFamily": "Hack",`
https://stackoverflow.com/questions/37895501/display-issue-with-oh-my-zsh-agnoster-theme#answer-38475948

![vscode-omb](https://user-images.githubusercontent.com/39744024/168896674-b5a60383-fda4-4546-ad14-b0831b1868e4.jpg)

## Erstatte user @ hostname

...Med kun hostname:

```bash
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "$USER"
  fi
}
```

Eller hva det skal være:
```bash
prompt_segment black default "P"
```

![image (9)](https://user-images.githubusercontent.com/39744024/170105030-332eb3b1-0e1f-4168-94d7-8ace2691c10f.png)


{% raw %}
`prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"` skal visstnok også funke, men jeg får bare slik tekst da:
{% endraw %}

![image (8)](https://user-images.githubusercontent.com/39744024/170105045-b518e8f6-d73f-4ee0-9081-cf7c9c140ffa.png)


## Git bash merknader

Får du `permission denied` ved `git add .`?
- Kjør VS Code som administrator

Får du
```
hint: Waiting for your editor to close the file... 'C:\Users\Pål' is not recognized as an internal or external command,
operable program or batch file.
error: There was a problem with the editor '"C:\Users\Pål Stakvik\AppData\Local\Programs\Microsoft VS Code\bin\code.cmd" --wait'.
Please supply the message using either -m or -F option.
```
ved `git commit` (-v)
- Prøv å kjør `git config --global core.editor "code --wait"`. Les mer https://stackoverflow.com/questions/52195877/how-can-i-fix-git-commit-error-waiting-for-your-editor-to-close-the-file-wi



