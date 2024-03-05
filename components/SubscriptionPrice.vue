<template>
  <div
    class="price__container"
    :class="{ 'price__container--centered': !isTimerShowing }"
  >
    <div>
      <h2 class="pb-2 text-[18px] font-extrabold dark:text-cyan md:text-[24px]">
        3-day trial for <span class="text-orange dark:text-cyan">$0.99</span>
      </h2>
      <div
        class="flex flex-col font-semibold"
        :class="[isTimerShowing ? 'md:pb-6' : 'md:pb-9']"
      >
        <template v-if="isTimerShowing">
          <span class="text-[16px] md:text-[20px]">Then $9.99</span>
          <span
            class="text-[14px] line-through opacity-40 dark:text-white md:text-[16px]"
            >$39.99/week</span
          >
        </template>

        <template v-else>
          <span class="text-center text-[16px] md:text-left md:text-[20px]"
            >Then $39.99/week</span
          >
        </template>
      </div>
    </div>
    <ClientOnly>
      <CountdownTimer
        v-show="isTimerShowing"
        class="w-[110px] md:w-[160px]"
        @finished="onTimerFinished"
        @started="onTimerStarted"
      />
    </ClientOnly>
  </div>
</template>

<script setup>
const isTimerShowing = ref(false);

const onTimerStarted = () => {
  isTimerShowing.value = true;
};

const onTimerFinished = () => {
  isTimerShowing.value = false;
};
</script>

<style lang="scss" scoped>
.price {
  &__container {
    @apply flex 
      items-center 
      justify-between 
      rounded-[24px] 
      border-[1px] 
      border-gray-200 
      bg-white 
      px-4 
      py-3 
      dark:border-[0px] 
      dark:bg-black 
      dark:bg-opacity-60 
      md:border-none 
      md:p-0 
      md:dark:bg-transparent;
    box-shadow: 0px 4px 4px 0px theme("colors.gray-100");

    @screen md {
      box-shadow: none;
    }

    &--centered {
      @apply justify-center px-4 py-6 md:justify-between md:p-0;
    }
  }
}
</style>
