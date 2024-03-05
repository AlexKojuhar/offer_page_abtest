<template>
  <div class="payment-info">
    <Lock class="mr-2 text-[24px]" /><span>Safe & secure payment</span>
  </div>
</template>

<script setup>
import Lock from "~/assets/icons/lock.svg";
</script>

<style scoped>
.payment-info {
  @apply flex 
  w-full 
  items-center 
  justify-center 
  rounded-lg 
  border 
  p-4 
  text-lg 
  font-semibold;
}
</style>
