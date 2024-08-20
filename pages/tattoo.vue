<template>

    <section class="title">
        <h1>TATT00</h1>
    </section>

    <section class="cards">

        <CardTattoo />
        <CardImages />

        <CardCarrousel>
            <CardTattooSeminar v-for="(seminario, i) in seminarios" :key="i" :image="seminario.image"
                :artist="seminario.title" :text="seminario.text" class="carrousel-item" />
        </CardCarrousel>

    </section>

</template>

<script setup>

definePageMeta({
    layout: 'custom'
});

const { $database } = useNuxtApp();
const language = useState("language");
const texts = useState("texts");

let interval = ref({ start: 1, end: 50 });
let seminarios = ref([]);

seminarios.value = await $database.cards("Seminarios", interval.value);
watch(language, async () => { seminarios.value = await $database.cards("Seminarios", interval.value) });


</script>

<style scoped>
.title h1 {
    color: white;
    margin: 0;
    padding: 0;
    margin-bottom: 57px;
    text-align: center;
    font-family: stamshons;
    font-size: 96px;
}

.cards {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 57px;
}
</style>