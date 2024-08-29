<template>
    <div class="map">
        <div class="container-max">
            <div class="map-info">
                <h2>{{ texts["home-maps-titulo"] }}</h2>
                <p>{{ texts["home-maps-texto"] }}</p>
            </div>
            
            <iframe 
            width="100%" height="600" 
            frameborder="0" scrolling="no" 
            marginheight="0" marginwidth="0" 
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=lemon%20tree%20hostel+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">    
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
    }
}

</style>