export default defineNuxtPlugin(async (nuxtApp) => {

    // Fetch all texts from database
    const { data, error } = await useFetch('/api/texts');
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

    function translate(cards) {
        for (let card of cards) {
            card["title"] = card["Nombre_" + language.value];
            card["text"] = card["Texto_" + language.value];
        }
        return cards;
    }

    const database = {
        cards: async (db, interval) => {
            console.log("trying to get cards!");
            try {
                const records = await $fetch(`/api/cards?database=${db}&start=${interval.start}&end=${interval.end}`);
                return translate(records.items);
            } catch (error) {
                return [];
            }
        },

        carrousels: async (db) => {
            console.log("trying to get images!");
            try {
                const records = await $fetch(`/api/carrousels?database=${db}`);
                return records;
            } catch (error) {
                return [];
            }
        },

    };

    return {
        provide: {
            database
        },
    };

})