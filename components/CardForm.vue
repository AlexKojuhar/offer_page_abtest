<template>
  <form @submit.prevent="submitForm">
    <BaseInput
      id="credit-card"
      v-model="cardData.cardNumber"
      class="mb-8"
      label="Card number"
      placeholder="••••  ••••  ••••  ••••"
      maska="#### #### #### ####"
      :error="errors.creditCard"
      :show-error-text="true"
      @input="validateCardNumber"
    >
      <template #icon>
        <img
          width="32"
          height="22"
          src="/img/mastercard.webp"
          alt="Mastercard logo"
        />
      </template>
    </BaseInput>

    <div class="mb-10 flex gap-2">
      <BaseSelect
        id="credit-card-month"
        v-model="cardData.month"
        placeholder="Select"
        label="Month"
        :options="MONTHS"
        class="flex-1"
      />

      <BaseSelect
        id="credit-card-year"
        v-model="cardData.year"
        placeholder="Select"
        label="Year"
        :options="yearArray"
        class="flex-1"
      />

      <BaseInput
        id="credit-card-cvv"
        v-model="cardData.cvv"
        type="password"
        class="flex-1"
        label="CVV"
        placeholder="•••"
        maska="###"
        :error="errors.cvv"
        @input="validateCVV"
      />
    </div>

    <BaseButton
      type="default"
      :disabled="!isFormValid"
      class="mx-auto mb-3 max-w-[300px] dark:w-full"
    >
      Submit
    </BaseButton>
  </form>
</template>

<script setup>
import { MONTHS } from "~/constant";
import { generateYearArray } from "~/utils/dateUtils";

const NUM_YEARS = 5; // Number of future years to include
const CARD_NUMBER_LENGTH = 16;
const CVV_LENGTH = 3;

const yearArray = generateYearArray(NUM_YEARS);

const errors = ref({
  creditCard: "",
  cvv: "",
});

const cardData = ref({
  cardNumber: "",
  year: "",
  month: "",
  cvv: "",
});

const validateCardNumber = () => {
  errors.value.creditCard =
    trimmedCardNumber.value.length === CARD_NUMBER_LENGTH
      ? ""
      : "Invalid number";
};

const validateCVV = () => {
  errors.value.cvv = cardData.value.cvv.length === CVV_LENGTH ? "" : "Invalid";
};

const trimmedCardNumber = computed(() => {
  return cardData.value.cardNumber.replace(/ /g, "");
});

const isFormValid = computed(() => {
  return (
    trimmedCardNumber.value.length === CARD_NUMBER_LENGTH &&
    cardData.value.year !== "" &&
    cardData.value.month !== "" &&
    cardData.value.cvv.length === CVV_LENGTH &&
    Object.values(errors.value).every((error) => error === "")
  );
});

const submitForm = () => {
  if (isFormValid.value) {
    // Send data here
  } else {
    // Handle invalid form
  }
};
</script>
