<template>
    <div class="fullscreen">
        <video muted autoplay disablePictureInPicture >
            <source 
                src="https://onefamhostels.com/wp-content/uploads/2024/08/ONEFAM-V8-HD-horizontal-youtube1.mp4"
                type="video/mp4">
        </video>
    </div>
</template>

<script setup>
</script>

<style scoped>

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .fullscreen {
        width: 100%;
        height: calc(100vh - var(--navbar-height));
        background-color: transparent;
        background-image: url(/img/home_full.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;
    }

    .fullscreen .filter {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .fullscreen div {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .fullscreen div:nth-of-type(1) {
        grid-column: 1;
        grid-row: 2;
    }

    .fullscreen div:nth-of-type(2) {
        grid-column: 1;
        grid-row: 3;
    }

    .fullscreen .arrow-down {
        padding-top: 4%;
    }

    .fullscreen h1 {
        color: white;
        font-size: 96px;
        font-family: comic-smooth;
        text-align: center;
        padding: 20px;
        -webkit-text-stroke: 2px black;
    }


    @media screen and (max-width: 1110px) {
        .fullscreen {
            height: calc(100vh - var(--navbar-mobile-height));
        }

        .fullscreen h1 {
            font-size: 48px;
            -webkit-text-stroke: 1px black;
        }

    }

</style>