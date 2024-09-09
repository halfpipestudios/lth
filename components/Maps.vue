<template>
    <div class="map">
        <div class="container-max">
            <div class="map-info">
                <h2>{{ texts["home-maps-titulo"] }}</h2>
                <p>{{ texts["home-maps-texto"] }}</p>
            </div>
            
            <iframe 
                title="google maps iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.6539142841116!2d-68.92890212340764!3d-33.01289867523959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967de012503d9fe3%3A0x3586092b29850689!2sLemon%20Tree%20Hostel!5e0!3m2!1ses-419!2sar!4v1725896525101!5m2!1ses-419!2sar" 
                width="100%" height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>

        </div>
    </div>
</template>

<script setup>
const texts = useState("texts");
</script>   

<style scoped lang="scss">

.map {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.map .container-max{
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 100%;
    max-width: $size-l;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
    }
}

.map iframe {
    aspect-ratio: 1;
    --map-iframe-height: 600px;
    height: var(--map-iframe-height);
    width: auto;
    
    flex-shrink: 0;

    margin-right: 40px;

    @media screen and (max-width: $size-m) {
        height: calc(var(--map-iframe-height) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        height: auto;
        width: 100%;
        margin-right: 0;
    }
}

.map-info {
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;

    margin: 40px;

    @media screen and (max-width: $size-s) {
        margin: 20px;
    }
}

.map-info h2 {

    margin: 0;
    padding: 0;

    text-align: center;
    font-family: comic;
    font-weight: bold;

    --map-title-font-size: 48px;
    font-size: var(--map-title-font-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--map-title-font-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }
}

.map-info p {
    font-family: open-sans;
    font-weight: normal;
    
    --map-p-font-size: 36px;
    font-size: var(--map-p-font-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--map-p-font-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 20px;
        text-align: center;
    }
}

</style>