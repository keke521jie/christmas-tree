<template>
    <div class="draw" ref="draw">
        <Message :is-show="isShow" :message="message" />
        <div class="floor animate__animated animate__backInUp" ref="floor" v-if="step >= 2"></div>
        <div class="moon animate__animated animate__backInUp" v-if="step>=4"></div>
        <div class="snows" ref="snows"></div>
        <img src="../assets/img/tree.png" class="tree" v-if="step>=7" alt="">
        <img src="../assets/img/1.png" class="pixie p_one animate__animated animate__zoomInLeft" v-if="step>=8" alt="">
        <img src="../assets/img/2.png" class="pixie p_two animate__animated animate__animated" v-if="step>=9" alt="">
        <img src="../assets/img/3.png" class="pixie p_three animate__animated animate__slideInRight" v-if="step>=10" alt="">
        <img src="../assets/img/xi.png" class="xi" v-if="step>=11" alt="">
        <img src="../assets/img/lw2.png" class="lw animate__animated animate__backInUp" v-if="step>=12" alt="">
        <img src="../assets/img/lw2.png" class="lw2 animate__animated animate__backInUp" v-if="step>=12" alt="">
        <img src="../assets/img/happy.png"  class="happy animate__animated animate__fadeInDown" v-if="step>=13" alt="">
        <img src="../assets/img/oldman.png"  class="oldman" v-if="step>=14" alt="">
        <div class="btn" @click="next" v-show="btnIsShow">next</div>
    </div>
</template>

<script setup lang="ts">
import Message from '@/components/Message.vue';
import { ref, watch } from 'vue';
import { showSnows } from '../assets/tools'
import { useCdStore } from '@/stores/cd';
import {useRouter} from 'vue-router'
const router = useRouter()

let draw = ref<HTMLDivElement>()
let isShow = ref<boolean>(true)
let message = ref<string>('注意点击右下角推进按钮！')

let step = ref<number>(0)

let btnIsShow = ref<boolean>(true)
function next(){
    btnIsShow.value = false
    step.value++
    setTimeout(()=>{
        btnIsShow.value = true
    },1500)
}

let snows = ref<HTMLDivElement>()
let floor = ref<HTMLDivElement>()


const cdStore = useCdStore()
watch(step, () => {
    switch (step.value) {
        case 1: {
            message.value = '那我开始画喽！'
            break
        }
        case 2: {
            message.value = '先画地面'
            break
        }
        case 3 : {
            message.value = '背景好单调加个夜晚背景';
            (draw.value as HTMLDivElement).style.backgroundColor = '#001a2a'
            break
        }
        case 4 : {
            message.value = '来个moon？';
            break
        }
        case 5 : {
            message.value = '在来点snow！';
            showSnows(snows.value as HTMLDivElement);
            (floor.value as HTMLDivElement).style.backgroundColor = '#ffffff';
            // (floor.value as HTMLDivElement).style.filter = 'blur(0.02rem)'
            break
        }
        case 6 : {
            message.value = '现在开始画tree！';
            break
        }
        case 7 : {
            message.value = '数体拿css可太吃力了原谅我偷个懒!';
            break
        }
        case 8:{
            message.value = '小精灵来啦!';
            break
        }
        case 9:{
            message.value = '俩只!';
            break
        }
        case 10:{
            message.value = '三只!';
            break
        }
        case 11:{
            message.value = '差点忘了圣诞星!';
            break
        }
        case 12:{
            message.value = '圣诞礼物!';
            break
        }
        case 13:{
            message.value = '圣诞快乐logo!';
            break
        }
        case 14:{
            message.value = '不可以缺少辣个澜人!';
            break
        }
        case 15:{
            message.value = '完成,来点music!';
            cdStore.$patch({
                cdShow:true,
                isPlay:true
            })
            setTimeout(()=>{
                isShow.value = false
                btnIsShow.value = false;
                (draw.value as HTMLDivElement).onclick = () => {
                    router.push('/celebrate')
                }
            },2000)
            break
        }
    }
})
</script>

<style lang="less" scoped>
.draw {
    font-size: .2rem;
    position: relative;
    padding: .2rem;
    width: 3.75rem;
    height: 6.67rem;
    overflow: hidden;
    transition: all 1s;
    // 地面
    .floor {
        width: 10rem;
        height: 8rem;
        border-radius: 50%;
        background-color: rgb(97, 35, 7);
        position: absolute;
        top: 5.2rem;
        left: -3rem;
        transition: all 1s;
    }

    //月亮
    .moon{
        width: 1rem;
        height: 1rem;
        background:linear-gradient(45deg, #fbec96, #fdeeb5);
        border-radius: 45%;
        position: absolute;
        top: .3rem;
        right: .5rem;
    }
    //雪
    .snows{
        width: 3.75rem;
        height: 6.67rem;
        position: absolute;
        top: 0;
        left: 0;
    }

    //树
    .tree{
        position: absolute;
        bottom: 1.5rem;
        left: .4rem;
        width: 3rem;
        animation: showTree 1.5s;
        z-index: 97;
        // filter: blur(0.01rem);
    }

    .xi{
        width: .5rem;
        position: absolute;
        top: 1.6rem;
        left: 1.70rem;
        animation: showTree 1.5s;
    }

    //小精灵
    .pixie{
        position: absolute;
        width: .4rem;
    }

    .p_one{
        top:2.5rem;
        left:.5rem;
    }
    .p_two{
        top:.9rem;
        left:1.5rem;
    }
    .p_three{
        top:2rem;
        left:2.6rem;
    }

    //礼物
    .lw{
        width: 2.5rem;
        position: absolute;
        bottom: .3rem;
        left: .2rem;
        z-index: 96;
        // filter: blur(0.01rem);
    }

    .lw2{
        width: 2.5rem;
        position: absolute;
        bottom: .3rem;
        left: 1.3rem;
        z-index: 97;
        // filter: blur(0.01rem);
    }

    //祝福
    .happy{
        width: 2rem;
        position: absolute;
        bottom: -.5rem;
        left: .9rem;
    }

    //圣诞老人
    .oldman{
        width: 2rem;
        position: absolute;
        top: .3rem;
        left: .0rem;
        transform: rotate(-20deg);
        animation: showTree 1s;
    }

    .btn {
        width: .8rem;
        height: .45rem;
        border: .02rem solid pink;
        text-align: center;
        line-height: .45rem;
        color: rgb(233, 152, 115);
        position: absolute;
        bottom: .3rem;
        right: .3rem;
        border-radius: .2rem;
        font-size: .35rem;
        z-index: 99;
    }
}
@keyframes showTree{
    0%{
        opacity: 0;
    }
    20%{
        opacity: .2;
    }
    40%{
        opacity: .4;
    }
    60%{
        opacity: .6;
    }
    80%{
        opacity: .8;
    }
    100%{
        opacity: 1;
    }
}
</style>