
export default {
    scrollBehavior(to, from, savedPosition) {
        console.log(savedPosition);
        if (savedPosition) {
            return savedPosition;
        } else {
            return {
                top: 0,
            };
        }
    }
};