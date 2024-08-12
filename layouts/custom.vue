<template>
    <HeaderTattoo />
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
    }

    .whatsapp {
        position: fixed;
        bottom: 20px;
        right: 20px
    }

</style>