<template>

    <header>
        <div class="full">
            <img src="/img/logo.png" alt="">
            <div class="nav-container">
                <NuxtLink to="/">Jenkins</NuxtLink>
                <NuxtLink to="/">Habitaciones</NuxtLink>
                <NuxtLink to="/">Tattoo</NuxtLink>
                <NuxtLink to="/services">Servicios</NuxtLink>
                <NuxtLink to="/">Habitaciones</NuxtLink>
                <NuxtLink to="/">Contact</NuxtLink>
            </div>
            <img src="/img/reservar.svg" alt="">
        </div>

        <div class="mobile">
            <img src="/img/hamburger.svg" alt="">
            <img src="/img/reservar.svg" alt="">
        </div>
    </header>

</template>

<style scoped>

    header {
        position: sticky;
        top: 0px;

        background-color: white;
        /* border: 2px solid black; */
        border-top: 2px solid black;
        border-bottom: 2px solid black;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .nav-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;

        font-family: "comic";
    }

    .full {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 120px;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 1110px) {

        .full {
            display: none;
        }

        .mobile {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 61px;
        }
    }


</style>