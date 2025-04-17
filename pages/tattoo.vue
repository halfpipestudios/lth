<template>

    <div class="tattoo">

        <section>
            <FullScreenVideo 
                :video="video.data.value"
            />
        </section>

        <section>
            <h1>TATT00 STUDI0</h1>
        </section>

        <section>
            <p>{{ texts["tattoo-descripcion"] }}</p>
        </section>

        <section>
            <div class="sticky-header dark-sticky">
                <h2>{{ texts["tattoo-seminarios-titulo"] }}</h2>
            </div>
            
            <Artist v-for="(artist, index) in artists" :key="index" 
              :name="artist.Nombre" 
              :text="artist.text"
              :image="artist.image"
              :link="artist.Link"/>

        </section>

        <section v-if="seminarios_availables == true">
            <div class="sticky-header dark-sticky">
                <h2>{{ texts["tattoo-blogs-title"] }}</h2>
            </div>
            <Blogs category="tatuajes" amount="2" theme="dark" />
        </section>
        
        <section>
            <div class="animation">
                <Sprite v-if="anim && anim.frames" :frames="anim.frames" :frame_time="anim.frame_time" />
            </div>
        </section>

        <section>
            <Carrousel category="tatuajes"/>
        </section>
        
        <section>
            <Card />
        </section>

    </div>

</template>

<script setup>

definePageMeta({
    layout: 'tattoo'
});

const texts = useState('texts');

const { data: video } = await useAsyncData('tattoo-video', () => $fetch("/api/videos?name=video-tattoo"));
const { data: mail } = await useAsyncData('tattoo-mail', () => $fetch("/api/mail?category=tattoo"));

const language = useState('language');

function translate_artist(artists) {
    for (let artist of artists) {
        artist["text"] = artist["Texto_" + language.value];
    }
    return artists;
}

const artists = ref([]);
const artist_record = await $fetch("/api/artistas");
artists.value = translate_artist(artist_record);

watch(language, ()=> {
    translate_artist(artists.value);
})


const seminarios_availables = ref(false);
{
    const records = await $fetch("/api/blogs?category=tatuajes&start=1&end=1");
    if(records.items.length) {
        seminarios_availables.value = true;
    }
}

const { data: anim, status, error, refresh, clear } = await useAsyncData(
    'sprite-animations',
    () => $fetch(`/api/animations?animation=${"anim-tattoo-" + language.value}`),
    {
        watch: [language]
    }
)

</script>

<style scoped lang="scss">


.animation {
    height: 70vh;
    aspect-ratio: 1;
    max-width: $size-l;

    @media screen and (max-width: $size-s) {
        height: initial;
        width: 100%;
    }
}

.dark-sticky {
    background-color: #323232;
    border-top: 2px solid #5e5e5e;
    border-bottom: 2px solid #5e5e5e;
}

.dark-sticky h2 {
    color: white;
}

.tattoo {
    background-color: #161616;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tattoo section {
    flex-shrink: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.tattoo h1 {
    color: white;
    margin: 0;
    padding: 0;
    text-align: center;
    
    font-family: darkmode;
    font-weight: normal;

    padding: 20px;
    padding-top: 40px;

    font-size: 64px;
    @media screen and (max-width: $size-m) {
        font-size: $fs-xl;
    }

    @media screen and (max-width: $size-s) {
        padding: 10px;
        padding-top: 30px;
        font-size: $fs-xl;
    }

}

.tattoo p {

    max-width: $size-l;

    margin: 0;
    color: white;

    text-align: center;
    font-family: comic-smooth;
    font-size: $fs-l;

    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 40px;
    
    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-s;
    }

}

</style>