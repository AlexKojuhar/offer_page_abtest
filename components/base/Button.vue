<template>
  <button :class="buttonClasses" :disabled="disabled" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: (value) =>
      ["default", "primary", "secondary", "draft"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["click"]);

const buttonClasses = computed(() => {
  const typeClasses = {
    default: `h-[56px] font-bold 
      bg-black text-white hover:bg-green dark:bg-white
      dark:text-blue dark:hover:text-white dark:hover:bg-blue
     `,
    primary: `h-[56px] font-bold bg-white border-[1px] dark:border-[0px] 
      dark:text-black dark:hover:text-white border-gray-300 uppercase
      hover:text-white hover:bg-black
      `,
    secondary:
      "h-[56px] font-bold bg-orange-100 uppercase text-black hover:bg-orange-200",
    draft: `h-[42px] font-semibold bg-white dark:bg-transparent dark:text-white 
      text-gray-400 text-[16px] `,
  };
  const baseClasses = `flex w-full justify-center items-center px-3 
    rounded-[12px] disabled:bg-gray dark:disabled:bg-blue-gray 
    dark:disabled:text-white dark:disabled:text-opacity-40 
    disabled:text-white transition-colors
  `;
  return `${baseClasses} ${typeClasses[props.type]}`;
});

const handleClick = () => {
  emits("click");
};
</script>
