<template>
    <HeaderDesktop class="desktop" :theme="theme"/>
    <HeaderMobile class="mobile" :theme="theme"/>
</template>

<script setup>

    const props = defineProps({
        theme: {
            type: String,
            default: "light"
        }
    });

</script>

<style scoped lang="scss">

.desktop {
    display: block;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: $size-s) {
        display: none;
    }
}

.mobile {
    display: none;
    z-index: 10;
    @media screen and (max-width: $size-s) {
        display: block;
    }
}

</style>