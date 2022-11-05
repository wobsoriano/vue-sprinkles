import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '../sprinkles.css'

export const buttonRecipe = recipe({
  variants: {
    kind: {
      primary: sprinkles({ background: 'blue50' }),
      secondary: sprinkles({ background: 'yellow' }),
    },
    size: {
      md: sprinkles({ fontSize: 'large' }),
      lg: sprinkles({ fontSize: 'extraLarge' }),
    },
  },
})

export type ButtonVariants = Parameters<typeof buttonRecipe>[0]
