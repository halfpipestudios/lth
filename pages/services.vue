<template>

    <div class="services">

        <section>
            <h1>SERVICIOS DEL HOSTEL</h1>
            <ImageCarrousel database="Carrusel_Servicios"/>
            <CardSlider database="Carta_Servicios" />
        </section>

        <section>
            <h1>EXCURSIONES</h1>
            <ImageCarrousel database="Carrusel_Excursiones"/>
            <CardSlider database="Carta_Servicios" />
        </section>

        <section>
            <h1>RESTORÁN</h1>
            <ImageCarrousel database="Carrusel_Restoran"/>
            <CardSlider database="Carta_Servicios" />
        </section>


    </div>

</template>

<style scoped>


.services {
    background-color: #EDEDED;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.services section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

h1 {
    font-family: comic-smooth;
    font-size: 96px;
    color: black;
    /* -webkit-text-stroke: 1px black; */
    margin: 0;
}


@media screen and (max-width: 1110px) {

    h1 {
        font-size: 63px;
        text-align: center;
        padding: 20px;
    }

}

</style>