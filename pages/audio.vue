<template>
  <div class="detail-box w-full flex flex-col">
    <div
      ref="container"
      class="flex-1 bg-gray-100 draggable-panels grid-container  rounded-xl overflow-hidden"
      :style="gridStyle"
    >
      <!-- 左侧面板 -->
      <div class="p-5 sm:p-6 bg-gray-100">
        <div id="mse"></div>
      </div>

      <!-- 拖拽条 - 仅桌面端显示 -->
      <div
        v-if="isDesktop"
        class="drag-handle"
        @mousedown="handleDragStart"
        :class="{ 'dragging': isDragging, 'drag-disabled': !dragEnabled }"
        @mouseenter="enableDrag"
        @mouseleave="disableDrag"
      ></div>

      <!-- 右侧面板 -->
      <div class="p-5 sm:p-6 bg-purple-200 overflow-y-auto" id="right-btn">
        <div v-if="transcriptData" class="transcript-container">
          <div v-for="(segment, segIndex) in transcriptData.segments" :key="segIndex" class="mb-6 bg-white p-4 rounded-lg shadow">
            <!-- 段落信息 -->
            <div class="text-sm text-gray-500 mb-2">
              <span class="font-semibold">Speaker:</span> {{ getSegmentSpeaker(segment) }} | 
              <span class="font-semibold">Segment:</span> {{ segIndex + 1 }} | 
              <span class="font-semibold">Start:</span> {{ segment.start }} | 
              <span class="font-semibold">End:</span> {{ segment.end }}
            </div>
            
            <!-- 组装成段落的文本 -->
            <div class="text-lg leading-relaxed whitespace-normal break-words">
              <span 
                v-for="(word, wordIndex) in segment.words" 
                :key="`${segIndex}-${wordIndex}`"
                @click="handleWordClick(word, segIndex, wordIndex)" 
                :class="[
                  'cursor-pointer transition-colors px-0.5 rounded mx-0.5 inline-block',
                  isWordActive(word, segIndex, wordIndex) ? 'bg-blue-100 text-white' : 'hover:bg-blue-100'
                ]"
                :ref="el => { if (el) wordElements[`${segIndex}-${wordIndex}`] = el }"
              >
                {{ word.word }}
              </span>
            </div>
            
            <!-- 原始文本显示 -->
            <div class="mt-3 text-gray-600 text-sm">
              {{ segment.text }}
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
  layout: false
})
import { ref, onMounted, onUnmounted, computed } from 'vue'
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
const activeWord = ref({ segIndex: -1, wordIndex: -1 }) // 用户点击高亮的单词
const currentTime = ref(0) // 当前音频播放时间
const wordElements = ref({}) // 用于存储所有单词元素的引用

// 判断单词是否应该高亮（包括用户点击和当前播放时间）
const isWordActive = (word, segIndex, wordIndex) => {
  // 当前播放时间的高亮
  const isTimeActive = word.start !== null && word.end !== null && 
                      currentTime.value >= word.start && currentTime.value <= word.end
  
  // 用户点击的高亮：仅当没有任何单词处于播放时间范围内时才保持点击高亮
  // 或者当前单词正好也是播放时间范围内的单词
  const isClickedActive = activeWord.value.segIndex === segIndex && 
                         activeWord.value.wordIndex === wordIndex
  
  return isClickedActive || isTimeActive
}


// 获取段落的speaker信息
const getSegmentSpeaker = (segment) => {
  // 从段落的words中找出第一个有speaker信息的word
  if (!segment || !segment.words || segment.words.length === 0) return 'Unknown'
  
  // 尝试找出主要的speaker
  const speakerCounts = {}
  let maxCount = 0
  let mainSpeaker = 'Unknown'
  
  segment.words.forEach(word => {
    if (word.speaker) {
      speakerCounts[word.speaker] = (speakerCounts[word.speaker] || 0) + 1
      if (speakerCounts[word.speaker] > maxCount) {
        maxCount = speakerCounts[word.speaker]
        mainSpeaker = word.speaker
      }
    }
  })
  
  return mainSpeaker
}

