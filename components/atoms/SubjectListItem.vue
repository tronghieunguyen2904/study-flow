<script setup lang="ts">
import { Card } from 'primevue';
import Text from './Text.vue';
import Flex from './Flex.vue';

const props = defineProps<{
  items: SubjectItem[]
}>();

const emit = defineEmits(['update:activeItem']);

const activeItem = ref<string | null>(null);

const setActiveItem = (item: string) => {
  activeItem.value = item;
  emit('update:activeItem', item);
};
</script>

<template>
  <Flex 
    gap="20px" 
    justify="center"
    wrap="wrap"
    align="center"
  >
    <Card 
      :style="{
        padding: '1.5rem',
        width: 'calc(100% / 4 - 20px)',
        height: 'auto',
        cursor: 'pointer'
      }"
      v-for="item in items"
      :key="item.content"
      :class="{ 'active-item': activeItem === item.content }"
      @click="setActiveItem(item.content)"
    >
      <template #content>
        <Flex direction="column" justify="center" align="center">
          <embed :src="item.image" type="" style="width: 100px; height: 100px">
          <Text weight="semibold">{{ item.content }}</Text>
        </Flex>
      </template>
    </Card>
  </Flex>
</template>

<style scoped>
.active-item {
  background-color: rgb(236, 240, 255);
  border-color: rgb(116, 145, 255);
  border-width: 2px;
  border-style: solid;
}
</style>

