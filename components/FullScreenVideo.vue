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

<style scoped lang="scss">

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .fullscreen {
        width: 100%;
        height: 100vh;
        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;

        @media screen and (max-width: $size-s) {
            height: 50vh;
        }
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


</style>