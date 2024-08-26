<template>
    <Header theme="dark"/>
        <div class="page">
            <slot />
        </div>
        <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp">
    <Footer theme="dark" />
</template>

<script setup>
</script>

<style scoped>

    .whatsapp {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 11;
    }

</style>