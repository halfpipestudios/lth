<template>
    <NuxtLink target="_blank" :href="link" class="room">

        <img :src="image" alt="room image">
    
        <div class="card-info">
            <h2>{{  props.title  }}</h2>
            <p>{{ props.text }}</p>
            
            <div class="card-services">
                <img v-for="(service, index) in props.services" :src="service" :key="index">
            </div>
        
        </div>

    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    text: {
        type: String,
    },
    link: {
        type: String,
    },
    services: {
        type: Array,
        default: () => []
    },
});

const texts = useState('texts');

</script>

<style lang="scss" scoped>

.room {
    text-decoration: none;
    max-width: $size-l;
    height: 600px;
    
    box-sizing: border-box;
    margin: 20px;
    border-radius: 15px;

    background-color: #ECECEC;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;


    overflow: hidden;

    position: relative;

    user-select: none;
    cursor: pointer;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
        border-radius: 10px;
        height: initial;
    }
}

.room:nth-child(even) {
    flex-direction: row-reverse;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
    }
}

.room img {
    width: 50%;
    aspect-ratio: 1;
    
    object-fit: cover;
    object-position: center;


    @media screen and (max-width: $size-s) {
        width: 100%;
    }
}

.card-info {
    
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 40px;

    box-sizing: border-box;
    padding: 40px;

    @media screen and (max-width: $size-s) {
        width: 100%;
        padding: 20px;
        gap: 20px;
    }

}

.card-info h2 {

    text-align: center;
    
    font-family: comic-smooth;
    font-weight: normal;
    color: black;

    padding: 0;
    margin: 0;

    font-size: $fs-l;

    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
    }

}

.card-info p {
    text-align: left;
    
    font-family: comic-smooth;
    font-weight: normal;
    color: black;
    
    font-size: $fs-m;
    padding: 0;
    margin: 0;

    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
    }

}

.card-services {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    row-gap: 40px;

    @media screen and (max-width: $size-s) {
        gap: 10px;
        row-gap: 20px;
    } 
}

// .room:nth-child(even) .card-services {
//     justify-content: flex-end;
// }

.card-services img {
    width: 90px;
    height: 90px;
}

</style>