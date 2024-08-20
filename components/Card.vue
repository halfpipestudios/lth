<template>
    <div class="card">
        <img :src=image alt="card image">
        <div>
            <h2 class="card-title">{{ title }}</h2>
            <p class="card-text">{{ text }}</p>
        </div>
    </div>
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
.card {
    width: 361px;
    height: 720px;
    border-radius: 15px;
    background-color: #ffffff;
    overflow: hidden;

    display: grid;
    gap: 0;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;

}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    grid-column: 1;
    grid-row: 1;
}

.card div {
    
    background-color: transparent;
    box-sizing: border-box;
    margin: 40px;

    grid-column: 1;
    grid-row: 2;

    display: grid;
    gap: 0;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 2fr;
}


.card-title {
    font-size: 24px;
    font-family: comic;
    font-weight: bold;
    text-align: center;
    
    margin: 0;
    padding: 0;

    grid-column: 1;
    grid-row: 1;
}

.card-text {
    font-size: 20px;
    font-family: open-sans;
    font-weight: normal;
    text-align: left;

    margin: 0;
    padding: 0;

    grid-column: 1;
    grid-row: 2;
}

@media screen and (max-width: 1110px) {

    .card {
        width: 271px;
        height: 569px;
    }

    .card-title {
        font-size: 20px;
    }

    .card-text {
        font-size: 15px;
    }

    .card div {
        margin: 20px;
    }

}
</style>