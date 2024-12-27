<script setup lang="ts">
import { Button } from 'primevue';
import Flex from '../atoms/Flex.vue';
import Text from '../atoms/Text.vue';

</script>

<template>
  <Flex
    justify="space-between"
    align="center"
    :sx="{
      maxHeight: '44px',
      padding: '0px 220px'
    }"
  >
    <Text       
      variant="header"
      size="2xl"
      weight="bold"
    >
      Study Flow
    </Text>
    <Button>
      Login
    </Button>
  </Flex>
</template>

<style scoped></style>
