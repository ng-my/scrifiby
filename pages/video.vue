<template>
  <div class="detail-box w-full flex flex-col">
    <div ref="container" class="flex-1 bg-gray-100 draggable-panels grid-container  rounded-xl overflow-hidden"
      :style="gridStyle">
      <!-- 左侧面板 -->
      <div class="p-5 sm:p-6 bg-gray-100">
        <div id="mse"></div>
      </div>

      <!-- 拖拽条 - 仅桌面端显示 -->
      <div v-if="isDesktop" class="drag-handle" @mousedown="handleDragStart"
        :class="{ 'dragging': isDragging, 'drag-disabled': !dragEnabled }" @mouseenter="enableDrag"
        @mouseleave="disableDrag"></div>

      <!-- 右侧面板 -->
      <div class="p-5 sm:p-6 bg-purple-200 overflow-y-auto" id="right-btn">
        <div v-if="transcriptData" class="transcript-container">
          <!-- 重叠语音段落显示区域 -->
          <div v-if="overlappingSegments.length > 0" class="mb-6 bg-white p-4 rounded-lg shadow">
            <h3 class="text-lg font-bold mb-2">当前重叠语音段落</h3>
            <div v-for="(segment, index) in overlappingSegments" :key="index" class="mb-3 p-2 bg-gray-50 rounded">
              <div class="text-sm text-gray-500 mb-1">
                <span class="font-semibold">开始:</span> {{ (segment.start / 1000).toFixed(2) }}秒 |
                <span class="font-semibold">结束:</span> {{ (segment.end / 1000).toFixed(2) }}秒
              </div>
              <div class="text-md">
                <div v-for="(text, textIndex) in segment.text" :key="textIndex" class="mb-1">
                  {{ text.content }}
                </div>
              </div>
            </div>
          </div>

          <div v-for="(paragraph, paraIndex) in transcriptData.paragraphs" :key="paraIndex"
            class="mb-6 bg-white p-4 rounded-lg shadow">
            <!-- 段落信息 -->
            <div class="text-sm text-gray-500 mb-2">
              <span class="font-semibold">Speaker:</span> {{ paragraph.pid }} |
              <span class="font-semibold">Start:</span> {{ paragraph.start_time }} |
              <span class="font-semibold">End:</span> {{ paragraph.stop_time }}
            </div>

            <!-- 组装成段落的文本 -->
            <div class="text-lg leading-relaxed whitespace-normal break-words">
              <template v-for="(sentence, sentIndex) in paragraph.sentences" :key="`${paraIndex}-sent-${sentIndex}`">
                <span v-for="(content, contentIndex) in sentence.contents"
                  :key="`${paraIndex}-${sentIndex}-${contentIndex}`"
                  @click="handleWordClick(content, paraIndex, sentIndex, contentIndex)" :class="[
                    'cursor-pointer transition-colors px-0.5 rounded mx-0.5 inline-block',
                    isWordActive(content, paraIndex, sentIndex, contentIndex) ? 'bg-blue-100 text-white' : 'hover:bg-blue-100'
                  ]" :ref="el => { if (el) wordElements[`${paraIndex}-${sentIndex}-${contentIndex}`] = el }">
                  {{ content.content }}
                </span>
              </template>
            </div>

            <!-- 原始文本显示 -->
            <div class="mt-3 text-gray-600 text-sm">
              {{ getParagraphText(paragraph) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="audio-container h-20 bg-red-300">
      <div id="audioID" class=""></div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import 'xgplayer/dist/index.min.css';
import "xgplayer/es/plugins/track/index.css";

// 响应式状态
const container = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const leftFr = ref(1) // 左面板 fr 单位（初始值）
const rightFr = ref(1) // 右面板 fr 单位（初始值）
const isDesktop = ref(false)
const dragEnabled = ref(false)
const transcriptData = ref(null)
const activeWord = ref({ paraIndex: -1, sentIndex: -1, contentIndex: -1 }) // 用户点击高亮的单词
const currentTime = ref(0) // 当前音频播放时间
const wordElements = ref({}) // 用于存储所有单词元素的引用
const overlappingSegments = ref([]) // 存储重叠的语音段落
const allSegments = ref([])

// 获取段落的完整文本
const getParagraphText = (paragraph) => {
  if (!paragraph || !paragraph.sentences) return ''

  return paragraph.sentences.map(sentence =>
    sentence.contents.map(content => content.content).join('')
  ).join(' ')
}

// 判断单词是否应该高亮（包括用户点击和当前播放时间）
const isWordActive = (content, paraIndex, sentIndex, contentIndex) => {
  // 当前播放时间的高亮 (将毫秒转换为秒进行比较)
  const isTimeActive = content.start_time !== undefined && content.stop_time !== undefined &&
    currentTime.value >= (content.start_time / 1000) && currentTime.value <= (content.stop_time / 1000)

  // 用户点击的高亮：仅当没有任何单词处于播放时间范围内时才保持点击高亮
  // 或者当前单词正好也是播放时间范围内的单词
  const isClickedActive = activeWord.value.paraIndex === paraIndex &&
    activeWord.value.sentIndex === sentIndex &&
    activeWord.value.contentIndex === contentIndex

  return isClickedActive || isTimeActive
}

// 滚动到当前播放的单词位置
const scrollToActiveWord = () => {
  // 找到当前时间对应的单词
  if (!transcriptData.value) return

  let firstActiveWordFound = false
  let firstActiveWordElement = null

  for (let paraIndex = 0; paraIndex < transcriptData.value.paragraphs.length; paraIndex++) {
    const paragraph = transcriptData.value.paragraphs[paraIndex]
    for (let sentIndex = 0; sentIndex < paragraph.sentences.length; sentIndex++) {
      const sentence = paragraph.sentences[sentIndex]
      for (let contentIndex = 0; contentIndex < sentence.contents.length; contentIndex++) {
        const content = sentence.contents[contentIndex]
        if (content.start_time !== undefined && content.stop_time !== undefined &&
          currentTime.value >= (content.start_time / 1000) && currentTime.value <= (content.stop_time / 1000)) {
          // 找到第一个活跃单词
          if (!firstActiveWordFound) {
            firstActiveWordFound = true
            firstActiveWordElement = wordElements.value[`${paraIndex}-${sentIndex}-${contentIndex}`]
            break
          }
        }
      }
      if (firstActiveWordFound) break
    }
    if (firstActiveWordFound) break
  }
  // 滚动到第一个活跃单词
  if (firstActiveWordElement) {
    firstActiveWordElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    })
  }
}

