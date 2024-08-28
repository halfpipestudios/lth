<template>

    <div class="services">

        <section>
            <h1>Servicios del hostel</h1>
            <Carousel category="servicios"/>
            <Blogs category="servicios" amount="2" />
        </section>

        <section>
            <h1>Excursiones</h1>
            <Carousel category="excursiones"/>
            <Blogs category="excursiones" amount="2" />
        </section>

        <section>
            <h1>Restaurant</h1>
            <Carousel category="restaurant"/>
            <Blogs category="restaurant" amount="2" />
        </section>

    </div>

</template>

<style scoped lang="scss">

.services {
    background-color: #EDEDED;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0px;
}

.services section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

section h1 {
    text-align: center;
    font-family: open-sans;
    font-size: 64px;
    color: black;
    margin: 0;
    padding: 0;
}


</style>



