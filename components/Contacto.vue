<template>
    <form action="">
        <div class="contacto-center">
            <div class="contacto-form">
                <input class="contacto-input" type='text' placeholder='Nombre Completo'>
                <input class="contacto-input" type='text' placeholder='Correo electónico'>
                <input class="contacto-input" type='text' placeholder='Telefono'>
                <textarea class="contacto-input" placeholder="Mensaje"></textarea>
            </div>
            <div class="contacto-button-container" >
                <input class="contacto-button" type="button" value="Enviar">
                <img class="wolve" src="/img/wolve.png" alt="">
            </div>
        </div>
    </form>
</template>

<script setup>

</script>

<style scoped>

    form {
        --form-aspec-ratio: calc(1338 / 600);
        --form-percentage: 75%;

        background-color: #ffffff;
        width: 75%;
        aspect-ratio: var(--form-aspec-ratio);

        max-height: 600px;
        max-width: 1338px;

        border: solid white 80px;
        border-radius: 15px;
        box-sizing: border-box;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    input {
        width: 100%;
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
        justify-content: space-between;

        gap: 54px;
        
        width: 100%;
        height: 100%;
    }

    .contacto-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 6fr;
        gap: 11px;

        width: var(--form-percentage);
        height: 100%;
        max-width: 781px;
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

    .contacto-button-container {
        display: flex;
        align-items: center;
        justify-content: center;

        width: calc(calc(100% - var(--form-percentage)) + 100px);
        position: relative;
    }

    .wolve {
        position: absolute;
        right: 3.5vw;
        bottom: 20px;

        background-color: transparent;

        width: 50vw;
        height: auto;
        
        pointer-events: none;
    }

    .contacto-button {
        width: 100%;
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