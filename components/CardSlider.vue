<template>
    <div class="slider">
        <Card class="dummy-card" image="/img/fire.png" title="dummy" text="dummy" style="visibility: hidden;" />

        <div class="scroller">
            <Card v-for="(card, i) in cards" :key="i" :image="card.image" :title="card.title" :text="card.text"
                class="scroller-item" />
        </div>

        <img class="arrow-right" src="/img/arrow_right.svg" alt="arrow right">
        <img class="arrow-left" src="/img/arrow_right.svg" alt="arrow left">
    </div>
</template>

<script setup>

const props = defineProps({
    database: {
        type: String,
        required: true,
    },
});


const { $pb } = useNuxtApp();
let interval = ref({ start: 1, end: 50 });
let cards = ref([]);


onMounted(async () => {

    const element = getCurrentInstance().proxy.$el;

    const dummy_card = element.querySelector(".dummy-card");
    const scroller = element.querySelector(".scroller");
    const right = element.querySelector(".arrow-right");
    const left = element.querySelector(".arrow-left");

    const offset = dummy_card.offsetWidth;

    scroller.scrollLeft = 0;
    right.style.visibility = "visible"
    left.style.visibility = "hidden"


    left.addEventListener("click", (e) => {
        scroller.scrollLeft -= offset;
    });

    right.addEventListener("click", (e) => {
        scroller.scrollLeft += offset;
    });

    scroller.addEventListener("scroll", (e) => {
        const max_scroll = scroller.scrollWidth - scroller.clientWidth;

        const try_remove_mask = (mask, test_mask) => {
            if (test_mask !== mask && scroller.classList.contains(mask)) {
                scroller.classList.remove(mask);
            }
        }

        const add_mask = (mask) => {
            try_remove_mask("mask-right", mask);
            try_remove_mask("mask-left", mask);
            try_remove_mask("mask-both", mask);
            if (!scroller.classList.contains(mask)) {
                scroller.classList.add(mask);
            }
        }

        if (scroller.scrollLeft <= 0) {
            left.style.visibility = "hidden"
        } else if (scroller.scrollLeft >= max_scroll) {
            right.style.visibility = "hidden"
        } else {
            if (right.style.visibility !== "visible") {
                right.style.visibility = "visible"
            }
            if (left.style.visibility !== "visible") {
                left.style.visibility = "visible"
            }
        }

    });

    const language = useState("language");
    cards.value = await $pb.get_cards_for_slider(props.database, interval.value);
    watch(interval, async () => { cards.value = await $pb.get_cards_for_slider(props.database, interval.value) });
    watch(language, async () => { cards.value = await $pb.get_cards_for_slider(props.database, interval.value) });
});

</script>

<style scoped>
.arrow-right {
    position: absolute;
    right: -150px;
    top: 50%;
    transform: translateY(-50%);
}

.arrow-left {
    position: absolute;
    left: -150px;
    top: 50%;
    transform: scaleX(-1) translateY(-50%);
}

.slider {
    width: 65%;
    position: relative;
}

.scroller {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;

    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
}

.scroller-item {
    flex-shrink: 0;
    scroll-snap-align: center;
}

@media screen and (max-width: 1110px) {
    .slider {
        width: 80%;
    }
}
</style>