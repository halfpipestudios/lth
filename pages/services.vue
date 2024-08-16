<template>

    <section class="services">
        <h1>SERVICIOS DEL HOSTEL</h1>
        <CardCarrousel class="image-carrousel">
            <img v-for="(image, i) in servicios_images" :key="i" :src="image.image" :alt="'image carruzel ' + i"
                class="carrousel-item">
        </CardCarrousel>
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
        <CardSlider database="Carta_Servicios" />
    </section>

    <section class="services">
        <h1>EXCURSIONES</h1>
        <CardCarrousel class="image-carrousel">
            <img v-for="(image, i) in servicios_images" :key="i" :src="image.image" :alt="'image carruzel ' + i"
                class="carrousel-item">
        </CardCarrousel>
        <CardSlider database="Carta_Servicios" />
    </section>

    <section class="services">
        <h1>RESTORÁN</h1>
        <CardCarrousel class="image-carrousel">
            <img v-for="(image, i) in servicios_images" :key="i" :src="image.image" :alt="'image carruzel ' + i"
                class="carrousel-item">
        </CardCarrousel>
        <CardSlider database="Carta_Servicios" />
    </section>



</template>

<script setup>

const { $pb } = useNuxtApp();
const servicios_images = await $pb.get_images_carrousel_servicios();

</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

h1 {
    font-family: comic-smooth;
    font-size: 96px;
    color: white;
    -webkit-text-stroke: 1px black;
    margin: 0;
}

.image-carrousel {
    --aspect-ratio: calc(1338 / 650);
    width: 65%;
    height: initial;
    aspect-ratio: var(--aspect-ratio);
}

.carrousel-item {
    object-fit: cover;
}

.service-grid {

    width: 65%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    gap: 20px;
}
</style>