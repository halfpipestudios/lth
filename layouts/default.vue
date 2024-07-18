
<template>
    <div ref="main">
        <Spidey />

        <div class="comic-panel">
            <Comic/>
        </div>

        <div class="nav">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
        <slot />
    </div>
</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {

        ctx.value = $gsap.context((self) => {        

            let comic = $gsap.utils.toArray(".comic-panel")[0];
            let comic_w = comic.offsetWidth;
            let comic_h = comic.offsetHeight;
            let amout_to_scroll = comic_w;
            
            localStorage.setItem('scroll', comic_h);
            
            let tween = $gsap.timeline();
            tween.to(comic, {
                x: -amout_to_scroll,
                duration: 3,
                ease: "none",
            });
            
            $ScrollTrigger.create({
                trigger:comic,
                start: "0% 0%",
                end: "+=" + comic_h,
                pin: true,
                pinSpacing: false,
                animation: tween,
                scrub: 1,
                markers: true,
            });


        }, main.value);


    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>

<style scoped>

    .comic-panel {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 100vh;

        background-color: white;
        
        z-index: 1;
    }

    .nav {
        position: sticky;
        top: 0px;
        
        width: 100%;
        height: 40px;
        background-color: red;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        
        z-index: 0;
    }

    .nav a {
        font-family: "comic";
        font-weight: bold;
        color: white;
        text-decoration: none;
    }

</style>