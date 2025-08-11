<template>
  <div class="google-trans">
    <div class="left-panel" translate="no">
      <!-- 左侧内容 -->
      <div class="panel-header">
        <h3>原文</h3>
        <el-button @click="exportText('original')" type="primary" size="small">导出原文</el-button>
      </div>
      <div class="content">
        央视网消息：据国家统计局网站消息，1—5月份，规模以上工业企业实现利润总额2.72万亿元，同比有所下降，呈现以下特点：

        多重因素影响工业企业利润下降。1—5月份，规模以上工业企业实现利润总额27204.3亿元，比1—4月份增加6034.1亿元，但是受有效需求不足、工业品价格下降及短期因素波动等多重因素影响，同比下降1.1%。从利润构成看，投资收益等短期因素的上年同期基数较高，下拉1—5月份规上工业企业利润增速1.7个百分点。

        工业企业毛利润、营收保持增长。1—5月份，规模以上工业企业利润同比虽然有所下降，但从营业收入扣减营业成本计算的毛利润角度看，规上工业企业毛利润同比增长1.1%，拉动全部规上工业企业利润增长3.0个百分点。从营业收入看，1—5月份，规模以上工业企业营业收入同比增长2.7%，工业企业营收持续保持增长态势，为企业下阶段盈利恢复创造有利条件。

        装备制造业"压舱石"作用凸显。工业经济转型升级持续推进，装备制造业效益保持较高水平，1—5月份，装备制造业利润同比增长7.2%，拉动全部规模以上工业利润增长2.4个百分点，对规模以上工业利润支撑作用突出。从行业看，装备制造业的8个行业中，有7个行业利润实现增长，其中，电子、电气机械、通用设备等行业利润增长超过两位数，增速分别达11.9%、11.6%、10.6%。

        "上天入海"尽显工业高质量发展活力。1—5月份，我国航天、航空、航海等"三航"产业快速发展，带动铁路船舶航空航天行业利润同比增长56.0%。其中，在国产大飞机成功商业运营两周年、载人月球探测工程登月阶段任务启动以及商业航天企业不断取得新成果推动下，飞机制造、航天器及运载火箭制造等行业利润分别增长120.7%、28.6%，同时带动航空航天相关设备制造行业利润增长68.1%。在海洋经济大力发展背景下，船舶及相关装置制造行业利润增长85.0%，其中金属船舶制造利润增长111.8%，相关的船用配套设备制造、海洋工程装备制造利润分别增长63.2%、15.4%。

        "两新"政策效应持续显现。1—5月份，各地区各有关部门加大力度推动"两新"政策落地实施，有效释放内需活力。在大规模设备更新相关政策带动下，通用设备、专用设备行业利润同比分别增长10.6%、7.1%，合计拉动规模以上工业利润增长0.6个百分点。其中，电子和电工机械专用设备制造、通用零部件制造、采矿冶金建筑专用设备制造、金属加工机械制造等行业利润快速增长，增速分别为39.3%、26.7%、14.5%、11.3%。消费品以旧换新政策加力扩围效果明显，智能消费设备制造、其他家用电力器具制造、家用厨房电器具制造等行业利润分别增长101.5%、31.2%、20.7%。

        私营和外资企业利润保持增长。1—5月份，在规模以上工业企业中，私营企业、外商和港澳台投资企业利润同比分别增长3.4%、0.3%，分别高于全部规模以上工业平均水平4.6个、1.4个百分点，分别拉动全部规上工业利润增长0.9个、0.1个百分点。

        下阶段，要深入贯彻落实党中央、国务院决策部署，实施好更加积极有为的宏观政策，着力做强国内大循环，强化创新驱动，扎实推进工业高质量发展，为工业企业效益恢复打下稳固基础。
      </div>
    </div>
    <div class="divider"></div>
    <div class="right-panel" translate="yes">
      <!-- 右侧内容 -->
      <div class="panel-header">
        <h3>翻译</h3>
        <el-button @click="exportText('translated')" type="success" size="small">导出翻译</el-button>
      </div>
      <div class="content">
        央视网消息：据国家统计局网站消息，1—5月份，规模以上工业企业实现利润总额2.72万亿元，同比有所下降，呈现以下特点：

        多重因素影响工业企业利润下降。1—5月份，规模以上工业企业实现利润总额27204.3亿元，比1—4月份增加6034.1亿元，但是受有效需求不足、工业品价格下降及短期因素波动等多重因素影响，同比下降1.1%。从利润构成看，投资收益等短期因素的上年同期基数较高，下拉1—5月份规上工业企业利润增速1.7个百分点。

        工业企业毛利润、营收保持增长。1—5月份，规模以上工业企业利润同比虽然有所下降，但从营业收入扣减营业成本计算的毛利润角度看，规上工业企业毛利润同比增长1.1%，拉动全部规上工业企业利润增长3.0个百分点。从营业收入看，1—5月份，规模以上工业企业营业收入同比增长2.7%，工业企业营收持续保持增长态势，为企业下阶段盈利恢复创造有利条件。

        装备制造业"压舱石"作用凸显。工业经济转型升级持续推进，装备制造业效益保持较高水平，1—5月份，装备制造业利润同比增长7.2%，拉动全部规模以上工业利润增长2.4个百分点，对规模以上工业利润支撑作用突出。从行业看，装备制造业的8个行业中，有7个行业利润实现增长，其中，电子、电气机械、通用设备等行业利润增长超过两位数，增速分别达11.9%、11.6%、10.6%。

        "上天入海"尽显工业高质量发展活力。1—5月份，我国航天、航空、航海等"三航"产业快速发展，带动铁路船舶航空航天行业利润同比增长56.0%。其中，在国产大飞机成功商业运营两周年、载人月球探测工程登月阶段任务启动以及商业航天企业不断取得新成果推动下，飞机制造、航天器及运载火箭制造等行业利润分别增长120.7%、28.6%，同时带动航空航天相关设备制造行业利润增长68.1%。在海洋经济大力发展背景下，船舶及相关装置制造行业利润增长85.0%，其中金属船舶制造利润增长111.8%，相关的船用配套设备制造、海洋工程装备制造利润分别增长63.2%、15.4%。

        "两新"政策效应持续显现。1—5月份，各地区各有关部门加大力度推动"两新"政策落地实施，有效释放内需活力。在大规模设备更新相关政策带动下，通用设备、专用设备行业利润同比分别增长10.6%、7.1%，合计拉动规模以上工业利润增长0.6个百分点。其中，电子和电工机械专用设备制造、通用零部件制造、采矿冶金建筑专用设备制造、金属加工机械制造等行业利润快速增长，增速分别为39.3%、26.7%、14.5%、11.3%。消费品以旧换新政策加力扩围效果明显，智能消费设备制造、其他家用电力器具制造、家用厨房电器具制造等行业利润分别增长101.5%、31.2%、20.7%。

        私营和外资企业利润保持增长。1—5月份，在规模以上工业企业中，私营企业、外商和港澳台投资企业利润同比分别增长3.4%、0.3%，分别高于全部规模以上工业平均水平4.6个、1.4个百分点，分别拉动全部规上工业利润增长0.9个、0.1个百分点。

        下阶段，要深入贯彻落实党中央、国务院决策部署，实施好更加积极有为的宏观政策，着力做强国内大循环，强化创新驱动，扎实推进工业高质量发展，为工业企业效益恢复打下稳固基础。
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
/* googleTrans 组件 */
const text = ref("")

