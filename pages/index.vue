<script setup lang="ts">
import { Button } from 'primevue';
import Flex from '~/components/atoms/Flex.vue';
import Text from '~/components/atoms/Text.vue';
import { COOKIE_KEY } from '~/constants/cookie';
import { useRouter } from 'vue-router';
import AuthenticationModal from '~/components/organisms/modals/AuthenticationModal.vue';

const cookie = getCookie(COOKIE_KEY.ACCESS_TOKEN)
const router = useRouter();
const isOpen = ref(false);

const handleClick = () => {
  cookie ? router.push({ name: 'list-subject' }) : (isOpen.value = true);
};

</script>

<template>
  <Flex
    justify="center"
    align="center"
    direction="column"
    gap="50px"
    :sx="{
      height: '90vh'
    }"
  >
    <Flex direction="column">
      <embed src="https://lottie.host/embed/dc14fc08-405a-423d-b096-89fe4f6d1ccc/PwX6HNt56R.json" type="" style="width: 400px; height: 150px">
      <embed src="https://lottie.host/embed/a20c18c5-3cc6-469d-9295-824f6b237493/pzam1IwARb.json" type="" style="width: 400px; height: 400px">
    </Flex>
    <Text
      size="xl" 
      weight="semibold" 
      align="center"
    >
      Khám phá kiến thức theo lộ trình tuần tự.<br /> Hoàn thành mỗi phần học để khám phá những cơ hội tiếp theo.
    </Text>
    <Button 
      label="Bắt đầu thử thách"
      type="button" 
      size="large"
      rounded
      :style="{
        width: '300px',
        height: '60px'
      }"
      @click="handleClick"
    />
    <AuthenticationModal 
      :is-open="isOpen"
      @update:isOpen="val => isOpen = val"
    />
  </Flex>
</template>

<style scoped></style>