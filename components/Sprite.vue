<template>

    <div class="sprite">
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
    let current_frame = 0;
    let last_frame = -1;

    function swap_frame() {
        
        if(!frames_element.value) return;
        if(frames_element.value.length === 0) return;

        frames_element.value[current_frame].style.display = "block";
        if(last_frame >= 0) {
            frames_element.value[last_frame].style.display = "none";    
        }
        
        last_frame = current_frame;
        current_frame = (current_frame + 1) % frames_element.value.length;
    }

    onMounted(() => {
        swap_frame();
        setInterval(swap_frame, props.frame_time * 1000);
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