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

    display: flex;
    flex-direction: column;
    gap: 0;
}

.card-title {
    font-size: 24px;
    font-family: comic;
    font-weight: bold;
    text-align: center;

    margin: 0;
    padding: 0;
}

.card-text {
    font-size: 20px;
    font-family: open-sans;
    font-weight: normal;
    text-align: left;

    margin: 0;
    padding: 0;
}

img {
    width: 100%;
    height: 347px;
    object-fit: cover;
}

.card div {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

}
</style>