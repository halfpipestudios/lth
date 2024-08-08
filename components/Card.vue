<template>
    <div class="card">
        <div class="card-image">
            <img src="/img/garden.png" alt="pool card">
        </div>
        <div class="card-text-container">
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem molestias placeat eius sed ipsum! Laudantium temporibus sint officia quod esse nam, cupiditate voluptatibus labore, accusantium earum nihil?</p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .card {
        --card-aspec-ratio: calc(1338 / 600);

        background-color: #ffffff;
        width: 75%;
        aspect-ratio: var(--card-aspec-ratio);

        max-height: 600px;
        max-width: 1338px;

        border-radius: 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }

    .card:nth-child(even) {
        flex-direction: row-reverse;
    }

    .card-image {
        width: 50%;
        height: 100%;
    }

    .card-image img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }

    .card-text-container {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .card-text-container h2 {
        font-size: clamp(20px, 2vw, 36px);
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
        padding: 20px;
        margin-left: 20px;

    }

    .card-text-container p {
        font-size: clamp(10px, 1.2vw, 24px);
        font-family: open-sans;
        font-weight: normal;
        text-align: left;

        margin: 0;
        padding: 20px;
        margin-left: 20px;

    }

    @media screen and (max-width: 1110px) {
        .card {
            height: initial;
            min-width: 290px;
            max-height: initial;
            max-width: 400px;
            aspect-ratio: initial;
            
            overflow: initial;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .card-image {
            width: 100%;
            height: 290px;
            
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;

            display: flex;
            align-items: center;
            justify-content: center;

            overflow: hidden;

        }

        .card-image img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }

        .card-text-container {
            width: 100%;
            height: auto;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }

        .card:nth-child(even) {
            flex-direction: column;
        }

        .card-text-container h2 {
            font-size: 20px;
            padding: 10px 10px 0px 10px;

        }

        .card-text-container p {
            font-size: 15px;
            padding: 10px 10px 10px 10px;
        }

    }

</style>