<template>

    <CardBase>
        <form action="">
            <input class="contacto-input-style" type='text' placeholder='Nombre Completo'>
            <input class="contacto-input-style" type='text' placeholder='Correo electónico'>
            <input class="contacto-input-style" type='text' placeholder='Telefono'>
            <textarea class="contacto-input" placeholder="Mensaje"></textarea>
            <div class="contacto-button-container contacto-input">
                <input class="contacto-button" type="button" value="Enviar">
                <img class="wolve-full" src="/img/wolve.png" alt="">
            </div>
            <img class="wolve-mobile" src="/img/wolve_mobile.png" alt="">
        </form>
    </CardBase>

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

    .card {
        overflow: visible;
        padding: 40px;
        padding-top: 70px;
    }

    .card form {
        width: 100%;
        height: 100%;
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto auto 1fr;
        row-gap: 10px;
        column-gap: 10px;

    }

    .card input:nth-of-type(1) {
        grid-column: 1 / span 2;
        grid-row: 1;
    }

    .card input:nth-of-type(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .card input:nth-of-type(3) {
        grid-column: 2;
        grid-row: 2;
    }

    .card textarea:nth-of-type(1) {
        grid-column: 1 / span 2;
        grid-row: 3;
    }

    .card div:nth-of-type(1) {
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
        background-color: #BF0000;
        width: 100%;
        height: 77px;
        
        border-radius: 15px;
        border: none;
        
        color: white;
        font-family: open-sans;
        font-weight: bold;
        font-size: 30px;

        z-index: 2;
    }

    .wolve-full {
        display: block;
        position: absolute;
        right: 13%;
        bottom: 20%;

        width: 60vw;
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
            height: 327px;
            font-size: 15px;
        }

        .contacto-input-style {
            padding: 10px;
        }

        .card {
            padding: 20px;
            height: 475px;
        }

        .card form {
            aspect-ratio: initial;
            
            display: flex;
            flex-direction: column;
            
            position: relative;
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