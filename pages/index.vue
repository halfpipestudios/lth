<template>
    <div ref="main">
        <Spidey />
        <div class="comic-panel">
            <Comic/>
        </div>
        <div class="page-panel">
            <h1>Lemon Tree Hostel</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet veritatis sed, et neque magni repudiandae inventore mollitia hic tempora, autem fugit dolorem doloremque, nihil aut. Eius ratione, illum rem sapiente tempore dolorum fugit exercitationem, accusamus perferendis neque explicabo ipsam totam soluta repellat perspiciatis veniam natus voluptatem in quia? Repudiandae odio, obcaecati odit eaque molestiae expedita amet quidem iusto, quaerat accusantium dolorum tenetur quia rerum neque fugiat molestias, natus aliquam porro dignissimos nobis dicta architecto ab labore. Tenetur reprehenderit et voluptate vel quia esse culpa? Temporibus velit voluptates hic vero provident cupiditate, possimus aliquam earum, delectus repudiandae voluptatibus doloribus laborum numquam!</p>
        </div>
    </div>
</template>

<script setup>

    const { $pb, $gsap, $ScrollTrigger } = useNuxtApp();
    const main = ref();
    const ctx = ref();

    onMounted(() => {

        ctx.value = $gsap.context((self) => {
            const panel = self.selector(".comic-panel")[0];
            
            $gsap.to(panel, {
                scrollTrigger: {
                    trigger: ".comic-panel",
                    start: "top top",
                    scrub: true,
                    pin: true,
                    pinSpacing: false,
                    markers: true,
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
        
        height: 100vh;
        width: 100%;

    }

    .page-panel {
        width: 100%;
        min-height: 100vh;
    }

</style>