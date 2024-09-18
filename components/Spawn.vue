
<template>
    <div ref="main">

        <div class="spawn" ref="spawn_element">

            <NuxtImg format="webp" src="/img/spawn.png" alt="spiderman" />

            <NuxtLink target="_blank" href="https://lemontree.reservadirecto.com/promos/mejor-tarifa-garantizada.html" class="dialog">
                <p class="text">{{ texts["spawn-text"] }}</p>
                <button class="close" ref="button">X</button>
            </NuxtLink>


        </div>

        <div class="trigger"></div>

    </div>
</template>

<script setup>

    const texts = useState('texts');

    const { $gsap, $ScrollTrigger } = useNuxtApp();

    const main = ref();
    const ctx = ref();
    const spawn_element = ref(null);
    const button = ref(null);

    function close(){
        if(!spawn_element.value) return;
        spawn_element.value.style.display = "none";
    }

    onMounted(() => {
        ctx.value = $gsap.context((self) => {
            
            const spawn = self.selector(".spawn")[0];
            const dialog = self.selector(".dialog")[0];
            const trigger = self.selector(".trigger")[0];

            $gsap.set(spawn, {transformOrigin: "50% 0%"});

            var swing = $gsap.timeline({repeat: -1});
            swing.to(spawn, { duration: 0.5, rotate:"1deg", ease:"sin.out"});
            swing.to(spawn, { duration: 0.5, rotate:"0deg", ease:"none"});
            swing.to(spawn, { duration: 0.5, rotate:"-1deg", ease:"sin.out"});
            swing.to(spawn, { duration: 0.5, rotate:"0deg", ease:"none"});
            swing.pause();
            
            var tl = $gsap.timeline();
            tl.to(spawn, {y: "70vh", duration: 1, ease: "power2.out"});
            tl.to(dialog, { opacity: 1, duration: .5});

            $ScrollTrigger.create({
                animation: tl,
                trigger: trigger,
                start: "bottom top",
                end: "+=" + 700,
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

        button.value.addEventListener("click", (event) => { 
            event.preventDefault();
            close();
        });

    });

    onUnmounted(() => {
        ctx.value.revert(); 
    });

</script>


<style scoped lang="scss">
    
    .spawn a {
        text-decoration: none;
        color: black;
    }

    .spawn {
        
        --spider-aspect: 4.357;
        --spider-w: 300px;
        --spider-h: calc(var(--spider-w) * var(--spider-aspect));

        width: var(--spider-w);
        aspect-ratio: 0.229;
        
        
        position: fixed;
        top: calc(var(--spider-h) * -0.89);
        left: 0;

        z-index: 3;

        pointer-events: none;
        user-select: none;

        background-color: transparent;

        @media screen and (max-width: $size-m) {
            top: calc(var(--spider-h) * -0.91);
        }

        @media screen and (max-width: $size-s) {
            --spider-w: 150px;
            width: var(--spider-w);
            top: calc(var(--spider-h) * -0.87);
        }

    }

    .spawn img {
        width: 100%;
    }

    .text{
        font-family: "comic";
        font-size: 24px;

        margin: 0;
        padding: 30px;
        text-align: center;
        
        color: white;

        background-color: black;
        border: 3px solid white;
        border-radius: 50px;

        @media screen and (max-width: $size-s) {
            padding: 15px;
            font-size: 12px;
            border-radius: 25px;
            border: 1px solid white;
        }

    }

    .dialog {
        
        position: absolute;
        top: 68%;
        right: 0;

        transform: translateX(100%);

        opacity: 0;

        padding: 0;
        margin: 0;
        max-width: 400px;

        pointer-events: all;

        @media screen and (max-width: $size-s) {
            max-width: 200px;
        }

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
        border: solid 3px white;

        padding: 0;
        margin: 0;

        transition-duration: 0.4s;

        pointer-events: all;
        
        text-align: center;

        @media screen and (max-width: $size-s) {
            top: -5px;
            right: -5px;
            width: 25px;
            height: 25px;
            font-size: 12px;
            border: 1px solid black;
        }


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

        z-index: 20;
    }

</style>