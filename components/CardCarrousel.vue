<template>
    <CardBase>
        <div class="content">
            <slot />
        </div>
        <img class="arrow arrow-right" src="/img/arrow_white.svg" alt="arrow right">
        <img class="arrow arrow-left" src="/img/arrow_white.svg" alt="arrow left">
    </CardBase>
</template>

<script setup>

let can_scroll = true;

onMounted(async () => {

    const element = getCurrentInstance().proxy.$el;
    var current = 0;

    function next_slide() {
        if (!can_scroll) return;
        let slides = element.getElementsByClassName("carrousel-item");
        let previus = current;
        current = (current + 1) % slides.length;
        start_leave_to_left_animation(slides[previus]);
        start_enter_from_right_animation(slides[current]);
    }

    function prev_slide() {
        if (!can_scroll) return;
        let slides = element.getElementsByClassName("carrousel-item");
        let previus = current;
        current = (current - 1) < 0 ? (slides.length - 1) : (current - 1);
        start_leave_to_right_animation(slides[previus]);
        start_enter_from_left_animation(slides[current]);
    }

    if(element.getElementsByClassName("carrousel-item").length > 0) {
        element.getElementsByClassName("carrousel-item")[0].style.display = "block";
    }

    let back = element.querySelector(".arrow-left");
    let forward = element.querySelector(".arrow-right");

    back.onclick = () => { prev_slide() };
    forward.onclick = () => { next_slide() };

    function start_leave_to_left_animation(slide) {
        start_animation(slide, "leave-to-left-carrousel", "none");
    }

    function start_enter_from_right_animation(slide) {
        start_animation(slide, "enter-from-right-carrousel", "block");
    }

    function start_leave_to_right_animation(slide) {
        start_animation(slide, "leave-to-right-carrousel", "none");
    }

    function start_enter_from_left_animation(slide) {
        start_animation(slide, "enter-from-left-carrousel", "block");
    }

    function start_animation(slide, anim, display) {
        can_scroll = false;
        slide.style.display = "block";
        slide.classList.add(anim);

        slide.addEventListener("animationend", () => {
            can_scroll = true;
            slide.classList.remove(anim);
            slide.style.display = display;
        }, { once: true });

    }

});

</script>

<style scoped>
.card {
    position: relative;
    background-color: #353535;
    height: 383px;
}

.content {
    width: 100%;
    height: 100%;
}

.arrow {
    opacity: 0.5;
}

.arrow:hover {
    opacity: 1;
}

.arrow-right {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
}

.arrow-left {
    position: absolute;
    left: 40px;
    top: 50%;
    transform: scaleX(-1) translateY(-50%);
}
</style>