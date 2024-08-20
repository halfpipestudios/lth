<template>

    <CardBase>
        <img src="/img/separator_back_filter.png" alt="" srcset="">
        <h2>{{ texts["home-carta-especial"] }}</h2>
    </CardBase>

</template>

<script setup>
const texts = useState("texts");
</script>

<style scoped>
.card {
    background-image: url(/img/separator_background.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;

    height: initial;
    max-height: initial;
    aspect-ratio: initial;

    padding: 60px;
    box-sizing: border-box;
}

.card img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.card h2 {
    color: white;
    font-size: 64px;
    font-family: comic-smooth;
    text-align: center;
    padding: 0;
    margin: 0;
    -webkit-text-stroke: 1px black;
    z-index: 2;
}

@media screen and (max-width: 1110px) {

    .card {
        padding: 40px;
    }

    .card h2 {
        font-size: 40px;
    }
}
</style>