export default defineNuxtPlugin(async (nuxtApp) => {

    if (import.meta.client) {
        return;
    }

    console.log("Setting up languages ...")

    const language_repo = useState('language-repo', () => []);

    try {
        const data = await useNuxtApp().$pb.collection('Textos').getFullList();
        language_repo.value = data || [];    
    } catch(error) {
        console.log("Error fetching texts: ", + error)
    }

    // Fetch all texts from database
    //const data = await $fetch('/api/texts');
    const language = useState('language');
    const texts = useState('texts', update_texts_language);

    function update_texts_language() {
        let texts = {};
        for (const text of language_repo.value) {
            texts[text.Nombre] = text[language.value];
        }
        return texts;
    }

    watch(language, (newValue, oldValue) => {
        if (language !== undefined) {
            texts.value = update_texts_language();
        }
    })
    console.log("language repo setup")
})