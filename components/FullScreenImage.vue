<template>

    <div class="fullscreen-image">
        <NuxtImg format="webp" :src="image" alt="fullscreen image" />
        <div class="fullscreen-image-filter" ></div>
        <div class="container-max">
            <h2>
                {{ texts["home-separador"] }}
            </h2>
        </div>
    </div>

</template>

<script setup>
    const texts = useState('texts');
    const { data: image } = await useAsyncData('full-screen-image', () => $fetch("/api/images?name=home-separator-image"));
</script>


<style scoped lang="scss">

.container-max {
    width: 100%;
    max-width: $size-l;
}

.fullscreen-image {
    position: relative;

    width: 100%;
    height: initial;
    min-height: 400px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    @media screen and (max-width: $size-s) {
        min-height: 219px;

    }

}

.fullscreen-image img {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    z-index: 1;
}

.fullscreen-image .fullscreen-image-filter {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);

    z-index: 1;
}

.fullscreen-image .container-max {
    background-color: transparent;
    z-index: 2;
}

.fullscreen-image h2 {

    margin: 40px;

    color: white;
    text-align: center;
    font-family: comic-smooth;
    
    font-size: $fs-l;
    
    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
    }

    @media screen and (max-width: $size-s) {
        margin: 20px;
        font-size: $fs-s;
    }
    
}

</style>