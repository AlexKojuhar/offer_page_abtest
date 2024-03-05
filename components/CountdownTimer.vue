<template>
  <div
    class="timer flex h-[47px] items-center justify-center rounded-[12px] bg-black md:h-[60px]"
    :class="{ 'timer--alert': isTimerBecameAlert }"
  >
    <div
      :style="{ width: loaderWidth }"
      class="timer__loader h-full rounded-[12px] bg-green dark:bg-blue-100"
    ></div>
    <div class="timer__text text-[24px] font-semibold text-white">
      {{ formattedTime }}
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["started", "finished"]);

const initialTime = 180;
let intervalId;

const getInitialTime = () => {
  const storedTime = localStorage.getItem("timer_time");
  return storedTime ? parseInt(storedTime) : initialTime;
};

const time = ref(getInitialTime());
const isRunning = ref(false);

const formattedTime = computed(() => {
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
});

const loaderWidth = computed(() => {
  return `${(time.value / initialTime) * 100}%`;
});

const isTimerBecameAlert = computed(() => {
  return time.value <= 10 && time.value > 0;
});

const startTimer = () => {
  if (!isRunning.value) {
    if (time.value > 0) {
      emits("started");
    }
    isRunning.value = true;
    intervalId = setInterval(() => {
      time.value--;
      if (time.value <= 0) {
        stopTimer();
        time.value = 0;
      }
      saveTimeToLocalStorage();
    }, 1000);
  }
};

const stopTimer = () => {
  isRunning.value = false;
  clearInterval(intervalId);
  removeTimeFromLocalStorage();
  emits("finished");
};

const saveTimeToLocalStorage = () => {
  if (process.client) {
    localStorage.setItem("timer_time", String(time.value));
  }
};

const removeTimeFromLocalStorage = () => {
  if (process.client) {
    localStorage.removeItem("timer_time");
  }
};

onMounted(startTimer);

onUnmounted(() => {
  clearInterval(intervalId);
  if (time.value > 0) {
    saveTimeToLocalStorage();
  } else {
    removeTimeFromLocalStorage();
  }
});
</script>

<style scoped lang="scss">
.timer {
  @apply relative overflow-hidden;

  &--alert {
    box-shadow: 0px 0px 6px 0px theme("colors.red");
    @apply border-2 border-red;
  }

  &__loader {
    @apply absolute;
    left: 0;
    z-index: 1;
  }

  &__text {
    z-index: 2;
  }
}
</style>
