<template>

    <div class="scroller-container">
        <div ref="instance" class="scroller">
            <Card v-for="(card, i) in cards" :key="i" :image="card.image" :title="card.title" :text="card.text"
            class="item" />
        </div>
        <img ref="instance_r" class="arrow-right" src="/img/arrow_right.svg" alt="arrow right">
        <img ref="instance_l" class="arrow-left" src="/img/arrow_right.svg" alt="arrow left">
    </div>


</template>

<script setup>

function scroller_add_class(scroller, anim) {
    if(!scroller.classList.contains(anim)) {
        scroller.classList.add(anim);
    }
}

function scroller_remove_class(scroller, anim) {
    if(scroller.classList.contains(anim)) {
        scroller.classList.remove(anim);
    }
}

function update_diffuse_class(scroller, right, left) {
    const max_scroll = scroller.scrollWidth - scroller.clientWidth;
    
    if(scroller.scrollLeft <= 0) {
        scroller_remove_class(scroller, "diffuse-left");
        scroller_remove_class(scroller, "diffuse-full");
        scroller_add_class(scroller, "diffuse-right");
        left.style.visibility = "hidden"
        right.style.visibility = "visible"
    } else if(scroller.scrollLeft >= max_scroll) {
        scroller_remove_class(scroller, "diffuse-right");
        scroller_remove_class(scroller, "diffuse-full");
        scroller_add_class(scroller, "diffuse-left");
        left.style.visibility = "visible"
        right.style.visibility = "hidden"
    } else {
        scroller_remove_class(scroller, "diffuse-right");
        scroller_remove_class(scroller, "diffuse-left");
        scroller_add_class(scroller, "diffuse-full");
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

var last_amout_of_cards = 0;
var amout_to_ask = 10;
let interval = ref({start:1, end:amout_to_ask});
let cards = ref([]);
let is_loading = ref(false);

const { $database } = useNuxtApp();

async function fetch_cards(increase) {
    last_amout_of_cards = cards.value.length;
    
    try {
        
        const result = await $database.cards(props.database, interval.value);

        if(increase && last_amout_of_cards <= result.length) {
            cards.value = result;
            interval.value.end += amout_to_ask;
        } else {
            cards.value = result;
        }

    } catch(e) {
        // NOTE: Do nothing
    }


}

async function handle_scroll(scroller, left, right) {
    const scroll_position = scroller.scrollLeft + scroller.clientWidth;
    const margin = 200;
    if((scroll_position + margin) >= scroller.scrollWidth && !is_loading.value) {
        await fetch_cards(true);
    }
}

onMounted(async () => {

    await fetch_cards(true);

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

    update_diffuse_class(scroller, right, left);
    scroller.addEventListener("scroll", async () => { 
        await handle_scroll(scroller, left, right);
        update_diffuse_class(scroller, right, left);
    });

});

</script>

<style scoped>

.scroller-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.scroller {
    width: 65%;
    border-radius: 15px;
    background-color: transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    --mask-percentage: 10%;
    overflow-x: auto;
    scrollbar-width: none;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
}

.diffuse-left {
    mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) var(--mask-percentage));
    
}

.diffuse-right {
    mask-image: linear-gradient(to left, transparent 0%, rgba(0,0,0,1) var(--mask-percentage));
    
}

.diffuse-full {
    mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,1) var(--mask-percentage),
    rgba(0,0,0,1) calc(100% - var(--mask-percentage)), transparent 100%);
    
}

.item {
    flex-shrink: 0;
    scroll-snap-align: center;
}

.arrow-right {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
}

.arrow-left {
    position: absolute;
    left: 10%;
    top: 50%;
    transform: scaleX(-1) translateY(-50%);
}

@media screen and (max-width: 1110px) { 
    .arrow-right {
        display: none;
    }

    .arrow-left {
        display: none;
    }

    .scroller-container {
        background-color: transparent;
    }

    .scroller {
        mask: none;
        width: 100%;
        background-color: transparent;
        padding: 0 20% 0 20%;
        gap: 20px;
    }
}

</style>