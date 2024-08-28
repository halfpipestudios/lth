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
    height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.map .container-max{
    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;

    width: 100%;
    max-width: $size-l;

}

.map iframe {
    width: 50%;
    height: 100%;
    flex-shrink: 0;
}

.map-info {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.map-info h2 {
    font-family: comic;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
}

.map-info p {
    font-family: open-sans;
    font-weight: normal;
    font-size: 36px;
}

</style>