<script lang="ts" setup>
import { Button, ProgressBar, StepPanel, StepPanels, Stepper } from 'primevue';
import { ref } from 'vue';
import Box from '../atoms/Box.vue';
import Flex from '../atoms/Flex.vue';
import Text from '../atoms/Text.vue';
import SubjectListItem from '../atoms/SubjectListItem.vue';

const progress = ref<number>(33);
const loadingStore = useLoadingStore();

const nextStep = (step: number, activateCallback: (value: string) => void): void => {
  const steps: Record<number, number> = {
    1: 33,
    2: 66,
    3: 100,
  };
  
  loadingStore.show(); 
  progress.value = steps[step];
  activateCallback(step.toString());

  setTimeout(() => {
      loadingStore.hide();
    }, 700);
};

const activeItem = ref<string | null>(null);
const listSubjectItems = [
  {
    image: 'https://lottie.host/embed/b06e7bcd-6a3f-4ca9-9962-c1ae114675b2/cZ0t56M9vI.json',
    content: 'Toán học'
  },
  {
    image: 'https://lottie.host/embed/8658e536-eeaa-46ea-8453-9810f6fa309f/LLLWyPtiVM.json',
    content: 'Tiếng anh'
  },
  {
    image: 'https://lottie.host/embed/02e0546a-e71d-4bac-8b2f-cd4724d3df5b/Vary1Cd4Bg.json',
    content: 'Lập trình'
  },
  {
    image: 'https://lottie.host/embed/b5a0556a-4c6a-4c96-8861-72ba5e50ad0b/GSxBV2wDw0.json',
    content: 'Thiết kế'
  }
]
</script>

<template>
  <Flex direction="column" align="center" gap="50px">
    <ProgressBar 
      :value="progress" 
      :style="{ width: '50rem', marginBottom: '1rem' }" 
    />
    <Stepper value="1" :style="{ width: '50rem' }">
      <StepPanels>
        <StepPanel v-slot="{ activateCallback }" value="1">
          <Flex direction="column" align="center" justify="center">
            <Flex align="center">
              <embed src="https://lottie.host/embed/d666c131-2653-441c-959b-e67c6f3ae926/aM8xzFvKLl.json" type="" style="width: 400px; height: 400px">
              <Text size="2xl" weight="semibold">
                Chào mừng bạn tới Study Flow
                <Text>Với Study Flow, bạn sẽ được tham gia vào một cộng đồng đam mê học hỏi và sáng tạo. Khám phá những kiến thức thú vị và phát triển tư duy của bạn mỗi ngày.</Text>
              </Text>
            </Flex>
            <Button 
              label="Continute"
              type="button" 
              size="large"
              rounded
              :style="{
                width: '300px',
                height: '60px'
              }"
              @click="nextStep(2, activateCallback)"
            />
          </Flex>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="2">
          <Text size="2xl" weight="semibold">
            Vui lòng chọn đề tài muốn thử thách
          </Text>
          <SubjectListItem 
            :items="listSubjectItems"
            @update:activeItem="(item) => activeItem = item"  
          />
          <Box
            :style="{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              paddingTop: '1.5rem' 
            }"
          >
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="nextStep(1, activateCallback)"
            />
            <Button
              label="Next"
              severity="primary"
              :disabled="!activeItem"
              icon="pi pi-arrow-right"
              @click="nextStep(3, activateCallback)"
            />
          </Box>
        </StepPanel>
        <StepPanel v-slot="{ activateCallback }" value="3">
          <Box :style="{ display: 'flex', flexDirection: 'column', height: '12rem' }">
            <Box
              :style="{
                border: '2px dashed #ccc',
                backgroundColor: '#f9f9f9',
                borderRadius: '0.5rem',
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontWeight: '500',
              }"
            >
              Content III
            </Box>
          </Box>
          <Box :style="{ display: 'flex', justifyContent: 'flex-end', paddingTop: '1.5rem' }">
            <Button
              label="Back"
              severity="secondary"
              icon="pi pi-arrow-left"
              @click="nextStep(2, activateCallback)"
            />
          </Box>
        </StepPanel>
      </StepPanels>
    </Stepper>
  </Flex>
</template>