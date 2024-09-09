<template>
    <div class="loader-container" ref="loader_container">
        <LoaderTattoo ref="loader" :class="{ 'fade-out': !is_loading }"/>
    </div>
    <Header theme="dark"/>
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer theme="dark" />
</template>

<script setup>
    
    const minimun_duration = 1;
    const is_loading = ref(true);
    const loader_container = ref(null);

    onBeforeMount(() => {
        is_loading.value = true;
    });

    onMounted(() => {

        if(loader_container.value) {
            loader_container.value.addEventListener("animationend", () => {
                loader_container.value.style.display = "none";
            });
        }

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
    }
}

</style>