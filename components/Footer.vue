<template>
    <footer :class="theme">
        <div class="container">
            
            <div class="logo">
                <img :src="logo" alt="logo footer">
            </div>

            <div class="info">

                <div class="info-item">
                    <img class="ubi-image" src="/img/ubi.svg" alt="">
                    <div>
                        <p>RP82 Luján de Cuyo</p>
                        <p>Mendoza</p>
                        <p>Argentina</p>
                    </div>
                </div>

                <div class="info-item">
                    <img src="/img/tel.svg" alt="">
                    <p>+54 9 261 555 5555</p>
                </div>

                <div class="info-item">
                    <img src="/img/mail.svg" alt="">
                    <p>info@lemontreehostel.com.ar</p>
                </div>

            </div>

            <div class="redes">
                <img :src="link" alt="linkedin">
                <img :src="inst" alt="instagram">
                <img :src="face" alt="facebook">
            </div>
        </div>
        <div class="banner">
            <div class="inner-banner">
                HALFPIPE ®  -  2024
            </div>
        </div>
    </footer>
</template>

<script setup>

    const props = defineProps({
        theme: {
            type: String,
            default: "light"
        }
    });

    const logo = computed(() => {
        return props.theme === "dark" ? "/img/logo_tattoo.svg" : "/img/logo.svg";
    });

    const link = computed(() => {
        return props.theme === "dark" ? "/img/link_tattoo.svg" : "/img/link.svg";
    });

    const inst = computed(() => {
        return props.theme === "dark" ? "/img/inst_tattoo.svg" : "/img/inst.svg";
    });

    const face = computed(() => {
        return props.theme === "dark" ? "/img/face_tattoo.svg" : "/img/face.svg";
    });

</script>

<style scoped lang="scss">

.light {
    background-image: url(/img/paper_back_fliped.jpg);
}

.light .info {
    color: black;
}

.dark {
    background-image: url(/img/paper_back_tatto_fliped.jpg);
}

.dark .info {
    color: white;
}

.dark .info-item img {
    filter: invert(100%);
}


footer {
    --footer-height: 444px;

    width: 100%;
    height: var(--footer-height);
    
    background-image: url(/img/paper_back_fliped.jpg);
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: $size-m) {
        height: calc(var(--footer-height) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        height: 520px;
    }

    position: relative;
}

.banner {
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 25px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: black;
}

.inner-banner {
    height: 100%;
    width: 100%;
    max-width: $size-l;

    font-family: open-sans;
    font-size: 16px;
    font-weight: bold;
    color: #868686;

    margin-left: 10px;
}

footer .container {
    height: 100%;
    
    max-width: $size-l;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100%;

    background-color: transparent;

    @media screen and (max-width: $size-s) {
        max-width: initial;
        height: initial;
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}

.logo img {
    --logo-height: 60px;
    height: var(--logo-height);

    @media screen and (max-width: $size-m) {
        height: calc(var(--logo-height) * 0.8);
    }
}

.info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    --margin: 40px;
    margin-left: var(--margin);

    background-color: transparent;

    @media screen and (max-width: $size-m) {
        margin-left: calc(var(--margin)*0.8);
    }

    @media screen and (max-width: $size-s) {
        margin-left: 0;
    }

}

.info-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;

    font-family: open-sans;
    font-weight: 600;
    font-style: normal;
    
    --font-size: 20px;
    font-size: var(--font-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--font-size) * 0.8);
    }
}

.info-item img {
    width: 22px;
}

.redes {
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;
}

.redes img {

    --redes-dim: 100px;
    
    width: var(--redes-dim);
    height: var(--redes-dim);

    @media screen and (max-width: $size-m) {
        width: calc(var(--redes-dim) * 0.8);
        height: calc(var(--redes-dim) * 0.8);
    }
}

</style>