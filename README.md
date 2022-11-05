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
  <Box as="section" display="flex" :flex-direction="flexDirection">
    ...
  </Box>
</template>
```

## Variants

The [@vanilla/recipes](https://vanilla-extract.style/documentation/packages/recipes/) package can be combined with `useSprinkles` generated components to create [variant-driven components](https://ped.ro/writing/variant-driven-components).

```ts
// button.css.ts
import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from './sprinkles.css.ts'

export const button = recipe({
  variants: {
    color: {
      neutral: sprinkles({ background: 'neutral' }),
      brand: sprinkles({ background: 'brand' }),
      accent: sprinkles({ background: 'accent' })
    },
    size: {
      small: sprinkles({ padding: 'small' }),
      medium: sprinkles({ padding: 'medium' }),
      large: sprinkles({ padding: 'large' })
    }
  }
})

export type ButtonVariants = Parameters<typeof button>[0]
```

```vue
<script setup lang="ts">
import { useSprinkles } from 'vue-sprinkles'
import { Box } from './Box'
import type { ButtonVariants } from '@/button.css'
import { button } from '@/button.css'

defineProps<ButtonVariants>()
</script>

<template>
  <Box as="button" :class="button({ color, size })">
    <slot />
  </Box>
</template>
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## License

MIT
