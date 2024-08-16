<template>
    <CardBase>
        <button class="arrow-button back">&#10094;</button>
        <button class="arrow-button forward">&#10095;</button>
        <div class="content">
            <slot />
        </div>
    </CardBase>
</template>

<script setup>

onMounted(async () => {

    const element = getCurrentInstance().proxy.$el;
    var current = 0;

    function next_slide() {
        let slides = element.getElementsByClassName("carrousel-item");
        let previus = current;
        current = (current + 1) % slides.length;
        start_leave_to_left_animation(slides[previus]);
        start_enter_from_right_animation(slides[current]);
    }

    function prev_slide() {
        let slides = element.getElementsByClassName("carrousel-item");
        let previus = current;
        current = (current - 1) < 0 ? (slides.length - 1) : (current - 1);
        start_leave_to_right_animation(slides[previus]);
        start_enter_from_left_animation(slides[current]);
    }

    element.getElementsByClassName("carrousel-item")[0].style.display = "block";

    let back = element.querySelector(".back");
    let forward = element.querySelector(".forward");

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
        forward.disabled = true;
        back.disabled = true;

        slide.style.display = "block";
        slide.classList.add(anim);

        slide.addEventListener("animationend", () => {
            forward.disabled = false;
            back.disabled = false;
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

a {
    cursor: pointer;
    font-size: 80px;
    color: white;
    opacity: 50%;

    -webkit-user-select: none;
    /* Safari */
    -ms-user-select: none;
    /* IE 10 and IE 11 */
    user-select: none;
    /* Standard syntax */
    z-index: 1;
}

.content {
    z-index: 1;
    width: 100%;
    height: 100%;
}

.back {
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    z-index: 2;
}

.forward {
    position: absolute;
    top: 50%;
    right: 40px;
    transform: translateY(-50%);
    z-index: 2;
}

.arrow-button {
    color: white;
    background-color: transparent;
    border: none;
    font-size: 40px;
}

.arrow-button:disabled {
    color: #aaaaaa;
}
</style>