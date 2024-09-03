
<template>
    <div ref="main">
        <div class="spidey" ref="spidy_element">
            <img src="/img/spider.png" alt="">

            <div class="dialog">
                <p class="text">RESERVANDO HOY TENES UN 15% DE DTO EN TU ALOJAMIENTO</p>
                <button class="close" @click="close">X</button>
            </div>
        </div>
        <div class="trigger"></div>
    </div>
</template>

<script setup>

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
            tl.to(spidey, {y: "65vh", duration: 1, ease: "power2.out"});
            tl.to(dialog, { opacity: 1, duration: .5});

            $ScrollTrigger.create({
                animation: tl,
                trigger: trigger,
                start: "bottom top",
                end: "+=" + 200,
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


<style scoped>
    .spidey {
        position: fixed;
        top: -940px;
        left: 15px;
        z-index: 3;

        user-select: none;
    }

    .spidey img {
        width: 600px;
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
    }

    .triangle {
        position: absolute;
        top: -.5px;
        left: -106px;
    }

    .dialog {
        position: relative;
        max-width: 400px;
        top: -75px;
        right: -350px;
        opacity: 0;

        padding: 0;
        margin: 0;
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

        padding: 0;
        margin: 0;

        transition-duration: 0.4s;

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
    }

</style>