<template>
    <CardBase>
        <div class="text-container">
            <h2>¿DONDE ESTAMOS?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eos voluptate officiis sint autem atque corporis. Quae totam architecto ullam?</p>
        </div>
        <div class="map-container">
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
    </CardBase>
</template>

<script setup>
</script>

<style scoped>


    .map-container {
        width: 50%;
        height: 100%;
    }

    .text-container  {
        width: 50%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .text-container h2 {
        font-size: clamp(20px, 2vw, 36px);
        font-family: comic;
        font-weight: bold;
        text-align: center;

        margin: 0;
        padding: 20px;
        margin-left: 20px;

    }

    .text-container p {
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
            height: 500px;
        }

        .card iframe {
            height: 100%;
            aspect-ratio: 1;
        }

        .map-container {
            width: 100%;
            height: 50%;
        }

        .text-container {
            width: 100%;
            height: 50%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            padding: 10px;
            box-sizing: border-box;
        }

        .text-container h2 {
            font-size: 20px;
            margin: 0;
            padding-bottom: 0;
        }

        .text-container p {
            font-size: 15px;
            margin: 0;
        }
    }

</style>