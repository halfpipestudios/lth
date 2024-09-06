<template>

    <div class="fullscreen-image">
        <img src="/img/fire.jpg" alt="">
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

    useHead({
        link: [
            {
                rel: "preload",
                fetchpriority:"high",
                as: "image",
                href: "/img/fire.jpg",
            }
        ]
    });

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
    min-height: 600px;

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
    font-family: comic;
    
    --fullscreen-image-font-size: 48px;
    font-size: var(--fullscreen-image-font-size);
    
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--fullscreen-image-font-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        margin: 20px;
        font-size: 20px;
    }
    
}

</style>