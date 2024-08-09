<template>
    <div class="card">
        <div class="card-text-container">
            <h2>¿DONDE ESTAMOS?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae maxime asperiores deserunt, velit nobis, autem dolorem accusamus quasi eaque reiciendis laboriosam exercitationem molestias placeat eius sed ipsum! Laudantium temporibus sint officia quod esse nam, cupiditate voluptatibus labore, accusantium earum nihil?</p>
        </div>
        <div class="card-text-container">
            <iframe
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Lemon%20Tree%20Hostel,%20Mendoza+(Lemon%20Tree%20Hostel)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
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
        justify-content: flex-start;

        overflow: hidden;
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
            
            overflow: hidden;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .card iframe {
            height: 400px;
            aspect-ratio: 1;
        }

        .card-text-container {
            width: 100%;
            height: 50%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
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