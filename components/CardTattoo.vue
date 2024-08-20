<template>
    <CardBase>
        <img src="/img/tattoo1.jpg" alt="tattoo card">
        <div>
            <h2 class="card-title">{{ texts["tattoo-carta-titulo"] }}</h2>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores
                deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem
                molestias placeat eius sed ipsum!</p>
        </div>
    </CardBase>
</template>

<script setup>

const texts = useState("texts");

</script>

<style scoped>
.card {
    background-color: #323232;
    color: white;
}

.card-title {
    font-size: clamp(24px, 2vw, 36px);
    font-family: stamshons;
    font-weight: normal;
    text-align: center;

    margin: 0;
    padding: 40px 40px 20px 40px
}

.card-text {
    font-size: clamp(16px, 1.2vw, 24px);
    font-family: open-sans;
    font-weight: normal;
    text-align: left;

    margin: 0;
    padding: 20px 40px 40px 40px;
}

img {
    width: 50%;
    height: 100%;
    object-fit: cover;
}

.card div {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card:nth-child(even) {
    flex-direction: row-reverse;
}

@media screen and (max-width: 1110px) {

    .card-title {
        font-size: 20px;
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
    }

    .card-text {
        font-size: 15px;
        font-family: open-sans;
        font-weight: normal;
        text-align: left;

        margin: 0;
    }

    img {
        aspect-ratio: 1;
        width: 100%;
        height: auto;
    }

    .card div {
        width: 100%;
        height: auto;
    }

    .card:nth-child(even) {
        flex-direction: column;
    }

}
</style>