<template>
    <HeaderTattoo />
        <div class="page">
            <slot />
        </div>
        <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp">
    <FooterTattoo />
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
        background-color: #1E1E1E;
        padding-top: 57px;
        padding-bottom: 57px;
    }

    .whatsapp {
        position: fixed;
        bottom: 20px;
        right: 20px
    }

</style>