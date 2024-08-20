<template>
    <CardBase>
        <div class="image">
            <img src="/img/tattoo2.jpg" alt="image 1">
        </div>
        <div class="image">
            <img src="/img/tattoo3.jpg" alt="image 2">
        </div>
        <div class="image">
            <img src="/img/tattoo4.jpg" alt="image 3">
        </div>
        <div class="image">
            <img src="/img/tattoo5.jpg" alt="image 4">
        </div>
    </CardBase>
</template>

<style scoped>
    
    .card {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        row-gap: 0px;
        column-gap: 0px;
        height: 778px;
        max-height: initial;
    }

    .image {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .image img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        
        object-fit: cover;
        object-position: center;
    }

    .image:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
    }

    .image:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
    }

    .image:nth-child(3) {
        grid-column: 2;
        grid-row: 1;
    }

    .image:nth-child(4) {
        grid-column: 2;
        grid-row: 2;
    }

    @media screen and (max-width: 1110px) {
        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 778px;
            max-height: initial;
        }
    }

</style>