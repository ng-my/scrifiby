<template>
  <div id="google_translate_element" style="padding-top: 4rem;">
    <span v-show="flag">
      <span style="color: red; cursor: pointer;">How </span>
      <span style="color: black; cursor: pointer;">old </span>
      <span style="color: blue; cursor: pointer;">are </span>
      <span style="color: green; cursor: pointer;">you </span>
      {{ str }}
      <span style="color: red; cursor: pointer;"> the </span>
      <span style="color: black; cursor: pointer;">man </span>
      <span style="color: blue; cursor: pointer;">who </span>
      <span style="color: green; cursor: pointer;">is </span>
      <span style="color: palegoldenrod; cursor: pointer;">wearing </span>
      <span style="color: palevioletred; cursor: pointer;">a </span>
      <span style="color: pink; cursor: pointer;">red </span>
      <span style="color: greenyellow; cursor: pointer;">coat. </span>
    </span>
    <p class="notranslate" style="position: fixed; top: 15rem; width: 100%;">
      <el-input v-model="str" type="textarea"></el-input>
      <el-button @click="googleTranslate()" style="display: block;">翻译</el-button>
      <span style="color: red; cursor: pointer;">How </span>
      <span style="color: black; cursor: pointer;">old </span>
      <span style="color: blue; cursor: pointer;">are </span>
      <span style="color: green; cursor: pointer;">you </span>
      {{ str }}
      <span style="color: red; cursor: pointer;"> the </span>
      <span style="color: black; cursor: pointer;">man </span>
      <span style="color: blue; cursor: pointer;">who </span>
      <span style="color: green; cursor: pointer;">is </span>
      <span style="color: palegoldenrod; cursor: pointer;">wearing </span>
      <span style="color: palevioletred; cursor: pointer;">a </span>
      <span style="color: pink; cursor: pointer;">red </span>
      <span style="color: greenyellow; cursor: pointer;">coat. </span>
    </p>
  </div>
</template>

<script setup lang="ts">
/* googleTranslate 组件 */
// https://support.google.com/translate/answer/2534559?hl=en&ref_topic=7011659&sjid=15876994372614518438-NC
// 文档 https://docs.google.com/forms/u/0/d/e/1FAIpQLSfAyBtxLmBe3s1m-6nkSBcs7W_8EAUmwmPTEXlSqctg1QCRBw/formResponse?pli=1
useHead({
  script: [
    {
      src: '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    }
  ]
})
const str = ref("This is an apple. How old are you. In this lecture, I'm going to talk about how to solve the equation of a differential equation.")
const arr = str.value.split('')
const flag = ref(true)
const googleTranslate = () => {
  flag.value = false;
  setTimeout(() => {
    flag.value = true;
    googleTranslateElementInit()
  }, 300);
}
const googleTranslateElementInit = () => {
  const google = (window as any).google;
  if (!google) {
    setTimeout(() => {
      googleTranslateElementInit()
    }, 100);
    return;
  }
  new google.translate.TranslateElement({
    pageLanguage: 'auto', // 页面原文语言，例如英文
    includedLanguages: 'zh-CN,en,ja,ko,fr,es', // 可翻译的语言
    layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL, // SIMPLE
    autoDisplay: true
  }, 'google_translate_element');
}

onMounted(() => {
  googleTranslateElementInit()
})
</script>

<style scoped></style>