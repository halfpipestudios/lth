<template>
    <div>
        <div class="container">
            <div class="center"> 
                <div class="center-img">
                    <img :src=image alt="">
                </div>
                <div class="text">
                    <h2>{{ artist }}</h2>
                    <p>{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        image: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    });

</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center
    }

    .center {
        width: 80%;

        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .center-img {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    h2 {
        font-family: stamshons;
        font-size: 64px;
        color: white;
        padding: 0px;
        margin: 10px;
    }

    p {
        font-family: open-sans;
        font-size: 24px;
        color: white;
    }

    img {
        width: 212px;
        height: 212px;
        border-radius: 50%;
        border: 12px solid #0085A5;
        flex-shrink: 0;
    }

</style>