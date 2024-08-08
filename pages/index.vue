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
        <Card />
        <Card />
        <Card />
    </section>
    <section class="padded-image">

    </section>
    <section class="contacto">
        <Contacto />
    </section>
</template>

<script setup>
</script>

<style scoped>

    .contacto {
        width: 100%;
        background-color: #ededed;

        display: flex;
        justify-content: center;
        align-items: center;

        padding-top: 87px;
        padding-bottom: 87px;
    }

    .cards {
        width: 100%;
        background-color: #ededed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 87px;
        padding-top: 87px;
    }
    
    @media screen and (max-width: 1110px) {
        .cards {
            width: 100%;
            background-color: #ededed;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 17px;
            padding-top: 17px;
        }
    }



    .fullscreen {
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