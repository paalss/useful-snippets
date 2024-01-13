---
title: create context
date: 2024-01-06
tags:
- react
- javascript
- typescript
---

<https://react.dev/reference/react/createContext>

context.ts

```ts
import {createContext} from 'react';

export interface ContextProps {
  darkTheme: boolean;
}

export const AppContext = createContext<ContextProps>({
  darkTheme: true,
});
```

App

{%raw%}
```ts
const Context2 = Context as React.Context<ContextProps>;

return (
  <AppContext2.Provider value={{darkTheme: false}}>
    {/* -- content -- */}
```
{%endraw%}
