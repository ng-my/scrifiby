<template>
  <div>
    <div class="mb-2 text-sm">
      {{ t("FileUploadAndRecording.upload.language") }}
    </div>

    <el-popover
      trigger="click"
      :show-arrow="false"
      :popper-style="{
        width: 'auto',
        maxWidth: '33rem',
        padding: '0'
      }"
      placement="bottom-start"
      ref="popoverRef"
      @show="show = true"
      @hide="show = false"
    >
      <template #reference>
        <el-input
          class="customer-input"
          readonly
          :model-value="
            value.name ? t('TranscriptionPage.langChooseV1.' + value.name) : ''
          "
        >
          <template #suffix>
            <div
              class="transition-all delay-75"
              :class="{ 'rotate-180': !show }"
            >
              <el-icon><ArrowUp /></el-icon>
            </div>
          </template>
        </el-input>
      </template>
      <lang-choose-v1
        ref="langChooseV1Ref"
        :modelValue="value.id"
        :recentLanguageKeys="recentLanguageKeys"
        :only-trans-code="true"
        :cancel="false"
        :customerClass="'!max-h-[36vh] !w-[15rem] lang-choose-input-20250711'"
        @choose="handleChoose"
      />
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { ArrowUp } from "@element-plus/icons-vue";
import {
  languageData,
  languageTransMap
} from "~/components/langChoose/langFlag";

const { t } = useI18n();

const show = ref(false);

const props = defineProps<{
  lang: any;
}>();

watchEffect(() => {
  if (show.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

const emit = defineEmits(["choose", "update:lang"]);

const popoverRef = useTemplateRef("popoverRef");

const value = ref<any>({});
const handleChoose = (val: any) => {
  value.value = {
    ...val,
    lang: val.name
  };
  popoverRef.value?.hide();
  emit("choose", value.value);
  emit("update:lang", value.value);
};

const recentLanguageKeys = ref([]);
const langChooseV1Ref = useTemplateRef("langChooseV1Ref");
const getRecentLang = async () => {
  const { transcriptApi } = await import("~/api/transcript");
  const res = await transcriptApi.getTranRecentLang();
  recentLanguageKeys.value = res
    .map((item: any) => {
      const [lang, name] = item.split("#");
      return name !== "null" ? name : (languageTransMap as any)?.[lang];
    })
    .filter(Boolean);

  const select = languageData.find(
    (item) => item.lang === recentLanguageKeys.value?.[0]
  );

  if (select) {
    value.value = {
      name: select.lang,
      id: select.lang,
      ...select
    };
  } else {
    await nextTick();
    const obj = (langChooseV1Ref.value!.popularLanguages[0] || {}) as any;
    value.value = {
      ...obj,
      lang: obj.name
    };
  }

  emit("update:lang", value.value);
};
getRecentLang();
</script>

<style scoped>
:deep(.customer-input) {
  @apply h-[2.125rem] w-60 rounded-lg border-borderColor;
}
</style>
<style>
.lang-choose-input-20250711 .lang-item-wrap {
  @apply !grid-cols-1;
}
</style>
