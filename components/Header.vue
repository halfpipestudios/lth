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
            
            <div class="nav">
                <img class="hamburger" src="/img/hamburger.svg" alt="">
                <div class="logo-container">
                    <div class="logo-name">LEMON TREE</div>
                    <div class="logo-subname">HOSTEL</div>
                </div>
            </div>


            <div class="menu">
                <NuxtLink class="close-menu" to="/">HABITACIONES</NuxtLink>
                <NuxtLink class="close-menu" to="/services">SERVICIOS</NuxtLink>
                <NuxtLink class="close-menu" to="/">TATTOO</NuxtLink>
                <NuxtLink class="close-menu" to="/">CONTACTO</NuxtLink>
                <img src="/img/reservar.svg" alt="">
            </div>

        </div>
    </header>

</template>

<script setup>
    
    onMounted(() => {

        var hamburger_is_open = false;

        const menu = document.querySelector(".menu");
        const hamburger = document.querySelector(".hamburger");
        
        hamburger.onclick = () => {

            hamburger_is_open = !hamburger_is_open;

            if(hamburger_is_open) {
                menu.style.display = "flex";
            } else {
                menu.style.display = "none";
                
            }

        }

        const menu_items = document.getElementsByClassName("close-menu");
        for(const item of menu_items) {
            item.onclick = () => {
                menu.style.display = "none";
                hamburger_is_open = false;
            };
        }

    });




</script>

<style scoped>

    header {
        position: sticky;
        top: 0px;

        background-color: white;
        background-image: url(/img/paper_back.jpg);
        background-size: cover;
        background-position: top;
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
            flex-direction: column;
        }

        .nav {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            height: 81px;
        }

        .menu {
            font-family: open-sans;
            font-weight: bold;

            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;
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