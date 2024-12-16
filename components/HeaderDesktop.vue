<template>
<header ref="header" :class="theme">

    <NuxtImg class="background" :src="background" format="webp" alt="header background"/>

    <div class="container">
    
        <div class="nav left">
            <NuxtLink to="/rooms">{{ texts["header-navbar-habitaciones"] }}</NuxtLink>
            <NuxtLink to="/services">{{ texts["header-navbar-servicios"] }}</NuxtLink>
            <NuxtLink :to="tattoo_logo_ref">
                <NuxtImg class="logo-tattoo" :src="tattoo_logo" alt="logo"/>
            </NuxtLink>
        </div>

        <NuxtLink :to="logo_ref" ref="logo" class="logo">
            <img :src="logo" alt="logo">
        </NuxtLink>

        <div class="nav right">

            <NuxtLink to="/onefam">{{texts["header-navbar-contacto"]}}</NuxtLink>
                
            <NuxtLink to="https://lemontree.reservadirecto.com/lp.html" target="_blank" class="reservar">
                <img :src="reserve" alt="">
                <div>{{ texts["header-navbar-reservar"] }}</div>
            </NuxtLink>

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
        return props.theme === "dark" ? "/img/logo_tattoo.png" : "/img/logo_inverted.png";
    });

    const logo_ref = computed(() => {
        return props.theme === "dark" ? "/tattoo" : "/";
    });

    const tattoo_logo = computed(() => {
        return props.theme === "dark" ? "/img/logo.png" : "/img/logo_tattoo_invert.png";
    });

    const tattoo_logo_ref = computed(() => {
        return props.theme === "dark" ? "/" : "/tattoo";
    });


    const reserve = computed(() => {
        return props.theme === "dark" ? "/img/reservar_tatto.svg" : "/img/reservar.svg";
    });

    const background = computed(() => {
        return props.theme === "dark" ? "/img/paper_back_tatto.jpg" : "/img/paper_back.jpg";
    });


</script>

<style scoped lang="scss">

    header .background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        object-fit: cover;
        object-position: top;
        background-repeat: no-repeat;

        z-index: -1;
    }

    .light a {
        color: black;
    }

    .dark a {
        color: white;
    }

    header {
        position: sticky;
        top:0;
        // overflow: hidden;

        --header-height: #{$default-header-height};

        width: 100%;
        height: var(--header-height);

        // background-size: cover;
        // background-position: top;
        // background-repeat: no-repeat;

        display: flex;
        align-items: center;
        justify-content: center;

        box-shadow: 0 3px 6px rgba(0, 0, 0, .35);

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
    
    .reservar {
        user-select: none;
        cursor: pointer;
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

        font-family: comic;
        font-size: 18px;
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

    .dark .logo img {
        --logo-height: 60px;
        height: var(--logo-height);

        @media screen and (max-width: $size-m) {
            height: calc(var(--logo-height) * 0.8);
        }
    }

    .light .logo img {
        --logo-height: 60px;
        height: var(--logo-height);

        @media screen and (max-width: $size-m) {
            height: calc(var(--logo-height) * 0.8);
        }
    }

    a {
        text-decoration: none;
    }

    .logo-tattoo {
        --logo-height: 35px;
        height: var(--logo-height);
        padding-top: 10px;

        @media screen and (max-width: $size-m) {
            height: calc(var(--logo-height) * 0.8);
        }
    }

</style>