<script setup lang="ts">
import { Box } from '../Box'
import type { ButtonVariants } from './Button.css'
import { buttonRecipe } from './Button.css'

withDefaults(defineProps<ButtonVariants>(), {
  size: 'md',
  kind: 'secondary',
})
</script>

<template>
  <Box as="button" :class="buttonRecipe({ size, kind })">
    <slot />
  </Box>
</template>
