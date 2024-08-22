<template>
    <div>

        <div class="container">
            <div class="img-container">
                <img :src=image alt="seminar image">
            </div>
            <div class="text-container">
                <h2>{{ artist }}</h2>
                <p>{{ text }}</p>
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

        display: grid;
        grid-template-columns: 2fr 4fr;
        grid-template-rows: 100%;
        gap:50px;

        overflow-y: hidden;

    }


    .img-container {
        grid-column: 1;
        grid-row: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: 100px;

    }

    .text-container {
        grid-column: 2;
        grid-row: 1;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        margin-right: 100px;

    }

    .img-container img {
        width: 212px;
        height: 212px;
        border-radius: 50%;
        border: 12px solid #0085A5;
    }

    .text-container h2 {
        font-family: stamshons;
        font-size: 64px;
        color: white;
        padding: 0px;
        margin: 10px;
    }

    .text-container p {
        font-family: open-sans;
        font-size: 24px;
        color: white;
    }


    @media screen and (max-width: 1110px) {
        .container {
            grid-template-columns: 100%;
            grid-template-rows: 1fr 3fr;
            gap: 0;
        }
        
        .img-container {
            margin-left: 0;
            grid-column: 1;
            grid-row: 1;

            padding-top: 50px;
        }

        .img-container img {
            width: 120px;
            height: 120px;
            border: 5px solid #0085A5;
        }

        .text-container {
            margin-right: 0;
            grid-column: 1;
            grid-row: 2;

            justify-content: flex-start;
            padding: 50px;
        }

        .text-container h2 {
            font-size: 40px;

        }

        .text-container p {
            font-size: 15px;
        }
    }



</style>