export default defineNuxtPlugin(async (nuxtApp) => {


    let lang_ext = "en";
    const event =  useNuxtApp().ssrContext?.event
    if (event) {
        const acceptLanguage = event.node.req.headers['accept-language']
        if (acceptLanguage) {
            const preferredLanguage = acceptLanguage.split(',')[0];
            lang_ext = preferredLanguage.toString().split('-')[0];
        }
    }

    const { data: repo } = await useAsyncData('language-repo', () => $fetch("/api/texts"));
    const language_repo = useState('laguage-repo', () => repo);
    const language = useState('language', () => lang_ext);

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