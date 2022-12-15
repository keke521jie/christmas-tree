<template>
  <!-- autoplay -->
  <audio ref="music" loop>
    <source src="./assets/ddd.mp3">
  </audio>
  <img class="cd animate__animated animate__bounce" src="./assets/img/cd.png" v-if="cdStore.cdShow" @click="play" alt="">
  <router-view></router-view>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router';
import { useCdStore } from './stores/cd'
import { storeToRefs } from 'pinia'
const cdStore = useCdStore()
const { isPlay } = storeToRefs(cdStore)
let music = ref<HTMLAudioElement>()
watch(isPlay, () => {
  if(isPlay.value === true) (music.value as HTMLAudioElement).play()
  else (music.value as HTMLAudioElement).pause()
})

function play(){
  cdStore.isPlay = !cdStore.isPlay
}
</script>

<style lang="less">
.cd {
  position: absolute;
  width: .4rem;
  top: .1rem;
  right: .1rem;
  z-index: 99;
}
</style>