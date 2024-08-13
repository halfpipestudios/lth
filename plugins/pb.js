import PocketBase from 'pocketbase';

export default defineNuxtPlugin((nuxtApp) => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    pb.autoCancellation(false);
    return {
        provide: {
          pb,
        },
      };
});
