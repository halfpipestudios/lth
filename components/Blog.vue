<template>

<div class="blog" :class="theme">
    <div class="container-max">
        <h2>{{ title }}</h2>
        <div class="text-and-image-container">
            <div>
                <p>{{ text }}</p>
            </div>
            <NuxtImg format="webp" :src="image" alt="blog image" />
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
        },
        theme: {
            type: String,
            default: "light"
        }
    });

</script>

<style scoped lang="scss">

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

    font-family: stamshons;
    font-weight: normal;

    --blog-title-size: 64px;

    @media screen and (max-width: $size-s) {
        font-size: 30px;
    }
}

.light h2 {
    color: black;
    
    font-family: comic;
    font-weight: bold;

    --blog-title-size: 48px;

    @media screen and (max-width: $size-s) {
        font-size: 24px;
    }
}

.blog  h2 {

    text-align: center;

    padding: 0;
    margin: 0;

    font-size: var(--blog-title-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--blog-title-size) * 0.8);
    }

}

.dark .text-and-image-container {
    gap: 80px;
    height: initial;
}

.light .text-and-image-container {
    gap: 40px;

        
    --blog-height: 554px;
    height: var(--blog-height);

    @media screen and (max-width: $size-m) {
        height: calc(var(--blog-height) * 0.8);
    }
}

.blog .text-and-image-container {

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

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

.dark img {
    border-radius: 50%;
    height: 280px;
    width: 280px;

    box-sizing: border-box;
    margin-bottom: 20px;

    @media screen and (max-width: $size-s) {
        width: 80%;
        aspect-ratio: 1;
        height: initial;
    }

}

.light img {
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

.blog img {
    
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;

    align-self: center;
}

.dark p {
    color: white;
}

.light p {
    color: black;
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

    @media screen and (max-width: $size-s) {
        font-size: 18px;
    }

}

</style>