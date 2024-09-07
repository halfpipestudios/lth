<template>
    <div class="loader">
        <img :src="image" alt="loading image">
    </div>
</template>

<script setup>
const {data: image} = await useFetch("/api/images?name=logo-lemon", { server:true });
</script>

<style scoped lang="scss">

.loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 20;

    background-color: white;
}

.loader img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    animation: 1s scale linear;
    animation-iteration-count: infinite;
}

@keyframes scale {
    0% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(0.8);
    }
}


</style>