<template>

    <div class="sprite" ref=sprite>
        <img v-for="(frame, index) in frames" :key="index" class="frame" :src="frame" alt="sprite frame" ref="frames_element">
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

    // const preloadLinks = computed(() =>
    //     props.frames.map((frame) => ({
    //         rel: "preload",
    //         fetchpriority: "high",
    //         as: "image",
    //         href: frame,
    //     }))
    // );

    // useHead({
    //     link: preloadLinks.value,
    // });

    const sprite = ref(null);
    const frames_element = ref(null);
    
    let current_frame = -1;
    let last_frame = -1;
    let animation_is_pause = true;
    let animation_was_started = false;
    let interval_id = 0;

    function clear_frames() {
        for(let i = 0; i < frames_element.value.length; ++i) {
            frames_element.value[i].style.visibility = "hidden";
        }
    }

    function start() {
        last_frame = -1;
        current_frame = -1;
        animation_is_pause = false;
        clear_frames();
    }

    function update() {
    
        if(!animation_was_started) {
            start();
            animation_was_started = true;
        }
        
        if(animation_is_pause) return;

        draw_next_frame();
    
    }

    function draw_next_frame() {
        if(current_frame === (props.frames.length - 1)) {
            animation_is_pause = true;
        } else {
            last_frame = current_frame;
            current_frame += 1;
        }

        frames_element.value[current_frame].style.visibility = "visible";
        if(last_frame >= 0) {
            frames_element.value[last_frame].style.visibility = "hidden";
        }

    }

    function handle_intersection(entries, observer) {

        if(frames_element.value === null) return;

        entries.forEach(function (entry) {
            if(entry.isIntersecting === true) {
                interval_id = setInterval(update, props.frame_time * 1000)
            } else {
                animation_was_started = false;
                clearInterval(interval_id);
            }
        }); 

    }

    onMounted(()=> {
        
        const observer = new IntersectionObserver(handle_intersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.3
        });

        observer.observe(sprite.value);

        frames_element.value[0].style.visibility = "visible";

    })


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

    display: block;
    visibility: hidden
}

</style>