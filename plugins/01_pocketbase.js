import PocketBase from 'pocketbase';

export default defineNuxtPlugin((nuxtApp) => {
    if (import.meta.client) {
        return;
    }

    const pb = new PocketBase(process.env.POCKETBASE_URL);
    pb.autoCancellation(false);

    console.log("pocketbase plugin setup! at: " + process.env.POCKETBASE_URL)
    nuxtApp.provide('pb', pb);
});