<script setup lang="ts">
import Box from '@/components/atoms/Box.vue';
import Header from '~/components/molecules/Header.vue';

</script>

<template>
  <Box 
    :style="{
      padding: '20px 40px'
    }"
  >
    <Header />
    <Box>
      <slot />
    </Box>
  </Box>
</template>

<style scoped lang="scss">

</style>
