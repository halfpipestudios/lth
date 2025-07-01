<template>

    <div class="form-container" :class="theme">
        <div class="max-container">
            <form ref="form" form-item target="_blank" method="POST">
                <input type="text" name="server" value="lemontreehostel.com.ar" style="display: none;">
                <input  type="text" name="Nombre" required :placeholder="texts['formulario-placeholder-nombre']">
                <div>
                    <input  type="email" name="Email" required :placeholder="texts['formulario-placeholder-email']">
                    <input type="tel" name="Telefono" required :placeholder="texts['formulario-placeholder-tel']">
                </div>
                <textarea name="Mensaje" required :placeholder="texts['formulario-placeholder-mensaje']"></textarea>
                <div class="g-recaptcha" data-sitekey="6LeZMgIrAAAAAMaBpbiFG9R7gebDJv7ClzTIJt8D" data-action="checkout" data-theme="light" data-callback="enableSubmit"></div>
                <button type="submit">{{ texts["formulario-boton"] }}</button>
                <span ref="successSentForm" class="success" style="display: none;">Form was sent successfully</span>    
                <span ref="errorSentForm" class="error" style="display: none;">Error sending form</span>
            </form>
            <div class="animation">
                <Sprite v-if="anim && anim.frames" :frames="anim.frames" :frame_time="anim.frame_time" />
            </div>
        </div>
    </div>

</template>

<script setup>


    useHead({
        meta: [
            {
            'http-equiv': 'Content-Security-Policy',
            content: "frame-src 'self' https://www.google.com/ https://www.gstatic.com/"
            }
        ],
        script: [
            {
            src: 'https://www.google.com/recaptcha/api.js',
            async: true,
            defer: true
            }
        ]
    });


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

    import { ref, onMounted } from 'vue';
    const form = ref(null);
    const errorSentForm = ref(null);
    const successSentForm = ref(null);
    const anim = ref(null);
    
    async function fetchAnimation() {
        anim.value = await $fetch(`/api/animations?animation=${props.animation + "-" + language.value}`);
    }

    watch(language, ()=> {
        fetchAnimation();
    })

    onMounted(() => {
        
        fetchAnimation();

        form.value.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = new FormData(form.value);
            const res = await fetch("https://halfpipe.dev/mail/send-email", {
                method: "POST",
                body: data,
            })
            if(!res.ok) {
                const errorText = await res.text();
                console.error(`Error sending request: ${res.status}`, errorText)
                errorSentForm.value.style.display = "inline";
                successSentForm.value.style.display = "none";
            } else {
                console.log("Request sent correctly");
                errorSentForm.value.style.display = "none";
                successSentForm.value.style.display = "inline";
                form.value.reset();
            }
        });


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

.g-recaptcha {
    width: auto !important;
    align-self: flex-start;
}

form .error {
    color: red;
    font-size: 12px;
    align-self: flex-start;
}

form .success {
    color: green;
    font-size: 12px;
    align-self: flex-start;
}

</style>