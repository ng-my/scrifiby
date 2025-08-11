<template>
  <div class="transcript-box relative flex w-full flex-col text-sm">
    <div class="share-login">
      <layout-upgrade v-if="!isShare && isFreeUser" ref="showSubRef" />
      <layout-header v-if="isShare" />
    </div>
    <div class="content-box flex flex-1 flex-col overflow-hidden">
      <div
        v-if="isDesktop"
        class="flex min-h-[3.75rem] w-full flex-row items-center border-b border-solid border-borderColor px-4 py-3"
      >
        <div class="left-box flex flex-1 items-center overflow-hidden">
          <div
            v-if="!isShare"
            class="icon-wrap me-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg text-lg text-black hover:bg-fontHover"
          >
            <el-icon @click="handleBack">
              <ArrowLeft />
            </el-icon>
          </div>
          <div class="file-wrap flex-1 overflow-hidden">
            <div class="file-name line-clamp-1 break-all leading-5 text-black">
              <span
                v-if="!isShare"
                @click="startEditing"
                ref="fileNameElement"
                class="file-text cursor-pointer text-base font-medium"
                :title="fileName"
              >
                {{ fileName }}
              </span>
              <span v-else class="file-text text-base font-medium"
                >{{ fileName }}
              </span>
              <el-popover
                ref="fileNamePopoverRef"
                :virtual-ref="fileNameElement"
                :offset="4"
                width="20rem"
                :show-arrow="false"
                virtual-triggering
                placement="bottom-start"
                popper-style="padding:0;"
                popper-class="!rounded-lg !border-0"
                trigger="click"
                @hide="saveFileName"
              >
                <el-input
                  ref="fileNameInputRef"
                  class="sys-input rounded-lg !text-black"
                  v-model="fileName"
                  @input="fileNameInput"
                  @keydown.enter.prevent="
                    () => {
                      fileNamePopoverRef.hide();
                    }
                  "
                  style="width: 20rem"
                />
              </el-popover>
            </div>
            <div class="file-upload-time text-sm text-fontColor">
              {{ fileUploadTime && getTime(fileUploadTime) }}
            </div>
          </div>
        </div>
        <div class="right-box relative ms-20 flex h-8 min-w-[10rem]">
          <!--    是否是分享 -->
          <template v-if="!isShare">
            <!--      是否是编辑模式-->
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="transform opacity-0"
              enter-to-class="transform opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="transform opacity-100"
              leave-to-class="transform opacity-0"
            >
              <div
                v-if="isEditRightTranscript"
                class="absolute bottom-[50%] right-0 flex translate-y-[50%]"
              >
                <el-button
                  text
                  :title="t('TranscriptionPage.undo')"
                  class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                  :disabled="!canUndo"
                  @click="undoOperation"
                >
                  <span class="iconfont icon-zuochexiao text-xs"></span>
                </el-button>
                <el-button
                  text
                  :title="t('TranscriptionPage.redo')"
                  class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                  :disabled="!canRedo"
                  @click="redoOperation"
                >
                  <span class="iconfont icon-youchexiao text-xs"></span>
                </el-button>
                <el-button
                  text
                  class="h-8 !bg-mainColor-600 hover:!bg-hoverColor-deepen"
                  @click="handleSaveRightTranscript"
                >
                  <span class="iconfont icon-baocun1 me-2 text-xs"></span>
                  <span class="!text-black">
                    {{ t("TranscriptionPage.save") }}</span
                  >
                </el-button>
              </div>
            </Transition>
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="transform  opacity-0"
              enter-to-class="transform opacity-100"
              leave-active-class="duration-200 ease-in"
              leave-from-class="transform opacity-100"
              leave-to-class="transform opacity-0"
            >
              <div v-if="!isEditRightTranscript">
                <el-button
                  text
                  class="h-8"
                  :disabled="langId !== ''"
                  @click="handleEditRightTranscript"
                >
                  <span class="iconfont icon-bianji me-2 text-xs"></span>
                  {{ t("TranscriptionPage.edit") }}
                </el-button>
                <el-popover
                  ref="langChoosePopoverRef"
                  placement="bottom"
                  width="50rem"
                  trigger="click"
                  :show-arrow="false"
                  popper-style="padding:0;"
                  @show="handleLangPopShow"
                >
                  <template #reference>
                    <el-button text>
                      <span class="iconfont icon-fanyi me-2 text-xs"></span>
                      <div class="max-w-20 truncate leading-4">
                        {{
                          !langId
                            ? t("TranscriptionPage.translate")
                            : t("TranscriptionPage.langChooseV1." + langId)
                        }}
                      </div>
                      <el-icon class="el-icon--right !ms-2">
                        <arrow-down />
                      </el-icon>
                    </el-button>
                  </template>
                  <lang-choose-v1
                    ref="langChooseV1Ref"
                    v-model="langId"
                    :recentLanguageKeys="recentLanguageKeys"
                    @choose="handleTranslateLangChoose"
                  ></lang-choose-v1>
                </el-popover>
                <el-button
                  v-if="fileBaseInfo.diarizeEnabled"
                  text
                  :bg="isShowSpeaker"
                  class="h-8"
                  @click="handleShowSpeaker"
                >
                  <span class="iconfont icon-jiangyanzhe me-2 text-xs"></span>
                  {{ t("TranscriptionPage.showSpeaker") }}
                </el-button>
                <el-button
                  text
                  :bg="isShowTimestamp"
                  class="h-8"
                  @click="handleShowTimestamp"
                >
                  <span class="iconfont icon-shijian me-2 text-xs"></span>
                  {{ t("TranscriptionPage.showTimestamp") }}
                </el-button>
                <el-button text class="h-8" @click="handleShare">
                  <span class="iconfont icon-fenxiang me-2 text-xs"></span>
                  {{ t("TranscriptionPage.share") }}
                </el-button>
                <el-button text class="h-8" @click="handleDownload">
                  <span class="iconfont icon-xiazai me-2 text-xs"></span>
                  {{ t("TranscriptionPage.export") }}
                </el-button>
              </div>
            </Transition>
          </template>
          <template v-else>
            <div class="flex h-8 min-w-20 items-center justify-center">
              "{{ shareName }}" {{ t("TranscriptionPage.shared") }}
            </div>
            <el-button text class="ms-2 h-8" @click="handleDownload">
              <span class="iconfont icon-xiazai me-2 text-xs"></span>
              {{ t("TranscriptionPage.export") }}
            </el-button>
          </template>
        </div>
      </div>
      <div
        v-else
        class="relative flex h-12 w-full shrink-0 flex-row items-center overflow-hidden border-b border-solid border-borderColor px-4"
        :class="{
          'flex-row-reverse': isEditRightTranscript,
          'justify-end': isShare
        }"
      >
        <template v-if="!isShare">
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="transform opacity-100"
            leave-to-class="transform opacity-0"
          >
            <div
              v-if="isEditRightTranscript"
              class="absolute bottom-[50%] right-0 flex translate-y-[50%]"
            >
              <el-button
                text
                :title="t('TranscriptionPage.undo')"
                class="h-8 !bg-transparent !p-0"
                :disabled="!canUndo"
                @click="undoOperation"
              >
                <span class="iconfont icon-zuochexiao text-base"></span>
              </el-button>
              <el-button
                text
                :title="t('TranscriptionPage.redo')"
                class="!ms-[1.625rem] h-8 !bg-transparent !p-0"
                :disabled="!canRedo"
                @click="redoOperation"
              >
                <span class="iconfont icon-youchexiao text-base"></span>
              </el-button>
              <el-button text class="h-8" @click="handleSaveRightTranscript">
                <span class="iconfont icon-baocun1 me-2 text-base"></span>
              </el-button>
            </div>
          </Transition>
          <Transition
            enter-active-class="transition-all duration-200 ease-out"
            enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="transform opacity-100"
            leave-to-class="transform opacity-0"
          >
            <div
              v-if="!isEditRightTranscript"
              class="relative flex flex-1 justify-between text-fontColor"
            >
              <div
                class="icon-wrap flex cursor-pointer items-center text-lg text-black"
              >
                <el-icon @click="handleBack">
                  <ArrowLeft />
                </el-icon>
              </div>
              <div class="flex flex-1 flex-row-reverse">
                <div class="ms-5 h-8 leading-8">
                  <el-popover
                    placement="bottom"
                    width="12rem"
                    trigger="click"
                    popper-class="mobile-popper-more-A0KQ7lsC"
                    popper-style="padding:0; min-width:unset; border-radius: 0.5rem;"
                    ref="mobilePopover"
                  >
                    <template #reference>
                      <span
                        class="iconfont icon-suolve me-2 inline-block rotate-90 text-base"
                      ></span>
                    </template>
                    <div class="flex flex-col px-4 py-2">
                      <div
                        v-if="fileBaseInfo.diarizeEnabled"
                        class="flex h-8 items-center justify-between"
                      >
                        <div class="flex flex-1 items-center overflow-hidden">
                          <span
                            class="iconfont icon-jiangyanzhe me-2 text-base"
                          ></span>
                          <span class="flex-1 overflow-hidden truncate">
                            {{ t("TranscriptionPage.showSpeaker") }}
                          </span>
                        </div>
                        <el-checkbox
                          v-model="isShowSpeaker"
                          class="self-center"
                        ></el-checkbox>
                      </div>
                      <div class="flex h-8 items-center justify-between">
                        <div class="flex flex-1 items-center overflow-hidden">
                          <span
                            class="iconfont icon-shijian me-2 text-base"
                          ></span>
                          <span class="flex-1 overflow-hidden truncate">
                            {{ t("TranscriptionPage.showTimestamp") }}
                          </span>
                        </div>
                        <el-checkbox v-model="isShowTimestamp"></el-checkbox>
                      </div>
                      <div class="flex h-8 items-center" @click="handleShare">
                        <span
                          class="iconfont icon-fenxiang me-2 text-base"
                        ></span>
                        <span> {{ t("TranscriptionPage.share") }} </span>
                      </div>
                    </div>
                  </el-popover>
                </div>
                <div class="ms-5 h-8 leading-8" @click="handleDownload">
                  <span class="iconfont icon-xiazai me-2 text-base"></span>
                </div>
                <el-popover
                  ref="langChoosePopoverRef"
                  placement="bottom"
                  :width="isDesktop ? '50rem' : '23rem'"
                  trigger="click"
                  :show-arrow="false"
                  popper-style="padding:0;"
                  @show="handleLangPopShow"
                >
                  <template #reference>
                    <div class="pop ms-5 leading-8">
                      <span class="iconfont icon-fanyi text-base"></span>
                      <el-icon class="el-icon--right !ms-0 !text-sm">
                        <arrow-down />
                      </el-icon>
                    </div>
                  </template>
                  <lang-choose-v1
                    ref="langChooseV1Ref"
                    v-model="langId"
                    :recentLanguageKeys="recentLanguageKeys"
                    @choose="handleTranslateLangChoose"
                  ></lang-choose-v1>
                </el-popover>
                <div
                  class="ms-5 h-8 leading-8"
                  :class="[
                    langId !== '' ? 'pointer-events-none opacity-50' : ''
                  ]"
                  @click="handleEditRightTranscript"
                >
                  <span class="iconfont icon-bianji me-2 text-base"></span>
                </div>
              </div>
            </div>
          </Transition>
        </template>
        <template v-else>
          <div class="flex h-8 min-w-20 items-center justify-center">
            "{{ shareName }}" {{ t("TranscriptionPage.shared") }}
          </div>
          <el-button text class="ms-2 h-8" @click="handleDownload">
            <span class="iconfont icon-xiazai me-2 text-base"></span>
            {{ t("TranscriptionPage.export") }}
          </el-button>
        </template>
      </div>
      <div
        v-if="!fileBaseInfo.hasError"
        ref="container"
        class="draggable-panels grid-container flex-1 overflow-hidden rounded-xl bg-white px-4 py-[1.125rem]"
        :class="[!displayVideo ? '!py-0' : '']"
        :style="gridStyle"
      >
        <!-- 左侧面板 -->
        <div
          v-show="displayVideo && isVideo"
          ref="leftPanel"
          :style="{
            ...leftPanelStyle,
            '--device-pixel-ratio-diff':
              devicePixelRatioDiff > 1
                ? devicePixelRatioDiff * 3 + 'rem'
                : '0rem'
          }"
          class="flex overflow-hidden bg-white"
        >
          <div id="mse" class="tm-xg-video rounded-lg"></div>
        </div>

        <!-- 拖拽条 - 仅桌面端显示 -->
        <div
          v-show="displayVideo && isVideo"
          ref="resizer"
          :style="resizerStyle"
          class="drag-handle z-10 mx-2 bg-mainColor-900"
          @mousedown="handleDragStart"
          :class="{ dragging: isDragging, 'drag-disabled': !dragEnabled }"
          @mouseenter="enableDrag"
          @mouseleave="disableDrag"
        ></div>
        <!-- 右侧面板 -->
        <div
          ref="rightPanel"
          :dir="transcriptDirection"
          class="relative flex overflow-hidden px-4"
          :style="{
            ...rightPanelStyle,
            ...{
              '--upgrade-visible-height': upgradeVisibleHeight
                ? +upgradeVisibleHeight + 1.5 + 'rem'
                : 0
            }
          }"
          :class="[
            !displayVideo ? 'pe-10 ps-4 pt-4' : '',
            langId ? 'show-lang-box' : '',
            isShowSpeaker ? 'show-speaker-box' : '',
            !isDesktop ? 'is-mobile flex-col !px-0' : '',
            upgradeVisibleHeight ? 'upgrade-visible' : '',
            !langId && !displayVideo ? 'mx-auto max-w-[92rem] !pe-0 !ps-0' : ''
          ]"
          id="right-btn"
        >
          <span
            v-if="langId"
            :class="[
              !isDesktop
                ? 'flex h-[1.75rem] w-full justify-end'
                : 'absolute top-4',
              transcriptDirection === 'rtl' ? 'left-16' : 'right-16',
              'z-20'
            ]"
            :title="t('TranscriptionPage.closeTrans')"
          >
            <span
              class="iconfont icon-shanchu h-4 w-4 cursor-pointer text-xs"
              @click="langId = ''"
            ></span>
          </span>
          <div class="file-wrap overflow-hidden" v-if="!isDesktop">
            <div class="file-name line-clamp-1 break-all leading-5 text-black">
              <span
                v-if="!isShare"
                @click="startEditing"
                ref="fileNameElement"
                class="file-text cursor-pointer text-base font-medium"
                :title="fileName"
              >
                {{ fileName }}
              </span>
              <span v-else class="file-text text-base font-medium"
                >{{ fileName }}
              </span>
              <el-popover
                ref="fileNamePopoverRef"
                :virtual-ref="fileNameElement"
                :offset="4"
                width="20rem"
                :show-arrow="false"
                virtual-triggering
                placement="bottom-start"
                popper-style="padding:0;"
                popper-class="!rounded-lg !border-0"
                trigger="click"
                @hide="saveFileName"
              >
                <el-input
                  ref="fileNameInputRef"
                  class="sys-input rounded-lg !text-black"
                  v-model="fileName"
                  @input="fileNameInput"
                  @keydown.enter.prevent="
                    () => {
                      fileNamePopoverRef.hide();
                    }
                  "
                  style="width: 20rem"
                />
              </el-popover>
            </div>
            <div class="file-upload-time text-sm text-fontColor">
              {{ fileUploadTime && getTime(fileUploadTime) }}
            </div>
          </div>
          <DynamicScroller
            v-if="transcriptData"
            ref="dynamicScroller"
            :items="transcriptData.paragraphs"
            :min-item-size="56"
            keyField="pid"
            skipHover
            class="transcript-container flex flex-1 overflow-y-auto"
            @scroll-end="handleScrollEnd"
          >
            <template #default="{ item, index, active }">
              <DynamicScrollerItem
                :item="item"
                :active="active"
                :size-dependencies="[item.sentences]"
                :data-index="index"
                :data-active="active"
                class="dy-item"
              >
                <div
                  :key="item.pk || item.pid"
                  :data-active="active"
                  :data-pid="item.pid"
                  class="virtual-item-wrap relative flex bg-white"
                  :class="[isDesktop ? 'flex-row pb-4' : 'flex-col']"
                >
                  <div
                    v-show="isShowSpeaker || (!isDesktop && isShowTimestamp)"
                    class="left-speaker flex-shrink-0 items-end"
                    :class="[
                      !isDesktop ? 'my-2.5 flex flex-1' : 'pt-5',
                      !isShowTimestamp && isDesktop ? '!pt-0' : ''
                    ]"
                  >
                    <!-- 一个段落对应一个说话人 -->
                    <div
                      v-if="fileBaseInfo.diarizeEnabled"
                      v-show="isShowSpeaker"
                      ref="speakerBtnRef"
                      v-click-outside="handleOutsideClick"
                      :class="{
                        'is-shared': isShare,
                        'hover:bg-fontHover': !isShare && isDesktop,
                        'w-[7.25rem] px-2.5 py-[0.3125rem]': isDesktop,
                        'inline-block max-w-72 overflow-hidden': !isDesktop,
                        'cursor-pointer': !isShare
                      }"
                      class="speaker-container me-2.5 inline-flex items-center rounded-[0.5rem] transition-colors"
                      @click="
                        handleSpeakerPopoverShow(
                          item.speakerId,
                          item.pid,
                          isShare
                        )
                      "
                    >
                      <span
                        class="edit-icon iconfont icon-bianji me-1"
                        v-if="isDesktop"
                      ></span>
                      <span
                        class="truncate text-base font-medium leading-[1.375rem] text-fontColor"
                        :title="item.speaker"
                      >
                        {{ item.speaker }}
                      </span>
                    </div>
                    <div
                      v-if="!isDesktop"
                      v-show="isShowTimestamp"
                      class="h-5 text-sm font-normal text-fontColor"
                    >
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                    <el-popover
                      v-if="speakerPopoverVisible && selectedPid === item.pid"
                      ref="speakerPopoverRef"
                      placement="bottom"
                      :visible="speakerPopoverVisible"
                      :virtual-ref="speakerBtnRef"
                      virtual-triggering
                      width="18rem"
                      popper-class="pop-iAHFsY2 !p-0"
                    >
                      <!-- 说话人选择内容 -->
                      <el-scrollbar
                        max-height="14rem"
                        class="pt-2"
                        ref="scrollbarRef"
                      >
                        <div
                          v-for="(speaker, index) in uniqueSpeakers"
                          :key="index"
                          class="speaker-item flex h-8 cursor-pointer items-center justify-between px-5"
                          :class="{
                            'is-active text-[#F5F7FA]':
                              selectedSpeakerId === speaker.id,
                            'hover:bg-hoverColor-normal': true
                          }"
                        >
                          <div
                            class="flex flex-1 items-center overflow-hidden"
                            @click="selectSpeaker(speaker.id)"
                          >
                            <span
                              class="iconfont icon-jiangyanzhe me-2 flex-shrink-0 text-sm text-fontColor"
                            ></span>
                            <span
                              class="inline-block truncate text-black"
                              :class="{
                                '!text-mainColor-900':
                                  selectedSpeakerId === speaker.id
                              }"
                            >
                              {{ speaker.name }}
                            </span>
                          </div>
                          <div class="speaker-actions flex items-center">
                            <span
                              v-if="selectedSpeakerId === speaker.id"
                              class="iconfont icon-duihao me-2 text-xs !text-mainColor-900"
                            ></span>
                            <span
                              class="iconfont icon-bianji edit-speaker-icon text-xs opacity-0"
                              @click.stop="openEditSpeakerDialog(speaker)"
                            ></span>
                          </div>
                        </div>
                      </el-scrollbar>
                      <div
                        class="mt-3 border-b border-solid border-borderColor pb-2.5 ps-5"
                      >
                        <el-button
                          plain
                          class="!rounded-lg !border-borderColor !px-3 !text-black"
                          @click="openEditSpeakerDialog()"
                        >
                          <span> + {{ t("TranscriptionPage.addNew") }} </span>
                        </el-button>
                      </div>

                      <div
                        class="flex h-11 items-center overflow-hidden border-b border-solid border-borderColor pe-5 ps-5"
                        v-if="hasDuplicateSpeakers"
                      >
                        <el-checkbox
                          v-model="applyToAllMatching"
                          :true-value="1"
                          :false-value="0"
                          class="overflow-hidden"
                        >
                          <div
                            :title="
                              t('TranscriptionPage.applyToAllMatchingSpeakers')
                            "
                            class="overflow-hidden truncate !pl-0 ps-2 leading-6 text-black"
                          >
                            {{
                              t("TranscriptionPage.applyToAllMatchingSpeakers")
                            }}
                          </div>
                        </el-checkbox>
                      </div>

                      <div class="dialog-footer flex justify-end py-3 pe-4">
                        <el-button
                          plain
                          :loading="speakerSaveLoading"
                          class="!rounded-lg !border-borderColor !px-4 !text-black"
                          @click="confirmSpeakerSelection"
                        >
                          {{ t("TranscriptionPage.confirm") }}</el-button
                        >
                      </div>
                    </el-popover>
                  </div>
                  <div
                    class="right-content transcript-content-wrap flex flex-1 flex-col"
                    :class="[
                      isDesktop ? (isShowSpeaker ? 'pe-4' : 'px-4') : ''
                    ]"
                  >
                    <!--      说话人的开始时间       -->
                    <div
                      v-if="isDesktop"
                      v-show="isShowTimestamp"
                      class="h-5 text-sm font-normal text-fontColor"
                    >
                      <span>{{ formatSecondsFromMs(item.start_time) }}</span>
                    </div>
                    <div
                      class="grid w-full flex-1"
                      :class="[
                        isDesktop && langId ? 'grid-cols-2' : 'grid-cols-1'
                      ]"
                    >
                      <!-- 段落  桌面端或者 移动端且未选择翻译其他语言-->
                      <div
                        v-if="isDesktop || (!isDesktop && !langId)"
                        :data-pid="item.pid"
                        class="content-span-parent-node paragraph-container whitespace-normal break-words text-lg tracking-[0.35px] outline-none"
                      >
                        <!-- 句子容器 - 支持容器级别的contenteditable -->
                        <span
                          class="sentence-container select-text whitespace-break-spaces outline-none"
                          :contenteditable="isEditRightTranscript"
                          :class="{
                            'editable-container': isEditRightTranscript
                          }"
                          @input="handleRealTimeInput"
                          @compositionstart="handleCompositionStart"
                          @compositionend="handleCompositionEnd"
                        >
                          <span
                            v-for="(sentence, sentIndex) in item.sentences"
                            :key="sentence.sid"
                            class="sentence-wrapper cursor-pointer whitespace-break-spaces break-words border-b border-solid border-transparent text-lg !leading-[2.125rem] tracking-[0.35px] outline-none"
                            :data-sid="sentence.sid"
                            :data-sentence-index="sentIndex"
                            :data-pid="item.pid"
                            :class="{
                              'content-editable !rounded-none py-1 !text-black':
                                isActiveEditingSentence(sentence.sid)
                            }"
                          >
                            <!-- 统一的句子显示/编辑容器 -->
                            <span
                              v-for="(word, wordIndex) in sentence.contents"
                              :key="word.cid"
                              class="word-span whitespace-break-spaces break-words rounded-[0.25rem] py-1 !leading-[2.125rem] tracking-[0.35px] transition-colors duration-200"
                              :class="[
                                {
                                  'md:hover:bg-hoverColor-deepen md:hover:text-black':
                                    !isEditRightTranscript
                                },
                                {
                                  '!cursor-text': isEditRightTranscript
                                },
                                isWordActive(
                                  word,
                                  item.pid,
                                  sentIndex,
                                  wordIndex
                                )
                                  ? 'bg-hoverColor-deepen text-black'
                                  : 'md:hover:bg-hoverColor-deepen md:hover:text-black'
                              ]"
                              :data-word-index="wordIndex"
                              :data-sent-index="sentIndex"
                              :data-content-index="wordIndex"
                              :data-cid="word.cid"
                              :data-leaf="true"
                              :data-pid="item.pid"
                              :data-sid="sentence.sid"
                              @dblclick="
                                !isEditRightTranscript &&
                                handleWordDblClick(
                                  item.pid,
                                  sentIndex,
                                  wordIndex,
                                  word
                                )
                              "
                              @click="
                                handleWordClick(
                                  item.pid,
                                  sentIndex,
                                  wordIndex,
                                  word
                                )
                              "
                              >{{ word.content }}</span
                            >
                          </span>
                        </span>
                      </div>
                      <div
                        v-if="langId && !isShare"
                        :dir="translateDirection"
                        :class="[!isDesktop ? '!px-0' : '']"
                        class="other-lange-wrap whitespace-normal break-words px-16 text-lg !leading-8"
                      >
                        <span>
                          {{ item.translateContent }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="
                      !isShare &&
                      item.isLast &&
                      fileBaseInfo.isHalfHour &&
                      !isEditRightTranscript
                    "
                    class="half-wrap absolute bottom-0 left-0 h-[5.25rem] w-full"
                  ></div>
                </div>
                <!--  最后一项 升级提示-->
                <div
                  :key="item.pid + 'upgrade'"
                  ref="upgradeTipRef"
                  v-if="!isShare && item.isLast && fileBaseInfo.isHalfHour"
                  :class="[displayVideo && isVideo ? '!w-full' : '']"
                  class="mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-mainColor-600 p-[2.25rem] md:w-1/2"
                >
                  <div class="leading-5 text-black rtl:text-right">
                    {{ t("TranscriptionPage.upgradeTip30") }}
                  </div>
                  <div
                    class="mb-[1.5rem] text-base font-medium leading-[1.375rem] rtl:text-right"
                  >
                    {{ t("TranscriptionPage.upgradeTipMore") }}
                  </div>
                  <div
                    @click="handleJumpUpgrade"
                    class="mt-2 flex h-[2rem] flex-shrink-0 cursor-pointer items-center justify-center rounded-[2rem] bg-mainColor-900 px-7 text-sm font-medium text-white duration-75 ease-linear hover:bg-opacity-80 hover:text-opacity-80 sm:mt-0"
                  >
                    <el-image
                      class="me-2 h-7 w-7"
                      src="/assets/images/home/rocket.svg"
                    />
                    {{ t("TranscriptionPage.upgradeBtn") }}
                  </div>
                </div>
              </DynamicScrollerItem>
            </template>
          </DynamicScroller>
        </div>
      </div>
      <div
        v-else
        class="flex flex-1 items-center justify-center overflow-hidden text-lg"
      >
        {{ t("TranscriptionPage.errorTips") }}
      </div>
      <div
        :class="[
          isDesktop
            ? 'h-[4.5rem] border-t border-solid border-borderColor'
            : 'h-[3.5rem]'
        ]"
        class="audio-container sticky bottom-0 mx-auto flex w-full items-center justify-center"
      >
        <div
          class="audio-wrap relative flex h-full w-full max-w-[67.5rem] items-center justify-center"
        >
          <div id="audioID" class="hidden"></div>
          <div class="flex h-full w-full items-center">
            <div
              v-if="!isVideo"
              id="audio-crt"
              class="xgplayer xgplayer-tm flex justify-center"
              :class="{ 'is-mobile': !isDesktop }"
            ></div>
            <div v-else class="flex w-full justify-center">
              <VideoControls v-if="playerVideo" :player="playerVideo" />
            </div>
            <div
              v-if="isDesktop && isVideo"
              :class="[langId ? 'cursor-not-allowed opacity-50' : '']"
              class="display-video-wrap relative mt-0.5 flex !h-9 !w-9 items-center justify-center rounded-lg hover:bg-fontHover"
            >
              <el-tooltip
                :show-arrow="false"
                effect="customized"
                popper-class="popper-class-ZZMG2X2I"
                :content="
                  isShowVideo
                    ? t('TranscriptionPage.hideVideo')
                    : t('TranscriptionPage.showVideo')
                "
              >
                <span
                  class="iconfont cursor-pointer text-[1.375rem]"
                  :class="[
                    isShowVideo ? 'icon-shipinbofang' : 'icon-guanbishipin',
                    langId ? 'pointer-events-none' : ''
                  ]"
                  @click="handelToggleVideo"
                ></span>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑说话人弹窗 -->
    <el-dialog
      v-model="editSpeakerDialogVisible"
      :title="
        ![undefined, null, ''].includes(editingSpeakerId)
          ? t('TranscriptionPage.edit')
          : t('TranscriptionPage.createANewSpeaker')
      "
      width="22rem"
      header-class="edit-speaker-header-class"
      body-class="edit-speaker-body-class"
      footer-class="edit-speaker-footer-class"
      align-center
      :show-close="true"
      append-to-body
      :close-on-click-modal="false"
      class="edit-speaker-dialog common-dialog-S5NaD2"
      @open="() => dialogOpen('.edit-speaker-dialog', confirmEditSpeaker)"
      @close="() => dialogClose('.edit-speaker-dialog')"
    >
      <el-input
        class="sys-input"
        v-model="editingSpeakerName"
        :placeholder="t('TranscriptionPage.speakerName')"
      ></el-input>

      <template #footer>
        <div class="dialog-footer">
          <el-button
            class="!rounded-lg !border-borderColor !px-4 !text-black hover:!border-transparent hover:!bg-borderColor"
            @click="editSpeakerDialogVisible = false"
          >
            {{ t("TranscriptionPage.cancel") }}</el-button
          >
          <el-button
            type="primary"
            class="sys-btn !rounded-lg !px-4"
            @click="confirmEditSpeaker"
          >
            {{
              ![undefined, null, ""].includes(editingSpeakerId)
                ? t("TranscriptionPage.confirm")
                : t("TranscriptionPage.addSpeaker")
            }}
          </el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 分享 -->
    <el-dialog
      v-model="shareDialogVisible"
      :title="t('TranscriptionPage.share')"
      :width="isDesktop ? '29rem' : '23rem'"
      align-center
      :show-close="true"
      append-to-body
      :close-on-click-modal="false"
      class="share-dialog-i1mbjq1KV common-dialog-S5NaD2"
      @open="
        () =>
          dialogOpen('.share-dialog-i1mbjq1KV', () => {
            shareDialogVisible = false;
          })
      "
      @close="() => dialogClose('.share-dialog-i1mbjq1KV')"
    >
      <div class="content-wrap pb-4">
        <div class="mb-[0.625rem] leading-5 text-black">
          {{ t("TranscriptionPage.shareTips") }}
        </div>
        <div
          class="flex h-auto w-full flex-col items-center overflow-hidden rounded-lg border border-borderColor bg-boxBgColor p-4 sm:h-[2.125rem] sm:flex-row sm:flex-nowrap sm:p-0"
        >
          <div
            class="mb-3 flex-1 break-all sm:mb-0 sm:h-[2.125rem] sm:truncate sm:px-4 sm:leading-[2.125rem]"
            :title="sharedUrl"
          >
            {{ sharedUrl }}
          </div>
          <div
            v-if="hasCopy"
            class="me-1 flex items-center justify-center rounded-xl bg-mainColor-600 px-7 py-2 text-mainColor-900 sm:h-[1.625rem] sm:rounded-lg sm:px-3 sm:py-2.5"
          >
            <span class="iconfont icon-duihao me-2 text-xs"></span>
            <span> {{ t("TranscriptionPage.copiedLink") }}</span>
          </div>
          <div
            v-else
            class="me-1 flex items-center justify-center rounded-xl bg-subColor-light px-7 py-2 text-subColor-normal sm:h-[1.625rem] sm:rounded-lg sm:px-3 sm:py-2.5"
          >
            <span class="iconfont icon-shanchu me-2 text-xs"></span>
            <span> {{ t("TranscriptionPage.copyFail") }}</span>
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer flex items-center justify-center">
          <el-button
            type="primary"
            class="sys-btn !h-[2.75rem] !w-[16.25rem] !rounded-3xl sm:!h-8 sm:!w-72 sm:!rounded-lg"
            @click="shareDialogVisible = false"
          >
            {{ t("TranscriptionPage.copyGotIt") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
    <home-dialog-export
      :taskId="fileBaseInfo.taskId"
      :translateLang="langCode"
      :tableData="[fileBaseInfo]"
      :fileId="fileBaseInfo.fileId"
      :isShowTimestamp="isShowTimestamp"
      :isShowSpeaker="isShowSpeaker"
      v-model="exportDialogVisible"
    />
  </div>
</template>

<script setup>
import VideoControls from "./VideoControls.client.vue";
import { languageMap } from "~/components/langChoose/langFlag.js";
defineOptions({
  name: "TranscriptDetail"
});
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import { ArrowDown, ArrowLeft, Plus } from "@element-plus/icons-vue";
import { ClickOutside as vClickOutside } from "element-plus";
import { onMounted, onUnmounted, watch } from "vue";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import { useClipboard } from "@vueuse/core";
import { Msg } from "~/utils/tools";
import { languageTransMap } from "~/components/langChoose/langFlag.js";
import { scrollToParagraph } from "./hook/utils.js";
// 导入拆分后的 hooks
import useTranscript from "./hook/useTranscript.js";
import usePlayer from "./hook/usePlayer.js";
import useLayout from "./hook/useLayout.js";
import useTranscriptEdit from "./hook/useTranscriptEdit.js";
import useTranscriptEditV1 from "./hook/useTranscriptEditV1.js";
import useSpeaker from "./hook/useSpeaker.js";
import useFileInfo from "./hook/useFileInfo.js";
import useTranslation from "./hook/useTranslation.js";
import { Events } from "xgplayer";
const props = defineProps({
  speakers: {
    type: Array,
    default: () => []
  },
  fileBaseInfo: {
    type: Object,
    default: () => ({})
  },
  transcriptInfo: {
    type: Object,
    default: () => ({})
  },
  otherLangTranscript: {
    type: Object,
    default: () => ({})
  },
  isShare: {
    type: Boolean,
    default: false
  },
  shareName: {
    type: String,
    default: ""
  }
});
const emit = defineEmits(["translate", "saveConfig", "updateSpeakers"]);
useHead({
  meta: () => [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
    }
  ]
});
const { isFreeUser } = storeToRefs(useSubscriptionStore());
const { getTime } = useTime();
const { t, locale, getLocaleMessage } = useI18n();
const route = useRoute();
let { transcriptInfo: transcriptData, speakers } = toRefs(props);
// 转写数据相关
const { getParagraphText } = useTranscript();
// 翻译相关
const {
  langChooseV1Ref,
  langChoosePopoverRef,
  handleTranslateLangChoose,
  handleLangPopShow,
  upgradeTipRef,
  upgradeVisibleHeight,
  handleScrollEnd
} = useTranslation(emit);
// 布局相关
const {
  container,
  isDragging,
  isDesktop,
  dragEnabled,
  isShowVideo,
  langId,
  displayVideo,
  gridStyle,
  enableDrag,
  disableDrag,
  handleDragStart,
  handelToggleVideo,
  handleBack,
  leftPanel,
  resizer,
  rightPanel,
  leftPanelStyle,
  resizerStyle,
  rightPanelStyle,
  devicePixelRatioDiff,
  finalOffsetX
} = useLayout(props);

// 播放器相关
const {
  playerAudio,
  playerVideo,
  dynamicScroller,
  allSegments,
  initPlayers,
  updateOverlappingSegments,
  handleWordClick,
  handleWordDblClick,
  isWordActive,
  setupI18nWatch,
  isVideo,
  currentTime,
  updateSubtitle,
  isRtl,
  activeWord
} = usePlayer(transcriptData, isShowVideo, props);
// 转写编辑相关
const {
  // 状态
  isEditRightTranscript,
  activeEditElement,
  canUndo,
  canRedo,
  editHistory,
  currentHistoryIndex,

  // 方法
  handleEditRightTranscript,
  handleSaveRightTranscript,
  isActiveEditingSentence,
  undoOperation,
  redoOperation,
  handleCompositionStart,
  handleCompositionEnd,
  // 事件处理器
  handleRealTimeInput
} = useTranscriptEditV1(
  transcriptData,
  dynamicScroller,
  handleWordClick,
  scrollToParagraph,
  updateSubtitle,
  emit,
  props
);

// 文件信息相关
const {
  fileName,
  fileUploadTime,
  fileNameElement,
  isShowTimestamp,
  startEditing,
  saveFileName,
  handleShowTimestamp,
  formatSecondsFromMs,
  fileNameInputRef,
  fileNamePopoverRef,
  fileNameInput
} = useFileInfo(props);

// 说话人管理相关
const {
  editSpeakerDialogVisible,
  originSelectedSpeakerId,
  selectedSpeakerId,
  editingSpeakerId,
  editingSpeakerName,
  applyToAllMatching,
  speakerPopoverRef,
  speakerPopoverVisible,
  selectedPid,
  speakerBtnRef,
  isShowSpeaker,
  uniqueSpeakers,
  uniqueSpeakersMap,
  hasDuplicateSpeakers,
  handleSpeakerPopoverShow,
  handleSpeakerPopoverHide,
  confirmSpeakerSelection,
  openEditSpeakerDialog,
  selectSpeaker,
  confirmEditSpeaker,
  handleShowSpeaker,
  handleOutsideClick,
  editAddSpeakersMap,
  scrollbarRef,
  speakerSaveLoading,
  dialogOpen,
  dialogClose
} = useSpeaker(transcriptData, speakers, emit, props);

// 设置i18n监听
setupI18nWatch(locale, getLocaleMessage);
// 翻译语言
const rtlTranslateLangCode = [
  "ug",
  "bm-Nkoo",
  "fa",
  "ur",
  "sd",
  "ps",
  "ar",
  "iw",
  "fa-AF",
  "ms-Arab",
  "dv",
  "yi",
  "ckb",
  "pa-Arab",
  "ug"
];
const langCode = computed(() => {
  if (!langId.value) {
    return "";
  }
  return languageMap[langId.value]?.langCode;
});
const translateDirection = computed(() => {
  return rtlTranslateLangCode.includes(langCode.value) ? "rtl" : "ltr";
});
// 转录语言
const rtlTranscriptLangCode = ["fa", "ur", "sd", "ps", "ar", "he", "yi"];
const transcriptDirection = computed(() => {
  return rtlTranscriptLangCode.includes(props.fileBaseInfo.language)
    ? "rtl"
    : "ltr";
});

watch([langId, isShowSpeaker, isShowTimestamp], () => {
  emit("saveConfig");
});
// 分享相关
const mobilePopover = ref(null);
const userStore = useUserStore();
const shareDialogVisible = ref(false);
const sharedUrl = ref("");
const hasCopy = ref(false);
const { copy, copied } = useClipboard({ legacy: true });

const handleShare = async () => {
  mobilePopover.value?.hide();
  const shareName = userStore.userInfo?.userInfoVO?.email ?? "Scribify";
  const shareId = userStore.userInfo?.userInfoVO?.userid;
  const taskId = route.query.taskId;
  sharedUrl.value =
    window.location.origin +
    route.path +
    `?shareId=${shareId}&shareName=${shareName}&taskId=${taskId}`;
  shareDialogVisible.value = true;
  const url =
    window.location.origin +
    route.path +
    `?shareId=${encodeURIComponent(shareId)}&shareName=${encodeURIComponent(shareName)}&taskId=${taskId}`;
  await copy(url);
  hasCopy.value = copied.value;
};
// 下载导出
const exportDialogVisible = ref(false);
const handleDownload = () => {
  exportDialogVisible.value = true;
};
const getFileConfig = () => {
  let player = null;
  if (isVideo.value) {
    player = playerVideo;
  } else {
    player = playerAudio;
  }
  return {
    lastPlayTime: player.value?.currentTime.toFixed(3), // 上次播放停留的时间
    lastPlayRate: player.value?.playbackRate, // 上次播放的播放速度
    lastPlayVolume: player.value?.muted ? 0 : player.value?.volume, // 上次播放的音量
    isShowTimestamp: isShowTimestamp.value, // 是否显示时间戳
    translateLang: langId.value, // 翻译语言
    isShowVideo: isShowVideo.value, // 是否显示视频
    isShowSpeaker: isShowSpeaker.value,
    devicePixelRatioDiff: devicePixelRatioDiff.value || 1,
    finalOffsetX: finalOffsetX.value || 0
  };
};

const recentLanguageKeys = ref([]);
const getRecentLang = async () => {
  const { transcriptApi } = await import("~/api/transcript");
  const res = await transcriptApi.getRecentLang();
  recentLanguageKeys.value = res.text
    .map((item) => {
      const [lang, name] = item.split("#");
      return name !== "null" ? name : languageTransMap[lang];
    })
    .filter(Boolean);
};
watchEffect(() => {
  document?.body?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
  document?.documentElement?.setAttribute("dir", isRtl.value ? "rtl" : "ltr");
});
const bindShortEvent = (player) => {
  player.value.on(Events.SHORTCUT, (data) => {
    if (isEditRightTranscript.value) {
      return;
    }
    if (data.action === "customPlayPause") {
      if (player.value) {
        const isPlaying = !player.value.paused;
        isPlaying ? player.value.pause() : player.value.play();
      }
    }
  });
};
const showSubRef = ref(null);
const handleJumpUpgrade = () => {
  showSubRef.value?.showSubHandle();
};
// 生命周期钩子
onMounted(async () => {
  await nextTick();
  // 更新重叠段落
  updateOverlappingSegments();

  // 初始化播放器
  initPlayers(props.fileBaseInfo, locale, allSegments, bindShortEvent);
  if (!props.isShare) getRecentLang();
});
onUnmounted(() => {
  playerVideo.value = null;
  playerAudio.value = null;
});
defineExpose({
  getFileConfig,
  getRecentLang
});
</script>

<style scoped lang="scss" src="./style.scss"></style>
<style lang="scss">
.mobile-popper-more-A0KQ7lsC {
  --el-color-primary: theme("colors.mainColor.900");
}
.pop-iAHFsY2 {
  --el-color-primary: theme("colors.mainColor.900");
  --el-popover-border-radius: 0.5rem;
  .el-checkbox__label {
    overflow: hidden;
  }
}
[dir="rtl"] .common-dialog-S5NaD2 {
  .el-message {
    @apply flex-row-reverse;
  }
}
.common-dialog-S5NaD2 {
  --el-border-radius-base: 0.5rem;
  --el-dialog-padding-primary: 1.25rem;
  .el-dialog__header {
    @apply mb-5 p-0 text-base font-medium;
  }
  .el-dialog__headerbtn {
    height: 4.125rem;
  }
  .el-dialog__headerbtn .el-dialog__close {
    @apply text-black;
  }
  .el-dialog__footer {
    @apply mt-11 pt-0;
  }
  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
  .el-button + .el-button {
    // prettier-ignore
    @apply text-sm !ms-2 !ml-0;
  }
}
.el-popper.is-customized.popper-class-ZZMG2X2I {
  transition: opacity 0.15s;
  white-space: nowrap;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.54);
  border-radius: 0.25rem;
  padding: 0.375rem;
  line-height: 1rem;
}
</style>
