---
title: Inspect open menu
date: 2024-09-29T14:00:00.000Z
tags:
  - inspect
  - menu
---
```ts
import {ComboboxItem, NativeSelect, Select} from '@mantine/core';            

<Select
  id={'Flavor'}
  onDropdownOpen={() => {
    debugger;
  }}
/>
```
