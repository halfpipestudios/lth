<template>

    <div class="form-container" :class="theme">
        <div class="max-container">
            <form form-item target="_blank" :action="'https://formsubmit.co/'+mail" method="POST">
                <input  type="text" name="Nombre" required :placeholder="texts['formulario-placeholder-nombre']">
                <div>
                    <input  type="email" name="Email" required :placeholder="texts['formulario-placeholder-email']">
                    <input type="tel" name="Telefono" required :placeholder="texts['formulario-placeholder-tel']">
                </div>
                <textarea name="Mensaje" required :placeholder="texts['formulario-placeholder-mensaje']"></textarea>
                <button type="submit">{{ texts["formulario-boton"] }}</button>
            </form>
            <div class="animation">
                <Sprite v-if="anim && anim.frames" :frames="anim.frames" :frame_time="anim.frame_time" />
            </div>
        </div>
    </div>

</template>

<script setup>
    const props = defineProps({
        theme: {
            type: String,
            default: "light"
        },
        animation: {
            type: String,
        },
        mail: {
            type: String,
        },
    });

    const texts = useState('texts');
    const language = useState('language');
    const { data: anim, status, error, refresh, clear } = await useAsyncData(
        'sprite-animations',
        () => $fetch(`/api/animations?animation=${props.animation + "-" + language.value}`),
        {
            watch: [language]
        }
    )
    
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
    background-color: transparent;
}

.form-container .max-container {
    width: 100%;
    max-width: $size-l;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;

    @media screen and (max-width: 1050px) {
        flex-direction: column-reverse;
        gap: 0px;
    }
}

input {
    width: 100%;
    height: 63px;
    padding: 0;
    margin: 0;

    @media screen and (max-width: $size-s) {
        height: 44px;
    }
}

textarea {
    width: 100%;
    height: 280px;
    
    padding: 0;
    margin: 0;

    resize: none;

    @media screen and (max-width: $size-s) {
        height: 132px;
    }
}

input, textarea {
    box-sizing: border-box;
    padding: 10px;

    font-family: comic-smooth;
    
    border-radius: 15px;

    --text-font-size: $fs-m;
    font-size: $fs-m;
    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
    }
    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
        border-radius: 10px;
    }
}

.light input, .light textarea {
    background-color: #ffffff;
    border: 2px solid #bdbdbd;
}

.dark input, .dark textarea {
    background-color: #575757;
    border: none;
    
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

    font-family: comic-smooth;
    font-weight: normal;
    font-size: $fs-m;
    color: white;

    transition-duration: 0.4s;

    @media screen and (max-width: $size-s) {
        height: 44px;
        border-radius: 10px;
        font-size: $fs-s;
    }
}

button:hover {
    background-color: darkred;
    cursor: pointer;
}

.form-container .max-container .animation {
    width: 50%;
    aspect-ratio: 1;
    max-width: 500px;
    align-self: center;

    @media screen and (max-width: 1050px) {
        align-self: flex-end;
        width: 100%;
    }
}

.form-container .max-container form {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 10px;

    box-sizing: border-box;
    padding: 40px;

    border-radius: 15px;

    @media screen and (max-width: 1050px) {
        padding: 20px;
        width: 100%;
        border-radius: 10px;
    }
}

.dark form {
    background-color: #323232;
}

.light form {
    background-color: #ffffff;
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