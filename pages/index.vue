<template>
    <div class="main">
        <Spidey />
        <Comic />
    </div>
</template>

<script setup>

    const { $pb } = useNuxtApp();

    onBeforeUnmount(() => {     

    });

</script>

<style scoped>
    .main {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>