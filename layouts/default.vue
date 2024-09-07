<template>
    <Header />
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer />
    <Loader :class="{ 'fade-out': !is_loading }"/>
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

    useHead({
        title: 'Lemon Tree Hostel',
        meta: [
            { property: 'og:title', content: 'Lemon Tree Hostel' },
            { property: 'og:description', content: 'Reservá en el mejor hostel de Mendoza' },
            { property: 'og:image', content: 'https://lemontreehostel.com.ar/admin/api/files/s1ycqmq3yit5gfm/vr49oclvoujboec/logo_lemon_11Lykl8jRz.png' },
            { property: 'og:url', content: 'https://lemontreehostel.com.ar/' },
            { name: 'description', content: 'Reservá en el mejor hostel de Mendoza' },
            { name: 'keywords', content: 'lemon, hostel, tree, reservar, mendoza' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: 'https://lemontreehostel.com.ar/admin/api/files/s1ycqmq3yit5gfm/vr49oclvoujboec/logo_lemon_11Lykl8jRz.png' }
        ],
    })

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

.whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 8;
    user-select: none;
    cursor: pointer;
}

</style>