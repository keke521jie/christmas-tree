import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCdStore = defineStore('cd', () => {
  let cdShow = ref<boolean>(false)
  let isPlay = ref<boolean>(false)
  return { cdShow, isPlay }
})