// 滚动到当前播放的单词位置
const scrollToActiveWord = () => {
  // 找到当前时间对应的单词
  if (!transcriptData.value) return
  
  let firstActiveWordFound = false
  let firstActiveWordElement = null
  
  for (let segIndex = 0; segIndex < transcriptData.value.segments.length; segIndex++) {
    const segment = transcriptData.value.segments[segIndex]
    for (let wordIndex = 0; wordIndex < segment.words.length; wordIndex++) {
      const word = segment.words[wordIndex]
      if (word.start !== null && word.end !== null && 
          currentTime.value >= word.start && currentTime.value <= word.end) {
        // 找到第一个活跃单词
        if (!firstActiveWordFound) {
          firstActiveWordFound = true
          firstActiveWordElement = wordElements.value[`${segIndex}-${wordIndex}`]
          break
        }
      }
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
const handleWordClick = (word, segIndex, wordIndex) => {
  console.log(`Word clicked: ${word.word}, Start: ${word.start}, End: ${word.end}`)
  
  // 设置当前活动单词
  activeWord.value = { segIndex, wordIndex }
  
  // 跳转到音频对应时间点，并保持原来的播放状态
  if (playerAudio.value && word.start !== null) {
    const wasPlaying = !playerAudio.value.paused
    console.log("wasPlaying",wasPlaying)
    playerAudio.value.seek(word.start,wasPlaying ? 'play':'pause')
  }
}

// 更新当前播放时间
const updateCurrentTime = (time) => {
  currentTime.value = time
  // 可以考虑在这里添加防抖，避免频繁更新
}

const initPlayer = async () => {
  if (process.client) {
    const Player = (await import('xgplayer')).default
    const TextTrack = (await import('xgplayer/es/plugins/track')).default
    const EVENTS = (await import('xgplayer')).Events
    return {
      Player,
      TextTrack,
      EVENTS
    }
  }
}

// 加载字幕数据
const loadTranscriptData = async () => {
  try {
    const response = await fetch('/test.json')
    transcriptData.value = await response.json()
    console.log('Transcript data loaded:', transcriptData.value)
  } catch (error) {
    console.error('Error loading transcript data:', error)
  }
}

const playerVideo = ref(null)
const playerAudio = ref(null)
// 生命周期钩子
onMounted(async () => {
  checkDeviceType()
  window.addEventListener('resize', checkDeviceType)
  
  // 加载字幕数据
  await loadTranscriptData()
  
  const { Player, TextTrack, EVENTS } = await initPlayer()
  console.log("🚀 ~ file: index.vue method:  line: 134 🚀",Player,  TextTrack )
  playerVideo.value = new Player({
    id: "mse",
    url: "//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/xgplayer-demo.mp4",
    height: "100%",
    width: "100%",
    plugins: [TextTrack],
    controls: {
      mode: 'normal',
    },
    volume:{
      showValueLabel: true,
    },
    texttrack: {
      list: [
        {
          id: "vtt1",
          language: "zh-cn",
          text: "字幕1",
          default: true,
          list: [{
            start: 0, // 该条字幕开始时间，单位s
            end: 1000,   // 该条字幕结束时间，单位s
            list:[{
              start: 0,
              end: 10,
              text:['这是外挂字幕1','这是外挂字幕11','这是外挂字幕111']
            },{
              start: 10,
              end: 20,
              text:['这是外挂字幕2']
            },{
              start: 20,
              end: 40,
              text:['这是外挂字幕3']
            },{
              start: 40,
              end: 1000,
              text:['这是外挂字幕4']
            }]
          }],
          // url: "/textTrack-1.vtt"
        },
        // {
        //   id: "vtt2",
        //   url: "/textTrack-1.vtt",
        //   language: "en",
        //   text: "字幕2",
        //   default: true,
        // },
      ],
    },
  });
  playerAudio.value = new Player({
    id: 'audioID',
    url: '/test.wav',
    volume: 0.8,
    width: "100%",
    height: "100%",
    mediaType: 'audio',
    ignores: ["start", "cssFullScreen", "fullscreen", "pip", "enter", "replay", "pc", "loading", "poster"],
    controls: {
      initShow: true,
      mode: 'normal'
    },
    marginControls: true,
    videoConfig: {
      crossOrigin: "anonymous"
    }
  });
  
  // 监听音频播放时间更新事件
  playerAudio.value.on(EVENTS.TIME_UPDATE, () => {
    activeWord.value = { segIndex:-1, wordIndex:-1 }
    // 更新当前播放时间
    updateCurrentTime(playerAudio.value.currentTime)
    
    // 可以考虑添加自动滚动到当前播放单词的功能
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
  grid-template-columns: 1fr 8px 1fr; /* 默认移动端样式，会被JS覆盖 */
  grid-template-rows: 1fr;
}

.drag-handle {
  background: #666666;
  transition: background-color 0.3s;
  position: relative;
  cursor: default;
  width: 8px; /* 固定拖拽条宽度 */
}

.drag-handle:hover, .dragging {
  background: rgba(255, 255, 255, 0.4);
  cursor: col-resize;
}
.dragging, .dragging * {
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