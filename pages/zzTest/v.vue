<template>
  <div v-if="buildInfo" class="package-version-wrap">
    <!-- <p>版本: {{ buildInfo.version }}</p> -->

    <p>Build Time: {{ formatDate(buildInfo.buildTime) }}</p>

    <p>Git Commit Pre: {{ buildInfo.gitCommit.substring(0, 8) }}</p>

    <p>Git Commit: {{ buildInfo.gitCommit }}</p>

    <p>Git Commit Time: {{ formatDate(buildInfo.gitCommitDate) }}</p>
  </div>
</template>

<script setup>
const buildInfo = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('/packageVersion.json')
    buildInfo.value = await response.json()
  } catch (error) {
    console.error('获取构建信息失败:', error)
  }
})

const formatDate = (dateString) => {
  if (!dateString) return 'unknown'
  return new Date(dateString).toLocaleString()
}
</script>

<style scoped>
.package-version-wrap {
  font-size: 2rem;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
}

.package-version-wrap p {
  margin: 5px 0;
}
</style> 