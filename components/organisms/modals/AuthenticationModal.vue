<script setup lang="ts">
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { Button, Dialog, InputText, Message, Password } from 'primevue';
import Flex from '~/components/atoms/Flex.vue';
import Text from '~/components/atoms/Text.vue';
import * as z from 'zod';
import { COMMON_MESSAGES } from '~/constants/messages';
import { useLogin } from '~/composables/api/auth/use-login';

const props = defineProps<{
  isOpen: boolean;
}>();

const emit = defineEmits(['update:isOpen']);

const loading = useLoadingStore();

const initialValues = ref({
  username: '',
  email: '',
  password: '',
  rememberLogin: false,
});
const isLogin = ref(true);

const schema = computed(() =>
  z.object({
    username: z.string().trim().min(1, { message: COMMON_MESSAGES.required }),
    email: isLogin.value
      ? z.string().email({ message: COMMON_MESSAGES.required })
      : z.string().optional(),
    password: z.string().trim().min(1, { message: COMMON_MESSAGES.required }),
    rememberLogin: z.boolean().default(false).optional(),
  })
);

const resolver = computed(() => zodResolver(schema.value));

const loginMutation = useLogin();

const onSubmit = (data: any) => {
  loginMutation.mutate(data);
};
</script>

<template>
  <Dialog 
    :visible="isOpen" 
    @update:visible="value => emit('update:isOpen', value)"
    modal
    :style="{ width: '460px', height: 'auto' }"
  >
    <Form 
      v-slot="$form" 
      :initialValues
      :resolver="resolver"
      @submit="onSubmit(initialValues)"
      :style="{
        paddingBottom: '20px'
      }"
    >
      <Flex direction="column" align="center">
        <Icon 
          name="tabler:brightness-auto-filled"
          :style="{
            color: 'var(--p-primary-400)',
            width: '80px',
            height: '80px'
          }" 
        />
        <Text
          size="xl"
          weight="bold"
          :style="{
            margin: '4px 0'
          }"
        >
          Đăng nhập
        </Text>
        <Text :style="{ color: '#333'}">
          Bạn chưa đăng ký thành viên? Đăng ký
        </Text>
      </Flex>
      <Flex direction="column" gap="5px" :sx="{ padding: '10px 0px' }">
        <label 
          for="username" 
          style="font-weight: 700;"
        >
          Tên đăng nhập:
        </label>
        <InputText
          v-model="initialValues.username"
          name="username" 
          type="text" 
          placeholder="Username" 
          fluid 
        />
        <Message 
          v-if="$form.username?.invalid" 
          severity="error" 
          size="small" 
          variant="simple"
        >
          {{ $form.username.error.message }}
        </Message>
      </Flex>
      <Flex direction="column" gap="5px" :sx="{ padding: '10px 0px' }">
        <label 
          for="password" 
          style="font-weight: 700;"
        >
          Mật khẩu:
        </label>
        <Password
          v-model="initialValues.password"
          name="password" 
          placeholder="Password" 
          :feedback="false" 
          toggleMask 
          fluid 
        />
        <Message 
          v-if="$form.password?.invalid" 
          severity="error" 
          size="small" 
          variant="simple"
        >
          {{ $form.password.error.message }}
        </Message>
      </Flex>
      <Button 
        type="submit" 
        severity="secondary" 
        label="Đăng nhập" 
        size="large"
        :loading="loading.isLoading"
        :style="{
          width: '100%',
          backgroundColor: 'var(--p-primary-500)',
          color: '#ffffff',
          fontSize: '14px',
          marginTop: '15px'
        }"
      />
    </Form>
  </Dialog>
</template>

<style scoped></style>
