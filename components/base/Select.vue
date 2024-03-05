<template>
  <div
    class="base-select__container"
    :tabindex="tabindex"
    @blur="isOpen = false"
  >
    <label :for="id" class="base-select__label">{{ label }}</label>
    <div
      class="base-select__input"
      :class="{ 'base-select__input--open': isOpen }"
      @click="toggleDropdown"
    >
      <span>
        {{ selected || placeholder }}
      </span>
      <ArrowDown class="base-select__icon" :font-controlled="false" />
    </div>
    <div
      class="base-select__options"
      :class="{ 'base-select__options--hided': !isOpen }"
    >
      <div
        v-for="(option, i) of options"
        :key="i"
        class="option"
        :class="{ 'option--selected': isSelectedOption(option) }"
        @click="handleOptionClick(option)"
      >
        <span>{{ option }}</span>
        <Check
          v-if="isSelectedOption(option)"
          :font-controlled="false"
          class="hidden h-[18px] w-[18px] md:inline-block"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from "~/assets/icons/arrow-down.svg";
import Check from "~/assets/icons/check.svg";

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  value: {
    type: String,
    default: "",
  },
  tabindex: {
    type: Number,
    required: false,
    default: 0,
  },
  label: {
    type: String,
    default: "Select",
  },
  placeholder: {
    type: String,
    default: "Select an option",
  },
  id: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["update:modelValue"]);

const selected = ref(props.value);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const handleOptionClick = (option) => {
  selected.value = option;
  isOpen.value = false;
  emits("update:modelValue", selected.value);
};

const isSelectedOption = (option) => {
  return option === selected.value;
};

onMounted(() => {
  emits("update:modelValue", selected.value);
});
</script>

<style scoped lang="scss">
.base-select {
  &__container {
    @apply relative;
  }

  &__label {
    @apply absolute
      -top-2
      left-4
      z-[2]
      rounded-[12px]
      bg-white
      px-1
      text-xs
      font-bold
      dark:bg-blue-gray;
  }

  &__input {
    @apply relative
      flex
      w-full
      cursor-pointer
      items-center
      justify-between
      rounded-[8px]
      border-[1px]
      border-gray
      bg-white
      p-4
      text-[12px]
      text-gray-500
      focus:outline-none
      dark:border-blue-gray
      dark:bg-blue-gray
      dark:text-white;

    &--open {
      @apply rounded-b-[0px] border-green dark:border-blue-200;
    }
  }

  &__icon {
    @apply absolute h-[18px] w-[18px];
    right: 8px;
  }

  &__options {
    @apply max-h-[150px]
      overflow-auto
      rounded-b-[8px]
      border-[1px]
      border-gray
      bg-white
      dark:border-white
      dark:border-opacity-30
      dark:bg-blue-gray;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 1;

    &--hided {
      display: none;
    }

    .option {
      @apply flex
        items-center
        justify-between
        border-b-[1px]
        border-gray
        px-4
        py-2
        text-sm
        text-gray-500
        hover:bg-green
        hover:text-white
        dark:border-white
        dark:border-opacity-30
        dark:text-white
        dark:hover:bg-blue-100;
      cursor: pointer;

      &--selected {
        @apply bg-green text-white dark:bg-blue-100;
      }
    }
  }

  &__error {
    @apply text-red;
  }
}
</style>
