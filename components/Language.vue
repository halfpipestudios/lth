<template>

<div :class="[theme, 'language-selector']">

    <div class="flag">
        <img :src="flag" :alt="language">
    </div>

    <div class="selector">
        <select v-model="language">
            <option value="es">ESP</option>
            <option value="en">ENG</option>
            <option value="pt">PTR</option>
        </select>
    </div>

    <div class="arrow">
        <img :src="arrow_down" alt="arrow down">
    </div>

</div>


</template>


<script setup>

const language = useState('language');

const props = defineProps({
    theme: {
        type: String,
        default: "light"
    }
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


</script>

<style scoped lang="scss">

.dark .language-selector  {
    background-image: none;
}

.light .language-selector  {
    background-image: none;
}

.dark select {
    color: white;
}

.dark select option {
    background-color: gray;
}

.light select option {
    background-color: white;
}

.language-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 4px;
}

.selector select {
    appearance: none;
    background-color: transparent;
    border: none;
    
    font-family: open-sans;
    font-weight: bold;
    font-size: 20px;

    outline: none;
    cursor: pointer;
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