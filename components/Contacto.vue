<template>
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
</template>

<script setup>

</script>

<style scoped>

    form {
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

    .wolve {
        position: absolute;
        left: 390px;
        top: 30px;

        background-color: transparent;
        transform: scale(.6) translate(-50%, -50%);
        
        pointer-events: none;
    }

    input {
        padding: 20px;

        font-family: open-sans;
        font-size: 24px;
    }

    ::placeholder {
        color: #999999;
        opacity: 1;
    }

    textarea {
        resize: none;
        padding: 20px;

        font-family: open-sans;
        font-size: 24px;
    }

    .contacto-center {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        
        gap: 54px;
        padding-left: 54px;
        padding-right: 54px;
    }

    .contacto-form {
        
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

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .contacto-button {
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

</style>