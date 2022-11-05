<script setup lang="ts">
import { useSprinkles } from 'vue-sprinkles'
import { sprinkles } from './sprinkles.css'

const Box = useSprinkles(sprinkles)
</script>

<template>
  <Box as="button" display="flex" background="gray-900" padding="large">
    Button
  </Box>
</template>
