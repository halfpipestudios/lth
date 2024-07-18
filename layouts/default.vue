
<template>
    <div ref="main">
        <div class="comic-panel">
            <Comic/>
        </div>
        <div class="page">
            <div class="nav">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
            </div>
            <Spidey />
            <slot />
        </div>
    </div>
</template>

<script setup>

    const { $gsap } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {



        ctx.value = $gsap.context((self) => {
            
            let comic = $gsap.utils.toArray(".comic-panel")[0];
            //console.log(comic.offsetHeight);
            localStorage.setItem('scroll', comic.offsetHeight);

            $gsap.to(comic, {
                scrollTrigger: {
                    
                    trigger: comic,
                    pin: true,
                    pinSpacing: false,
                    scrub: true,
                    markers: false,
                    
                    onEnter: () => {
                        comic.style.pointerEvents = "none";
                    },
                    onLeave: () => {
                        comic.style.pointerEvents = "auto";
                    },
                    onEnterBack: () => {
                        comic.style.pointerEvents = "none";
                    },
                    onLeaveBack: () => {
                        comic.style.pointerEvents = "auto";
                    },

                },
                opacity: 0,
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

    .page {
        min-height: 100vh;
    }

</style>