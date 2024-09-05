
<template>
    <div ref="main">

        <div class="spidey" ref="spidy_element">

            <img src="/img/spider.png" alt="">

            <div class="dialog">
                <p class="text">{{ texts["spiderman-text"] }}</p>
                <button class="close" @click="close">X</button>
            </div>


        </div>

        <div class="trigger"></div>

    </div>
</template>

<script setup>

    const texts = useState('texts');

    const { $gsap, $ScrollTrigger } = useNuxtApp();

    const main = ref();
    const ctx = ref();
    const spidy_element = ref(null);

    function close(){
        if(!spidy_element.value) return;
        spidy_element.value.style.display = "none";
    }

    onMounted(() => {
        ctx.value = $gsap.context((self) => {
            
            const spidey = self.selector(".spidey")[0];
            const dialog = self.selector(".dialog")[0];
            const trigger = self.selector(".trigger")[0];

            $gsap.set(spidey, {transformOrigin: "50% 0%"});

            var swing = $gsap.timeline({repeat: -1});
            swing.to(spidey, { duration: 0.5, rotate:"1deg", ease:"sin.out"});
            swing.to(spidey, { duration: 0.5, rotate:"0deg", ease:"none"});
            swing.to(spidey, { duration: 0.5, rotate:"-1deg", ease:"sin.out"});
            swing.to(spidey, { duration: 0.5, rotate:"0deg", ease:"none"});
            swing.pause();
            
            var tl = $gsap.timeline();
            tl.to(spidey, {y: "60vh", duration: 1, ease: "power2.out"});
            tl.to(dialog, { opacity: 1, duration: .5});

            $ScrollTrigger.create({
                animation: tl,
                trigger: trigger,
                start: "bottom top",
                end: "+=" + 100,
                scrub: 1,
                toggleActions:"restart none reverse none",
                markers: false,
                onEnter: () => {
                    swing.resume();
                },
                onLeave: () => {
                },
                onEnterBack: () => {
                    swing.pause();
                },
                onLeaveBack: () => {
                },
            });

        }, main.value);

    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>


<style scoped lang="scss">
    
    .spidey {
        
        --spider-aspect: 3.44;
        --spider-w: 300px;
        --spider-h: calc(var(--spider-w) * var(--spider-aspect));

        width: var(--spider-w);
        height: var(--spider-h);

        position: fixed;
        top: calc(var(--spider-h) * -0.85);
        left: 0;

        z-index: 3;

        pointer-events: none;
        user-select: none;

        background-color: transparent;

        @media screen and (max-width: $size-s) {
            --spider-w: 150px;
        }

    }

    .spidey img {
        width: 100%;
        height: 100%;
    }

    .text{
        font-family: "comic";
        font-size: 24px;

        margin: 0;
        padding: 30px;
        text-align: center;
    
        background-color: white;
        border: 3px solid black;
        border-radius: 50px;

        @media screen and (max-width: $size-s) {
            padding: 15px;
            font-size: 12px;
            border-radius: 25px;
            border: 1px solid black;
        }

    }

    .dialog {
        
        position: absolute;
        bottom: 0;
        right: 0;

        transform: translateX(70%) translateY(50%);

        opacity: 0;

        padding: 0;
        margin: 0;
        max-width: 400px;

        pointer-events: all;

        @media screen and (max-width: $size-s) {
            max-width: 200px;
        }

    }

    .close {
        font-family: "comic";
        font-size: 24px;
        color: white;

        position: absolute;   
        top: -10px;
        right: -10px;

        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        border: solid 3px black;

        padding: 0;
        margin: 0;

        transition-duration: 0.4s;

        pointer-events: all;
        
        text-align: center;

        @media screen and (max-width: $size-s) {
            top: -5px;
            right: -5px;
            width: 25px;
            height: 25px;
            font-size: 12px;
            border: 1px solid black;
        }


    }

    
    .close:hover {
        background-color: darkred;
        cursor: pointer;
    }

    .trigger {
        position: absolute;
        top: 0;
        right: 0;

        width: 100px;
        height: 100px;

        background-color: magenta;

        visibility: hidden;

        z-index: 20;
    }

</style>