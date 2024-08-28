<template>

<div class="blog">
    <div class="container-max">
        <h2>ENCONTRA A WALLY EN NUESTRO HOSTEL!</h2>
        <div class="text-and-image-container">
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <img src="/img/marilyn.jpg" alt="blog image">
        </div>
    </div>
</div>

</template>

<script setup>

</script>

<style scoped lang="scss">

.blog {
    width: 100%;
    height: 759px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}

.blog:nth-child(even) {
    background-color: #ffffff;
}

.blog:nth-child(odd) .text-and-image-container {
    flex-direction: row-reverse;
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
}

.blog  h2 {
    font-family: comic;
    font-weight: bold;
    font-size: 48px;

    text-align: center;

    padding: 0;
    margin: 0;
}

.blog .text-and-image-container {

    height: 554px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;

    gap: 40px;
}

.text-and-image-container div {
    height: 100%;
    overflow-y: auto;
}

.blog  img {
    width: 669px;
    height: 100%;
}

.blog  p {
    font-family: open-sans;
    font-size: 24px;
}

</style>