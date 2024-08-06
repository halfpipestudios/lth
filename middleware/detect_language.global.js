export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.server) {
        const nuxtApp = useNuxtApp()
        const event = nuxtApp.ssrContext?.event
        if (event) {
            const acceptLanguage = event.node.req.headers['accept-language']
            if (acceptLanguage) {
                const preferredLanguage = acceptLanguage.split(',')[0] // Get the first preferred language
                // You can now set this language to a global state or context
                useState('preferredLanguage', () => preferredLanguage)
            }
        }
    }
});