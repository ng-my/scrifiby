export const useTool = () => {
  // 假进度条逻辑
  const progressTimerMap = ref<Record<any, any>>({});

  const startFakeProgress = (
    progressMap: Ref<Record<any, any>>,
    taskId: string
  ) => {
    // 确保初始进度存在
    if (!progressMap.value[taskId]) {
      progressMap.value[taskId] = 0;
    }

    const increment = () => {
      // 获取当前进度
      const currentProgress = progressMap.value[taskId];

      // 如果进度小于90，继续增加
      if (currentProgress < 90) {
        // 每次增加1-5的随机进度
        const increase = Math.random() * 4 + 1;

        // 确保不超过90
        if (progressMap.value[taskId] < 100) {
          progressMap.value[taskId] = Math.min(currentProgress + increase, 90);
        }

        // 1秒后再次更新
        setTimeout(increment, 1000);
      }
    };

    // 开始进度更新
    increment();
  };

  const downloadFile = (url: string, fileName?: string): void => {
    // 验证URL
    try {
      // 创建隐藏的a标签元素
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = url;

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (!isIOS) {
        // 设置下载属性和文件名（如果提供）
        link.setAttribute("download", fileName || ""); // 使浏览器使用原始文件名
      }

      // 添加到DOM，触发点击，然后移除
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("download err:", error);
    }
  };

  return {
    startFakeProgress,
    downloadFile
  };
};
