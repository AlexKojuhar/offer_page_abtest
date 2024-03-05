<template>
  <div>
    <BaseHeader>
      <template #logo>
        <img class="h-full w-full" src="/img/logo-var1.svg" />
      </template>
    </BaseHeader>
    <main>
      <div class="mx-auto max-w-[1012px] px-5">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
colorMode.value = "light";
</script>

<style>
body {
  font-family: "Proxima Nova", "Courier New", Courier, monospace;
}
</style>
