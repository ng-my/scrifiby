import COS from "cos-js-sdk-v5";

export interface UploadFile {
  id: string;
  hash?: string;
  file: File;
  name: string;
  size: number;
  detailSize: string;
  status: "pending" | "hashing" | "uploading" | "merging" | "success" | "error";
  progress: number;
  errorText?: string;
  worker?: Worker;
  chunks?: Blob[];
  chunkProgress?: number[];
  __isHover: boolean;
  __isDelIng: boolean;
  uploadId: string;
  key: string;
  // 新增COS相关属性
  cosInstance?: COS;
  bucket?: string;
  region?: string;
  taskId?: string;
  allowedPath?: string;
}

// 获取COS授权信息
const getAuthorization = async () => {
  const { useFolderApi } = await import("~/api/folder");
  return await useFolderApi.getCosPreSignedUrl();
};

// 初始化COS实例
let auth: any;
const initCosInstance = async (file: UploadFile) => {
  if (!auth) {
    auth = await getAuthorization();
  }
  const bucket = auth.bucket;
  const region = auth.region;
  const allowedPath = auth.allowedPath;
  const instance = new COS({
    getAuthorization: async (options, callback) => {
      callback({
        TmpSecretId: auth.tmpSecretId,
        TmpSecretKey: auth.tmpSecretKey,
        SecurityToken: auth.sessionToken,
        ExpiredTime: auth.expiredTime,
        Expiration: auth.expiration,
        StartTime: auth.startTime
      });
    }
  });

  file.bucket = bucket;
  file.region = region;
  file.allowedPath = allowedPath;
  file.cosInstance = instance;
};

