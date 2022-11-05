# vue-sprinkles

A tiny composable to consume your [vanilla-extract](https://github.com/seek-oss/vanilla-extract) design tokens from a Vue component.

## Installation

```bash
pnpm add vue-sprinkles # or npm or yarn
```

## Usage

```ts
// styles.css.ts
import { sprinkles } from './sprinkles.css.ts'

export const container = sprinkles({
  display: 'flex',
  paddingX: 'small',

  // Conditional sprinkles:
  flexDirection: {
    mobile: 'column',
    desktop: 'row'
  },
  background: {
    lightMode: 'blue-50',
    darkMode: 'gray-700'
  }
})
```

Import and use the `useSprinkles` composable:

```vue
<script setup lang="ts">
import { useSprinkles } from 'vue-sprinkles'
import { container } from '@/styles.css'

const Box = useSprinkles(container)

const flexDirection = Math.random() > 0.5 ? 'column' : 'row'
</script>

<template>
  <Box as="section" display="flex" flexDirection>
    ...
  </Box>
</template>
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## License

MIT
