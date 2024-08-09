<template>

    <CardBase>
        <img src="/img/separator_back_filter.png" alt="" srcset="">
        <h2>Lorem ipsum dolor sit sitted amet, consectetur adipiscing elit test</h2>
    </CardBase>

</template>

<style scoped>
    .card {
        background-image: url(/img/separator_background.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
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
        padding: 20px;
        -webkit-text-stroke: 1px black;
        z-index: 2;
    }

    @media screen and (max-width: 1110px) {
        .card h2 {
            font-size: 40px;
        }
    }

</style>