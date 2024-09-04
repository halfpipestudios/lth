<template>

    <div class="services">

        <section>
            <div class="sticky-header">
                <h2>{{ texts["servicios-servicios-titulo"] }}</h2>
            </div>
            <Carrousel category="servicios"/>
            <p>{{ texts["servicios-servicios-desc"] }}</p>
            <Services />
            <Blogs category="servicios" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>{{ texts["servicios-excursiones-titulo"] }}</h2>
            </div>
            <Carrousel category="excursiones"/>
            <p>{{ texts["servicios-excursiones-desc"] }}</p>
            <Blogs category="excursiones" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>{{ texts["servicios-restaurant-titulo"] }}</h2>
            </div>
            <Carrousel category="restaurant"/>
            <p>{{ texts["servicios-restaurant-desc"] }}</p>
            <Blogs category="restaurant" amount="2" />
        </section>

    </div>

</template>

<script setup>
const texts = useState('texts');
</script>

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


.services p {
    max-width: $size-l;
    margin: 0;
    padding: 0;
    color: black;

    text-align: center;
    font-family: open-sans;
    --tattoo-desc-font-size: 36px;
    font-size: var(--tattoo-desc-font-size);

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--tattoo-desc-font-size) * 0.8);
        padding: 20px;
    }

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }

}

</style>



