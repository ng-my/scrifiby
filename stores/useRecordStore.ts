export const useRecordStore = defineStore('record', () => {
    const recordStatus = ref<0 | 1>(0); // 0: 未开始 1: 进行中

    const startRecord = () => {
        recordStatus.value = 1;
    }
    const endRecord = () => {
        recordStatus.value = 0;
    }

    return {
        recordStatus,
        startRecord,
        endRecord
    }
})
