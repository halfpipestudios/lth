// plugins/pocketbase.js
import PocketBase from 'pocketbase';

export default defineNuxtPlugin(async () => {
    const pb = new PocketBase('http://127.0.0.1:8090');

    const cookie = useCookie('pb_auth', {
        path:     '/',
        secure:   true,
        sameSite: 'strict',
        httpOnly: false, // change to "true" if you want only server-side access
        maxAge:   604800,
    })

    // load the store data from the cookie value
    pb.authStore.save(cookie.value?.token, cookie.value?.model);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    pb.authStore.onChange(() => {
    cookie.value = {
        token: pb.authStore.token,
        model: pb.authStore.model,
    };
    });

    return {
        provide: { pb }
    }
});