// 导出文本为txt文件
const exportText = (type: 'original' | 'translated') => {
  // 获取对应面板的文本内容
  const panel = type === 'original' ? '.left-panel .content' : '.right-panel .content'
  const contentElement = document.querySelector(panel) as HTMLElement

  if (!contentElement) {
    ElMessage.error('未找到内容元素')
    return
  }

  // 获取文本内容
  const textContent = contentElement.textContent || contentElement.innerText || ''

  // 创建Blob对象
  const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' })

  // 创建下载链接
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url

  // 设置文件名
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
  const fileName = `${type === 'original' ? '原文' : '翻译'}_${timestamp}.txt`
  link.download = fileName

  // 触发下载
  document.body.appendChild(link)
  link.click()

  // 清理
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // 显示成功消息
  ElMessage.success(`已成功导出${type === 'original' ? '原文' : '翻译'}文件`)
}

// 导出所有文本（原文+翻译）
const exportAllText = () => {
  const originalElement = document.querySelector('.left-panel .content') as HTMLElement
  const translatedElement = document.querySelector('.right-panel .content') as HTMLElement

  if (!originalElement || !translatedElement) {
    ElMessage.error('未找到内容元素')
    return
  }

  const originalText = originalElement.textContent || originalElement.innerText || ''
  const translatedText = translatedElement.textContent || translatedElement.innerText || ''

  // 组合文本内容
  const allText = `=== 原文 ===\n\n${originalText}\n\n=== 翻译 ===\n\n${translatedText}`

  // 创建Blob对象
  const blob = new Blob([allText], { type: 'text/plain;charset=utf-8' })

  // 创建下载链接
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url

  // 设置文件名
  const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
  const fileName = `原文和翻译_${timestamp}.txt`
  link.download = fileName

  // 触发下载
  document.body.appendChild(link)
  link.click()

  // 清理
  document.body.removeChild(link)
  URL.revokeObjectURL(url)

  // 显示成功消息
  ElMessage.success('已成功导出原文和翻译文件')
}
</script>

<style scoped>
.google-trans {
  display: flex;
  width: 100%;
  height: 100vh;
  /* 撑满整个视口高度 */
  min-height: 100vh;
}

.left-panel,
.right-panel {
  flex: 1;
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.left-panel {
  background-color: #f5f5f5;
}

.right-panel {
  background-color: #ffffff;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.panel-header h3 {
  margin: 0;
  color: #333;
  font-size: 18px;
}

.content {
  flex: 1;
  line-height: 2rem;
  overflow: auto;
  padding-bottom: 3rem;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.divider {
  width: 2px;
  background-color: #e0e0e0;
  margin: 0;
  flex-shrink: 0;
}

/* 可选：添加悬停效果 */
.divider:hover {
  background-color: #c0c0c0;
  cursor: col-resize;
}

/* 确保在移动设备上也能正常显示 */
@media (max-width: 768px) {
  .google-trans {
    flex-direction: column;
    height: auto;
  }

  .left-panel,
  .right-panel {
    width: 100%;
  }

  .divider {
    width: 100%;
    height: 2px;
  }

  .panel-header {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
}
</style>