export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        const nuxtApp = useNuxtApp()
        const event = nuxtApp.ssrContext?.event
        if (event) {
            const acceptLanguage = event.node.req.headers['accept-language']
            if (acceptLanguage) {
                const preferredLanguage = acceptLanguage.split(',')[0];
                let lang_ext = preferredLanguage.toString().split('-')[0];

                // TODO: fetch abailables languages on database
                if(lang_ext !== "en" && lang_ext !== "es" && lang_ext !== "pt") {
                    lang_ext = "en";
                }
                useState('language', () => lang_ext)
            }
        }
    }
});