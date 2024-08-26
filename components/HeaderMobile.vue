<template>

<header>
        
    <div ref="collapsed" class="collapsed">
        
        <div ref="hamburger_button" class="hamburger">
            <img src="/img/hamburger.svg" alt="hambuerger menu">
        </div>
        

        <div class="logo">
            <img src="/img/logo.svg" alt="lgo">
        </div>

    </div>

    <div ref="expanded" class="expanded">

        <div class="collapsed">
            
            <div ref="x_button" class="x">
                <img src="/img/x.svg" alt="hambuerger menu">
            </div>

            <div class="language">
                <select v-model="language">
                    <option value="es">ESP</option>
                    <option value="en">ENG</option>
                    <option value="pt">PTR</option>
                </select>
            </div>

        </div>

        <div class="links">

            <NuxtLink @click="collapse_menu"  to="/">{{ texts["header-navbar-habitaciones"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/services">{{ texts["header-navbar-servicios"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/tattoo">{{ texts["header-navbar-tatuajes"] }}</NuxtLink>
            <NuxtLink @click="collapse_menu" to="/">{{ texts["header-navbar-contacto"] }}</NuxtLink>
                
            <div class="reservar">
                <img src="/img/reservar.svg" alt="">
            </div>

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

</script>

<style scoped lang="scss">

    header {
        position: sticky;
        top:0;

        width: 100%;

        background-image: url(/img/paper_back.jpg);
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
    }

    header .collapsed {
        height: 70px;
        width: 100%;
        display: grid;
        grid-template-columns: 80px 1fr 80px;
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


</style>