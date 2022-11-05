<script setup lang="ts">
import { Box } from '../Box'
import type { TextVariants } from './Text.css'
import { textRecipe } from './Text.css'

withDefaults(defineProps<{
  kind: NonNullable<TextVariants>['kind']
}>(), {
  kind: 'h1',
})
</script>

<template>
  <Box :class="textRecipe({ kind })">
    <slot />
  </Box>
</template>
