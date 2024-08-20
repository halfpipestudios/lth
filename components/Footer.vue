<template>
    <footer>
        <img src="/img/logo.svg" alt="logo footer">
        <div class="info">
            <div class="info-child">
                <img class="ubi-image" src="/img/ubi.svg" alt="">
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


    .redes {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .redes img {
        width: 100px;
        height: 100px;
    }

    .logo-container {
        font-family: comic-smooth;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
    }

    .info {
        display: flex;
        flex-direction: column;
    }

    .info-child {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .info-child img {
        width: 22px;
    }
    
    .ubi-image {
        align-self: flex-start;
        padding-top: 5px;
    }

    .ubi p {
        margin: 0;
    }

    footer {
        height: 345px;
        background-color: white;
        background-image: url(/img/paper_back_fliped.jpg);
        background-size: cover;
        background-position: bottom;
        background-repeat: no-repeat;

        display: flex;
        align-items: center;
        justify-content: space-around;

        font-family: open-sans;
        font-weight: 600;
        font-style: normal;
        font-size: 20px;
    }

    @media screen and (max-width: 1110px) {
        footer {
            flex-direction: column;
            height: initial;
            gap: 40px;
            padding: 40px;
        }

        .redes {
            gap: 10px;
        }
    }

</style>