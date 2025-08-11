export const useAnimation = () => {
    const isExpanded = ref(true) // 初始状态为展开

    // 切换文件夹列表的展开/折叠状态
    const toggleExpanded = () => {
        isExpanded.value = !isExpanded.value
    }

    const transitionStyle = '0.2s height ease-in-out'

    // 组件生命周期钩子
    const beforeEnter = (el: HTMLElement) => {
        el.style.transition = transitionStyle
        el.style.height = '0'
    }

    const enter = (el: HTMLElement) => {
        if (el.scrollHeight !== 0) {
            el.style.height = `${el.scrollHeight}px`
        } else {
            el.style.height = ''
        }
        el.style.overflow = 'hidden'
    }

    const afterEnter = (el: HTMLElement) => {
        el.style.transition = ''
        el.style.height = ''
        el.style.overflow = ''
    }

    const beforeLeave = (el: HTMLElement) => {
        el.style.height = `${el.scrollHeight}px`
        el.style.overflow = 'hidden'
    }

    const leave = (el: HTMLElement) => {
        if (el.scrollHeight !== 0) {
            requestAnimationFrame(() => {
                el.style.transition = transitionStyle
                el.style.height = '0'
            })
        }
    }

    const afterLeave = (el: HTMLElement) => {
        el.style.transition = ''
        el.style.height = ''
        el.style.overflow = ''
    }

    const transitionHooks = {
        beforeEnter,
        enter,
        leave,
        afterEnter,
        afterLeave,
        beforeLeave
    }

    return {
        isExpanded,
        toggleExpanded,
        beforeEnter,
        enter,
        leave,
        afterEnter,
        afterLeave,
        beforeLeave
    }

}
