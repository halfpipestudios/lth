<template>
    <Header />
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer />
    <div class="loader-container" ref="loader_container">
        <Loader ref="loader" :class="{ 'fade-out': !is_loading }"/>
    </div>
</template>

<script setup>

    const minimun_duration = 1;
    const is_loading = ref(true);
    const loader_container = ref(null);
    const language = useState('language');

    onBeforeMount(() => {
        is_loading.value = true;
        document.body.style.overflow = 'hidden';
    });

    onMounted(() => {
        
        if(loader_container.value) {
            loader_container.value.addEventListener("animationend", () => {
                loader_container.value.style.display = "none";
                document.body.style.overflow = '';
            });
        }

        setTimeout(
            ()=>{ is_loading.value = false; }, 
            minimun_duration*1000
        );
    });

    useHead({
        title: 'Lemon Tree Hostel',
        htmlAttrs: {
            lang: language.value,
        },
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

.loader-container {
    background-color: transparent;
}

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