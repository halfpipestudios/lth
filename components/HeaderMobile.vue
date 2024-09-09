<template>

<header :class="theme">

    <NuxtImg class="background" :src="background" format="webp" alt="header background" />

    <div ref="collapsed" class="collapsed">
        
        <div ref="hamburger_button" class="hamburger">
            <img :src="hamburger" alt="hambuerger menu">
        </div>
        
        <NuxtLink to="/" ref="logo" class="logo">
            <img :src="logo" alt="logo">
        </NuxtLink>

    </div>

    <div ref="expanded" class="expanded">

        <div class="menu">
            
            <div ref="x_button" class="x">
                <img :src="x" alt="hambuerger menu">
            </div>

            <Language class="language" :theme="theme" :callback="collapse_menu"/>

        </div>

        <div class="links">

            <NuxtLink @click="collapse_menu"  to="/">{{ texts["header-navbar-inicio"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu"  to="/rooms">{{ texts["header-navbar-habitaciones"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/services">{{ texts["header-navbar-servicios"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/tattoo">{{ texts["header-navbar-tatuajes"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/onefam">{{ texts["header-navbar-contacto"] }}</NuxtLink>
                
            <NuxtLink to="https://lemontree.reservadirecto.com/lp.html" target="_blank" class="reservar">
                <img :src="reserve" alt="">
                <div>{{ texts["header-navbar-reservar"] }}</div>
            </NuxtLink>

        </div>
        
    </div>

</header>

</template>

<script setup>

    const texts = useState('texts');
    const language = useState('language');
    const hamburger_button = ref(null);
    const x_button = ref(null);
    const collapsed = ref(null);
    const expanded = ref(null);

    function expand_menu() {
        collapsed.value.style.display = "none";
        expanded.value.style.display = "flex";
    }

    function collapse_menu() {
        collapsed.value.style.display = "grid";
        expanded.value.style.display = "none";
    }

    onMounted(() => {
        hamburger_button.value.addEventListener("click", expand_menu);
        x_button.value.addEventListener("click", collapse_menu);
    });

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

    const hamburger = computed(() => {
        return props.theme === "dark" ? "/img/hamburger_tattoo.svg" : "/img/hamburger.svg";
    });

    const x = computed(() => {
        return props.theme === "dark" ? "/img/x_tattoo.svg" : "/img/x.svg";
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

        width: 100%;
        // overflow: hidden;

        // background-image: url(/img/paper_back.jpg);
        // background-size: cover;
        // background-position: top;
        // background-repeat: no-repeat;

        box-shadow: 0 3px 6px rgba(0, 0, 0, .35);
    }

    header .collapsed {
        height: 70px;
        width: 100%;
        display: grid;
        grid-template-columns: 80px 1fr 80px;
        grid-template-rows: 100%;
    }

    header .menu {
        height: 70px;
        width: 100%;
        display: grid;
        grid-template-columns: 80px 1fr 140px;
        grid-template-rows: 100%;
    }

    header .expanded {
        height: 100vh;
        width: 100%;
        display: none;

        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
    }

    .hamburger, .x {
        grid-column: 1;
        grid-row: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo {
        grid-column: 2;
        grid-row: 1;
    
        display: flex;
        align-items: center;
        justify-content: center;
    
    }

    .language {
        grid-column: 3;
        grid-row: 1;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logo img {
        height: 40px;
    }

    .links {
        --font-size: 14px;

        font-family: open-sans;
        font-weight: bold;
        font-style: normal;
        
        width:100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 8%;

    }

    a {
        text-decoration: none;
        color: black;
    }

    .reservar {
        position: relative
    }

    .reservar div {
        font-family: comic;
        font-size: inherit;
    }

    .dark .reservar div {
        color: white;
    }

    .light .reservar div {
        color: black;
    }

    .reservar div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }


</style>