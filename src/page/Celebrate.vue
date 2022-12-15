<template>
    <div class="celebrate">
        <div class="mask">
            <p style="color:#ff0000;font-size: .6rem;">The old man</p>
            <p style="color:#c300e0;font-size: .4rem;">will</p>
            <p style="color:#ff0087;font-size: .4rem;">let you fulfill your wish</p>
            <p style="color:pink;font-size: .7rem;">Give you</p>
            <div class="photo">
                <img src="../assets/img/p1.jpg" v-if="showP===1" alt="">
                <img src="../assets/img/p2.jpg" v-if="showP===2" alt="">
                <img src="../assets/img/p3.jpg" v-if="showP===3" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
let showP = ref<number>(1)
let timer = null
onMounted(()=>{
    timer = setInterval(()=>{
        if(showP.value>=3){
            showP.value = 0
        }
        showP.value++
    },3000)
})
</script>

<style lang="less">
.a{
    color: rgb(224, 25, 141);
}
.celebrate {
    width: 3.75rem;
    height: 6.67rem;
    background-image: url(../assets/img/bj.jpg);
    position: relative;

    .mask {
        width: 3.75rem;
        height: 6.67rem;
        background-color: rgba(255, 255, 255, .6);
        position: absolute;
        top: 0;
        left: 0;
        padding: .2rem;
        text-align: center;

        .photo{
            width: 100%;
            height: 2.7rem;
            overflow: hidden;
            border-radius: .2rem;
            img{
                margin: auto;
                height: 2.7rem;
                animation: showTree 1s;
            }
        }
    }

    p {
        font-size: .25rem;
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