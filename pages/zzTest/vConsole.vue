<template>
  <div>vConsole开启：{{ vConsole }}</div>
</template>

<script setup lang="ts">
const vConsole = ref(false);
onMounted(() => {
  if (process.client) {
    if (window?.localStorage.getItem("VConsoleShow")) {
      window?.localStorage.removeItem("VConsoleShow");
      vConsole.value = false;
    } else {
      window?.localStorage.setItem("VConsoleShow", "VConsole");
      vConsole.value = true;
    }
  }
});
</script>

<style scoped></style>
