<template>
    <div class="carousel">
        <img class="loading" src="/img/loading.gif" alt="carrousel loader" />
        <div v-for="(image, index) in images" :key="index" class="item"  ref="image_element_array" >
            <NuxtImg class="item-img" :src="image.image"/>
        </div>
        <img @click="image_index_next" class="arrow right" src="/img/arrow_right.svg" alt="arrow right" ref="arrow_right" />
        <img @click="image_index_prev" class="arrow left" src="/img/arrow_right.svg" alt="arrow left" ref="arrow_left" />
    </div>
</template>

<script setup>

    const props = defineProps({
        category: {
            type: String,
        },
    });

    let last_image_index = -1;
    let current_image_index = ref(0);
    const images = ref([]);
    let more_to_fetch = ref(true);

    const image_element_array = ref(null);
    const arrow_right = ref(null);
    const arrow_left = ref(null);

    let image_amout = 4;
    let image_fetched = 0;
    let can_scroll = true;
    
    async function fetch_images() {
        if(more_to_fetch.value) {
            const amount_to_fetch_next = image_fetched + image_amout + 1;
            const records = await $fetch(`/api/carrousels?category=${props.category}&start=1&end=${amount_to_fetch_next}`);
            
            image_fetched = image_fetched + image_amout;
            if(records.items.length > image_fetched) {
                records.items.pop();
            } else {
                more_to_fetch.value = false;
            }
            images.value = records.items;
        }
    }

    async function image_index_next() {

        if(!can_scroll) return;

        if(current_image_index.value >= (images.value.length - 1)) {
            
            last_image_index = current_image_index.value;
            
            if(more_to_fetch.value) {
                await fetch_images();
                current_image_index.value += 1;
            }
            
        } else {
            last_image_index = current_image_index.value;
            current_image_index.value += 1;
        }

    }

    function image_index_prev() {

        if(!can_scroll) return;

        if(current_image_index.value > 0) {
            last_image_index = current_image_index.value;
            current_image_index.value -= 1;
        }
    }

    function play_anim(anim, element) {
        if(element === undefined) return;
    
        element.classList.remove("from-right");
        element.classList.remove("from-left");
        element.classList.remove("to-right");
        element.classList.remove("to-left");

        element.classList.add(anim);

        can_scroll = false;

        element.addEventListener("animationend", () => {
            can_scroll = true;
        }, { once: true });

    }

    function update_image_element_array() {
        if(!image_element_array.value) return;
        
        {
            // console.log("last: " + last_image_index);
            // console.log("curr: " + current_image_index.value);
            if(last_image_index === -1) {
                image_element_array.value[current_image_index.value].style.visibility = "visible";
            } else if(last_image_index < current_image_index.value) {
                play_anim("to-left", image_element_array.value[last_image_index]);
                play_anim("from-right", image_element_array.value[current_image_index.value]);
            } else {
                play_anim("to-right", image_element_array.value[last_image_index]);
                play_anim("from-left", image_element_array.value[current_image_index.value]);
            }

        }

        {
            arrow_right.value.style.display = "block";
            arrow_left.value.style.display = "block";

            if(current_image_index.value >= (images.value.length - 1)) {
                if(!more_to_fetch.value) {
                    arrow_right.value.style.display = "none"; 
                }
            }

            if(current_image_index.value <= 0) {
                arrow_left.value.style.display = "none"; 
            }
        }
    }

    watch(current_image_index, () => {
        update_image_element_array();
    })

    onMounted(async () => {
        await fetch_images();
        update_image_element_array();
    });

</script>

<style scoped lang="scss">

    .carousel {
        width: 100%;
        aspect-ratio: calc(1512/650);
        max-width: $size-l;

        box-sizing: border-box;
        background-color: #aaaaaa;
    
        position: relative;

        margin-top: 20px;
        margin-bottom: 20px;

        overflow: hidden;

        @media screen and (max-width: $size-s) {
            aspect-ratio: 1;
        }
    }

    .carousel .item {
    
        position: absolute;
        left: 0;
        top: 0;

        display: block;
        visibility: hidden;
        
        width: 100%;
        height: 100%;

        z-index: 1;
    }

    .carousel .item .item-img {
        
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;
    }

    .arrow {
        position: absolute;
        opacity: 0.7;
        z-index: 2;
    }

    .loading {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translateX(-50%) translateY(-50%);
    }

    .left {
        top:50%;
        left: 0;
        transform: translateY(-50%) translateX(20px) scaleX(-1);

        @media screen and (max-width: $size-s) {
            transform: translateY(-50%) translateX(10px) scale(0.7) scaleX(-1);
        }
    }

    .right {
        top:50%;
        right: 0;
        transform: translateY(-50%) translateX(-20px);
        
        @media screen and (max-width: $size-s) {
            transform: translateY(-50%) translateX(-10px) scale(0.7);
        }
    
    }


/* slide animations */

.from-right {
    animation: anim-from-right;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.to-left {
    animation: anim-to-left;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.from-left {
    animation: anim-from-left;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}

.to-right {
    animation: anim-to-right;
    animation-fill-mode: forwards;
    animation-duration: 1s;
}


@keyframes anim-from-right {

    from {
        transform: translateX(100%);
        visibility: hidden;
    }

    to {
        transform: translateX(0);
        visibility: visible;
    }

}

@keyframes anim-to-left {

    from {
        transform: translateX(0);
        visibility: visible;
    }

    to {
        transform: translateX(-100%);
        visibility: hidden;
    }

}

@keyframes anim-from-left {

    from {
        transform: translateX(-100%);
        visibility: hidden;
    }

    to {
        transform: translateX(0);
        visibility: visible;
    }

}

@keyframes anim-to-right {

    from {
        transform: translateX(0);
        visibility: visible;
    }

    to {
        transform: translateX(100%);
        visibility: hidden;
    }

}

</style>