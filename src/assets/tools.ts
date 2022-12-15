export function throttle(fn: Function, delay: number): Function {  //节流函数
    let flag: boolean = true
    return (): void => {
        if (flag) {
            flag = false
            fn()
            setTimeout(() => {
                flag = true
            }, delay)
        }
    }
}

export function showSnows(container: HTMLDivElement): void {  //生成雪花
    for (let i = 0; i <= 50; i++) {
        const snow: HTMLDivElement = document.createElement('div')
        const isColor: number = (Math.random() * 10) + 1
        snow.style.backgroundColor = isColor > 3 ? '#87a9ba' : '#e9f0f2'
        snow.style.width = isColor > 3 ? '.05rem' : '.1rem'
        snow.style.height = isColor > 3 ? '.05rem' : '.1rem'
        snow.style.borderRadius = '50%'
        snow.style.position = 'absolute'
        snow.style.filter = 'blur(.02rem)'
        const top: number = Math.floor(Math.random() * (container.offsetHeight + 1)); //含最大值，含最小值
        const left: number = Math.floor(Math.random() * (container.offsetWidth + 1)); //含最大值，含最小值
        snow.style.top = `${top / 100}rem`
        snow.style.left = `${left / 100}rem`
        // snow.classList.add('animate__animated')
        // snow.classList.add('animate__bounceInDown')
        snow.style.zIndex = '98'
        container.appendChild(snow)
    }
}