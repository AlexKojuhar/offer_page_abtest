<template>
  <div>
    <h1
      class="mb-4 text-[32px] font-extrabold text-white md:mb-6 md:text-[40px] md:uppercase"
    >
      <span class="text-cyan">Start</span> your learning journey
      <span class="text-cyan">now</span>
    </h1>
    <p class="mb-8 text-[22px] font-semibold text-white md:text-[24px]">
      Get a Get a <span class="font-bold text-cyan">Smart</span
      ><span class="font-bold">Study</span> plan to <br />
      rock self-learning
    </p>
    <BaseButton
      type="default"
      class="mb-8 w-full md:mb-0 md:w-[273px]"
      @click="onOpenPaymentModal"
    >
      Get my plan
    </BaseButton>
    <Teleport to="body">
      <PaymentModal v-if="isPaymentModalOpen" @close="onClosePaymentModal" />
    </Teleport>
  </div>
</template>

<script setup>
const isPaymentModalOpen = ref(false);

const onOpenPaymentModal = () => {
  isPaymentModalOpen.value = true;
};

const onClosePaymentModal = () => {
  isPaymentModalOpen.value = false;
};
</script>
