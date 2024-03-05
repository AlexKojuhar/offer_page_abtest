<template>
  <div>
    <h1 class="mb-4 text-[32px] font-extrabold md:mb-6 md:text-[40px]">
      Start your learning journey now
    </h1>
    <p class="mb-8 text-[24px] font-semibold">
      Get a <span class="font-bold text-orange">Planet</span>
      <span class="font-bold">Learn</span> plan to rock <br />
      self-learning
    </p>
    <BaseButton
      type="default"
      class="mb-8 w-full md:mb-0 md:w-[273px]"
      @click="onOpenPaymentModal"
      >Get my plan</BaseButton
    >
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
