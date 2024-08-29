<template>

<div class="blog">
    <div class="container-max">
        <h2>{{ title }}</h2>
        <div class="text-and-image-container">
            <div>
                <p>{{ text }}</p>
            </div>
            <img :src="image" alt="blog image">
        </div>
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
        }
    });

</script>

<style scoped lang="scss">

.blog {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
}

.blog:nth-child(odd) {
    background-color: #ffffff;
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

.blog  h2 {
    font-family: comic;
    font-weight: bold;

    text-align: center;

    padding: 0;
    margin: 0;

    --blog-title-size: 48px;
    font-size: var(--blog-title-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--blog-title-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }
}

.blog .text-and-image-container {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
    
    --blog-height: 554px;

    height: var(--blog-height);

    @media screen and (max-width: $size-m) {
        height: calc(var(--blog-height) * 0.8);
    }

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

.blog  img {
    height: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;

    border-radius: 15px;

    @media screen and (max-width: $size-s) {
        width: 100%;
        aspect-ratio: 1;
        height: initial;
        border-radius: 10px;
    }
}

.blog  p {
    font-family: open-sans;
    padding: 0;
    margin: 0;
    
    --blog-p-size: 24px;
    font-size: var(--blog-p-size);
    @media screen and (max-width: $size-m) {
        font-size: calc(var(--blog-p-size) * 0.8);
    }

}

</style>