<template>
    <div>
        <Comic />
    </div>
</template>

<script setup>

    const { $pb } = useNuxtApp();

    onBeforeUnmount(() => {     

    });

</script>

<style scoped>
    div {
        background-color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        color: yellow;
        font-family: "comic";
        font-weight: bold;
        font-style: normal;
    }
    
</style>