---
title: Folder templates / file and code templates for VS Code and Webstorm
date: 2023-12-25
ranking: 4
tags:
- vscode
- webstorm
---

## VScode - Folder templates

[folder templates extension](https://marketplace.visualstudio.com/items?itemName=Huuums.vscode-fast-folder-structure&ssr=false#review-details)

## Webstorm - File and Code Templates

[templates with multiple files](https://www.jetbrains.com/help/webstorm/templates-with-multiple-files.html#ws_template_for_component_files)

- Opprett template files. Én hovedfil med noen sub-files

Create main file

**Name**: `component folder` \
**Extension**: `tsx` \
**File name**: `$NAME/$NAME`

```ts
import React from 'react';
import classes from './${NAME}.module.css';

interface ${NAME}Props {

}

export const ${NAME} = ({  }: ${NAME}Props) => {
  return (
    <div className={classes.root}>
      
    </div>
    )
};
```````

Create a child template file

**File name**: `$NAME/index` \
**Extension**: `ts`


```ts
export {${NAME}} from './${NAME}';
```

And a css file

**File name**: `${NAME}/${NAME}.module` \
**Extension**: `css`

```ts
.root {

}
```````

![Alt text](/images/file-and-code-templates2.png)

Stygg error med nested template files: Navn forsvinner helt uten videre!!

Issue: <https://youtrack.jetbrains.com/issue/IDEA-279811/File-template-file-name-is-removed>
