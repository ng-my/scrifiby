<template>
  <div class="transcript-box relative flex w-full flex-col text-sm">
    <div class="share-login">
      <layout-upgrade v-if="!isShare && isFreeUser" />
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
            class="icon-wrap me-2 flex cursor-pointer items-center rounded-sm text-lg text-black hover:bg-[#D3D3D3]"
          >
            <el-icon @click="handleBack">
              <ArrowLeft />
            </el-icon>
          </div>
          <div class="file-wrap flex-1 overflow-hidden">
            <div class="file-name line-clamp-1 break-all leading-5 text-black">
              <span
                v-if="!isShare"
                ref="fileNameElement"
                class="file-text text-base font-medium"
                :class="{
                  editing: isEditing,
                  'hover-effect': !isEditing,
                  'inline-block': isEditing
                }"
                :contenteditable="isEditing"
                :title="isEditing ? undefined : fileName"
                @click="startEditing"
                @keydown.enter.prevent="saveFileName"
                @keydown.esc="cancelEditing"
                @blur="cancelEditing"
              >
                {{ fileName }}
              </span>
              <span v-else class="file-text text-base font-medium"
                >{{ fileName }}
              </span>
            </div>
            <div class="file-upload-time text-sm text-fontColor">
              {{ getTime(fileUploadTime) }}
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
                <el-button text class="h-8" @click="handleSaveRightTranscript">
                  <span class="iconfont icon-baocun1 me-2 text-xs"></span>
                  {{ t("TranscriptionPage.save") }}
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
              <el-button text class="h-8" @click="handleSaveRightTranscript">
                <span class="iconfont icon-baocun1 me-2 text-xs"></span>
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
              class="relative flex flex-1 justify-between text-[#999999]"
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
                    popper-style="padding:0; min-width:unset; border-radius: 0.5rem"
                  >
                    <template #reference>
                      <span
                        class="iconfont icon-suolve me-2 inline-block rotate-90 text-xs"
                      ></span>
                    </template>
                    <div class="flex flex-col px-4 py-2">
                      <div class="flex h-8 items-center justify-between">
                        <div class="flex flex-1 overflow-hidden">
                          <span
                            class="iconfont icon-jiangyanzhe me-2 text-sm"
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
                        <div class="flex flex-1 overflow-hidden">
                          <span
                            class="iconfont icon-shijian me-2 text-sm"
                          ></span>
                          <span class="flex-1 overflow-hidden truncate">
                            {{ t("TranscriptionPage.showTimestamp") }}
                          </span>
                        </div>
                        <el-checkbox v-model="isShowTimestamp"></el-checkbox>
                      </div>
                      <div class="flex h-8 items-center" @click="handleShare">
                        <span
                          class="iconfont icon-fenxiang me-2 text-sm"
                        ></span>
                        <span> {{ t("TranscriptionPage.share") }} </span>
                      </div>
                    </div>
                  </el-popover>
                </div>
                <div class="ms-5 h-8 leading-8" @click="handleDownload">
                  <span class="iconfont icon-xiazai me-2 text-xs"></span>
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
                      <span class="iconfont icon-fanyi text-sm"></span>
                      <el-icon class="el-icon--right !ms-0 !text-xs">
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
                  <span class="iconfont icon-bianji me-2 text-xs"></span>
                </div>
              </div>
            </div>
          </Transition>
        </template>
        <template v-else>
          <div class="flex h-8 min-w-20 items-center justify-center">
            {{ shareName }} {{ t("TranscriptionPage.shared") }}
          </div>
          <el-button text class="ms-2 h-8" @click="handleDownload">
            <span class="iconfont icon-xiazai me-2 text-xs"></span>
            {{ t("TranscriptionPage.export") }}
          </el-button>
        </template>
      </div>
      <div
        ref="container"
        class="draggable-panels grid-container flex-1 overflow-hidden rounded-xl bg-white px-4 py-[1.125rem]"
        :class="[!displayVideo ? '!py-0' : '']"
        :style="gridStyle"
      >
        <!-- 左侧面板 -->
        <div
          v-show="displayVideo && isVideo"
          ref="leftPanel"
          :style="leftPanelStyle"
          class="flex bg-white"
        >
          <div id="mse" class="tm-xg-video rounded-lg"></div>
        </div>

        <!-- 拖拽条 - 仅桌面端显示 -->
        <div
          v-show="displayVideo && isVideo"
          ref="resizer"
          :style="resizerStyle"
          class="drag-handle z-10 mx-2 bg-mainColor-600"
          @mousedown="handleDragStart"
          :class="{ dragging: isDragging, 'drag-disabled': !dragEnabled }"
          @mouseenter="enableDrag"
          @mouseleave="disableDrag"
        ></div>
        <!-- 右侧面板 -->
        <div
          ref="rightPanel"
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
            class="iconfont icon-shanchu cursor-pointer text-xs"
            :class="[
              !isDesktop
                ? 'flex h-[1.75rem] w-full justify-end'
                : 'absolute top-4',
              isRtl ? 'left-4' : 'right-4'
            ]"
            :title="t('TranscriptionPage.closeTrans')"
            @click="langId = ''"
          ></span>
          <div class="file-wrap overflow-hidden" v-if="!isDesktop">
            <div class="file-name line-clamp-1 break-all leading-5 text-black">
              <div
                v-if="!isShare"
                ref="fileNameElement"
                class="file-text text-base font-medium"
                :class="{
                  editing: isEditing,
                  'hover-effect': !isEditing && isDesktop,
                  'inline-block': isEditing
                }"
                :contenteditable="isEditing"
                @click="startEditing"
                @keydown.enter.prevent="saveFileName"
                @keydown.esc="cancelEditing"
                @blur="cancelEditing"
              >
                {{ fileName }}
              </div>
              <span v-else class="file-text text-base font-medium"
                >{{ fileName }}
              </span>
            </div>
            <div class="file-upload-time text-sm text-fontColor">
              {{ getTime(fileUploadTime) }}
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
                  :key="item.pid"
                  :data-active="active"
                  :data-pid="item.pid"
                  class="virtual-item-wrap relative flex bg-white"
                  :class="[isDesktop ? 'flex-row pb-4' : 'flex-col']"
                >
                  <div
                    v-show="isShowSpeaker"
                    class="left-speaker flex-shrink-0"
                    :class="[
                      !isDesktop ? 'my-2.5 flex flex-1' : 'w-[6rem] pt-4'
                    ]"
                  >
                    <!-- 一个段落对应一个说话人 -->
                    <div
                      ref="speakerBtnRef"
                      v-click-outside="handleOutsideClick"
                      :class="{
                        'is-shared': isShare,
                        'hover:bg-[#FAFAFA]': !isShare && isDesktop,
                        'w-28 px-3.5 py-2': isDesktop,
                        'inline-block max-w-72 overflow-hidden': !isDesktop,
                        'cursor-pointer': !isShare
                      }"
                      class="speaker-container inline-flex items-center rounded-[1.375rem] transition-colors"
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
                        class="truncate text-base font-medium text-fontColor"
                        :title="item.speaker"
                      >
                        {{ item.speaker }}
                      </span>
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
                            'hover:bg-[#EFF4FF]': true
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
                        class="flex h-11 items-center overflow-hidden border-b border-solid border-borderColor ps-5"
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
                            class="overflow-hidden truncate !pl-0 ps-2 text-black"
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
                      isDesktop
                        ? isShowSpeaker
                          ? 'ms-[1.5rem]'
                          : 'ms-[0.625rem]'
                        : ''
                    ]"
                  >
                    <!--      说话人的开始时间       -->
                    <div class="h-5 text-sm font-normal text-fontColor">
                      <span v-show="isShowTimestamp">{{
                        formatSecondsFromMs(item.start_time)
                      }}</span>
                    </div>
                    <div
                      class="grid w-full flex-1"
                      :class="[
                        isDesktop && langId ? 'grid-cols-2' : 'grid-cols-1'
                      ]"
                    >
                      <!-- 组装成段落的文本  桌面端或者 移动端且未选择翻译其他语言-->
                      <div
                        v-if="isDesktop || (!isDesktop && !langId)"
                        :data-pid="item.pid"
                        class="content-span-parent-node whitespace-normal break-words break-all text-lg tracking-[0.35px]"
                        :class="[
                          isDesktop ? 'pe-4' : '',
                          isEditRightTranscript ? 'outline-none' : ''
                        ]"
                      >
                        <template
                          v-for="(sentence, sentIndex) in item.sentences"
                          :key="`${item.pid}-sent-${sentIndex}`"
                        >
                          <span
                            v-for="(content, contentIndex) in sentence.contents"
                            :key="`${item.pid}-${sentIndex}-${contentIndex}`"
                            :data-content-index="contentIndex"
                            :data-cid="content.cid"
                            :data-sent-index="sentIndex"
                            :data-pid="item.pid"
                            @keydown="handleKeyDown($event)"
                            @click.self="
                              isEditRightTranscript
                                ? setActiveEditElement(
                                    item.pid,
                                    sentIndex,
                                    contentIndex,
                                    content,
                                    $event
                                  )
                                : handleWordClick(
                                    item.pid,
                                    sentIndex,
                                    contentIndex,
                                    content
                                  )
                            "
                            :contenteditable="isEditRightTranscript"
                            @input="
                              handleContentEdit(
                                $event,
                                item.pid,
                                sentIndex,
                                contentIndex,
                                content
                              )
                            "
                            @focus.self="
                              setActiveEditElement(
                                item.pid,
                                sentIndex,
                                contentIndex,
                                content,
                                $event
                              )
                            "
                            @blur="resetActiveEditElement"
                            :class="[
                              'cursor-pointer whitespace-pre-wrap break-words break-all border-b border-solid border-transparent py-1 text-lg !leading-[2.125rem] tracking-[0.35px] outline-none transition-colors',
                              isEditRightTranscript &&
                              isActiveEditElement(
                                item.pid,
                                sentIndex,
                                contentIndex
                              )
                                ? 'content-editable !rounded-none !text-black'
                                : '',
                              isEditRightTranscript
                                ? '!cursor-text'
                                : isWordActive(
                                      content,
                                      item.pid,
                                      sentIndex,
                                      contentIndex
                                    )
                                  ? 'rounded-md bg-mainColor-900 text-white'
                                  : 'md:rounded-md md:hover:bg-mainColor-900 md:hover:text-white'
                            ]"
                            @keydown.enter.prevent="handleEnterEdit"
                          >
                            {{ filterEnterStr(content.content) }}
                          </span>
                        </template>
                      </div>
                      <div
                        v-if="langId && !isShare"
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
                <div
                  ref="upgradeTipRef"
                  v-if="!isShare && item.isLast && fileBaseInfo.isHalfHour"
                  :class="[displayVideo && isVideo ? '!w-full' : '']"
                  class="mx-auto flex w-full flex-col items-center justify-center rounded-lg bg-[#DFEAFF] p-[2.25rem] md:w-1/2"
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
        class="audio-container sticky bottom-0 flex w-full items-center justify-center"
        :class="[isDesktop ? 'h-[4.5rem]' : 'h-[3.5rem]']"
      >
        <div
          class="audio-wrap relative flex h-full w-full items-center md:px-4"
          :class="[isDesktop ? 'border-t border-solid border-borderColor' : '']"
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
              class="mt-0.5 flex !h-9 !w-9 items-center justify-center rounded-lg hover:bg-[#D3D3D3]"
            >
              <span
                :title="
                  isShowVideo
                    ? t('TranscriptionPage.hideVideo')
                    : t('TranscriptionPage.showVideo')
                "
                class="iconfont cursor-pointer text-[1.375rem]"
                :class="[
                  isShowVideo ? 'icon-shipinbofang' : 'icon-guanbishipin',
                  langId ? 'pointer-events-none' : ''
                ]"
                @click="handelToggleVideo"
              ></span>
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
    >
      <el-input
        v-model="editingSpeakerName"
        :placeholder="t('TranscriptionPage.speakerName')"
      ></el-input>

      <template #footer>
        <div class="dialog-footer">
          <el-button
            class="!rounded-lg !border-borderColor !px-4 !text-black"
            @click="editSpeakerDialogVisible = false"
          >
            {{ t("TranscriptionPage.cancel") }}</el-button
          >
          <el-button
            type="primary"
            class="!rounded-lg !px-4"
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
    >
      <div class="content-wrap">
        <div class="mb-[0.625rem] leading-5 text-black">
          {{ t("TranscriptionPage.shareTips") }}
        </div>
        <div
          :title="sharedUrl"
          class="h-[2.125rem] w-full truncate rounded-lg border border-borderColor bg-boxBgColor px-4 leading-[2.125rem]"
        >
          {{ sharedUrl }}
        </div>
        <br />
        <el-button type="primary" @click="handleCopy1">复制原文</el-button>
        <el-button type="primary" @click="handleCopy2">复制译文</el-button>
      </div>
      <template #footer>
        <div class="dialog-footer flex items-center justify-center">
          <el-button type="primary" class="w-[17.5rem]" @click="handleCopy">
            {{ t("TranscriptionPage.copyLink") }}
          </el-button>
        </div>
      </template>
    </el-dialog>
    <home-dialog-export
      :taskId="fileBaseInfo.taskId"
      :translateLang="langCode"
      :fileId="fileBaseInfo.fileId"
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
import { ElMessage } from "element-plus";
import { languageTransMap } from "~/components/langChoose/langFlag.js";
import { scrollToParagraph } from "./hook/utils.js";
// 导入拆分后的 hooks
import useTranscript from "./hook/useTranscript.js";
import usePlayer from "./hook/usePlayer.js";
import useLayout from "./hook/useLayout.js";
import useTranscriptEdit from "./hook/useTranscriptEdit.js";
import useSpeaker from "./hook/useSpeaker.js";
import useFileInfo from "./hook/useFileInfo.js";
import useTranslation from "./hook/useTranslation.js";
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
  handleJumpUpgrade
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
  isWordActive,
  setupI18nWatch,
  isVideo,
  currentTime,
  updateSubtitle,
  isRtl
} = usePlayer(transcriptData, isShowVideo, props);
// 转写编辑相关
const {
  isEditRightTranscript,
  canUndo,
  canRedo,
  handleEditRightTranscript,
  handleSaveRightTranscript,
  handleContentEdit,
  setActiveEditElement,
  isActiveEditElement,
  resetActiveEditElement,
  undoOperation,
  redoOperation,
  handleDocumentClick,
  editHistory,
  currentHistoryIndex,
  activeEditElement,
  handleKeyDown,
  handleEnterEdit,
  filterEnterStr
} = useTranscriptEdit(
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
  isEditing,
  fileNameElement,
  isShowTimestamp,
  startEditing,
  saveFileName,
  cancelEditing,
  handleShowTimestamp,
  formatSecondsFromMs
} = useFileInfo(props);

