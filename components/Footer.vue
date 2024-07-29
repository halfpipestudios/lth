<template>
    <footer>
        <img src="/img/logo_template.svg" alt="">
        <div class="info">
            <div class="info-child">
                <img src="/img/ubi.svg" alt="">
                <div class="ubi">
                    <p>RP82 Luján de Cuyo</p>
                    <p>Mendoza</p>
                    <p>Argentina</p>
                </div>
            </div>
            <div class="info-child">
                <img src="/img/tel.svg" alt="">
                <p>+54 9 261 555 5555</p>
            </div>
            <div class="info-child">
                <img src="/img/mail.svg" alt="">
                <p>info@lemontreehostel.com.ar</p>
            </div>
        </div>
        <div class="redes">
            <img src="/img/link.svg" alt="">
            <img src="/img/inst.svg" alt="">
            <img src="/img/face.svg" alt="">
        </div>
    </footer>
</template>

<style scoped>

    .info {
        display: flex;
        flex-direction: column;
    }

    .info-child {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .redes {
        display: flex;
        flex-direction: row;
        gap: 40px;
        padding-top: 60px;
    }

    .ubi p {
        margin: 0;
    }

    footer {
        background-color: white;
        border: 2px solid black;
        height: 345px;

        display: flex;
        align-items: center;
        justify-content: space-around;

        font-family: "comic";
    }

    @media screen and (max-width: 1110px) {
        footer {
            display: none;
        }
    }

</style>