<template>
    <div class="tattoo-page">
        
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
                    artist="José"
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

            
            <CardBase></CardBase>

        </section>

    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'custom'
    });
</script>

<style scoped>

    .tattoo-page {
        background-color: #1E1E1E;
    }

    .title h1 {
        color: white;
        margin: 0;
        padding: 0;
        text-align: center;
        font-family: stamshons;
        font-size: 96px;
        padding: 57px;
    }

    .cards {
        width: 100%;
        background-color: #1E1E1E;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 87px;
    }

</style>