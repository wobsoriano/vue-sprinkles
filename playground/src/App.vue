<script setup lang="ts">
import { sprinkles, themeClass } from './sprinkles.css'
import { Box } from './Box'
import Text from './components/Text.vue'
import Button from './components/Button.vue'
</script>

<template>
  <Box :class="themeClass">
    <Box
      as="a"
      href="https://google.com"
      :padding="{ desktop: 'extraLarge', 'mobile': 'small' }"
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

    <Button size="md" kind="primary">
      Button
    </Button>

    <Button size="lg" kind="secondary">
      Button
    </Button>

    <Box
      as="a"
      href="https://google.com"
      :padding="{ desktop: 'extraLarge', mobile: 'small' }"
      class="custom_class"
    >
      With atoms + className
    </Box>

    <Box>Without atoms or className</Box>
  </Box>
</template>
