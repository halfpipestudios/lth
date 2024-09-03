<template>

    <div class="sprite" ref=sprite>
        <img class="frame" :src="frames[current_frame]" alt="sprite frame" ref="frame">

        <!-- <img v-for="(frame, index) in frames" class="frame" :src="frame" alt="sprite frame" ref="frames_element"> -->
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

    const sprite = ref(null);
    const frame = ref(null);
    const current_frame = ref(0);
    let animation_is_pause = true;
    let interval_id = 0;

    function start() {
        current_frame.value = 0;
        animation_is_pause = false;
    }

    function update() {
        
        if(!frame.value) return;
        if(animation_is_pause) return;

        if(current_frame.value === (props.frames.length - 1)) {
            animation_is_pause = true;
        } else {
            current_frame.value = (current_frame.value + 1);
        }
    
    }

    function handle_intersection(entries, observer) {

        entries.forEach(function (entry) {
            if(entry.isIntersecting === true) {
                start();
                interval_id = setInterval(update, props.frame_time * 1000)
            } else {
                clearInterval(interval_id);
            }
        }); 

    }

    onMounted(() => {
        
        const observer = new IntersectionObserver(handle_intersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
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
}

</style>