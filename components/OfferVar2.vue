<template>
  <div class="flex justify-between py-4 text-black md:space-x-6 md:py-16">
    <Var2TitleAndAction class="hidden md:block md:flex-1" />
    <div class="pros__container">
      <SubscriptionPrice class="mb-4 md:m-0" />
      <div
        class="rounded-[32px] bg-black bg-opacity-60 p-4 md:bg-transparent md:p-0"
      >
        <Var2TitleAndAction class="md:hidden" />
        <BaseList :items="pros" class="mb-8 text-[16px] leading-[19.2px]">
          <Star class="text-cyan" />
        </BaseList>
        <SafeAndSecurePaymentLabel class="mb-6 bg-gray-100 text-cyan" />
        <LegalText />
      </div>
    </div>
  </div>
</template>

<script setup>
import Star from "~/assets/icons/star.svg";

const pros = [
  '<span class="text-cyan">Exclusive access to <span class="font-bold">350+</span> learning programs</span>',
  "Personalized course plan",
  "Comfy learning schedule made by you",
  '<span class="text-cyan"><span class="font-bold">24/7</span> tutor support in a secure chat</span>',
  "Lifetime access to materials",
];

useBodyBackground("/img/bg-var2.webp");
</script>

<style scoped lang="scss">
.pros {
  &__container {
    @apply flex-1 
      rounded-[32px] 
      border-[0px] 
      bg-transparent 
      bg-opacity-60 
      text-white 
      md:border-[4px] 
      md:border-white-100 
      md:bg-gray-400 
      md:p-6;
    position: relative;

    @screen md {
      box-shadow: 0px 4px 4px 0px theme("colors.gray-100");

      &:before {
        @apply hidden;
      }
    }

    @screen xl {
      &:before {
        content: "";
        position: absolute;
        right: -50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: block;
        background-image: url("/img/rocket.webp");
        background-position: center;
        background-size: contain;
        width: 247px;
        height: 247px;
      }
    }
  }
}
</style>
