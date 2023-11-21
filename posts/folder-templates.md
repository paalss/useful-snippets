---
title:Folder templates for VS Code and Webstorm
tags:
- vscode
- webstorm
---

## File and Code Templates

[templates with multiple files](https://www.jetbrains.com/help/webstorm/templates-with-multiple-files.html#ws_template_for_component_files)

- Opprett template files. Én hovedfil med noen sub-files

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

```ts
export {${NAME}} from './${NAME}';
```

![Alt text](/images/file-and-code-templates.png)
