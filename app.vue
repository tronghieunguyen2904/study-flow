<script setup lang="ts">
import Loading from '~/components/global/loading/index.vue';
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <Loading/>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>