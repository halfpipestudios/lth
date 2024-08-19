<template>

    <section>
        <FullScreen />
    </section>

    <section class="cards">
        <CardSlider database="Carta_Inicio"/>
        <Separator />
        <Maps />
    </section>

</template>


<style scoped>
.cards {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 57px;
    padding-top: 57px;
    overflow: hidden;
}
</style>