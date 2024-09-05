<template>
    <Header />
    <Spidey />
    <slot />
    <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp">
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