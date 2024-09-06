export default defineNuxtPlugin(async (nuxtApp) => {

    // Fetch all texts from database
    const { data, error } = await useFetch('/api/texts', { server: true });
    const language = useState('language');
    const language_repo = useState('laguage-repo', () => data.value);

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