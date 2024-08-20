<template>
    <Header />
    <div class="page">
        <slot />
    </div>
    <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp">
    <Footer />
</template>

<script setup>

</script>

<style scoped>
Header {
    z-index: 10;
}

Footer {
    z-index: 10;
}

.page {
    z-index: 0;
    background-color: #ededed;
    padding-bottom: 57px;
}

.comic-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 100vh;
    z-index: 1;
}

.whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 11;

}
</style>