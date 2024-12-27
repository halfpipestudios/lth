<template>

<div class="services-comp">
    <div
        class="service"
        v-for="(service, index) in services"
        :key="index"
    >
        <img :src="service.image">
        <p>{{ service.text }}</p>
    </div>

</div>

</template>

<script setup>
    const language = useState('language');
    const services = ref([]);

    function translate_services(services) {
        for (let service of services) {
            service["text"] = service["Texto_" + language.value];
        }
        return services;
    }

    watch(language, ()=> {
        translate_services(services.value);
    })

    const records = await $fetch("/api/servicios");
    services.value = translate_services(records);

</script>

<style scoped lang="scss">

.services-comp {
    width: 100%;
    max-width: $size-l;

    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;

    box-sizing: border-box;
    padding: 20px;

    @media screen and (max-width: $size-s) {
        overflow: scroll;;
        scrollbar-width: none;
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory;

        flex-wrap: nowrap;
        justify-content: flex-start;

    }
}

.service {
    width: 250px;
    height: 220px;
    background-color: #fff7f5;
    border: 2px solid #e5e5e5;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    padding: 40px;

    scroll-snap-align: center;
    
    @media screen and (max-width: $size-s) {
        flex-shrink: 0;
    }
    
}

.service img {
    padding: 10px;
    height: 100px;
}

.service p {
    padding: 0;
    margin: 0;
    text-align: center;
    font-family: comic-smooth;
    font-size: $fs-s;
    color: rgba(28,28,28,0.8);
}


</style>