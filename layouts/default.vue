<template>
    <Header />
    <Spidey />
    <slot />
    <Whatsapp />
    <Footer />
</template>

<script setup>

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