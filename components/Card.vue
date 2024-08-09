<template>
    <CardBase>
        <img src="/img/garden.png" alt="pool card">
        <div>
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem molestias placeat eius sed ipsum! Laudantium temporibus sint officia quod esse nam, cupiditate voluptatibus labore, accusantium earum nihil?</p>
        </div>
    </CardBase>
</template>

<style scoped>
    
    h2 {
        font-size: clamp(20px, 2vw, 36px);
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
        padding: 40px 40px 20px 40px
    }

    p {
        font-size: clamp(10px, 1.2vw, 24px);
        font-family: open-sans;
        font-weight: normal;
        text-align: left;

        margin: 0;
        padding: 20px 40px 40px 40px;
    }

    img {
        width: 50%;
        height: 100%;
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
        
        h2 {
            font-size: 20px;
            font-family: comic;
            font-weight: bold;
            text-align: center;

            margin: 0;
        }

        p {
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