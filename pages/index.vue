<template>
    
    <section>
        <FullScreen />
    </section>

    <section class="cards">

        <div class="carrousel-container">
            <div class="carrousel-element">
                <div class="card-container">
                    <Card />
                    <Card />
                </div>
            </div>
            <div class="carrousel-element">
                <div class="card-container">
                    <Card />
                    <Card />
                </div>
            </div>
            <button class="arrow-button back">&#10094;</button>
            <button class="arrow-button forward">&#10095;</button>
        </div>

        <Separator />
        <Contacto />
        <Maps />

    </section>

</template>

<script setup>
    onMounted(async () => {

        var current = 0;

        function next_slide() {
            let slides = document.getElementsByClassName("carrousel-element");
            let previus = current;
            current = (current + 1) % slides.length;
            start_leave_to_left_animation(slides[previus]);
            start_enter_from_right_animation(slides[current]);
        }

        function prev_slide() {
            let slides = document.getElementsByClassName("carrousel-element");
            let previus = current;
            current = (current - 1) < 0 ? (slides.length - 1) : (current - 1);
            start_leave_to_right_animation(slides[previus]);
            start_enter_from_left_animation(slides[current]);
        }

        document.getElementsByClassName("carrousel-element")[0].style.display = "block";

        let back = document.querySelector(".back");
        let forward = document.querySelector(".forward");

        back.onclick = () => { prev_slide() };
        forward.onclick = () => { next_slide() };

        function start_leave_to_left_animation(slide) {
            start_animation(slide, "leave-to-left-carrousel", "none");
        }

        function start_enter_from_right_animation(slide) {
            start_animation(slide, "enter-from-right-carrousel", "block");
        }

        function start_leave_to_right_animation(slide) {
            start_animation(slide, "leave-to-right-carrousel", "block");
        }

        function start_enter_from_left_animation(slide) {
            start_animation(slide, "enter-from-left-carrousel", "block");
        }

        function start_animation(slide, anim, display) {
            forward.disabled = true;
            back.disabled = true;

            slide.style.display = "flex";
            slide.classList.add(anim);

            slide.addEventListener("animationend", () => {
                forward.disabled = false;
                back.disabled = false;
                slide.classList.remove(anim);
                slide.style.display = display;
            }, {once: true});

        }

    });
</script>

<style scoped>

    .carrousel-container {

        --card-aspec-ratio: calc(1338 / 1064);

        width: 100%;
        aspect-ratio: var(--card-aspec-ratio);

        position: relative;

        background-color: transparent;
    }

    .carrousel-element {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    
    }

    .card-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 57px;

        background-color: transparent;
    
   
    }

    .back {
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
    }

    .forward {
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
    }

    .arrow-button {
        color: #555555;
        background-color: transparent;
        border: none;
        font-size: 100px;
    }

    .arrow-button:disabled {
        color: #222222;
    }

    /* ------------------------------------------------------------ */
    .cards {
        width: 100%;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        gap: 57px;
        padding-top: 57px;
        overflow: hidden;
    }
    
    @media screen and (max-width: 1110px) {
        .cards {
            width: 100%;
            background-color: #ededed;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            gap: 17px;
            padding-top: 17px;
        }
    }

</style>