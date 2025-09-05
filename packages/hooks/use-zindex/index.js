import { ref, computed } from "vue";

export const initZindex = 3000
export const zIndex = ref(0)
export const useZindex = () => {
    const currentZindex = computed(() => initZindex + zIndex.value)
    const nextZindex = () => zIndex.value++
    return { currentZindex, nextZindex }
}