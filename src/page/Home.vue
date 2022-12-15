<template>
    <div class="home">
        <div class="mask" v-if="showMask" ref="mask">
            <p v-if="showText >= 1" class="title animate__animated animate__fadeInTopLeft">Christmas Day 到了</p>
            <p v-if="showText >= 2" class="main animate__animated animate__fadeInTopRight">我看别人都给自己画 <span style="color: pink;">tree</span> </p>
            <p v-if="showText >= 3" class="main animate__animated animate__fadeInBottomLeft">自己画给自己有什么意思</p>
            <p v-if="showText >= 4" class="main animate__animated animate__fadeInBottomRight">是要感动自己吗?</p>
            <p v-if="showText >= 5" class="main animate__animated animate__fadeInTopLeft">我不给自己画</p>
            <p v-if="showText >= 6" class="main animate__animated animate__fadeInTopRight">我给你 <span style="color: skyblue;">draw</span> </p>
            <p v-if="showText >= 7" class="main animate__animated animate__fadeInBottomLeft">也不知道我这技术怎么样</p>
            <p v-if="showText >= 8" class="main animate__animated animate__fadeInBottomRight">学了这么久前端</p>
            <p v-if="showText >= 9" class="main animate__animated animate__fadeInTopLeft" style="font-size: .3rem; color: #fff;">现在</p>
            <p v-if="showText >= 10" class="main animate__animated animate__fadeInTopRight">见证我的设计 <span style="color: purple;">and</span> 技术</p>
            <p v-if="showText >= 11" class="main animate__animated animate__fadeInBottomLeft">希望不会很失望！</p>
            <div v-if="showText >= 12" class="btn animate__animated animate__rollIn" @click="start">let's start</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted,nextTick } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
let showMask = ref<boolean>(false)
let showText = ref<number>(0)
let timer: any = null
onMounted(() => {
    setTimeout(() => {  //显示遮罩层
        showMask.value = true
        timer = setInterval(() => {  //逐行显示文字
            showText.value++
            if (showText.value > 12) {
                clearInterval(timer)
            }
        }, 1000)
    }, 3000)
})

let mask = ref()
function start(): void {
    mask.value.classList.add("kill")
    setTimeout(()=>{
        router.push('/draw')
    },1000)
}

</script>

<style lang="less">
.home {
    width: 100vw;
    height: 100vh;
    background-image: url(../assets/img/tree.jpg);
    background-size: 90vw;
    background-position: 80%;
    background-repeat: no-repeat;
    background-color: #f6f6f6;

    .mask {
        width: 3.75rem;
        height: 6.67rem;
        padding: .40rem;
        background-color: rgba(42, 39, 39, .4);
        text-align: center;
        color: #fff;
        animation: showMask 3s;
        transition: all 1s;
        p {
            animation: showText .5s;
            transition: all .4s;

            span {
                font-size: .35rem;
            }
        }

        .title {
            font-size: .35rem;
            margin-bottom: .2rem;
        }

        .main {
            font-size: .2rem;
            line-height: .35rem;
        }

        .btn {
            width: 1.8rem;
            height: .6rem;
            background-color: rgba(42, 39, 39, .0);
            margin: .3rem auto 0;
            color: orange;
            font-size: .35rem;
            line-height: .6rem;
            border-radius: .3rem;
        }
    }

    .kill{
        opacity: 0;
    }
}

@keyframes showMask {
    0% {
        background-color: #f6f6f6;
    }

    100% {
        background-color: rgba(42, 39, 39, .4);
    }
}


@keyframes showText{
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