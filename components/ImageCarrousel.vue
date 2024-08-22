<template>
    <CardCarrousel class="image-carrousel">
        <img v-for="(image, i) in images" :key="i" :src="image.image" :alt="'image carruzel ' + i"
            class="carrousel-item">
    </CardCarrousel>
</template>

<script setup> 

const props = defineProps({
    database: {
        type: String,
        required: true,
    },
});

const { $database } = useNuxtApp();

const images = ref([]);
images.value = await $database.carrousels(props.database);

</script>

<style scoped>

.image-carrousel {
    --aspect-ratio: calc(1338 / 650);
    width: 65%;
    height: initial;
    aspect-ratio: var(--aspect-ratio);
}

.carrousel-item {
    object-fit: cover;
}

@media screen and (max-width: 1110px) {
    .image-carrousel {
        width: 100%;
        max-width: initial;
        max-height: 600px;
        border-radius: 0;
        height: initial;
        aspect-ratio: 1;
    }
}

</style>