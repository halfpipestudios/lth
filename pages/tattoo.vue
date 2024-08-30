<template>

    <div class="tattoo">

        <section>
            <h1>TATT00 STUDI0</h1>
        </section>

        <section>
            <Carousel category="tatuajes"/>
        </section>

        <section>
            <p>{{ texts["tattoo-descripcion"] }}</p>
        </section>

        <section v-if="seminarios_availables == true">
            <div class="sticky-header dark-sticky">
                <h2>{{ texts["tattoo-seminarios-titulo"] }}</h2>
            </div>
            <Blogs category="tatuajes" amount="2" theme="dark" />
        </section>
        
        <section>
            <Form theme="dark" />
        </section>

        <section>
            <Card />
        </section>

    </div>

</template>

<script setup>

definePageMeta({
    layout: 'tattoo'
});

const texts = useState('texts');
const seminarios_availables = ref(false);

const records = await $fetch("/api/blogs?category=tatuajes&start=1&end=1");
if(records.items.length) {
    seminarios_availables.value = true;
}

</script>

<style scoped lang="scss">

.dark-sticky {
    background-color: #323232;
    border-top: 2px solid #5e5e5e;
    border-bottom: 2px solid #5e5e5e;
}

.dark-sticky h2 {
    color: white;
}

.tattoo {
    background-color: #161616;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tattoo section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tattoo h1 {
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    font-family: stamshons;

    padding: 20px;
    padding-top: 40px;

    --tatto-title-size: 96px;
    font-size: var(--tatto-title-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--tatto-title-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        padding: 10px;
        padding-top: 30px;
        font-size: 56px;
    }

}

.tattoo p {

    max-width: $size-l;

    margin: 0;
    color: white;

    text-align: center;
    font-family: open-sans;
    --tattoo-desc-font-size: 36px;
    font-size: var(--tattoo-desc-font-size);

    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 40px;
    
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--tattoo-desc-font-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }

}

</style>