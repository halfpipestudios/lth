<template>
    <footer :class="theme">

        <NuxtImg class="background" :src="background" format="webp" loading="lazy" alt="footer background"/>

        <div class="container">
            
            <div class="logo">
                <NuxtImg :src="logo" alt="logo footer" loading="lazy" />
            </div>

            <div class="info">

                <NuxtLink class="info-item" target="_blank" href="https://maps.app.goo.gl/w5aTY55QCgw3NNh56">
                    <NuxtImg class="ubi-image" src="/img/ubi.svg" alt="" loading="lazy" />
                    <div>
                        <p>RP82 Luján de Cuyo</p>
                        <p>Mendoza</p>
                        <p>Argentina</p>
                    </div>
                </NuxtLink>

                <NuxtLink target="_blank" href="tel:+5492616616248" class="info-item">
                    <NuxtImg src="/img/tel.svg" alt="" loading="lazy" />
                    <p>+54 9 2616 61-6248</p>
                </NuxtLink>

                <NuxtLink target="_blank" href="mailto:reservaslemontree@gmail.com" class="info-item">
                    <NuxtImg src="/img/mail.svg" alt="" loading="lazy" />
                    <p>reservaslemontree@gmail.com</p>
                </NuxtLink>

            </div>

            <div class="redes">
                <NuxtLink target="_blank" :href="instagram_link">
                    <NuxtImg :src="inst" alt="instagram" loading="lazy" />
                </NuxtLink>
                <NuxtLink target="_blank" href="https://www.facebook.com/lemontreemza/">
                    <NuxtImg :src="face" alt="facebook" loading="lazy" />
                </NuxtLink>
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

    const background = computed(() => {
        return props.theme === "dark" ? "/img/paper_back_tatto_fliped.jpg" : "/img/paper_back_fliped.jpg";
    });

    const instagram_link = computed(() => {
        return props.theme === "dark" ? "https://www.instagram.com/lemontree_tattoo" : "https://www.instagram.com/lemontree_hostel/";    
    })

</script>

<style scoped lang="scss">

footer .background {
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

.light .info {
    color: black;
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
    
    overflow: hidden;
    // background-image: url(/img/paper_back_fliped.jpg);
    // background-size: cover;
    // background-position: top;
    // background-repeat: no-repeat;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    @media screen and (max-width: $size-m) {
        height: calc(var(--footer-height) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        height: 520px;
    }

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

.dark .container a {
    text-decoration: none;
    color: white;
}

.light .container a {
    text-decoration: none;
    color: black;
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

    font-family: comic-smooth;
    font-weight: normal;
    font-style: normal;
    
    font-size: $fs-s;
}

.info-item img {
    width: 22px;
}

.redes {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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