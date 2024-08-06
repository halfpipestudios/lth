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
                <div class="language">
                    <select>
                        <option value="es">ESP</option>
                        <option value="en">ENG</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="mobile">
            
            <div class="nav">
                <div class="hamburger">
                    <img class="open-icon" src="/img/hamburger.svg" alt="hamburger">
                    <img class="close-icon" src="/img/x.svg" alt="x" style="display: none;">
                </div>

                <div class="logo-container">
                    <div class="logo-name">LEMON TREE</div>
                    <div class="logo-subname">HOSTEL</div>
                </div>

                <div class="language">
                    <select>
                        <option value="es">ESP</option>
                        <option value="en">ENG</option>
                    </select>
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

        var hamburger_is_close = true;

        const mobile = document.querySelector(".mobile");

        const menu = mobile.querySelector(".menu");
        const hamburger = mobile.querySelector(".hamburger");
        const open_icon =  mobile.querySelector(".open-icon");
        const close_icon =  mobile.querySelector(".close-icon");
        const language = mobile.querySelector(".language");
        const logo = mobile.querySelector(".logo-container");

        function open_hamburger_menu() {
            menu.style.display = "flex";
            open_icon.style.display = "none";
            close_icon.style.display = "block";
            language.style.visibility = "visible";
            logo.style.visibility = "hidden";
            hamburger_is_close = false;
        }

        function close_hamburger_menu() {
            menu.style.display = "none";
            open_icon.style.display = "block";
            close_icon.style.display = "none";
            language.style.visibility  = "hidden";
            logo.style.visibility = "visible";
            hamburger_is_close = true;
        }

        hamburger.onclick = () => {
            if(hamburger_is_close) {
                open_hamburger_menu();
            } else {
                close_hamburger_menu();
            }
        }

        const menu_items = document.getElementsByClassName("close-menu");
        for(const item of menu_items) {
            item.onclick = close_hamburger_menu;
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
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: 1fr;
        
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

        .hamburger {
            grid-column: 1;
            grid-row: 1;
            
            display: flex;
            align-items: center;
            justify-content: center;

        }

        .logo-container {
            grid-column: 2;
            grid-row: 1
        }

        .language {
            grid-column: 3;
            grid-row: 1;

            display: flex;
            align-items: center;
            justify-content: center;
            visibility: hidden;
        }

        .nav {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            grid-template-rows: 1fr;

            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            
            height: 81px;
            width: 100%;
        }

        .menu {
            font-family: open-sans;
            font-weight: bold;
            font-size: 20px;

            display: none;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 30px;

            padding-bottom: 30px;
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