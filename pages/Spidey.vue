
<template>
    <div ref="main">
        <div class="spidey">
            <img src="/img/spider.png" alt="">

            <div class="dialog">
                <p class="text">RESERVANDO HOY TENES UN 15% DE DTO EN TU ALOJAMIENTO</p>
                <img class="triangle" src="/img/tail.svg" alt="">
            </div>
        </div>
        <div class="trigger"></div>
    </div>
</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();

    const main = ref();
    const ctx = ref();

    onMounted(() => {
        ctx.value = $gsap.context((self) => {
            
            const spidey = self.selector(".spidey")[0];
            const dialog = self.selector(".dialog")[0];
            const trigger = self.selector(".trigger")[0];

            var tl = $gsap.timeline();
            tl.to(spidey, {y: 600, duration: 1, ease: "bounce.out"});
            tl.to(dialog, {opacity: 1, duration: .5});

            $ScrollTrigger.create({
                animation: tl,
                trigger: trigger,
                start: "bottom top",
                toggleActions:"restart none reverse none",
                markers: false,
            });

        }, main.value);

    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>


<style scoped>
    .spidey {
        position: fixed;
        top: -920px;
        left: 15px;
        z-index: 3;
    }

    .text{
        font-family: "comic";
        padding: 20px;
        height: 34px;
        text-align: center;
    
        background-color: white;
        border: 3px solid black;
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        padding-right: 40px;
    }

    .triangle {
        position: absolute;
        top: -.5px;
        left: -106px;
    }

    .dialog {
        position: relative;
        top: -50px;
        left: 220px;
        opacity: 0;



    }

    .trigger {
        position: absolute;
        top: 0;
        right: 0;

        width: 100px;
        height: 100px;

        background-color: magenta;

        visibility: hidden;
    }

</style>