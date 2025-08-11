<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <NuxtLink to="/">返回首页</NuxtLink>
  </div>
</template>

<script setup lang="ts">

// 设置 404 状态码
useHead({
  title: '404 - 页面未找到'
})

// 在服务器端设置 404 状态码
if (process.server) {
  const event = useRequestEvent()
  if (event?.node?.res) {
    event.node.res.statusCode = 404
  }
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
</style> 