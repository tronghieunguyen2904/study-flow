<script setup lang="ts">
import Box from '@/components/atoms/Box.vue';
</script>

<template>
  <Box 
    :style="{
      padding: '80px',
      height: '100vh'
    }"
  >
    <Box>
      <slot />
    </Box>
  </Box>
</template>

<style scoped lang="scss">

</style>
