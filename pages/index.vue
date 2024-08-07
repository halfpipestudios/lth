<template>
    <section class="fullscreen">
        <img class="filter" src="/img/home_full_filter.png" alt="background filter">
        <div>
            <h1>DISFRUTÁ MENDOZA CON NOSOTROS</h1>
        </div>
        <div>
            <img class="arrow-down" src="/img/arrow_down.svg" alt="arrow pointing down">
        </div>
    </section>
    <section class="cards">    
        <Card />
        <Card />
        <Card />
    </section>
    <section class="padded-image">

    </section>
    <section class="contacto">
        <form action="">
            <div class="contacto-center">
                <div class="contacto-form">
                    <input class="contacto-input" type='text' placeholder='Nombre Completo'>
                    <input class="contacto-input" type='text' placeholder='Correo electónico'>
                    <input class="contacto-input" type='text' placeholder='Telefono'>
                    <textarea class="contacto-input" placeholder="Mensaje"></textarea>
                </div>
                <input class="contacto-button" type="button" value="Enviar">
                <img class="wolve" src="/img/wolve.png" alt="">
            </div>
        </form>
    </section>
</template>

<script setup>
</script>

<style scoped>

    .contacto {
        width: 100%;
        background-color: #ededed;

        display: flex;
        justify-content: center;
        align-items: center;

        padding-top: 87px;
        padding-bottom: 87px;

    }

    .contacto form {
        resize: none;
        width: 1338px;
        height: 575px;

        background-color: #ffffff;
        border-radius: 15px;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        position: relative;
    }

    .contacto .wolve {
        position: absolute;
        left: -100px;
        top: -260px;

        background-color: transparent;
        scale: 0.64;

        pointer-events: none;
    }

    .contacto input {
        padding: 20px;

        font-family: open-sans;
        font-size: 24px;
    }

    ::placeholder {
        color: #999999;
        opacity: 1;
    }

    .contacto textarea {
        resize: none;
        padding: 20px;

        font-family: open-sans;
        font-size: 24px;
    }

    .contacto .contacto-center {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        
        gap: 54px;
        padding-left: 54px;
        padding-right: 54px;
    }

    .contacto .contacto-form {
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 6fr;
        gap: 11px;

        height: 464px;
        width: 781px;
    }
    
    .contacto-input:nth-child(1) {
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .contacto-input:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .contacto-input:nth-child(3) {
        grid-column: 2;
        grid-row: 2;
    }
    
    .contacto-input:nth-child(4) {
        grid-column: 1 / span 2;
        grid-row: 3;
    }

    .contacto-input {
        border-radius: 15px;
        border: solid #B4B4B4 1px;
        box-sizing: border-box;
    }

    .contacto div {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .contacto .contacto-button {
        resize: none;
        width: 395px;
        height: 77px;
        background-color: #BF0000;
        border-radius: 15px;
        border: none;
        
        color: white;
        font-family: open-sans;
        font-weight: bold;
        font-size: 32px
    }

    .cards {
        width: 100%;
        background-color: #ededed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 87px;
        padding-top: 87px;
    }
    
    @media screen and (max-width: 1110px) {
        .cards {
            width: 100%;
            background-color: #ededed;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 17px;
            padding-top: 17px;
        }
    }



    .fullscreen {
        width: 100%;
        height: calc(100vh - var(--navbar-height));
        background-color: red;
        background-image: url(/img/home_full.png);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        position: relative;
        overflow: hidden;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;
    }

    .fullscreen .filter {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    .fullscreen div {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .fullscreen div:nth-of-type(1) {
        grid-column: 1;
        grid-row: 2;
    }

    .fullscreen div:nth-of-type(2) {
        grid-column: 1;
        grid-row: 3;
    }

    .fullscreen .arrow-down {
        padding-top: 100px;
    }

    .fullscreen h1 {
        color: white;
        font-size: 96px;
        font-family: comic-smooth;
        text-align: center;
    }


</style>