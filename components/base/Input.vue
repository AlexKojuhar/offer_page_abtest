<template>
  <div class="base-input__container">
    <label :for="id" class="base-input__label">{{ label }}</label>
    <input
      :id="id"
      v-model="internalValue"
      v-maska
      autocomplete="off"
      :type="type"
      :data-maska="maska"
      :placeholder="placeholder"
      class="base-input__input"
      :class="{ 'base-input__input--error': hasError }"
      @input="handleInput"
    />
    <span class="base-input__icon">
      <span v-if="hasError && showErrorText" class="base-input__error">{{
        error
      }}</span>
      <slot name="icon" />
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "Label",
  },
  placeholder: {
    type: String,
    default: "Placeholder",
  },
  error: {
    type: String,
    default: "",
  },
  showErrorText: {
    type: Boolean,
    default: false,
  },
  maska: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const emits = defineEmits(["update:modelValue"]);

const internalValue = ref(props.modelValue);

const handleInput = (e) => {
  internalValue.value = e.target.value;
  emits("update:modelValue", internalValue.value);
};

const hasError = computed(() => {
  return !!props.error;
});
</script>

<style scoped lang="scss">
.base-input {
  &__container {
    @apply relative;
  }

  &__label {
    @apply absolute
      -top-2
      left-4
      rounded-full
      bg-white
      px-1
      text-xs
      font-bold
      dark:bg-blue-gray;
  }

  &__input {
    @apply w-full
      rounded-[8px]
      border-[1px]
      border-gray
      p-4
      text-[12px]
      placeholder:text-[12px]
      placeholder:text-gray-500
      focus:border-green
      focus:outline-none
      dark:border-blue-gray
      dark:bg-blue-gray
      dark:placeholder:text-white
      dark:focus:border-blue-200;

    &--error {
      @apply border-red 
      focus:border-red 
      dark:border-red 
      dark:focus:border-red;
    }
  }

  &__icon {
    @apply absolute flex items-center;
    right: 16px;
    top: 16px;
  }

  &__error {
    @apply mr-2 text-[11px] font-semibold text-red dark:text-white;
  }
}
</style>
