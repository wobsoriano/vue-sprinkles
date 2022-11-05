<script setup lang="ts">
import { Box } from '../Box'
import type { ButtonVariants } from './Button.css'
import { buttonRecipe } from './Button.css'

defineProps<NonNullable<ButtonVariants>>()
</script>

<template>
  <Box as="button" :class="buttonRecipe({ size, kind })">
    <slot />
  </Box>
</template>
