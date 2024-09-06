<template>

    <div class="sprite" ref=sprite>
        <img class="frame" :src="frames[0]" alt="sprite frame" ref="frame">

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
    const current_frame = ref(-1);
    let animation_is_pause = true;
    let animation_was_started = false;
    let interval_id = 0;

    watch(current_frame, () => {
        if(current_frame.value >= 0) {
            frame.value.setAttribute("src", props.frames[current_frame.value]);
        } else {
            frame.value.setAttribute("src", props.frames[0]);
        }
    });

    function start() {
        console.log("animtion start!");
        current_frame.value = -1;
        animation_is_pause = false;
    }

    function update() {
        
        if(frame.value === null) return;
        
        if(!animation_was_started) {
            start();
            animation_was_started = true;
        }
        
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
                interval_id = setInterval(update, props.frame_time * 1000)
            } else {
                animation_was_started = false;
                clearInterval(interval_id);
            }
        }); 

    }

    onMounted(() => {
        
        const observer = new IntersectionObserver(handle_intersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
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
    object-position: bottom;

    width: 100%;
    height: 100%;
}

</style>