<template>
    <div class="carousel">
        <img v-for="(image, index) in images" :key="index" class="item" :src="image.image" ref="image_element_array" >
        <img @click="image_index_next" class="arrow right" src="/img/arrow_right.svg" alt="arrow right" ref="arrow_right">
        <img @click="image_index_prev" class="arrow left" src="/img/arrow_right.svg" alt="arrow left" ref="arrow_left">
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
    
    async function fetch_images() {
        if(more_to_fetch.value) {
            const amount_to_fetch_next = image_fetched + image_amout + 1;
            const records = await $fetch(`/api/carrousels?category=${props.category}&start=1&end=${amount_to_fetch_next}`);
            
            image_fetched = image_fetched + image_amout;
            if(records.items.length > image_fetched) {
                records.items.pop();
                console.log("there are more images to fetch!");  
            } else {
                more_to_fetch.value = false;
                console.log("no more images to fetch!");
            }
            images.value = records.items;
        }
    }

    async function image_index_next() {

        if(current_image_index.value >= (images.value.length - 1)) {
            if(more_to_fetch.value) {
                await fetch_images();
                last_image_index = current_image_index.value;
                current_image_index.value += 1;
            }
        } else {
            last_image_index = current_image_index.value;
            current_image_index.value += 1;
        }

    }

    function image_index_prev() {
        if(current_image_index.value > 0) {
            last_image_index = current_image_index.value;
            current_image_index.value -= 1;
        }
    }

    function update_image_element_array() {
        if(!image_element_array.value) return;

        image_element_array.value[current_image_index.value].style.display = "block";
        if(last_image_index >= 0) {
            image_element_array.value[last_image_index].style.display = "none";    
        }

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
        background-color: gray;
    
        position: relative;
    }

    .carousel .item {
    
        position: absolute;
        left: 0;
        top: 0;

        display: none;
        
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: center;

        z-index: 1;
    }

    .arrow {
        position: absolute;
        opacity: 0.7;
        z-index: 2;
    }

    .left {
        top:50%;
        left: 0;
        transform: translateY(-50%) translateX(20px) scaleX(-1);
    }

    .right {
        top:50%;
        right: 0;
        transform: translateY(-50%) translateX(-20px)
    }

</style>