// 合并句子内容，直到遇到标点符号
const mergeContentsUntilPunctuation = () => {
  if (!transcriptData.value || !transcriptData.value.paragraphs) return []

  const punctuationRegex = /[，。！？；：,.!?;:]/; // 中英文标点符号
  const result = []

  // 遍历所有段落
  transcriptData.value.paragraphs.forEach(paragraph => {
    if (!paragraph.sentences) return

    // 遍历所有句子
    paragraph.sentences.forEach(sentence => {
      if (!sentence.contents || sentence.contents.length === 0) return

      // 处理这个句子的所有内容
      const mergedSentenceContents = []
      let i = 0

      while (i < sentence.contents.length) {
        // 获取当前内容项
        const currentContent = sentence.contents[i]

        // 检查当前内容是否包含标点符号
        if (punctuationRegex.test(currentContent.content)) {
          // 包含标点符号，直接作为独立项
          mergedSentenceContents.push({
            cid: currentContent.cid,
            language: currentContent.language,
            start_time: currentContent.start_time,
            stop_time: currentContent.stop_time,
            content: currentContent.content
          })
          i++
        } else {
          // 不包含标点符号，需要向后合并直到找到包含标点符号的内容
          let mergedContent = {
            cid: currentContent.cid,
            language: currentContent.language,
            start_time: currentContent.start_time,
            stop_time: currentContent.stop_time,
            content: currentContent.content
          }

          let j = i + 1
          let foundPunctuation = false

          // 向后查找直到找到包含标点符号的内容或到达末尾
          while (j < sentence.contents.length) {
            const nextContent = sentence.contents[j]
            mergedContent.content += nextContent.content
            mergedContent.stop_time = nextContent.stop_time

            if (punctuationRegex.test(nextContent.content)) {
              foundPunctuation = true
              j++
              break
            }
            j++
          }

          // 添加合并后的内容
          mergedSentenceContents.push({ ...mergedContent })

          // 更新索引
          i = j
        }
      }

      // 将合并后的内容添加到结果中，带上段落ID
      mergedSentenceContents.forEach(item => {
        result.push({
          ...item,
          speaker: paragraph.pid
        })
      })
    })
  })
  console.log("result", result)
  return result
}

