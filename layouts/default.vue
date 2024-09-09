<template>
    <div class="loader-container" ref="loader_container">
        <Loader ref="loader" :class="{ 'fade-out': !is_loading }"/>
    </div>
    <Header />
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer />
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

    const { data: seo } = await useFetch("/api/seo?layout=default", { server:true });

    useHead({
        title: seo.value.Titulo,
        htmlAttrs: {
            lang: language.value,
        },
        meta: [
            { property: 'og:title', content: seo.value.Titulo },
            { property: 'og:description', content: seo.value.Descripcion },
            { property: 'og:image', content: seo.value.image },
            { property: 'og:url', content: seo.value.Url },
            { name: 'description', content: seo.value.Descripcion },
            { name: 'keywords', content: seo.value.Keywords }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: seo.value.image }
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