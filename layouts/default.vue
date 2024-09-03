<template>
    <Header />
    <Spidey class="spider-anim" />
    <slot />
    <!-- <img class="whatsapp" src="/img/whatsapp.png" alt="whatsapp"> -->
    <Footer />
</template>

<script setup>

</script>

<style scoped lang="scss">

.spider-anim {
 
    @media screen and (max-width: $size-s) {
        display: none;
    }
}

/* .whatsapp {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 11;
} */

</style>