<template>
    <Header />
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer />
</template>

<script setup>

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

.whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 8;
    user-select: none;
    cursor: pointer;
}

</style>