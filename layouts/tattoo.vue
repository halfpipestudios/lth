<template>
    <Header theme="dark"/>
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer theme="dark" />
    <Loader v-if="is_loading" />
</template>

<script setup>
    const is_loading = ref(true);

    onBeforeMount(() => {
        console.log("start loading page")
        is_loading.value = true;
    });

    onMounted(() => {
        console.log("finish loading page")
        is_loading.value = false;
    });
</script>