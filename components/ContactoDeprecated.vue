<template>
    <form class="contacto-form" action="">
        <input class="contacto-input-style contacto-input" type='text' placeholder='Nombre Completo'>
        <input class="contacto-input-style contacto-input" type='text' placeholder='Correo electónico'>
        <input class="contacto-input-style contacto-input" type='text' placeholder='Telefono'>
        <textarea class="contacto-input" placeholder="Mensaje"></textarea>
        <div class="contacto-button-container contacto-input">
            <input class="contacto-button" type="button" value="Enviar">
            <img class="wolve-full" src="/img/wolve.png" alt="">
        </div>
        <img class="wolve-mobile" src="/img/wolve_mobile.png" alt="">
    </form>
</template>

<script setup>

</script>

<style scoped>

    textarea {
        resize: none;
        font-family: open-sans;
        font-size: 1vw;
        border-radius: 15px;
        border: solid #B4B4B4 1px;
        padding: 20px;
    }

    .contacto-input-style {
        font-family: open-sans;
        font-size: 1vw;
        border-radius: 15px;
        border: solid #B4B4B4 1px;
        padding: 20px;
    }

    .contacto-form {
        --card-aspec-ratio: calc(1338 / 600);

        background-color: #ffffff;
        width: 75%;
        aspect-ratio: var(--card-aspec-ratio);

        max-height: 600px;
        max-width: 1338px;

        border-radius: 15px;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 6fr;
        row-gap: 10px;
        column-gap: 10px;

        padding: 40px;
        padding-top: 70px;
        box-sizing: border-box;
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

    .contacto-input:nth-child(5) {
        grid-column: 3;
        grid-row: 3;
    }
    
    .contacto-button-container {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        
        position: relative;
    }

    .contacto-button {
        --button-aspect-ratio: calc(395 / 77);

        background-color: #BF0000;
        width: 100%;
        height: 77px;
        /* aspect-ratio: var(--button-aspect-ratio); */

        margin-left: 40px;
        margin-right: 20px;

        border-radius: 15px;
        border: none;
        
        color: white;
        font-family: open-sans;
        font-weight: bold;
        font-size: 30px;
    }

    .wolve-full {
        display: block;
        position: absolute;
        right: 13%;
        bottom: 20%;

        width: 270%;
        background-color: transparent;

        pointer-events: none;
    }

    .wolve-mobile {
        position: absolute;
        display: none;
    }


    @media screen and (max-width: 1110px) {
        textarea {
            padding: 10px;
        }

        .contacto-input-style {
            padding: 10px;
        }

        .contacto-form {
            aspect-ratio: initial;
            height: 575px;
            min-width: 290px;
            max-width: 400px;

            display: flex;
            flex-direction: column;
            margin-top: min(14vw, 80px);

            position: relative;

            padding: 20px;
        }

        textarea {
            height: 327px;
            font-size: 15px;
        }

        .contacto-input-style {
            height: 44px;
            font-size: 15px;
        }

        .contacto-button {
            margin: 0;
            font-size: 18px;
        }

        .wolve-mobile {
            display: block;
            position: absolute;
            right: 5%;
            top: 0;

            transform: translateY(-100%);

            width: 96%;
            background-color: transparent;

            pointer-events: none;
        }

        .wolve-full {
            position: absolute;
            display: none;
        }

    }

</style>