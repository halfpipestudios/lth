
<template>
    <div ref="main">
        <img class="spidey" src="/img/spider.png" alt="">
    </div>
</template>

<script setup>

    const { $gsap, $ScrollTrigger } = useNuxtApp();

    const main = ref();
    const ctx = ref();

    onMounted(() => {
        ctx.value = $gsap.context((self) => {
            const spidey = self.selector(".spidey")[0];
            $gsap.to(spidey, {
                y: 900,
                scrollTrigger: {
                    trigger: spidey,
                    start: "top top",
                    end: "+=1100",
                    scrub: 1,
                }
            })
        }, main.value);
    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>


<style scoped>
    .spidey {
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 3;
    }
</style>