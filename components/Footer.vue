<template>
    <footer>
        <div class="container">
            
            <div class="logo">
                <img src="/img/logo.svg" alt="logo footer">
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
                <img src="/img/link.svg" alt="">
                <img src="/img/inst.svg" alt="">
                <img src="/img/face.svg" alt="">
            </div>

        </div>
    </footer>
</template>

<style scoped lang="scss">


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