<template>

<div class="artist">
    <NuxtLink class="container-max" :to="link" target="_blank">
        <img :src="image">
        <div class="info">
            <div class="flag-name">
                <span :class="`fi fi-${flag}`" style="width: 64px; height: 48px;" />
                <h2>{{ name }}</h2>
            </div>
            <p>{{ text }}</p>
        </div>
    </NuxtLink>
</div>

</template>

<script setup>

    const props = defineProps({
        name: {
            type: String,
        },
        text: {
            type: String,
        },
        image: {
            type: String,
        },
        link: {
            type: String,
        },
        flag: {
            type: String,
        },
    });

</script>

<style scoped lang="scss">

.flag-name {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

.artist {
    width: 100%;
    
    background-color: #323232;

    display: flex;
    align-items: center;
    justify-content: center;
}

.artist:nth-child(even) {
    background-color: transparent;
}

.artist .container-max {
    width: 100%;
    height: 100%;
    max-width: $size-l;;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    gap: 40px;
    margin: 40px;

    text-decoration: none;
    color: white;
    font-family: comic-smooth;
    font-weight: normal;

    cursor: pointer;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
        gap: 20px;
        margin: 20px;
    }
}

.artist img {
    width: 260px;
    height: 260px;
    border-radius: 50%;
    object-fit: cover;
  
    @media screen and (max-width: $size-s) {
    }

}

.artist .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 40px;

    @media screen and (max-width: $size-s) {
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
}

.artist h2 {
    padding: 0;
    margin: 0;

    font-family: darkmode;
    font-weight: normal;

    font-size: $fs-xxl;
    @media screen and (max-width: $size-s) {
        font-size: $fs-xl;
    }
}

.artist p {
    padding: 0;
    margin: 0;

    text-align: left;
    font-size: $fs-m;
    @media screen and (max-width: $size-s) {
        text-align: center;
        font-size: $fs-s;
    }
}


</style>