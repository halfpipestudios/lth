<template>
    <div class="room">

        <img :src="image" alt="room image">
    
        <div class="card-info">
            <h2>{{  props.title  }}</h2>
            <p>{{ props.text }}</p>
        </div>

    </div>
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
});

const texts = useState('texts');

</script>

<style lang="scss" scoped>

.room {
    text-decoration: none;
    max-width: $size-l;

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

    @media screen and (max-width: $size-s) {
        width: 100%;
    }
}

.card-info {
    
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    box-sizing: border-box;
    padding: 40px;

    @media screen and (max-width: $size-s) {
        width: 100%;
        padding: 20px;
    }
}

.card-info h2 {
    
    text-align: center;
    
    font-family: comic;
    font-weight: bold;
    color: black;

    padding: 0;
    margin: 0;

    --card-h2-size: 38px;
    font-size: var(--card-h2-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--card-h2-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }

}

.card-info p {
    text-align: left;
    
    font-family: open-sans;
    font-weight: normal;
    color: black;
    
    --card-p-size: 24px;
    font-size: var(--card-p-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--card-p-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 18px;
    }
    
}


</style>