<template>
    <CardBase>
        <a class="back">&#10094;</a>
        <a class="forward">&#10095;</a>
        <slot />
    </CardBase>
</template>

<script setup>

    onMounted(async () => {

        var slidePosition = 1;

        function plus_slides(n) {
            slide_show(slidePosition += n);
        }

        function slide_show(n) {
            var i;
            var slides = document.getElementsByClassName("carrousel-item");

            if (n > slides.length) {slidePosition = 1}
            if (n < 1) {slidePosition = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            
            slides[slidePosition-1].style.display = "block";
        }

        slide_show(1);

        document.querySelector(".back").onclick = () => { plus_slides(-1) };
        document.querySelector(".forward").onclick = () => { plus_slides(+1) };

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

        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
        z-index: 1;
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

</style>