<template>
    <section class="fullscreen">
        <img class="filter" src="/img/home_full_filter.png" alt="background filter">
        <div>
            <h1>DISFRUTÁ MENDOZA CON NOSOTROS</h1>
        </div>
        <div>
            <img class="arrow-down" src="/img/arrow_down.svg" alt="arrow pointing down">
        </div>
    </section>
    <section class="cards">
        
        <div class="card">
            <div class="card-image">
                <img src="/img/pool_card.png" alt="pool card">
            </div>
            <div class="card-text-container">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem molestias placeat eius sed ipsum! Laudantium temporibus sint officia quod esse nam, cupiditate voluptatibus labore, accusantium earum nihil?</p>
            </div>
        </div>

        <div class="card">
            <div class="card-image">
                <img src="/img/pirate_card.png" alt="pool card">
            </div>
            <div class="card-text-container">
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem molestias placeat eius sed ipsum! Laudantium temporibus sint officia quod esse nam, cupiditate voluptatibus labore, accusantium earum nihil?</p>
            </div>
        </div>

    </section>
    <section class="padded-image">

    </section>
    <section class="contacto">

    </section>
</template>

<script setup>
</script>

<style scoped>

    .cards {
        width: 100%;
        background-color: #ededed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 87px;
        padding-top: 87px;
        padding-bottom: 87px;
    }

    .card {
        background-color: #ffffff;
        height: 600px;
        width: 1338px;

        border-radius: 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }

    .card:nth-child(even) {
        flex-direction: row-reverse;
    }

    .card-image {
        width: 50%;
        height: 100%;
    }

    .card-image img {
        object-fit: fill;
    }

    .card-text-container {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .card-text-container h2 {
        font-size: 36px;
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
        padding: 20px;
        margin-left: 20px;

    }

    .card-text-container p {
        font-size: 24px;
        font-family: open-sans;
        font-weight: normal;
        text-align: left;

        margin: 0;
        padding: 20px;
        margin-left: 20px;

    }

    .fullscreen {
        --navbar-height: 116px;

        width: 100%;
        height: calc(100vh - var(--navbar-height));
        background-color: red;
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
        padding-top: 100px;
    }

    .fullscreen h1 {
        color: white;
        font-size: 96px;
        font-family: comic-smooth;
        text-align: center;
    }


</style>