<template>
    <div class="fullscreen">
        <NuxtImg class="loader" format="webp" src="/img/lemon_tree_logo.png" alt="video loader" />
        <video muted autoplay disablePictureInPicture playsinline ref="video_element">
            <source 
                :src="video"
                type="video/mp4">
        </video>
    </div>
</template>

<script setup>

const props = defineProps({
    video: {
        type: String,
    }
});

const video_element = ref(null);

onMounted(() => {
    if(video_element.value) {
        video_element.value.controls = false;
        video_element.value.play();
    }
});


</script>

<style scoped lang="scss">

    @keyframes spin { 
        from { 
            transform: translateX(-50%) translateY(-50%) rotate(0deg); 
        } to { 
            transform: translateX(-50%) translateY(-50%) rotate(360deg); 
        }
    }

    .fullscreen .loader {
        position: absolute;
        left: 50%;
        top: 50%;

        width: 80px;
        animation: spin 2s linear infinite;
    }

    .fullscreen video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .fullscreen video::-webkit-media-controls {
        display: none !important;
    }

    .fullscreen {

        
        width: 100%;
        height: calc(100vh - $default-header-height);
        background-color: transparent;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;

        @media screen and (max-width: $size-m) {
            height: calc(100vh - calc($default-header-height * 0.8));
        }

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