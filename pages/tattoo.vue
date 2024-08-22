<template>

    <div class="tattoo">

        <section>
            <h1>TATT00</h1>
        </section>

        <section>
            <CardTattoo />
        </section>

        <section>
            <CardImages />
        </section>

        <section>
            <CardCarrousel class="seminar-carrousel">
                <CardTattooSeminar v-for="(seminario, i) in seminarios" :key="i" :image="seminario.image"
                    :artist="seminario.title" :text="seminario.text" class="carrousel-item" />
            </CardCarrousel>
        </section>

    </div>

</template>

<script setup>

definePageMeta({
    layout: 'tattoo'
});

const { $database } = useNuxtApp();
const language = useState("language");

let seminarios = ref([]);

seminarios.value = await $database.cards("Seminarios", {start: 1, end: 50});
watch(language, async () => { seminarios.value = await $database.cards("Seminarios", {start: 1, end: 50}) });


</script>

<style scoped>

.tattoo {
    background-color: #161616;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.tattoo section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}


.tattoo h1 {
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: stamshons;
    font-size: 96px;
}

@media screen and (max-width: 1110px) {
    .seminar-carrousel {
        aspect-ratio: calc(271 / 395);
        width: 65%;
        height: auto;
    }
}


</style>