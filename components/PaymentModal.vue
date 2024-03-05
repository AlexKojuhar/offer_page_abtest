<template>
  <!-- <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-20 p-4 dark:bg-black dark:bg-opacity-60"
  >
    <div
      class="flex h-full max-h-[552px] w-full max-w-[400px] flex-col rounded-[12px] bg-white px-4 py-6 text-black shadow-[0px_0px_0px_4px_#0000000D] dark:bg-blue-gray-100 dark:text-white"
    > -->
  <div class="payment-modal__overlay">
    <div class="payment-modal">
      <h2 class="mb-6 text-center text-[21px] font-extrabold">
        Payment method
      </h2>
      <BaseButton
        type="secondary"
        :full-width="true"
        class="mb-4"
        @click="onPayPalClick"
      >
        <img
          class="mr-[10px] h-[32px] w-[50px]"
          src="/img/paypal.webp"
          alt="PayPal logo"
        /><span>Buy Now</span>
      </BaseButton>
      <BaseButton type="primary" :full-width="true" @click="onGooglePayClick">
        <img
          class="mr-[6px] h-[24px] w-[24px]"
          src="/img/google-pay.webp"
          alt="Google logo"
        /><span>Pay</span>
      </BaseButton>
      <div class="separator"><span class="separator__text">or</span></div>
      <CardForm />
      <BaseButton
        type="draft"
        class="mx-auto max-w-[71px]"
        @click="$emit('close')"
      >
        Close
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
defineEmits(["close"]);

const onPayPalClick = () => {};
const onGooglePayClick = () => {};

onMounted(() => {
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>

<style scoped lang="scss">
.payment-modal {
  @apply flex 
    h-full 
    max-h-[552px] 
    w-full 
    max-w-[400px] 
    flex-col 
    rounded-[12px] 
    bg-white 
    px-4 
    py-6 
    text-black 
    shadow-[0px_0px_0px_4px_#0000000D] 
    dark:bg-blue-gray-100 
    dark:text-white;

  &__overlay {
    @apply fixed 
    inset-0 
    z-50 
    mx-auto 
    flex 
    items-center 
    justify-center 
    bg-gray-100 
    bg-opacity-20 
    p-4 
    dark:bg-black
    dark:bg-opacity-60;
  }
}

.separator {
  @apply relative 
    mb-7 
    mt-6 
    h-[2.5px] 
    rounded-[12px] 
    bg-gray-300 
    dark:bg-blue-gray;

  &__text {
    @apply w-fit 
      bg-white 
      px-2 
      text-[12px] 
      font-bold 
      uppercase 
      leading-[17px]
      text-gray-200 
      dark:bg-blue-gray-100
      dark:text-white;
    position: absolute;
    left: 0;
    right: 0;
    top: -7px;
    bottom: 0;
    margin: auto;
  }
}
</style>
