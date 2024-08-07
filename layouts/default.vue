
<template>
    <!-- <Spidey />
    <div class="comic-container">
        <Comic />
    </div> -->

    <Header />
        <div class="page">
            <slot />
        </div>
        <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp">
    <Footer />

</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {

        // ctx.value = $gsap.context((self) => {        

        //     let comic = $gsap.utils.toArray(".comic-container")[0];
            
        //     function get_comic_h() {
        //         let comic_h = comic.offsetHeight;
        //         return comic_h;
        //     }

        //     function get_neg_comic_w() {
        //         let comic_w = comic.offsetWidth;
        //         console.log("comic_x: "+comic_w);
        //         return -comic_w;
        //     }
            
        //     let tween = $gsap.timeline();
        //     tween.to(comic, {
        //         x: get_neg_comic_w,
        //         duration: 0.1,
        //         ease: "none",
        //     });
            
        //     $ScrollTrigger.create({
        //         trigger:comic,
        //         start: "0% 0%",
        //         end: () => `+=${get_comic_h()}px`,
        //         pin: true,
        //         pinSpacing: false,
        //         animation: tween,
        //         scrub: 1,
        //         markers: false,
        //         snap: {
        //             snapTo: 1,
        //             duration: 0.5,
        //         },
        //         invalidateOnRefresh:true,
        //     });


        // }, main.value);


    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>

<style scoped>

    Header {
        z-index: 10;
    }

    Footer {
        z-index: 10;
    }

    .page {
        z-index: 0;
    }

    .comic-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        height: 100vh;
        z-index: 1;
    }

    .whatsapp {
        position: fixed;
        bottom: 120px;
        right: 80px
    }


</style>