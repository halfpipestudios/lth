<template>

    <div class="home">
        
        <section>
            <FullScreen />
        </section>

        <section class="container-max quienes-somos">
            <div class="title">
                <img src="/img/lemon_tree_logo.png" alt="lemon tree logo">
                <h1>{{ texts["home-quienes-somos"] }}</h1>
            </div>
            <p>{{ texts["home-quienes-somos-text"] }}</p>
        </section>

        <section class="fullscreen-image">
            <img src="/img/fire.png" alt="">
            <div class="fullscreen-image-filter" ></div>
            <div class="container-max">
                <h2>
                    {{ texts["home-separador"] }}
                </h2>
            </div>
        </section>

        <section class="map">
            <div class="container-max">
                <div class="map-info">
                    <h2>{{ texts["home-maps-titulo"] }}</h2>
                    <p>{{ texts["home-maps-texto"] }}</p>
                </div>
                
                <iframe 
                width="100%" height="600" 
                frameborder="0" scrolling="no" 
                marginheight="0" marginwidth="0" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=lemon%20tree%20hostel+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">    
                </iframe>

            </div>
        </section>

        <section class="blogs">
            <div class="container-max">
                <h2>Ultimas noticias del Hostel</h2>
            </div>
            
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

.fullscreen-image {
    position: relative;

    width: 100%;
    height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;

}

.fullscreen-image img {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    z-index: 1;
}

.fullscreen-image .fullscreen-image-filter {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);

    z-index: 1;
}

.fullscreen-image .container-max {
    background-color: transparent;
    z-index: 2;
}

.fullscreen-image h2 {
    font-family: comic;
    font-size: 64px;
    color: white;
    text-align: center;
}

.map {
    width: 100%;
    height: 600px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.map .container-max{
    width: 100%;
    height: 600px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0;
}

.map iframe {
    width: 50%;
    height: 100%;
    flex-shrink: 0;
}

.map-info {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.map-info h2 {
    font-family: comic;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
}

.map-info p {
    font-family: open-sans;
    font-weight: normal;
    font-size: 36px;
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

.blog {
    width: 100%;
    height: 759px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
}

.blogs .blog:nth-child(even) {
    background-color: #ffffff;
}

.blogs .blog:nth-child(odd) .text-and-image-container {
    flex-direction: row-reverse;
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