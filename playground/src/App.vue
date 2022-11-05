<script setup lang="ts">
import { sprinkles, themeClass } from './sprinkles.css'
import { Box } from './Box'
import Text from './components/Text.vue'
</script>

<template>
  <Box :class="themeClass">
    <Box
      as="a"
      href="https://google.com"
      padding="extraLarge"
    >
      With atoms
    </Box>
    <Box>No props box</Box>
    <Text kind="h1">
      header 1 text
    </Text>
    <Text kind="h2">
      header 2 text
    </Text>
    <Text kind="p">
      paragraph text
    </Text>
  </Box>
</template>
