<template>
    <div class="home">
        <div class="mask" v-if="showMask" ref="mask">
            <p v-if="showText >= 1" class="title"><span style="color:red">ChristmasDay</span> 到了</p>
            <p v-if="showText >= 2" class="main">我看别人都给自己画 <span style="color: pink;">tree</span> </p>
            <p v-if="showText >= 3" class="main">我也跟个风</p>
            <p v-if="showText >= 4" class="main">代码写一棵</p>
            <p v-if="showText >= 6" class="main">也不知道我这技术怎么样</p>
            <p v-if="showText >= 7" class="main">学了这么久前端</p>
            <p v-if="showText >= 8" class="main" style="font-size: .3rem; color: #fff;">现在</p>
            <p v-if="showText >= 9" class="main">见证我的设计 <span style="color: purple;">and</span> 技术</p>
            <p v-if="showText >= 10" class="main">希望不会很难看！</p>
            <div v-if="showText >= 12" class="btn" @click="start">let's start</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
    width: 3.75rem;
    height: 6.67rem;
    background-image: url(../assets/img/tree.jpg);
    background-size: 3.35rem;
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
            font-size: .30rem;
            margin-bottom: .2rem;
            margin-bottom: .2rem;
        }

        .main {
            font-size: .2rem;
            line-height: .35rem;
            margin-bottom: .1rem;
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