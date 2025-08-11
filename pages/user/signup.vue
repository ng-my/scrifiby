<template>
  <div class="flex min-h-screen flex-col bg-white">
    <user-only-logo :noLogin="noLogin"></user-only-logo>
    <user-signup></user-signup>
  </div>
</template>

<script setup>
const noLogin = ref("");
const route = useRoute();
onMounted(() => {
  if (route.query.type === "noLogin") {
    noLogin.value = route.query.type;
  }
});
</script>

<style scoped lang="scss"></style>
