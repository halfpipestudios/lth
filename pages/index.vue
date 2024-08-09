<template>
    
    <section>
        <FullScreen />
    </section>

    <section class="cards">
        <Card />
        <Card />
        <Card />
    </section>

    <section class="cards">
        <Separator />
    </section>

    <section 
        class="cards"
        style="padding-top: 100px;"
    >
        <Contacto />
    </section>

    <section class="cards last">
        <Maps />
    </section>

</template>

<script setup>
</script>

<style scoped>

    .last {
        padding-bottom: 87px;
    }

    .cards {
        width: 100%;
        background-color: #ededed;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 87px;
        padding-top: 87px;
    }
    
    @media screen and (max-width: 1110px) {
        .cards {
            width: 100%;
            background-color: #ededed;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 17px;
            padding-top: 17px;
        }
    }

</style>