export const useUpload = () => {
  const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024; // 5GB
  const fileTypes = useUploadStore().fileTypes; // 允许的扩展名
  const CHUNK_SIZE = 100 * 1024 * 1024; // 5MB分割
  const NOTNEEDCHUNK_SIZE = 100 * 1024 * 1024; // 5MB
  const { t } = useI18n();
  const { selectedFolder } = storeToRefs(useFolderStore());

  const validateFile = (file: UploadFile): boolean => {
    // 大小验证 (5GB)
    if (file.size > MAX_FILE_SIZE) {
      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.tooLarge");
      return false;
    }

    const isMimeValid = [
      ...fileTypes,
      "WEBM",
      "X-M4A",
      "QUICKTIME",
      "VND.DLNA.ADTS",
      "X-MS-WMA",
      "X-MS-WMV"
    ].includes(file.file.type.split("/")[1].toUpperCase());

    // 返回结果
    if (!isMimeValid) {
      file.status = "error";
      file.errorText = t("FileUploadAndRecording.upload.fileFormat");
      return false;
    }

    return true;
  };

  const isExistFile = async (file: UploadFile) => {
    return new Promise((resolve, reject) => {
      file
        .cosInstance!.headObject({
          Bucket: file.bucket!,
          Region: file.region!,
          Key: file.key
        })
        .then((res) => {
          if (res) {
            resolve(true);
          }
        })
        .catch(() => {
          resolve(false);
        });
    });
  };

  const directUpload = async (file: UploadFile, times = 1) => {
    file.status = "uploading";

    // const res = await isExistFile(file);
    // console.log("exist", res);
    // if (res) {
    //   file.status = "success";
    //   file.progress = 100;
    //   return;
    // }

    return new Promise((resolve) => {
      file
        .cosInstance!.uploadFile({
          Bucket: file.bucket!,
          Region: file.region!,
          Key: file.key,
          Body: file.file,
          ChunkSize: CHUNK_SIZE,
          SliceSize: NOTNEEDCHUNK_SIZE,
          onTaskReady: (taskId) => {
            file.taskId = taskId;
          },
          onProgress(progressData) {
            let progress = Math.max(
              parseInt(String(progressData.percent * 100)),
              file.progress
            );
            file.progress = progress === 100 ? (progress = 99) : progress;
          }
        })
        .then((_) => {
          setTimeout(() => {
            file.status = "success";
          }, 300);
          resolve(true);
        })
        .catch(async (error) => {
          if (error?.toString().includes("expired")) {
            auth = null;
            await initCosInstance(file);
            file.key = `${file.allowedPath!}${file.hash}/${file.name || "filename"}`;
            directUpload(file);
            return;
          }
          if (times > 0) {
            console.log("retry directUpload");
            directUpload(file, times - 1);
            return;
          }
          file.status = "error";
          file.errorText = t("FileUploadAndRecording.upload.uploadErr");
          // file.errorText = error?.toString();
        });
    });
  };

  // 初始化
  const initUpload = async (file: UploadFile) => {
    if (!validateFile(file)) return;

    setTimeout(() => {
      file.progress = Math.max(
        Number(Math.floor(Math.random() * 5) + 1),
        file.progress
      );
    }, 1000);

    file.status = "hashing";

    // 创建Web Worker处理大文件计算
    // const worker = new Worker("/assets/upload/md5.worker.js");
    // file.worker = worker;
    //
    // worker.postMessage({ file: file.file });

    // 计算MD5
    return new Promise<any>(async (resolve, reject) => {
      // worker.onmessage = async (e) => {
      //
      // };
      const hash = Date.now() + "_" + Math.random().toString(36).substr(2, 9);
      // worker.terminate();
      file.worker = undefined;
      file.hash = hash;

      if (hash === "error") {
        file.status = "error";
        file.errorText = t("FileUploadAndRecording.upload.hashErr");
      } else {
        await initCosInstance(file);

        setTimeout(() => {
          file.progress = Math.max(
            Number(Math.floor(Math.random() * 10) + 5),
            file.progress
          );
        }, 1000);

        file.key = `${file.allowedPath!}${hash}/${file.name || "filename"}`;

        await directUpload(file);

        resolve(true);
      }
    });
  };

  // 删除文件
  const removeFile = async (file: UploadFile, files: Ref<UploadFile[]>) => {
    files.value = files.value.filter((f) => f.id !== file.id);

    if (["success", "error", "pending"].includes(file.status)) {
      return;
    }

    if (file.taskId) {
      file.cosInstance?.cancelTask(file.taskId);
    }
  };

  const removeAllFile = async (files: Ref<UploadFile[]>) => {
    files.value.forEach((file) => {
      removeFile(file, files);
    });
  };

  const { selectRawFiles } = storeToRefs(useUploadStore());
  const fetchFileUploadStatus = async (id: any, file: UploadFile) => {
    if (
      !selectRawFiles.value.some(
        (e: any) => e.localRequestId === (file.file as any)?.localRequestId
      )
    ) {
      return;
    }
    return new Promise(async (resolve, reject) => {
      const { useFolderApi } = await import("~/api/folder");
      const { getFileUploadStatus } = useFolderApi;
      const res = await getFileUploadStatus({
        id
      });

      if (res.fileMetaInfo.deleted !== 0) {
        reject(res.fileMetaInfo);
        file.status = "error";
        file.errorText = res.fileMetaInfo.errorTxt;
        return;
      }

      if (res.fileMetaInfo.fileUrl) {
        file.progress = 99;
        setTimeout(() => {
          file.status = "success";
        }, 300);
        file.name = res.fileMetaInfo.fileName;
        file.size = res.fileMetaInfo.fileSize;
        file.detailSize = niceBytes(String(res.fileMetaInfo.fileSize));
        (file.file as any).localFileId = res.fileMetaInfo.id;
      } else {
        setTimeout(() => {
          fetchFileUploadStatus(id, file).then(resolve).catch(reject);
        }, 3000);
      }
    });
  };

  const createFileObject = (file: File): UploadFile => {
    const obj = {
      id: Date.now() + file.name,
      file,
      name: file.name,
      size: file.size,
      detailSize: niceBytes(String(file.size)),
      status: "pending",
      progress: 0,
      __isHover: false,
      __isDelIng: false,
      uploadId: "",
      key: ""
    } as UploadFile;
    if ((file as any).localFileSize) {
      obj.size = (file as any).localFileSize;
      obj.detailSize = niceBytes(String((file as any).localFileSize));
    }
    if ((file as any).localRequestId) {
      obj.status = "uploading";
      simulateProgress(reactive(obj));
      fetchFileUploadStatus((file as any).localRequestId, reactive(obj));
    }
    return obj;
  };

  const units = ["bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  function niceBytes(x: string) {
    if (x === "--") return x;
    let l = 0,
      n = parseInt(x, 10) || 0;
    while (n >= 1024 && ++l) {
      n = n / 1024;
    }
    return n.toFixed(n < 10 && l > 0 ? 1 : 0) + " " + units[l];
  }

  function simulateProgress(file: UploadFile) {
    // 初始化文件状态
    file.progress = 0;
    file.status = "uploading";

    // 限制最大文件大小为5GB
    const MAX_FILE_SIZE = 5 * 1024 * 1024 * 1024;
    function isNumber(value: unknown) {
      return typeof value === "number" && !isNaN(value);
    }
    const fileSize = Math.min(
      isNumber(file.size) ? file.size : 1 * 1024 * 1024 * 1024,
      MAX_FILE_SIZE
    );

    // 根据文件大小动态计算上传速度（5-20MB/s）
    const speedFactor = 0.3 + 0.7 * (fileSize / MAX_FILE_SIZE);
    const UPLOAD_SPEED =
      5 * 1024 * 1024 + (20 * 1024 * 1024 - 5 * 1024 * 1024) * speedFactor;

    // 计算上传时间（添加20%随机波动）
    const baseDuration = (fileSize / UPLOAD_SPEED) * 1000;
    const totalDuration = baseDuration * (0.8 + Math.random() * 0.4);
    const startTime = Date.now();

    // 进度更新函数
    const update = () => {
      if (file.status !== "uploading") return;

      const elapsed = Date.now() - startTime;
      const timeRatio = Math.min(elapsed / totalDuration, 1);

      // 使用S型曲线模拟真实上传速度变化
      const progressRatio = 1 / (1 + Math.exp(-6 * (timeRatio - 0.5)));
      let progress = Math.floor(progressRatio * 98); // 最终进度停在98%

      // 添加微小波动模拟网络不稳定
      if (progress > file.progress + 1) {
        progress = Math.max(
          file.progress + 1,
          progress - Math.floor(Math.random() * 3)
        );
      }

      // 更新进度
      if (progress > file.progress) {
        file.progress = progress;
      }

      // 继续更新或完成
      if (file.progress < 98) {
        requestAnimationFrame(update);
      }
    };

    // 启动模拟
    requestAnimationFrame(update);
  }

  // todo 废弃的文件分片
  const uploadFile = async (file: UploadFile) => {
    file.status = "uploading";

    // 分割文件
    const chunks = file.chunks!;

    let totalProgress = 0;
    const totalChunks = chunks.length;

    const chunkPromises: Promise<any>[] = [];
    // 上传所有分片
    chunks.forEach((chunk, index) => {
      const promise = file.cosInstance
        ?.multipartUpload({
          Bucket: file.bucket!,
          Region: file.region!,
          Key: file.name,
          UploadId: file.uploadId,
          PartNumber: index + 1,
          Body: chunk
        })
        .then((res) => {
          file.chunkProgress![index] = 100;

          // 计算整体进度: 所有分片平均值 * 0.9
          totalProgress = file.chunkProgress!.reduce((sum, p) => sum + p, 0);
          file.progress = Math.round((totalProgress / totalChunks) * 0.9);

          return res;
        })
        .catch((err) => {
          file.status = "error";
          file.errorText = err?.toString();
        }) as any;
      chunkPromises.push(promise);
    });

    try {
      await Promise.all(chunkPromises);
      const eTags = await uploadChunkProgress(file);
      if (eTags?.length === totalChunks) {
        mergeFile(file, eTags);
      }
    } catch (e) {}
  };

  // todo 废弃的文件分片
  const uploadChunkProgress = async (file: UploadFile, times = 100) => {
    const data = await file.cosInstance!.multipartListPart({
      Bucket: file.bucket!,
      Region: file.region!,
      Key: file.name,
      UploadId: file.uploadId
    });
    if (data.Part?.length === file.chunks?.length) {
      return Promise.resolve(data.Part);
    }

    if (times > 0) {
      setTimeout(() => {
        uploadChunkProgress(file, times - 1);
      }, 1000);
      return;
    }
    file.status = "error";
    file.errorText = t("FileUploadAndRecording.upload.uploadErr");
    return Promise.reject();
  };

  // todo 废弃的文件分片 分割文件
  const createChunks = (file: File): Blob[] => {
    const chunks = [];
    let start = 0;
    while (start < file.size) {
      const end = Math.min(start + CHUNK_SIZE, file.size);
      chunks.push(file.slice(start, end));
      start = end;
    }
    return chunks;
  };

  // todo 废弃的文件分片 合并
  const mergeFile = async (file: UploadFile, eTags: COS.Part[]) => {
    try {
      file.status = "merging";

      await file.cosInstance!.multipartComplete({
        Bucket: file.bucket!,
        Region: file.region!,
        Key: file.name,
        UploadId: file.uploadId,
        Parts: eTags
      });

      file.status = "success";
      file.progress = 100;
    } catch (e: any) {
      file.status = "error";
      file.errorText = e?.toString();
    }
  };

  return {
    initUpload,
    removeFile,
    createFileObject,
    removeAllFile
  };
};
