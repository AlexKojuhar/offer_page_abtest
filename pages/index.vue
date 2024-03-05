<template>
  <NuxtLayout :name="abtest">
    <OfferVar1 v-if="abtest === 'var1'" />
    <OfferVar2 v-else-if="abtest === 'var2'" />
  </NuxtLayout>
</template>

<script setup>
const router = useRouter();
const storedAbtest = useCookie("abtest");
const abtestQueryParam = router.currentRoute.value.query.abtest;

const abtest = ref(null);

const isTest = computed(() => {
  return abtestQueryParam === "test";
});

const isVarQueryParam = computed(() => {
  return ["var1", "var2"].includes(abtestQueryParam);
});

const generateRandomAbtest = () => {
  return Math.random() < 0.5 ? "var1" : "var2";
};
const getAbtestGroup = () => {
  if (!storedAbtest.value) {
    storedAbtest.value = generateRandomAbtest();
  }
  return storedAbtest.value;
};

const initializeAbtest = () => {
  if (isTest.value) {
    abtest.value = getAbtestGroup();
  } else if (isVarQueryParam.value) {
    abtest.value = abtestQueryParam;
  } else {
    throw new Error("Page Not Found");
  }
};

initializeAbtest();
</script>
