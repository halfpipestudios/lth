
<template>
    <div ref="main">
        <div class="comic-panel">
            <Comic/>
        </div>

        <Spidey />
        
        <div class="page">
            <div class="nav">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </div>
            <slot />
        </div>
    </div>
</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    // function on_resize(e) {
    //     localStorage.setItem('scroll', window.innerHeight);
    // }

    onMounted(() => {

        //localStorage.setItem('scroll', window.innerHeight);
        //window.addEventListener("resize", on_resize, true);

        ctx.value = $gsap.context((self) => {        

            let comic = $gsap.utils.toArray(".comic-panel")[0];
            
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

    .page {
        margin: 0;
        padding: 0;
        min-height: 100vh;
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