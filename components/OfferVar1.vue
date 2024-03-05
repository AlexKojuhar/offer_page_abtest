<template>
  <div class="flex justify-between py-4 text-black md:space-x-6 md:py-16">
    <Var1TitleAndAction class="hidden md:block md:flex-1" />
    <div class="pros__container">
      <SubscriptionPrice class="mb-6 md:m-0" />
      <Var1TitleAndAction class="md:hidden" />
      <BaseList :items="pros" class="mb-8 text-[16px] leading-[19.2px]">
        <Star class="text-orange" />
      </BaseList>
      <SafeAndSecurePaymentLabel class="mb-6 border-gray-100 text-green" />
      <LegalText />
    </div>
  </div>
</template>

<script setup>
import Star from "~/assets/icons/star.svg";

const pros = [
  'Exclusive access to <span class="text-orange font-bold">350+</span> learning programs',
  "Personalized course plan",
  "Comfy learning schedule made by you",
  '<span class="text-orange font-bold">24/7</span> tutor support in a secure chat',
  "Lifetime access to materials",
];

useBodyBackground("/img/bg-var1.webp");
</script>

<style scoped lang="scss">
.pros {
  &__container {
    @apply flex-1 
      rounded-[24px] 
      border-[0px] 
      bg-none 
      text-black 
      md:border-[1px] 
      md:border-gray-200 
      md:bg-white md:p-6;
    position: relative;

    @screen md {
      box-shadow: 0px 4px 4px 0px theme("colors.gray-100");
    }

    @screen md {
      &:before {
        content: "";
        position: absolute;
        right: 24px;
        top: -56px;
        display: block;
        background-image: url("/img/asteroid.webp");
        background-position: center;
        background-size: contain;
        width: 200px;
        height: 80px;
      }
    }
  }
}
</style>
