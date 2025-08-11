import { ref, nextTick, computed } from "vue";
import { debounce } from "lodash-es";

export default function useTranscriptEdit(
  transcriptData,
  dynamicScroller,
  handleWordClick,
  scrollToParagraph,
  updateSubtitle,
  emit,
  props
) {
  // 编辑模式状态
  const isEditRightTranscript = ref(false);
  transcriptData.isEdit = isEditRightTranscript

  // 当前活跃的编辑元素
  const activeEditElement = ref({
    paraId: null,
    sentIndex: null,
    contentIndex: null
  });

  // 编辑历史记录
  const editHistory = ref([]);
  const currentHistoryIndex = ref(-1);

  const lastEditInfo = ref({
    timestamp: 0,
    paraId: null,
    sentIndex: null,
    contentIndex: null
  });

  // 点击状态
  const isClick = ref(false);

  // 是否可以撤销/重做
  const canUndo = computed(() => {
    return currentHistoryIndex.value >= 0;
  });

  const canRedo = computed(() => {
    return currentHistoryIndex.value < editHistory.value.length - 1;
  });
  const isAtStartOfContent =  (element)=> {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return false;

    const range = selection.getRangeAt(0);
    return range.startOffset === 0 && range.collapsed;
  }
  const isAtEndOfContent = (element) => {
    const selection = window.getSelection();
    if (selection.rangeCount === 0) return false;

    const range = selection.getRangeAt(0);

    if (range.startContainer.nodeType === Node.TEXT_NODE) {
      return range.startOffset === range.startContainer.length && range.collapsed;
    }
    return false
    // 如果是元素节点
    // return element.childNodes.length === 0 || (range.startOffset === element.childNodes.length && range.collapsed);
  }
  const findPreviousNonEmptySibling = (element) => {
    let sibling = element.previousElementSibling;
    while (sibling) {
      // 检查是否为非空白的文本节点
      if (sibling.childNodes.length > 0) {
        return sibling;
      }
      sibling = sibling.previousElementSibling;
    }
    return null;
  }
  const findNextNonEmptySibling = (element) => {
    let sibling = element.nextElementSibling;
    while (sibling) {
      // 检查是否为非空白的文本节点
      if (sibling.childNodes.length > 0) {
        return sibling;
      }
      sibling = sibling.nextElementSibling;
    }
    return null;
  }
  const placeCursorAtBeginning  = (element) => {
    const selection = window.getSelection();
    const range = document.createRange();

    if (element.childNodes.length > 0) {
      range.setStart(element.childNodes[0], 0);
    } else {
      range.setStart(element, 0);
    }

    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  const placeCursorAtEnd = (element) => {
    const selection = window.getSelection();
    const range = document.createRange();

    if (element.childNodes.length > 0) {
      const lastChild = element.childNodes[element.childNodes.length - 1];

      if (lastChild.nodeType === Node.TEXT_NODE) {
        range.setStart(lastChild, lastChild.length);
      } else {
        range.setStartAfter(lastChild);
      }
    } else {
      range.setStart(element, 0);
    }

    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  // 移动焦点到下一个或上一个元素
  const moveFocus = (currentElement, direction, e) => {
    let targetElement = null;
    if(direction === -1) {
      targetElement = findPreviousNonEmptySibling(currentElement)
      console.log("🚀 ~ file: useTranscriptEdit.js method: moveFocus line: 127 🚀",targetElement )
      if(!targetElement) return
      placeCursorAtEnd(targetElement)
    } else if(direction === 1){
      targetElement = findNextNonEmptySibling(currentElement);
      if(!targetElement) return
      placeCursorAtBeginning(targetElement)
    }
    // 更新当前状态
    if(targetElement) {
      targetElement.focus();
      const { cid, contentIndex, pid, sentIndex } = targetElement.dataset;
      setActiveEditElement(pid, +sentIndex, +contentIndex, { cid } , e);
    }
  }
  // 启用编辑模式
  const handleEditRightTranscript = () => {
    isEditRightTranscript.value = true;
    // 清空历史记录
    editHistory.value = [];
    currentHistoryIndex.value = -1;
  };
  // 保存到数据库
  const saveTranscript = async (data) => {
    const { transcriptApi } = await import("~/api/transcript");
    await transcriptApi.editFileTranscriptInfo({
      pid: data.pid,
      fileId: props.fileBaseInfo.id,
      taskId: props.fileBaseInfo.taskId,
      editContent: JSON.stringify(data.sentences)
    });
  };
  // 保存编辑内容
  const handleSaveRightTranscript = () => {
    isEditRightTranscript.value = false;
    // 重置活跃编辑元素
    resetActiveEditElement();
    // 清空历史记录
    editHistory.value = [];
    currentHistoryIndex.value = -1;
    lastContentId.value = "";
    // 这里可以添加保存到服务器的逻辑
  };

  // 重置活跃编辑元素
  const resetActiveEditElement = () => {
    activeEditElement.value = {
      paraId: null,
      sentIndex: null,
      contentIndex: null
    };
  };
  const lastContentId = ref(null);
  // 设置当前活跃的编辑元素
  const setActiveEditElement = (
    paraId,
    sentIndex,
    contentIndex,
    content,
    e
  ) => {
    if (e) {
      if(lastContentId.value && lastContentId.value !== content.cid){
        handleContentEdit.flush();
      }
    }
    isClick.value = true;
    activeEditElement.value = { paraId, sentIndex, contentIndex };
    lastContentId.value = content.cid;
    if (typeof handleWordClick === "function") {
      handleWordClick(paraId, sentIndex, contentIndex, content);
    }
  };
  const filterEnterStr =  str => str.replace(/\r\n|\n|\r/g, '')
  // 检查是否为当前活跃的编辑元素
  const isActiveEditElement = (paraId, sentIndex, contentIndex) => {
    return (
      activeEditElement.value.paraId === paraId &&
      activeEditElement.value.sentIndex === sentIndex &&
      activeEditElement.value.contentIndex === contentIndex
    );
  };
  const editCore = async (
    event,
    paraId,
    sentIndex,
    contentIndex,
    contentObj
  ) => {
    // 获取编辑元素
    const editElement = event.target;

    // 保存当前选区位置
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const offset = range.endOffset;

    // 获取编辑后的内容
    let newContent = editElement.innerText;
    newContent = filterEnterStr(newContent)
    editElement.innerText = newContent;

    // 获取原始内容
    let oldContent = contentObj.content;

    // 更新数据模型中的内容
    const paragraph = transcriptData.value.paragraphs.find(
      (p) => p.pid === paraId
    );
    if (
      paragraph &&
      paragraph.sentences[sentIndex] &&
      paragraph.sentences[sentIndex].contents[contentIndex]
    ) {
      paragraph.sentences[sentIndex].contents[contentIndex].content = newContent;
      // 获取当前时间戳
      const currentTime = Date.now();
      // 如果不同的编辑位置，创建新记录
      addToHistory({
        paraId,
        sentIndex,
        contentIndex,
        oldContent,
        newContent,
        timestamp: currentTime
      });
    }
    // 恢复光标位置
    nextTick(() => {
      try {
        // 如果当前内容为空
        if(!newContent){
          moveFocus(editElement, -1, event);
        } else {
          // 重新聚焦到编辑元素
          editElement.focus();

          // 重新创建选区和范围
          const newRange = document.createRange();
          const textNode = editElement.firstChild || editElement;

          // 设置选区范围到原来的偏移位置
          newRange.setStart(textNode, Math.min(offset, textNode.length || 0));
          newRange.setEnd(textNode, Math.min(offset, textNode.length || 0));

          // 应用选区
          selection.removeAllRanges();
          selection.addRange(newRange);
          console.log("🚀 ~ file: useTranscriptEdit.js method:  line: 197 🚀 selection end");
        }
      } catch (e) {
        console.error("Error restoring cursor position:", e);
      }
    });
    updateSubtitle();
    saveTranscript(paragraph);
  };
  // 处理内容编辑
  const handleContentEdit = debounce(editCore, 300);

  // 添加操作到历史记录
  const addToHistory = (operation) => {
    // 如果当前不是在历史记录的最后，则删除当前位置之后的记录
    if (currentHistoryIndex.value < editHistory.value.length - 1) {
      editHistory.value = editHistory.value.slice(
        0,
        currentHistoryIndex.value + 1
      );
    }

    // 分析操作，找出新旧内容的区别位置
    if (operation.oldContent && operation.newContent) {
      // 计算新旧文本的公共前缀长度
      let prefixLength = 0;
      const minLength = Math.min(
        operation.oldContent.length,
        operation.newContent.length
      );
      while (
        prefixLength < minLength &&
        operation.oldContent.charAt(prefixLength) ===
          operation.newContent.charAt(prefixLength)
      ) {
        prefixLength++;
      }

      // 记录编辑位置 - 这将帮助我们定位光标
      operation.cursorPosition = prefixLength;
    }

    // 添加新操作到历史记录
    editHistory.value.push(operation);
    currentHistoryIndex.value = editHistory.value.length - 1;
  };

  // 撤销操作
  const undoOperation = async () => {
    if (!canUndo.value) return;

    const operation = editHistory.value[currentHistoryIndex.value];
    // 恢复到原始内容
    const paragrapIndex = transcriptData.value.paragraphs.findIndex(
      (p) => p.pid === operation.paraId
    );
    const paragraph = transcriptData.value.paragraphs[paragrapIndex];
    if (
      paragraph &&
      paragraph.sentences[operation.sentIndex] &&
      paragraph.sentences[operation.sentIndex].contents[operation.contentIndex]
    ) {
      paragraph.sentences[operation.sentIndex].contents[
        operation.contentIndex
      ].content = operation.oldContent;

      // 设置活跃编辑元素
      setActiveEditElement(
        operation.paraId,
        operation.sentIndex,
        operation.contentIndex,
        operation
      );
      if (dynamicScroller.value && typeof scrollToParagraph === "function") {
        await scrollToParagraph(
          paragrapIndex,
          operation.paraId,
          dynamicScroller.value
        );
      }

      // 在下一个循环聚焦到对应元素
      nextTick(() => {
        // 首先尝试找到匹配该段落ID和内容索引的span
        let targetSpan = null;

        // 获取该paragraphID下的所有span
        const paragraphElement = document.querySelector(
          `[data-pid="${operation.paraId}"]`
        );
        if (paragraphElement) {
          const selector = `span[data-sent-index="${operation.sentIndex}"][data-content-index="${operation.contentIndex}"]`;
          const spans = paragraphElement.querySelectorAll(selector);
          if (spans.length > 0) {
            targetSpan = spans[0];
          }
        }

        // 如果没找到，尝试通过内容匹配
        if (!targetSpan) {
          // 获取所有可能的span
          const selector = `.transcript-content-wrap span[data-sent-index="${operation.sentIndex}"][data-content-index="${operation.contentIndex}"]`;
          const allSpans = document.querySelectorAll(selector);

          // 通过内容匹配
          for (const span of allSpans) {
            if (span.innerText === operation.oldContent) {
              targetSpan = span;
              break;
            }
          }
        }

        // 如果找到了目标span
        if (targetSpan) {
          // 确保元素在视口内可见
          targetSpan.scrollIntoView({ behavior: "smooth", block: "center" });
          // 延迟一小段时间后聚焦，确保滚动完成
          setTimeout(() => {
            targetSpan.focus();

            // 设置光标位置
            const range = document.createRange();
            const selection = window.getSelection();
            const textNode = targetSpan.firstChild || targetSpan;

            // 撤销操作时，光标应该定位到变化点
            let cursorPos = operation.cursorPosition || 0;
            cursorPos = Math.min(cursorPos, textNode.length || 0);

            try {
              range.setStart(textNode, cursorPos);
              range.setEnd(textNode, cursorPos);
              selection.removeAllRanges();
              selection.addRange(range);
            } catch (e) {
              console.error("Error setting cursor position:", e);
            }
          }, 100);
        }
      });
    }

    // 移动历史记录指针
    currentHistoryIndex.value--;
    updateSubtitle();
    saveTranscript(paragraph);
  };

  // 重做操作
  const redoOperation = async () => {
    if (!canRedo.value) return;

    // 移动到下一个历史记录
    currentHistoryIndex.value++;
    const operation = editHistory.value[currentHistoryIndex.value];
    // 恢复到新内容
    const paragrapIndex = transcriptData.value.paragraphs.findIndex(
      (p) => p.pid === operation.paraId
    );
    const paragraph = transcriptData.value.paragraphs[paragrapIndex];
    if (
      paragraph &&
      paragraph.sentences[operation.sentIndex] &&
      paragraph.sentences[operation.sentIndex].contents[operation.contentIndex]
    ) {
      paragraph.sentences[operation.sentIndex].contents[
        operation.contentIndex
      ].content = operation.newContent;

      // 设置活跃编辑元素
      setActiveEditElement(
        operation.paraId,
        operation.sentIndex,
        operation.contentIndex,
        operation
      );

      if (dynamicScroller.value && typeof scrollToParagraph === "function") {
        await scrollToParagraph(
          paragrapIndex,
          operation.paraId,
          dynamicScroller.value
        );
      }

      // 在下一个循环聚焦到对应元素
      nextTick(() => {
        // 首先尝试找到匹配该段落ID和内容索引的span
        let targetSpan = null;

        // 获取该paragraphID下的所有span
        const paragraphElement = document.querySelector(
          `[data-pid="${operation.paraId}"]`
        );
        if (paragraphElement) {
          const selector = `span[data-sent-index="${operation.sentIndex}"][data-content-index="${operation.contentIndex}"]`;
          const spans = paragraphElement.querySelectorAll(selector);
          if (spans.length > 0) {
            targetSpan = spans[0];
          }
        }

        // 如果没找到，尝试通过内容匹配
        if (!targetSpan) {
          // 获取所有可能的span
          const selector = `.transcript-content-wrap span[data-sent-index="${operation.sentIndex}"][data-content-index="${operation.contentIndex}"]`;
          const allSpans = document.querySelectorAll(selector);

          // 通过内容匹配
          for (const span of allSpans) {
            if (span.innerText === operation.newContent) {
              targetSpan = span;
              break;
            }
          }
        }

        // 如果找到了目标span
        if (targetSpan) {
          // 确保元素在视口内可见
          targetSpan.scrollIntoView({ behavior: "smooth", block: "center" });

          // 延迟一小段时间后聚焦，确保滚动完成
          setTimeout(() => {
            targetSpan.focus();

            // 设置光标位置到编辑位置
            const range = document.createRange();
            const selection = window.getSelection();
            const textNode = targetSpan.firstChild || targetSpan;

            // 确定光标位置 - 重做操作时应该定位到恢复内容的后面
            let cursorPos = 0;
            if (operation.cursorPosition !== undefined) {
              // 在重做操作时，光标应该定位到新内容的变化点后面
              // 如果新内容更长，则应该考虑新增内容的长度
              if (operation.newContent && operation.oldContent) {
                // 计算新旧内容的长度差，这可能会影响光标位置
                const lengthDiff =
                  operation.newContent.length - operation.oldContent.length;
                if (lengthDiff > 0) {
                  // 新内容更长，光标位置应该向后移动差值
                  cursorPos = Math.min(
                    operation.cursorPosition + lengthDiff,
                    textNode.length || 0
                  );
                } else {
                  // 新内容更短或一样长，光标仍然在变化点
                  cursorPos = Math.min(
                    operation.cursorPosition,
                    textNode.length || 0
                  );
                }
              } else {
                cursorPos = Math.min(
                  operation.cursorPosition,
                  textNode.length || 0
                );
              }
            }

            try {
              range.setStart(textNode, cursorPos);
              range.setEnd(textNode, cursorPos);
              selection.removeAllRanges();
              selection.addRange(range);
            } catch (e) {
              console.error("Error setting cursor position:", e);
            }
          }, 100);
        }
      });
      updateSubtitle();
      saveTranscript(paragraph);
    }
  };

  const handleKeyDown = async (e) => {
    const editable = e.target;
    if (e.key === 'ArrowLeft' && isAtStartOfContent(editable)) {
      e.preventDefault();
      moveFocus(e.target, -1,e);
    } else if (e.key === 'ArrowRight' && isAtEndOfContent(editable)) {
      e.preventDefault();
      moveFocus(e.target, 1,e);
    } if (e.key === 'Backspace' && isAtStartOfContent(editable)) {
      e.preventDefault();
      moveFocus(e.target, -1, e);
    }
  };
  const isClickParent = ref(false)
  // 处理文档点击事件 - 点击非编辑区域时重置活跃编辑元素
  const handleDocumentClick = (e) => {
    // 只有在编辑模式时才需要检查
    if (!isEditRightTranscript.value) return;
    if (isClick.value && !isClickParent.value) {
      isClick.value = false;
      return;
    }
    isClickParent.value = false
    const target = e.target;
    // 检查点击的元素是否在transcript-content-wrap类下
    const isInContentWrap = target.closest(
      ".transcript-content-wrap .content-span-parent-node"
    );

    // 如果在内容区域内，检查是否是可编辑的span元素
    if (isInContentWrap) {
      if (
        target.tagName === "SPAN" &&
        target.getAttribute("contenteditable") === "true"
      ) {
        return;
      } else if (target.tagName ===  "DIV" &&
          target.hasAttribute("data-pid")
      ) {
        const children = target.children
        let el = null
        for (let i = children.length - 1; i >= 0; i--) {
          const child = children[i];
          if (child.textContent && child.textContent.trim() !== '') {
            el = child;
            break
          }
        }
        if(!el) el = target.firstChild
        if(el) {
          el.focus();
          const dataset = el.dataset
          const { cid, contentIndex, pid, sentIndex } = dataset
          setActiveEditElement(pid, +sentIndex, +contentIndex, { cid } , e);
          isClickParent.value = true
          return
        }
      }
      resetActiveEditElement();
    } else {
      resetActiveEditElement();
    }
  };
  const handleEnterEdit = () => {
    console.log("🚀 handleEnterEdit 🚀" )
  }
  return {
    isEditRightTranscript,
    activeEditElement,
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
    handleKeyDown,
    handleEnterEdit,
    filterEnterStr
  };
}
