<template>
    <CardBase>
        <img :src=image alt="card image">
        <div>
            <h2 class="card-title">{{ title }}</h2>
            <p class="card-text">{{ text }}</p>
        </div>
    </CardBase>
</template>

<script setup>

    const props = defineProps({
        image: {
            type: String,
            required: true,
        },
        title: {
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
    
    .card-title {
        font-size: clamp(24px, 1.5vw, 36px);
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
        padding: 20px 20px 10px 20px
    }

    .card-text {
        font-size: clamp(16px, 1vw, 24px);
        font-family: open-sans;
        font-weight: normal;
        text-align: left;

        margin: 0;
        padding: 10px 20px 20px 20px;
    }

    img {
        width: 50%;
        height: 100%;
        object-fit: cover;
    }

    .card div {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card:nth-child(even) {
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 1110px) {
        
        .card-title {
            font-size: 20px;
            font-family: comic;
            font-weight: bold;
            text-align: center;

            margin: 0;
        }

        .card-text {
            font-size: 15px;
            font-family: open-sans;
            font-weight: normal;
            text-align: left;

            margin: 0;
        }

        img {
            aspect-ratio: 1;
            width: 100%;
            height: auto;
        }

        .card div {
            width: 100%;
            height: auto;
        }
        
        .card:nth-child(even) {
            flex-direction: column;
        }

    }


</style>