// 处理同时说话的人的文字重叠
const processOverlappingSegments = () => {
  if (!transcriptData.value || !transcriptData.value.paragraphs) return []

  // 先合并句子内容
  const mergedContents = mergeContentsUntilPunctuation()
  console.log("🚀 ~ file: video.vue method: processOverlappingSegments line: 251 🚀", mergedContents)

  // 如果没有内容，直接返回空数组
  if (!mergedContents.length) return []

  // 按开始时间排序
  mergedContents.sort((a, b) => parseInt(a.start_time) - parseInt(b.start_time))

  // 最终结果数组
  const overlappingSegments = []

  // 创建时间线，记录所有开始和结束时间点
  const timeline = []
  mergedContents.forEach(item => {
    const start = parseInt(item.start_time)
    const end = parseInt(item.stop_time)
    timeline.push({ time: start, type: 'start', item })
    timeline.push({ time: end, type: 'end', item })
  })

  // 按时间排序
  timeline.sort((a, b) => a.time - b.time)

  // 当前活跃项
  const activeItems = new Set()

  // 上一个时间点
  let lastTime = timeline[0].time

  // 遍历时间线
  for (let i = 0; i < timeline.length; i++) {
    const event = timeline[i]
    const currentTime = event.time

    // 如果当前有多个活跃项，并且时间点发生了变化，创建一个段落
    if (activeItems.size > 0 && currentTime > lastTime) {
      // 创建一个包含当前所有活跃项的段落
      const segment = {
        start: lastTime / 1000,
        end: currentTime / 1000,
        text: Array.from(activeItems).map(item => item.content),
        textObj: Array.from(activeItems).map(item => ({
          content: item.content,
          speaker: item.speaker
        }))
      }

      // 只有当有多个speaker或只有一个项但是时间跨度足够时才添加
      if (new Set(Array.from(activeItems).map(item => item.speaker)).size > 1 ||
        (activeItems.size === 1 && currentTime - lastTime > 100)) { // 100毫秒阈值
        overlappingSegments.push(segment)
      }
    }

    // 更新活跃项
    if (event.type === 'start') {
      activeItems.add(event.item)
    } else {
      activeItems.delete(event.item)
    }

    // 更新上一个时间点
    lastTime = currentTime
  }

  return overlappingSegments
}

// 更新当前播放时间下的重叠段落
const updateCurrentOverlappingSegments = () => {
  if (!transcriptData.value) return

  const data = processOverlappingSegments()
  console.log(data)
  allSegments.value = data
  const currentTimeMs = currentTime.value // 转换为毫秒

  // 找出当前时间点的重叠段落
  overlappingSegments.value = data.filter(
    segment => currentTimeMs >= segment.start && currentTimeMs <= segment.end
  )
}

// 计算属性：当前布局样式（使用 fr 单位）
const gridStyle = computed(() => {
  if (isDesktop.value) {
    // 桌面端：左面板 + 拖拽条 + 右面板（总列数 = leftFr + 1（拖拽条） + rightFr）
    return `grid-template-columns: ${leftFr.value}fr 8px ${rightFr.value}fr;`
  }
  // 移动端：两行布局（无拖拽条）
  return 'grid-template-columns: 1fr; grid-template-rows: 1fr 1fr;'
})

// 检查设备类型（基于容器宽度）
const checkDeviceType = () => {
  isDesktop.value = container.value?.offsetWidth >= 768 || window.innerWidth >= 768
}

