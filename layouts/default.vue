
<template>
    <Spidey />
    <div class="comic-container">
        <Comic />
    </div>
    
    <div class="page-container">
        <header></header>
        <slot />
        <footer></footer>
    </div>


</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {

    ctx.value = $gsap.context((self) => {        

        let comic = $gsap.utils.toArray(".comic-container")[0];
        
        function get_comic_h() {
            let comic_h = comic.offsetHeight;
            console.log("comic_h: "+comic_h);
            localStorage.setItem('scroll', comic_h);
            return comic_h;
        }

        function get_neg_comic_w() {
            let comic_w = comic.offsetWidth;
            console.log("comic_x: "+comic_w);
            return -comic_w;
        }
        
        let tween = $gsap.timeline();
        tween.to(comic, {
            x: get_neg_comic_w,
            duration: 0.1,
            ease: "none",
        });
        
        $ScrollTrigger.create({
            trigger:comic,
            start: "0% 0%",
            end: () => `+=${get_comic_h()}px`,
            pin: true,
            pinSpacing: false,
            animation: tween,
            scrub: 1,
            markers: false,
            snap: {
                snapTo: 1,
                duration: 0.5,
            },
            invalidateOnRefresh:true,
        });


    }, main.value);


    });

    onUnmounted(() => {
    ctx.value.revert(); 
    });

</script>

<style scoped>
    .comic-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 100vh;
    }

    .page-container {
        min-height: 100vh;
    }

    header {
        position: sticky;
        top: 0px;

        background-color: white;
        border: 2px solid black;
        height: 120px;
    }

    footer {
        background-color: white;
        border: 2px solid black;
        height: 345px;
    }

</style>