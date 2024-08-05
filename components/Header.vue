<template>

    <header>
        <div class="full">
            <div class="nav-container">
                <NuxtLink to="/">HABITACIONES</NuxtLink>
                <NuxtLink to="/services">SERVICIOS</NuxtLink>
                <NuxtLink to="/">TATTOO</NuxtLink>
            </div>
            <div class="logo-container">
                <div class="logo-name">LEMON TREE</div>
                <div class="logo-subname">HOSTEL</div>
            </div>
            <div class="nav-container">
                <NuxtLink to="/">CONTACTO</NuxtLink>
                <img src="/img/reservar.svg" alt="">
            </div>
        </div>

        <div class="mobile">
            <img src="/img/hamburger.svg" alt="">
            <div class="logo-container">
                <div class="logo-name">LEMON TREE</div>
                <div class="logo-subname">HOSTEL</div>
            </div>
        </div>
    </header>

</template>

<style scoped>

    header {
        position: sticky;
        top: 0px;

        background-color: white;
        background-image: url(/img/paper_back.jpg);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
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
        gap: 50px;

        font-family: open-sans;
        font-weight: bold;
        font-style: normal;
        font-size: 20px;
    }

    .logo-container {
        font-family: comic-smooth;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
    }

    .logo-name {
        font-size: 48px;
        justify-self: flex-end;
        padding-top: 8px;
        margin-bottom: -8px;
    }

    .logo-subname {
        font-size: 24px;
        letter-spacing:30px;
        text-align: center;
        padding-left: 30px;
    }

    .full {
        display: flex;
        align-items: center;
        justify-content: space-around;
        height: 116px;
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
            height: 81px;
        }

        .logo-name {
            font-size: 34px;
            justify-self: flex-end;
            padding-top: 8px;
            margin-bottom: -8px;
        }

        .logo-subname {
            font-size: 18px;
            letter-spacing:21px;
            text-align: center;
            padding-left: 21px;
        }
    }


</style>