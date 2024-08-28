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
}

.quienes-somos .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 40px;
}

.quienes-somos .title h1 {
    padding: 0;
    margin: 0;

    font-family: open-sans;
    font-weight: bold;
    font-size: 64px;
}

.quienes-somos p {
    padding: 0;
    margin: 0;

    font-family: open-sans;
    font-weight: normal;
    font-size: 36px;

    text-align: center;

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
    font-family: open-sans;
    font-weight: bold;
    font-size: 64px;
}

</style>