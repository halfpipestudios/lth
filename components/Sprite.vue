<template>

    <div class="sprite" ref=sprite>
        <img v-for="(frame, index) in frames" class="frame" :src="frame" alt="sprite frame" ref="frames_element">
    </div>

</template>

<script setup>
    const props = defineProps({
        frames: {
            type: Array,
            default: []
        },
        frame_time: {
            type: Number,
            default: 1
        }
    });

    const frames_element = ref(null);
    const sprite = ref(null);
    let current_frame = 0;
    let animation_is_pause = true;

    function start() {
        if(!frames_element.value) return;
        if(!frames_element.value.length) return;

        animation_is_pause = false;
        if(current_frame !== 0 && frames_element.value[current_frame].style.display === "block") {
            frames_element.value[current_frame].style.display = "none";
        }
        current_frame = 0;
        frames_element.value[current_frame].style.display = "block";

    }

    function pause() {
        if(!frames_element.value) return;
        if(!frames_element.value.length) return;


        animation_is_pause = true;
        frames_element.value[current_frame].style.display = "block";
    }

    function update() {
    
        if(!frames_element.value) return;
        if(frames_element.value.length === 0) return;
        if(animation_is_pause) return;

        frames_element.value[current_frame].style.display = "none";    
        current_frame = (current_frame + 1) % frames_element.value.length;
        frames_element.value[current_frame].style.display = "block";

        if(current_frame === (frames_element.value.length - 1)) {
            pause();
        }        
    }

    let interval_id = 0;

    function handle_intersection(entries, observer) {

        entries.forEach(function (entry) {
            if(entry.isIntersecting === true) {
                start();
                interval_id = setInterval(update, props.frame_time * 1000);
            } else {
                pause();
                if(interval_id) clearInterval(interval_id);
            }
        });

    }

    onMounted(() => {
        
        const observer = new IntersectionObserver(handle_intersection, {
            root: null,
            rootMargin: '0px',
            threshold: 1.0
        });

        observer.observe(sprite.value);
    
    });

</script>

<style scoped lang="scss">

.sprite {
    width: 100%;
    height: 100%;

    position: relative;
}

.sprite img {
    position: absolute;
    top: 0;
    left: 0;

    object-fit: contain;

    width: 100%;
    height: 100%;

    display: none;
}

</style>