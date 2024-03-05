<template>
  <ul>
    <li v-for="item in items" :key="item" class="mb-4 flex items-center">
      <span class="mr-2">
        <slot />
      </span>
      <span v-dompurify-html="item" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>
