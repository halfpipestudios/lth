<template>

    <div class="services">

        <section>
            <div class="sticky-header">
                <h2>Servicios del hostel</h2>
            </div>
            <Carousel category="servicios"/>
            <Services />
            <Blogs category="servicios" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>Excursiones</h2>
            </div>
            <Carousel category="excursiones"/>
            <Blogs category="excursiones" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>Restaurant</h2>
            </div>
            <Carousel category="restaurant"/>
            <Blogs category="restaurant" amount="2" />
        </section>

    </div>

</template>

<style scoped lang="scss">

.services {
    background-color: #ffffff;

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

    position: relative
}


</style>



