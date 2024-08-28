<template>

    <div class="home">
        
        <section>
            <FullScreenVideo />
        </section>

        <section class="container-max quienes-somos">
            <div class="title">
                <img src="/img/lemon_tree_logo.png" alt="lemon tree logo">
                <h1>{{ texts["home-quienes-somos"] }}</h1>
            </div>
            <p>{{ texts["home-quienes-somos-text"] }}</p>
        </section>

        <section>
            <FullScreenImage />
        </section>

        <section>
            <Maps />
        </section>

        <section class="blogs">
            <div class="container-max">
                <h2>Ultimas noticias del Hostel</h2>
            </div>
            
            <Blog />
            <Blog />
            <Blog />

        </section>

    </div>

</template>

<script setup>
    const texts = useState('texts');
</script>

<style scoped lang="scss">

.home {
    width: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.container-max {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 40px;
    
    width: 100%;
    max-width: $size-l;
}

.home section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
}

.quienes-somos {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;

    box-sizing: border-box;

    padding-left: 40px;
    padding-right: 40px;

    
    @media screen and (max-width: $size-s) {
        gap: 16px;

        padding-left: 20px;
        padding-right: 20px;
    }
}

.quienes-somos .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;

    @media screen and (max-width: $size-s) {
        flex-direction: column;
        gap: 0px;
    }
}

.quienes-somos .title h1 {
    padding: 0;
    margin: 0;

    text-align: center;

    font-family: open-sans;
    font-weight: bold;

    --quienes-somos-title-font-size: 64px;
    font-size: var(--quienes-somos-title-font-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--quienes-somos-title-font-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 34px;
    }

}

.quienes-somos .title img {
    
    --quienes-somos-image-height: 174px;
    height: var(--quienes-somos-image-height);
    width: auto;

    @media screen and (max-width: $size-m) {
        height: calc(var(--quienes-somos-image-height) * 0.8);
    }

}


.quienes-somos p {
    padding: 0;
    margin: 0;

    text-align: center;

    font-family: open-sans;
    font-weight: normal;

    --quienes-somos-title-p-size: 36px;
    font-size: var(--quienes-somos-title-p-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--quienes-somos-title-p-size) * 0.8);
    }

    @media screen and (max-width: $size-s) {
        font-size: 20px;
    }
}

.blogs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #f2f2f2;

    width: 100%;
}

.blogs h2 {

    text-align: center;

    font-family: open-sans;
    font-weight: bold;
    
    --blogs-title-size: 64px;
    font-size: var(--blogs-title-size);

    @media screen and (max-width: $size-m) {
        font-size: calc(var(--blogs-title-size) * 0.8);
    }
}

</style>