// 说话人管理相关
const {
  speakerDialogVisible,
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
  scrollbarRef
} = useSpeaker(transcriptData, speakers, emit, props);

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

// 设置i18n监听
setupI18nWatch(locale, getLocaleMessage);
const langCode = computed(() => {
  if (!langId.value) {
    return "";
  }
  return languageMap[langId.value]?.langCode;
});
watch([langId, isShowSpeaker, isShowTimestamp], () => {
  emit("saveConfig");
});
// 分享相关
const userStore = useUserStore();
const shareDialogVisible = ref(false);
const sharedUrl = ref("");
const handleShare = () => {
  const shareName = userStore.userInfo?.userInfoVO?.email;
  const shareId = userStore.userInfo?.userInfoVO?.userid;
  const taskId = route.query.taskId;
  sharedUrl.value =
    window.location.origin +
    route.path +
    `?shareId=${encodeURIComponent(shareId)}&shareName=${encodeURIComponent(shareName)}&taskId=${taskId}`;
  shareDialogVisible.value = true;
};
const { copy, copied } = useClipboard({ legacy: true });

const handleCopy = async () => {
  await copy(sharedUrl.value);
  if (copied.value) {
    ElMessage({
      message: t("TranscriptionPage.copySuccessful"),
      type: "success",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  } else {
    ElMessage({
      message: t("TranscriptionPage.copyFail"),
      type: "warning",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  }
  setTimeout(() => {
    shareDialogVisible.value = false;
  }, 1000);
};
// 后续去掉
const handleCopy1 = async () => {
  let str = "";
  transcriptData.value.paragraphs.forEach((paragraph) => {
    str += getParagraphText(paragraph);
  });
  await copy(str);
  if (copied.value) {
    ElMessage({
      message: t("TranscriptionPage.copySuccessful"),
      type: "success",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  } else {
    ElMessage({
      message: t("TranscriptionPage.copyFail"),
      type: "warning",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  }
};
const handleCopy2 = async () => {
  //   translateContent
  let str = "";
  transcriptData.value.paragraphs.forEach((paragraph) => {
    if (paragraph.translateContent !== undefined) {
      str += paragraph.translateContent;
    }
  });
  await copy(str);
  if (copied.value) {
    ElMessage({
      message: t("TranscriptionPage.copySuccessful"),
      type: "success",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  } else {
    ElMessage({
      message: t("TranscriptionPage.copyFail"),
      type: "warning",
      plain: true,
      appendTo: ".share-dialog-i1mbjq1KV"
    });
  }
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
    isShowSpeaker: isShowSpeaker.value
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
// 生命周期钩子
onMounted(async () => {
  await nextTick();
  document.addEventListener("click", handleDocumentClick);
  // 更新重叠段落
  updateOverlappingSegments();

  // 初始化播放器
  initPlayers(props.fileBaseInfo, locale, allSegments);
  if (!props.isShare) getRecentLang();
});
onUnmounted(() => {
  document.removeEventListener("click", handleDocumentClick);
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
.pop-iAHFsY2 {
  --el-color-primary: #3470ff;
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
  --el-color-primary: #3470ff;
  --el-border-radius-base: 0.5rem;
  .el-button--primary {
    --el-button-text-color: #fff;
    --el-button-bg-color: #3470ff;
    --el-button-border-color: #3470ff;
    --el-button-hover-bg-color: #3470ff;
    --el-button-hover-text-color: #fff;
    --el-button-hover-border-color: #3470ff;
    &:hover {
      opacity: 0.8;
    }
  }
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
  .el-button {
    // prettier-ignore
    @apply text-sm !rounded-lg hover:bg-opacity-90;
  }
  .el-dialog__headerbtn {
    @apply rtl:left-0 rtl:right-auto;
  }
  .el-button + .el-button {
    // prettier-ignore
    @apply text-sm !ms-2 !ml-0;
  }
}
</style>
