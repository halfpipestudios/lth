<template>
    <div class="service-page-container">
        <h1>Nuestros Servicios</h1>
        <div class="service-grid">
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .service-page-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .service-grid {

        width: 80%;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        gap: 20px;
        
        padding: 20px;
        
    }
</style>