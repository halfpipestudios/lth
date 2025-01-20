<template>

    <div class="restaurant">
        <section>
            <FullScreenVideo 
                :video="video.data.value"
            />
        </section>
     
        <section>
            <div class="sticky-header">
                <h2>{{ texts["restaurant-titulo"] }}</h2>
            </div>
            <Carrousel category="restaurant"/>
            <p>{{ texts["restaurant-desc"] }}</p>
            <div class="sticky-header">
                <h2>{{ texts["restaurant-blogs-title"] }}</h2>
            </div>
            <Blogs category="restaurant" amount="2" />
        </section>
    </div>

</template>

<script setup>

const texts = useState('texts');
const video = await useFetch("/api/videos?name=video-restaurant", { server:true });

</script>

<style scoped lang="scss">

.restaurant {
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0px;
}

.restaurant section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative
}


.restaurant p {
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