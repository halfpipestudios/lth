<template>

<div class="blog" :class="theme">
    <NuxtLink class="container-max link" :to="link" target="_blank">
        <h2>{{ title }}</h2>
        <div class="text-and-image-container">
            <div>
                <p>{{ text }}</p>
            </div>
            <NuxtImg format="webp" :src="image" alt="blog image" />
        </div>
    </NuxtLink>
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
        theme: {
            type: String,
            default: "light"
        },
        link: {
            type: String,
            default: ""
        }
    });

</script>

<style scoped lang="scss">

.link {
    text-decoration: none;
}

.dark {
    background-color: #323232;
}

.dark:nth-child(odd) {
    background-color: transparent;
}


.light {
    background-color: #f2f2f2; 
}

.light:nth-child(odd) {
    background-color: #ffffff;
}


.blog {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.blog:nth-child(odd) .text-and-image-container {
    flex-direction: row-reverse;
    @media screen and (max-width: $size-s) {
        flex-direction: column-reverse;
    }
}

.blog .container-max {
    width: 100%;
    height: 100%;
    max-width: $size-l;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-s) {
        padding: 20px;
    }
}

.dark h2 {
    color: white;
}

.light h2 {
    color: black;
}

.blog  h2 {
    text-align: center;

    padding: 0;
    margin: 0;

    font-family: comic-smooth;
    font-weight: normal;
    font-size: $fs-xl;

    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
    }

}

.blog .text-and-image-container {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    gap: 40px;
    
    --blog-height: 400px;
    height: var(--blog-height);


    @media screen and (max-width: $size-s) {
        flex-direction: column-reverse;
        gap: 20px;
        height: initial;
    }
}

.text-and-image-container div {
    height: 100%;
    overflow-y: auto;
}

.blog img {
    
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;

    align-self: flex-start;

    border-radius: 15px;
    height: 100%;

    @media screen and (max-width: $size-s) {
        border-radius: 10px;
    }

    @media screen and (max-width: $size-s) {
        width: 100%;
        aspect-ratio: 1;
        height: initial;
    }
}


.dark p {
    color: white;
}

.light p {
    color: #181C14;
}

.blog  p {
    font-family: comic-smooth;
    padding: 0;
    margin: 0;
    
    font-size: $fs-m;
    @media screen and (max-width: $size-m) {
        font-size: $fs-s;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
    }

}

</style>