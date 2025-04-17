export default defineNuxtPlugin(async (nuxtApp) => {

    const { data: repo } = await useAsyncData('language-repo', () => $fetch("/api/texts"));
    const language = useState('language');
    if(!language.value) {
        language.value = "es"
    } 
    const language_repo = useState('laguage-repo', () => repo);

    function update_texts_language() {
        let texts = {};
        for (const text of language_repo.value) {
            texts[text.Nombre] = text[language.value];
        }
        return texts;
    }

    const texts = useState('texts', update_texts_language);

    watch(language, (newValue, oldValue) => {
        if (language !== undefined) {
            texts.value = update_texts_language();
        }
    })

})