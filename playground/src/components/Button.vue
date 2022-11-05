<script setup lang="ts">
import { Box } from '../Box'
import type { ButtonVariants } from './Button.css'
import { buttonRecipe } from './Button.css'

type PickOne<T> = {
  [P in keyof T]?: Record<P, T[P]>
}[keyof T]

defineProps<{
  size?: NonNullable<ButtonVariants>['size']
  kind?: NonNullable<ButtonVariants>['kind']
}>()
</script>

<template>
  <Box as="button" :class="buttonRecipe({ size, kind })">
    <slot />
  </Box>
</template>
