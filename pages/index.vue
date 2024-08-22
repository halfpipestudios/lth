<template>

    <div class="home">

        <section>
            <FullScreen />
        </section>

        <section>
            <CardSlider database="Carta_Inicio"/>
        </section>

        <section>
            <Separator />
        </section>

        <section>
            <Maps />
        </section>

    </div>

</template>


<style scoped>

.home {
    background-color: #EDEDED;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
    padding-bottom: 40px;
}

.home section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

</style>