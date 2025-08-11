<template>
  <NuxtLayout>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">选择语言</h2>
      <el-row :gutter="20">
        <el-col
          v-for="(lang, idx) in languages"
          :key="idx"
          :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
          class="mb-4"
        >
          <el-card
            shadow="hover"
            class="!p-0 border border-gray-100 rounded-xl transition-all duration-200 hover:scale-105"
            body-style="padding:0"
          >
            <div class="flex items-center gap-x-4 py-3 px-4">
              <el-image
                :src="`/assets/images/nation/${lang}.png`"
                :alt="lang"
                class="w-8 h-8 flex-shrink-0 object-contain"
                fit="contain"
              />
              <span class="font-medium text-gray-800 text-base">{{ lang }}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { NationNames } from '~/utils/nation'
const languages = NationNames;
</script>

<style scoped>
/* 可根据需要自定义卡片样式 */
</style>