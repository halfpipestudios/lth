<template>
    
    <section>
        <FullScreen />
    </section>

    <section class="cards">

        <div class="slider">
            <Card class="dummy-card" image="/img/fire.png" title="dummy" text="dummy" style="visibility: hidden;"/>

            <div class="scroller">
                <Card v-for="(card, i) in cards" :key="i"
                        :image="card.image"
                        :title="card.title"
                        :text="card.text"
                        class="scroller-item"/>
            </div>
            
            <img class="arrow-right" src="/img/arrow_right.svg" alt="arrow right">
            <img class="arrow-left" src="/img/arrow_right.svg" alt="arrow left">

        </div>



        <Separator />
        <Maps />

    </section>

</template>

<script setup>
    
    const { $pb } = useNuxtApp();
    const language = useState("language");
    let interval = ref( {start: 1, end: 6} );
    let cards = ref([]);


    onMounted(async () => {

        const dummy_card = document.querySelector(".dummy-card");
        const scroller = document.querySelector(".scroller");
        const right = document.querySelector(".arrow-right");
        const left = document.querySelector(".arrow-left");

        const offset = dummy_card.offsetWidth;
        
        scroller.scrollLeft = 0;
        right.style.visibility = "visible"
        left.style.visibility = "hidden"


        left.addEventListener("click", (e) => {
            scroller.scrollLeft -= offset;
        });

        right.addEventListener("click", (e) => {
            scroller.scrollLeft += offset;
        });

        scroller.addEventListener("scroll", (e) => {

            const max_scroll = scroller.scrollWidth - scroller.clientWidth;
            console.log("max to scroll: " + max_scroll);
            
            const try_remove_mask = (mask, test_mask) => {
                if(test_mask !== mask && scroller.classList.contains(mask)) {
                    scroller.classList.remove(mask);
                }
            }

            const add_mask = (mask) => {
                try_remove_mask("mask-right", mask);
                try_remove_mask("mask-left", mask);
                try_remove_mask("mask-both", mask);
                if(!scroller.classList.contains(mask)) {
                    scroller.classList.add(mask);
                }
            }

            if(scroller.scrollLeft <= 0) {
                left.style.visibility = "hidden"
            } else if(scroller.scrollLeft >= max_scroll) {
                right.style.visibility = "hidden"
            } else {
                if(right.style.visibility !== "visible") {
                    right.style.visibility = "visible"
                }
                if(left.style.visibility !== "visible") {
                    left.style.visibility = "visible"
                }
            }
        
        });


        {
            // TODO: Make a really good database plugin
            async function update_cards() {
                const record = await $pb.collection('Cards').getList(interval.value.start, interval.value.end);
                const items = record.items;
                
                const push_item = (index) => {
                    return {
                        "title": items[index]["Nombre_"+language.value],
                        "text": items[index]["Texto_"+language.value],
                        "image": $pb.getFileUrl(items[index], items[index]["Imagen"]),
                    };
                };
                
                let result = [];
                for(let i = 0; i < items.length; ++i) {
                    result.push(push_item(i));
                }

                cards.value = result;
            }
            
            await update_cards();
            watch(interval, update_cards);
            watch(language, update_cards);
        }
    });


</script>

<style scoped>

    .arrow-right {
        position: absolute;
        right: -150px;
        top: 50%;
        transform: translateY(-50%);
    }

    .arrow-left {
        position: absolute;
        left: -150px;
        top: 50%;
        transform: scaleX(-1) translateY(-50%);
    }

    .slider {
        width: 65%;
        position: relative;
    }

    .scroller {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;

        /* background-color: rgba(255,0,0,0.3); */
        
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        scrollbar-width: none;
    }

    .scroller-item {
        flex-shrink: 0;
        scroll-snap-align: center;
    }

    .mask-right {
        mask-image: linear-gradient(to left, transparent 0%, rgba(0,0,0,1) 5%);
    }

    .mask-left {
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%);
    }

    .mask-both {
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%);
    }

    .cards {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 57px;
        padding-top: 57px;
        overflow: hidden;
    }

    @media screen and (max-width: 1110px) {
        .slider {
            width: 80%;
        }
    }

</style>