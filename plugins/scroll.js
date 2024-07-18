export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = (to, from, savedPosition) => {
        
        if (savedPosition) {
            return savedPosition;
        }
  
        // If there is a hash in the route, scroll to the element with that id
        if (to.hash) {
            return {
            el: to.hash,
            behavior: 'smooth',
            };
        }

        // Default scroll to top
        return { left: 0, top: 0 };
    }
});