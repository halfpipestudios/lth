<template>

    <div class="form-container" :class="theme">
        <div class="max-container">
            <form>
                <label>Ponete en contacto</label>
                <input type="text" placeholder="Nombre Completo">
                <div>
                    <input type="text" placeholder="Correo Electronico">
                    <input type="text" placeholder="Teléfono">
                </div>
                <textarea name="textarea" id="" placeholder="Mensaje..."></textarea>
                <button>Enviar</button>
            </form>
            <img src="/img/batman.png" alt="batman">
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        theme: {
            type: String,
            default: "light"
        }
    });
</script>

<style scoped lang="scss">



.form-container {

    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-s) {
        padding: 20px;
    }
}

.light  {
    background-color: #f2f2f2;
}


.dark {
    background-color: #161616;
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

    @media screen and (max-width: $size-s) {
        height: 44px;
        border-radius: 10px;
    }
}

textarea {
    width: 100%;
    height: 316px;
    
    padding: 0;
    margin: 0;

    resize: none;

    @media screen and (max-width: $size-s) {
        height: 132px;
        border-radius: 10px;
    }
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
    @media screen and (max-width: $size-s) {
        font-size: 15px;
    }
}

.light input, .light textarea {
    background-color: #ffffff;

    border: 2px solid #bdbdbd;
    border-radius: 15px;
}

.dark input, .dark textarea {
    background-color: #919191;
    border: 2px solid #2f2f2f;
    border-radius: 15px;

    color: white;
}

.dark input::placeholder , .dark textarea::placeholder {
    color: #C7C7C7;
}

button {
    width: 100%;
    height: 77px;

    background-color: #BF0000;
    border: none;
    border-radius: 15px;

    font-family: open-sans;
    font-weight: bold;
    font-size: 32px;
    color: white;

    @media screen and (max-width: $size-s) {
        height: 44px;
        border-radius: 10px;
        font-size: 18px;
    }
}

.form-container .max-container form {
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    box-sizing: border-box;
    padding: 40px;

    border-radius: 15px;

    @media screen and (max-width: $size-s) {
        padding: 20px;
        width: 100%;
    }
}

.dark form {
    background-color: #707070;
}

.light form {
    background-color: #ffffff;
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