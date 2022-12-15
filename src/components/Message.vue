<template>
    <div class="message" v-if="isShow">
        {{message}}
    </div>
</template>

<script setup lang="ts">
interface props{
    isShow:boolean,
    message:string
}
const props = defineProps<props>()
</script>

<style lang="less">
.message{
    position: absolute;
    font-size: .15rem;
    width: 2.5rem;
    color: rgb(63, 151, 185);
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    padding: .1rem;
    border: 2px solid skyblue;
    border-radius: .1rem;
    text-align: center;
    z-index: 99;
}
</style>