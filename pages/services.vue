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
                <h2>{{ texts["servicios-servicio01"] }}</h2>
            </div>
            <Carrousel category="servicio01"/>
            <p>{{ texts["servicios-servicio01-desc"] }}</p>
            <Blogs category="servicio01" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>{{ texts["servicios-servicio02"] }}</h2>
            </div>
            <Carrousel category="servicio02"/>
            <p>{{ texts["servicios-servicio02-desc"] }}</p>
            <Blogs category="servicio02" amount="2" />
        </section>

        <section>
            <div class="sticky-header">
                <h2>{{ texts["servicios-servicio03"] }}</h2>
            </div>
            <Carrousel category="servicio03"/>
            <p>{{ texts["servicios-servicio03-desc"] }}</p>
            <Blogs category="servicio03" amount="2" />
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
    font-family: comic-smooth;
    font-size: $fs-m;

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
        padding: 20px;
    }
}

</style>



