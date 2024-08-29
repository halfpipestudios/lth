<template>

    <div class="form-container">
        <div class="max-container">
            <form>
                <label>Ponete en contacto</label>
                <input type="text" placeholder="Nombre Completo">
                <div>
                    <input type="text" placeholder="Correo Electronico">
                    <input type="text" placeholder="Teléfono">
                </div>
                <textarea name="textarea" id="" placeholder="Hola! Queria consultar para acerca de un tatuaje..."></textarea>
                <button>Enviar</button>
            </form>
            <img src="/img/batman.png" alt="batman">
        </div>
    </div>

</template>

<script setup>

</script>

<style scoped lang="scss">

.form-container {

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 40px;

    background-color: #f2f2f2;

    @media screen and (max-width: $size-s) {
        padding: 20px;
    }
}

.form-container .max-container {
    max-width: $size-l;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: $size-s) {
        flex-direction: column-reverse;
    }
}

label {

    text-align: center;
    font-family: comic;

    --label-font-size: 48px;
    font-size: var(--label-font-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--label-font-size) * 0.8);
    }
}

input {
    width: 100%;
    height: 63px;
    padding: 0;
    margin: 0;

    border: 2px solid #bdbdbd;
    border-radius: 15px;
}

textarea {
    width: 100%;
    height: 316px;
    
    padding: 0;
    margin: 0;

    resize: none;

    border: 2px solid #bdbdbd;
    border-radius: 15px;
}

input, textarea {
    box-sizing: border-box;
    padding: 10px;

    font-family: open-sans;
    
    --text-font-size: 24px;
    font-size: var(--text-font-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--text-font-size) * 0.8);
    }
}

button {
    width: 100%;
    height: 77px;

    background-color: #BF0000;
    border: none;
    border-radius: 15px;

    font-family: open-sans;
    font-size: 32px;
    color: white;
}

.form-container .max-container form {
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    background-color: #ffffff;
    box-sizing: border-box;
    padding: 40px;

    border-radius: 15px;

    @media screen and (max-width: $size-s) {
        padding: 20px;
        width: 100%;
    }
}

.form-container .max-container img {
    width: 40%;
    align-self: flex-end;

    @media screen and (max-width: $size-s) {
        width: 80%;
    }
}

.form-container .max-container form div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
    }
}

</style>