<template>

<NuxtLink to="https://www.instagram.com/inkplayworld/" target="_blank" class="card">
    
    <NuxtImg format="webp" src="/img/inkplay.png" alt="inkplay" />
    
    <div class="card-info">
        <h2>{{  texts["tattoo-inkplay"]  }}</h2>
        <p>{{ texts["tattoo-inkplay-desc"]  }}</p>
        <p class="instagram">@inkplayworld</p>
    </div>

</NuxtLink>

</template>

<script setup>
const texts = useState('texts');
</script>

<style scoped lang="scss">

.card {

    text-decoration: none;
    max-width: $size-l;

    box-sizing: border-box;
    margin: 20px;
    border-radius: 15px;

    background-color: #323232;

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

.card .instagram {
    
    padding: 0;
    margin: 0;
    
    align-self: flex-end;
    
    text-decoration: underline;

    color: white;
    font-family: comic-smooth;
    
    font-size: $fs-m;

    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
    }
}

.card img {
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
    
    font-family: darkmode;
    font-weight: normal;
    color: white;

    padding: 0;
    margin: 0;

    font-size: 72px;

    @media screen and (max-width: $size-m) {
        font-size: $fs-xl;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-xl;
    }

}

.card-info p {
    text-align: left;
    
    font-family: comic-smooth;
    font-weight: normal;
    color: white;
    
    font-size: $fs-m;
    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
    }
    
}

</style>