<template>

<div ref="language_selector" :class="[theme, 'language-selector']">

    <div class="flag">
        <img :src="flag" :alt="language">
    </div>

    <div class="selector">
        <div class="text">{{ language_text }}</div>
    </div>

    <div class="arrow">
        <img :src="arrow_down" alt="arrow down">
    </div>

    <div ref="language_modal_container" class="language_modal_container">
        <div ref="language_modal" class="language_modal">

            <NuxtImg class="background" :src="background" format="webp" />

            <div @click="(e) => set_language(e,'es')" class="language_option">
                <img src="/img/flag_es.svg" :alt="language">
                <p>ES</p>
            </div>
            <div @click="(e) => set_language(e,'en')" ref="en_button" class="language_option">
                <img src="/img/flag_en.svg" :alt="language">
                <p>EN</p>
            </div>
            <div @click="(e) => set_language(e,'pt')" ref="pt_button" class="language_option">
                <img src="/img/flag_pt.svg" :alt="language">
                <p>PT</p>
            </div>
        </div>
    </div>

</div>


</template>


<script setup>

const language = useState('language');
const language_selector = ref(null);
const language_modal = ref(null);
const language_modal_container = ref(null);

let language_modal_is_open = false;

const props = defineProps({
    theme: {
        type: String,
        default: "light"
    },
    callback: {
        type: Function,
        default: null
    }
});

const language_text = computed(() => {
    if(!language.value) return;
    return String(language.value).toUpperCase();
});

const flag = computed(() => {
    switch(language.value) {
        case "es": return "/img/flag_es.svg";
        case "en": return "/img/flag_en.svg";
        case "pt": return "/img/flag_pt.svg";
    }
});

const arrow_down = computed(() => {
    return props.theme === "dark" ? "/img/lang_arrow_down_tattoo.svg" : "/img/lang_arrow_down.svg";
});

function open_language_modal(e) {
    if(!language_modal_container.value) return;

    if(language_modal_is_open) return;
    language_modal_is_open = true;
    language_modal_container.value.style.display = "flex";
    e.stopPropagation();
}

function close_language_modal(e) {
    if(!language_modal.value) return;

    if(!language_modal_is_open) return;
    language_modal_is_open = false;
    language_modal_container.value.style.display = "none";
    e.stopPropagation();
}

function set_language(e, lang) {
    if(!language_modal.value) return;
    language.value = lang;
    close_language_modal(e)

    if(props.callback !== null) {
        props.callback();
    }
}

onMounted(() => {
    language_selector.value.addEventListener("click", open_language_modal);
    language_modal_container.value.addEventListener("click", close_language_modal);
});

const background = computed(() => {
    return props.theme === "dark" ? "/img/paper_back_tatto.jpg" : "/img/paper_back.jpg";
});

</script>

<style scoped lang="scss">

.language_modal_container {

    display: none;

    background-color: rgba(0,0,0,0.7);
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;

    display: none;
    align-items: center;
    justify-content: center;

    z-index: 6;
}

.language_modal .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: top;
    background-repeat: no-repeat;

    z-index: 0;
}

// .dark .language_modal {
//     background-image: url(/img/paper_back_tatto.jpg);
// }

// .light .language_modal {
//     background-image: url(/img/paper_back.jpg);
// }

.language_modal {

    background-color: gray;
    // background-image: url(/img/paper_back.jpg);
    // background-size: cover;
    // background-position: top;
    // background-repeat: no-repeat;

    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 20px;

    position: relative;
}

.language_option {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;

    z-index: 1;
}

.dark .language_option p {
    color: white;
}

.light .language_option p {
    color: black
}

.language_option p {
    font-family: open-sans;
    font-weight: bold;
    font-size: 20px;

    margin: 0;
    padding: 0;
}

.dark .language-selector  {
    background-image: none;
}

.light .language-selector  {
    background-image: none;
}

.language-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    user-select: none;
}

.dark .selector .text {
    color: white;
}

.light .selector .text {
    color: black;
}

.selector .text {
    font-family: open-sans;
    font-weight: bold;
    font-size: 20px;
}

.flag {
    display: flex;
    align-items: center;
    justify-content: center;
}

.arrow {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>