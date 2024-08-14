<template>
    
    <section>
        <FullScreen />
    </section>

    <section class="cards">

        <div class="card-slider-container">
            <div class="card-slider">
                <Card v-for="(card, i) in cards" :key="i"
                    :image="card.image"
                    :title="card.title"
                    :text="card.text"
                    class="card-slider-item"/>
            </div>
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

        {
            const slider = document.querySelector(".card-slider-container");
            let is_down = false;
            let mouse_down_pos = 0;

            // slider.classList.add("card-slider-right-gradient");

            // slider.addEventListener("scroll", () => {

            //     slider.classList.remove("card-slider-full-gradient")
            //     slider.classList.remove("card-slider-left-gradient")
            //     slider.classList.remove("card-slider-right-gradient")

            //     const max_scroll_left = (slider.scrollWidth - slider.clientWidth);
            //     const padding = 300;

            //     if(slider.scrollLeft <= padding) {
            //         slider.classList.add("card-slider-right-gradient")
            //     } else if(slider.scrollLeft >= (max_scroll_left-padding)) {
            //         slider.classList.add("card-slider-left-gradient")
            //     } else {
            //         slider.classList.add("card-slider-full-gradient")
            //     }
            // })

            slider.addEventListener("mousedown", (e) => {
                is_down = true;
                mouse_down_pos = e.clientX;// - slider.offsetLeft;
            });

            slider.addEventListener("mouseup", (e) => {
                is_down = false;
            })

            slider.addEventListener("mousemove", (e) => {

                // console.log("mouse down: " + mouse_down_pos);
                // console.log("mouse pos: " + e.clientX);

                if(!is_down) return;
                e.preventDefault();
                const max_scroll_left = (slider.scrollWidth - slider.clientWidth);
                const scroll_amout = (e.clientX - mouse_down_pos) * 0.1;
                let next_scroll = slider.scrollLeft - scroll_amout;
                next_scroll = Math.min(Math.max(next_scroll, 0), max_scroll_left);
                slider.scrollLeft = next_scroll; 
            });

        }

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

    .card-slider-container {
        width: 75%;
        
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, transparent 100%);
    
        display: flex;
        align-items: center;
        justify-content: flex-start;
        overflow-x: hidden;
    }

    .card-slider {
        display: flex;
        flex-direction: row;
        gap: 40px;

        overflow-x: visible;
        /* scroll-snap-type: x mandatory; */
        scroll-behavior: smooth;
        scrollbar-width: none;
        -ms-overflow-style: none;

        cursor: grab;
        
        flex-shrink: 0;

        padding-left: 7%;
        padding-right: 7%;
    

    }

    .card-slider:active {
        cursor: grabbing;
    }

    .card-slider::-webkit-scrollbar {
        display: none;
    }

    .card-slider-full-gradient {
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, transparent 100%);
    }
    
    .card-slider-left-gradient {
        mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 20%);
    }

    .card-slider-right-gradient {
        mask-image: linear-gradient(to left, transparent 0%, rgba(0,0,0,1) 20%);
    }

    .card-slider-item {
        flex-shrink: 0;
        scroll-snap-align: center;
        user-select: none;
        pointer-events: none;
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
/*     
    @media screen and (max-width: 1110px) {
        .cards {
            width: 100%;
            background-color: #ededed;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 17px;
            padding-top: 17px;
        }
    } */

</style>