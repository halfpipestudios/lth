<template>
    <Header theme="dark"/>
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer theme="dark" />
    <LoaderTattoo :class="{ 'fade-out': !is_loading }"/>>
</template>

<script setup>
    
    const minimun_duration = 1;
    const is_loading = ref(true);

    onBeforeMount(() => {
        is_loading.value = true;
    });

    onMounted(() => {
        setTimeout(
            ()=>{ is_loading.value = false; }, 
            minimun_duration*1000
        );
    });

</script>

<style scoped lang="scss">

.fade-out {
    animation: .2s fade-out-anim forwards;
}

@keyframes fade-out-anim {
    from {
        opacity: 100%;
    }
    to {
        opacity: 0%;
        display: none;
    }
}

</style>