<template>

    <div class="fullscreen-image">
        <img src="/img/fire.png" alt="">
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
</script>

<style scoped lang="scss">

.container-max {
    width: 100%;
    max-width: $size-l;
}

.fullscreen-image {
    position: relative;

    width: 100%;
    height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

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
    font-family: comic;
    font-size: 64px;
    color: white;
    text-align: center;
}

</style>