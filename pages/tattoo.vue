<template>

    <div class="tattoo">

        <section>
            <h1>TATT00</h1>
        </section>

        <section>
            <Carousel category="tatuajes"/>
        </section>

        <section>
            <p>{{ texts["tattoo-descripcion"] }}</p>
        </section>

        <section>
            <Form theme="dark" />
        </section>

    </div>

</template>

<script setup>

definePageMeta({
    layout: 'tattoo'
});

const texts = useState('texts');

</script>

<style scoped lang="scss">

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
    font-size: 96px;
}

.tattoo p {

    max-width: $size-l;

    margin: 0;
    padding: 0;
    color: white;

    text-align: center;
    font-family: open-sans;
    --tattoo-desc-font-size: 36px;
    font-size: var(--tattoo-desc-font-size);

    box-sizing: border-box;
    padding: 40px;

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--tattoo-desc-font-size) * 0.8);
        padding: 20px;
    }

}

</style>