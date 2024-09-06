export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        const nuxtApp = useNuxtApp()
        const event = nuxtApp.ssrContext?.event
        if (event) {
            const acceptLanguage = event.node.req.headers['accept-language']
            let lang_ext = "en";
            if (acceptLanguage) {
                const preferredLanguage = acceptLanguage.split(',')[0];
                lang_ext = preferredLanguage.toString().split('-')[0];
            }
            useState('language', () => lang_ext)
        } else {
            useState('language', () => "en")
        }
    }
});