// 启用拖拽
const enableDrag = () => {
  if (isDesktop.value) {
    dragEnabled.value = true
  }
}

// 禁用拖拽
const disableDrag = () => {
  if (!isDragging.value) {
    dragEnabled.value = false
  }
}

// 开始拖拽
const handleDragStart = (e) => {
  if (!dragEnabled.value || !isDesktop.value) return

  isDragging.value = true
  startX.value = e.clientX

  // 添加事件监听
  window.addEventListener('mousemove', handleDrag)
  window.addEventListener('mouseup', handleDragEnd)

  // 防止文本选择
  document.body.classList.add('no-select')
}

// 处理拖拽（基于 fr 单位调整）
const handleDrag = (e) => {
  if (!isDragging.value) return

  const deltaX = e.clientX - startX.value
  const containerWidth = container.value?.offsetWidth || 800

  // 计算新的 fr 比例（基于鼠标移动的像素差占容器宽度的比例）
  const totalFr = leftFr.value + rightFr.value
  const newLeftFr = leftFr.value + (deltaX / containerWidth) * totalFr

  // 限制最小 fr 值（防止面板过窄）
  const minFr = 0.5
  leftFr.value = Math.max(minFr, Math.min(newLeftFr, totalFr - minFr))
  rightFr.value = totalFr - leftFr.value

  // 重置起始位置
  startX.value = e.clientX
}

// 结束拖拽
const handleDragEnd = () => {
  isDragging.value = false
  dragEnabled.value = false // 结束后重置为未激活状态
  window.removeEventListener('mousemove', handleDrag)
  window.removeEventListener('mouseup', handleDragEnd)

  // 移除防文本选择样式
  document.body.classList.remove('no-select')
}

// 处理单词点击
const handleWordClick = (content, paraIndex, sentIndex, contentIndex) => {
  console.log(`Word clicked: ${content.content}, Start: ${content.start_time}, End: ${content.stop_time}`)

  // 设置当前活动单词
  activeWord.value = { paraIndex, sentIndex, contentIndex }

  // 跳转到音频对应时间点，并保持原来的播放状态
  if (playerAudio.value && content.start_time !== undefined) {
    const wasPlaying = !playerAudio.value.paused
    console.log("wasPlaying", wasPlaying)
    // 将毫秒转换为秒
    playerAudio.value.seek(content.start_time / 1000, wasPlaying ? 'play' : 'pause')
  }
}

// 更新当前播放时间
const updateCurrentTime = (time) => {
  currentTime.value = time
  // 更新当前重叠段落
  // updateCurrentOverlappingSegments()
}

const initPlayer = async () => {
  if (process.client) {
    const Player = (await import('xgplayer')).default
    const TextTrack = (await import('xgplayer/es/plugins/track')).default
    const EVENTS = (await import('xgplayer')).Events
    const Plugin = (await import('xgplayer')).Plugin
    return {
      Player,
      TextTrack,
      EVENTS,
      Plugin
    }
  }
}

// 加载字幕数据
const loadTranscriptData = async () => {
  try {
    const response = await fetch('/video.json');
    transcriptData.value = await response.json()
    console.log('Transcript data loaded:111', transcriptData.value)

    // 初始化重叠段落
    updateCurrentOverlappingSegments()
  } catch (error) {
    console.error('Error loading transcript data:', error)
  }
}

