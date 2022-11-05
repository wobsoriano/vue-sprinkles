<script setup lang="ts">
import { Box } from '../Box'
import type { ButtonVariants } from './Button.css'
import { buttonRecipe } from './Button.css'

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
