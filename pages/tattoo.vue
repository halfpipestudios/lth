<template>
        
    <section class="title">
        <h1>TATT00</h1>
    </section>

    <section class="cards">
        
        <CardTattoo />
        <CardImages />
        
        <CardCarrousel>
            <CardTattooSeminar 
                class="carrousel-item"
                image="/img/profile1.jpg"
                artist="Jose"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab sint, impedit dignissimos labore doloribus fuga ea facilis illum delectus?"
            />
            <CardTattooSeminar 
                class="carrousel-item"
                image="/img/profile2.jpg"
                artist="Tomas"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab sint, impedit dignissimos labore doloribus fuga ea facilis illum delectus?"
            />
            <CardTattooSeminar 
                class="carrousel-item"
                image="/img/profile3.jpg"
                artist="Gonzalo"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ab sint, impedit dignissimos labore doloribus fuga ea facilis illum delectus?"
            />
        </CardCarrousel>

    </section>

</template>

<script setup>
    definePageMeta({
        layout: 'custom'
    });
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