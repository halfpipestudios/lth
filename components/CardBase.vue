<template>
    <div class="card">
        <slot />
    </div>
</template>

<style scoped>

    .card {
        --card-aspec-ratio: calc(1338 / 496);

        background-color: #ffffff;
        width: 60%;
        aspect-ratio: var(--card-aspec-ratio);

        max-height: 600px;
        max-width: 1338px;

        border-radius: 15px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        overflow: hidden;
    }

    
    @media screen and (max-width: 1110px) {
        .card {
            height: initial;
            min-width: 290px;
            max-height: initial;
            max-width: 400px;
            aspect-ratio: initial;
            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

</style>