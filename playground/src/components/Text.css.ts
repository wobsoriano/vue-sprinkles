import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '../sprinkles.css'

export const textRecipe = recipe({
  variants: {
    kind: {
      h1: sprinkles({
        fontSize: 'extraLarge',
        fontWeight: 600,
      }),
      h2: sprinkles({
        fontSize: 'large',
        fontWeight: 400,
      }),
      p: sprinkles({
        fontSize: 'medium',
      }),
    },
  },
})

export type TextVariants = Parameters<typeof textRecipe>[0]
