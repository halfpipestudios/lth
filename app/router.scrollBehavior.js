import { ref, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const scrollPosition = ref(0);

export function useScrollPosition() {
  const router = useRouter();
  const route = useRoute();

  const saveScrollPosition = () => {
    scrollPosition.value = window.scrollY;
  };

  const restoreScrollPosition = () => {
    window.scrollTo(0, scrollPosition.value);
  };

  // Save scroll position before navigating away
  router.beforeEach((to, from, next) => {
    if (from.name) {
      saveScrollPosition();
    }
    next();
  });

  // Restore scroll position after navigation
  router.afterEach(() => {
    if (route.fullPath === router.currentRoute.value.fullPath) {
      restoreScrollPosition();
    }
  });

  // Cleanup on component unmount
  onBeforeUnmount(() => {
    router.beforeEach(() => {});
    router.afterEach(() => {});
  });

  return {
    saveScrollPosition,
    restoreScrollPosition,
  };
}