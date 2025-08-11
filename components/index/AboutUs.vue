<template>
  <section class="flex flex-col items-center mx-auto text-black text-[1.125rem]">
    <!-- About Scribify Section -->
    <div class="about-section w-full py-4 md:py-[3.75rem] flex flex-col items-center ">
      <h2 class="section-title w-full max-w-[80rem] px-[2.5rem] h-[3.5rem] leading-[3.5rem] text-[2.5rem] font-medium mb-[1.875rem]">About Scribify</h2>
      <div class="content-wrapper max-w-[80rem] px-[2.5rem] flex flex-col sm:flex-row ">
        <div class="text-content leading-6 font-normal">
          <p class="description-text mb-4">
            Our mission is to provide the most accurate audio and video transcription services.
          </p>

          <p class="description-text  mb-4">
            Leveraging industry-leading AI technology, we achieve transcription accuracy rates of
            over 95%. For some major languages, through technical optimization, we can even
            reach 99% accuracy.
          </p>

          <p class="description-text mb-4">
            We support over 100 languages for spoken word recognition, and can translate
            transcribed text into more than 249 languages.
          </p>

          <p class="description-text">
            Features such as automatic speaker identification, subtitle generation, large file
            transcription, extensive file format support, batch file transcription, and batch
            transcription export significantly enhance the efficiency of audio and video
            transcription, saving users a considerable amount of time.
          </p>
        </div>

        <div class="image-content mt-3 md:ms-[6.875rem] md:mt-0">
          <el-image
            :src="`/assets/images/index/company.png`"
            class="w-[21rem] h-full md:h-[15.625rem] md:w-[25.625rem] object-contain"
            fit="contain"
            ></el-image>
        </div>
      </div>
    </div>

    <!-- Company Information Section -->
    <div class="max-w-[80rem] px-[2.5rem] mt-4 md:mt-[3.5rem] md:p-0 flex flex-col items-center mb-[6rem] md:mb-[7.5rem]">
      <h2 class="section-title m-h-[3.5rem] leading-[3.5rem] text-[2.5rem] font-medium mb-[1.875rem]">Company Information</h2>

      <div class="company-details">
        <div class="detail-item mb-5">
          <span class="detail-label font-medium me-2">Company name:</span>
          <span>SCRIBIFY AI INC</span>
        </div>

        <div class="detail-item  mb-5">
          <span class="detail-label font-medium me-2">Address:</span>
          <span>30 N Gould St Ste R Sheridan, WY 82801 USA</span>
        </div>

        <div class="detail-item">
          <span class="detail-label font-medium  me-2">Email:</span>
          <span>notification@scribify.ai</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
/* 关于我们 */
</script>

<style scoped lang="scss">
.about-section {
  background: url('/assets/images/index/aboutUsBanner.png') 100% 100% no-repeat;
}

</style>
