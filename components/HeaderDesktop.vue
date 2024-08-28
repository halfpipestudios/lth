<template>
<header ref="header" :class="theme">
    <div class="container">
    
        <div class="nav left">
            <NuxtLink to="/">{{ texts["header-navbar-habitaciones"] }}</NuxtLink>
            <NuxtLink to="/services">{{ texts["header-navbar-servicios"] }}</NuxtLink>
            <NuxtLink to="/tattoo">{{ texts["header-navbar-tatuajes"] }}</NuxtLink>
        </div>

        <div ref="logo" class="logo">
            <img :src="logo" alt="">
        </div>

        <div class="nav right">

            <NuxtLink to="/">ONEFAM</NuxtLink>
                
            <div class="reservar">
                <img :src="reserve" alt="">
                <div>{{ texts["header-navbar-reservar"] }}</div>
            </div>

            <Language class="language" :theme="theme"/>

        </div>

    </div>
</header>

</template>

<script setup>
    const texts = useState('texts');

    const props = defineProps({
        theme: {
            type: String,
            default: "light"
        }
    });

    const logo = computed(() => {
        return props.theme === "dark" ? "/img/logo_tattoo.svg" : "/img/logo.svg";
    });

    const reserve = computed(() => {
        return props.theme === "dark" ? "/img/reservar_tatto.svg" : "/img/reservar.svg";
    });

</script>

<style scoped lang="scss">

    .light {
        background-image: url(/img/paper_back.jpg);
    }

    .light a {
        color: black;
    }

    .dark {
        background-image: url(/img/paper_back_tatto.jpg);
    }

    .dark a {
        color: white;
    }

    header {
        position: sticky;
        top:0;

        --header-height: 116px;

        width: 100%;
        height: var(--header-height);

        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;

        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0 -2px 10px rgba(0, 0, 0, .35);

        @media screen and (max-width: $size-m) {
            height: calc(var(--header-height) * 0.8);
        }

    }

    header .container {
        height: 100%;
        
        max-width: $size-l;
        width: 100%;

        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        grid-template-rows: 100%;
    }

    .nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        
        --font-size: 20px;

        font-family: open-sans;
        font-weight: bold;
        font-style: normal;
        font-size: var(--font-size);

        @media screen and (max-width: $size-m) {
            font-size: calc(var(--font-size) * 0.8);
        }

    }
    
    .reservar img {
        
        --reservar-height: 91px;
        height: var(--reservar-height);
        
        @media screen and (max-width: $size-m) {
            height: calc(var(--reservar-height) * 0.8);
        }

    }

    .dark .reservar div {
        color: white;
    }

    .light .reservar div {
        color: black;
    }

    .reservar {
        position: relative
    }

    .reservar div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .left {
        grid-column: 1;
        grid-row: 1;

    }

    .right {
        grid-column: 3;
        grid-row: 1;
    }

    .logo {
        grid-column: 2;
        grid-row: 1;

        font-family: comic-smooth;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
        color: black;

        margin: 5px;
    }

    .logo img {

        --logo-height: 40px;
        height: var(--logo-height);

        @media screen and (max-width: $size-m) {
            height: calc(var(--logo-height) * 0.8);
        }
    }

    a {
        text-decoration: none;
    }

</style>