
<template>
    <div ref="main">
        <Spidey />
        <div class="wrapper">
            <div class="comic-panel">
                <Comic/>
            </div>
            <div class="page-panel">
                <div class="nav">
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/about">About</NuxtLink>
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {

        ctx.value = $gsap.context((self) => {        

            let wrapper = $gsap.utils.toArray(".wrapper")[0];
            let wrapper_width = wrapper.offsetWidth;
            let amout_to_scroll = wrapper_width - window.innerWidth;
            
            let tween = $gsap.timeline();
            tween.to(wrapper, {
                x: -amout_to_scroll,
                duration: 3,
                ease: "none",
            });
            tween.to(wrapper, {
                duration: 1,
                ease: "none",
            });
            
            $ScrollTrigger.create({
                trigger:wrapper,
                start: "0% 0%",
                end: "+=" + amout_to_scroll,
                pin: true,
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

    .wrapper {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: row;
        flex-wrap:no-wrap;
        overflow:auto;
        width: 200vw;
    }

    .comic-panel {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 100vh;

        background-color: white;
    }

    .page-panel {
        width: 100%;
        min-height: 200vh;
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


    }

    .nav a {
        font-family: "comic";
        font-weight: bold;
        color: white;
        text-decoration: none;
    }

</style>