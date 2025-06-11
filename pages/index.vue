<template>

    <div class="home">
        
        <section class="full-video-container">
            <FullScreenVideo
                :video="video"
            />
            <NuxtLink target="_blank" href="https://wa.me/5492616616248?text=Hola!%20Me%20gustaria%20tener%20mas%20información%20para%20reservar..." class="dialog-container">
                <div class="dialog">
                    <NuxtImg format="webp" src="/img/home_dialog.png" alt="lemon tree logo" />
                    <p>{{ texts["home-fullscreen-dialog"] }}</p>
                </div>
            </NuxtLink>
        </section>

        <section class="container-max quienes-somos">
            <div class="title">
                <NuxtImg format="webp" src="/img/ReservarAqui.png" alt="lemon tree logo" />
                <h1>{{ texts["home-quienes-somos"] }}</h1>
            </div>
            <p>{{ texts["home-quienes-somos-text"] }}</p>
        </section>

        <section>
            <FullScreenImage />
        </section>

        <section>
            <Form 
                animation="anim-home"
                :mail="mail.Mail"
            />
        </section>

        <section>
            <Maps />
        </section>

        <section>
            <div class="sticky-header">
                <h2>{{texts["home-blogs-title"]}}</h2>
            </div>
            <Blogs category="home" amount="2" />
        </section>

    </div>

</template>

<script setup>
    const texts = useState('texts');
    const {data: video} = await useFetch("/api/videos?name=video-home", { server:true });
    const {data: mail} = await useFetch("/api/mail?category=inicio", { server:true });
</script>

<style scoped lang="scss">

.full-video-container {
    position: relative;
}

.dialog-container {
    margin-top: 40px;

    @media screen and (max-width: $size-s) {
        margin-top: 20px;
    }
}

.dialog a {
    text-decoration: none;
}

.dialog {
    position: relative;
}

.dialog img {
    width: 340px;
    @media screen and (max-width: $size-s) {
        width: 300px;
    }
}

.dialog p {
    text-align: center;
    white-space: nowrap;

    padding: 0;
    margin: 0;

    font-family: comic-smooth;
    font-size: $fs-l;

    position: absolute;
    left: 50%;
    top: 23%;
    transform: translateX(-50%);

    color: black;

    @media screen and (max-width: $size-s) {
        font-size: $fs-m;
    }
}

.home {
    width: 100%;
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container-max {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    max-width: $size-l;
}

.home section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
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

    padding: 40px;
    padding-top: 0;
    
    @media screen and (max-width: $size-s) {
        gap: 16px;
        padding: 20px;
        padding-top: 0;
    
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

    font-family: comic-smooth;
    font-weight: normal;

    font-size: $fs-xxl;

    @media screen and (max-width: $size-m) {
        font-size: $fs-xl;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-xl;
    }

}

.quienes-somos .title img {
    
    --quienes-somos-image-height: 300px;
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

    font-family: comic-smooth;
    font-weight: normal;

    font-size: $fs-l;

    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
    }

}

</style>