<template>
  <div class="flex h-screen flex-col items-center justify-center">
    <h1 class="mb-4 text-3xl font-bold">Oops! Page Not Found</h1>
    <p class="mb-4 text-lg">The requested page could not be found.</p>
    <BaseButton
      class="max-w-[300px]"
      type="default"
      @click="redirectToTestPage"
    >
      Go to Test Page
    </BaseButton>
  </div>
</template>

<script setup>
const redirectToTestPage = () => {
  clearError({ redirect: "/?abtest=test" });
};
</script>

<style lang="scss" scoped></style>
