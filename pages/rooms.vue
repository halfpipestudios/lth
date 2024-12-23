<template>
    <div class="rooms">
    
        <div class="sticky-header">
            <h2>{{ texts["habitaciones-titulo"] }}</h2>
        </div>
        <p>{{ texts["habitaciones-desc"] }}</p>
        
        <Room v-for="(room, index) in rooms" :key="index" 
              :title="room.title" 
              :text="room.text"
              :image="room.image"
              :link="room.Link"/>
        
    </div>
</template>

<script setup>
const texts = useState('texts');
const language = useState('language');
const rooms = ref([]);

function translate_rooms(rooms) {
    for (let room of rooms) {
        room["title"] = room["Titulo_" + language.value];
        room["text"] = room["Texto_" + language.value];
    }
    return rooms;
}

watch(language, ()=> {
    translate_rooms(rooms.value);
})

const records = await $fetch("/api/rooms");    
rooms.value = translate_rooms(records);

</script>

<style scoped lang="scss">

.rooms {
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0px;
}

.rooms p {
    max-width: $size-l;
    margin: 0;
    padding: 0;
    color: black;

    text-align: center;
    font-family: comic-smooth;
    font-size: $fs-l;

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-m) {
        font-size: $fs-m;
        padding: 20px;
    }

    @media screen and (max-width: $size-s) {
        font-size: $fs-m;
    }

}

</style>