const playerVideo = ref(null)
const playerAudio = ref(null)
const texttrackContent = ref([])
// 生命周期钩子
onMounted(async () => {
  checkDeviceType()
  window.addEventListener('resize', checkDeviceType)

  // 加载字幕数据
  await loadTranscriptData()
  texttrackContent.value = []

  const { Player, TextTrack, Plugin, EVENTS } = await initPlayer()
  console.log("🚀 ~ file: video.vue method:  line: 477 🚀", Plugin)
  const { POSITIONS } = Plugin

  // demoPlugin.js
  class demoPlugin extends Plugin {
    // 插件的名称，将作为插件实例的唯一key值
    static get pluginName() {
      return 'demoPlugin'
    }

    static get defaultConfig() {
      return {
        // 挂载在controls的右侧，如果不指定则默认挂载在播放器根节点上
        position: POSITIONS.CONTROLS_RIGHT,
        index: 100
      }
    }

    constructor(args) {
      super(args)
      this.status = true
    }

    beforePlayerInit() {
      // TODO 播放器调用start初始化播放源之前的逻辑
    }

    afterPlayerInit() {
      // TODO 播放器调用start初始化播放源之后的逻辑
    }

    afterCreate() {
      this.icon = this.find('.icon')
      this.onIconClick = (e) => {
        console.log('class为icon元素点击回调')
      }
      this.onClick = () => {
        console.log('当前插件根节点点击事件')
        const textTrack = this.getPlugin('texttrack')
        console.log("🚀 ~ file: video.vue method: onClick line: 516 🚀", textTrack)
        console.log("🚀 ~ file: video.vue method: onClick line: 518 🚀", this.status)
        this.status = !this.status
        if (this.status) {
          textTrack.switchOnSubtitle()
        } else {
          textTrack.subTitles.switchOff()
        }
      }
      // 对当前插件根节点内部类名为.icon的元素绑定click事件
      this.bind('.icon', 'click', this.onIconClick)
      // 对当前插件根节点绑定click事件
      this.bind('click', this.onClick)
      //TODO 插件实例化之后的一些逻辑
    }

    destroy() {
      this.unbind('.icon', 'click', this.onIconClick)
      this.unbind('click', this.onClick)
      this.icon = null
      // 播放器销毁的时候一些逻辑
    }

    render() {
      return `
      <xg-icon class='xgplayer-demoPlugin'>
        <div class="xgplayer-icon">
           demoPlugin
        </div>
        <div class="xg-tips"">
         demoPlugin-tip
        </div>
      </xg-icon>
      `
    }
  }

  playerAudio.value = new Player({
    id: "mse",
    url: '/video.mp4',
    volume: 0.8,
    width: "100%",
    height: "100%",
    fitVideoSize: 'fixWidth',
    plugins: [TextTrack, demoPlugin],
    controls: {
      initShow: true,
      mode: 'normal'
    },
    playbackRate: {
      hidePortrait: false,
      listType: 'default'
    },
    textTrack: {
      // isShowIcon: false,
      debugger: false,
      isIcons: true,
      list: [
        {
          id: "vtt1",
          language: "zh-cn",
          text: "字幕1",
          default: true,
          list: [{
            start: 0, // 该条字幕开始时间，单位s
            end: 600,   // 该条字幕结束时间，单位s
            list: allSegments.value
          }],
        }
      ],
    },
    icons: {
      textTrack: () => {
        console.log("🚀 ~ file: video.vue method: play line: 515 🚀",)
      },// 通过function方式 返回一个dom直接html代码
    },
    marginControls: false,
    videoConfig: {
      crossOrigin: "anonymous"
    }
  });
  // 监听音频播放时间更新事件
  playerAudio.value.on(EVENTS.TIME_UPDATE, () => {
    activeWord.value = { paraIndex: -1, sentIndex: -1, contentIndex: -1 }
    // 更新当前播放时间
    updateCurrentTime(playerAudio.value.currentTime)

    // 自动滚动到当前播放单词的功能
    scrollToActiveWord()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', checkDeviceType)
})
</script>

<style scoped lang="scss">
.detail-box {
  height: calc(100vh - 100px);
}

.draggable-panels {
  min-height: 400px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 8px 1fr;
  /* 默认移动端样式，会被JS覆盖 */
  grid-template-rows: 1fr;
}

.drag-handle {
  background: #666666;
  transition: background-color 0.3s;
  position: relative;
  cursor: default;
  width: 8px;
  /* 固定拖拽条宽度 */
}

.drag-handle:hover,
.dragging {
  background: rgba(255, 255, 255, 0.4);
  cursor: col-resize;
}

.dragging,
.dragging * {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.drag-disabled {
  cursor: default !important;
}

.transcript-container {
  max-height: 100%;
}
</style>