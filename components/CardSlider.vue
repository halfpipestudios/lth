<template>
    
    <div class="container">
        <div ref="instance" class="scroller">
            <CardItem v-for="(card, i) in cards" :key="i" :image="card.image" :title="card.title" :text="card.text" />
        </div>
        <img ref="instance_r" class="arrow-right" src="/img/arrow_right.svg" alt="arrow right">
        <img ref="instance_l" class="arrow-left" src="/img/arrow_right.svg" alt="arrow left">
    </div>

</template>

<script setup>


function update_arrows(scroller, right, left) {
    const max_scroll = scroller.scrollWidth - scroller.clientWidth;
    if(scroller.scrollLeft <= 0) {
        left.style.visibility = "hidden"
        right.style.visibility = "visible"
    } else if(scroller.scrollLeft >= max_scroll) {
        left.style.visibility = "visible"
        right.style.visibility = "hidden"
    } else {
        left.style.visibility = "visible"
        right.style.visibility = "visible"
    }
}

const props = defineProps({
    database: {
        type: String,
        required: true,
    },
});

const instance = ref(null);
const instance_r = ref(null);
const instance_l = ref(null);

const language = useState("language");

let last_amout_of_cards = 0;
let try_more_cards = true;
let amout_to_ask = 3;
let interval = ref({start:1, end:amout_to_ask});
let cards = ref([]);
let is_loading = false;

const { $database } = useNuxtApp();

async function fetch_cards(increase) {
    is_loading = true;

    if(increase) {
        interval.value.end += amout_to_ask;
    }

    const result = await $database.cards(props.database, interval.value);
    
    if(result.length <= last_amout_of_cards) {
        try_more_cards = false;
    }
    last_amout_of_cards = result.length;

    cards.value = result;

    is_loading = false;

}

async function handle_scroll(scroller) {
    const max_scroll = scroller.scrollWidth - scroller.clientWidth;
    const margin = 200;
    if((scroller.scrollLeft + margin) >= max_scroll) {
        if(!is_loading && try_more_cards) {
            await fetch_cards(true);
        }

    }
}

await fetch_cards(false);

onMounted(async () => {

    const scroller = instance.value;
    const right = instance_r.value;
    const left = instance_l.value;

    watch(language, async () => await fetch_cards(false));

    const offset = 250;
    left.addEventListener("click", (e) => {
        scroller.scrollLeft -= offset;
    });

    right.addEventListener("click", (e) => {
        scroller.scrollLeft += offset;
    });

    update_arrows(scroller, right, left);
    scroller.addEventListener("scroll", async () => { 
        await handle_scroll(scroller, left, right);
        update_arrows(scroller, right, left);
    });

});

</script>

<style scoped>


.container {
    position: relative;
    width: 65%;
}

.scroller {
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    overflow-x: scroll;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;

}

.arrow-right {
    position: absolute;
    right: 0;
    top: 50%;
    transform:  translateX(150%) translateY(-50%);
}

.arrow-left {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-150%) translateY(-50%) scaleX(-1);
}

@media screen and (max-width: 1110px) { 

    .container {
        width: 100%;

    }

    .scroller {
        padding-left: 20%;
        padding-right: 20%;
        box-sizing: border-box;
    }

    .arrow-right {
        display: none;
    }

    .arrow-left {
        display: none;
    }

    .scroller {
        gap: 20px;
    }
}

</style>