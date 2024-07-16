<template>
    <div class="frame">
      <img class="frame-back" :src="background" alt="">
      <div v-if="commentary" class="frame-commentary" :style="{backgroundColor: commentaryColor}">
        {{ commentary || "No props passed yet" }}
      </div>
      <img v-if="dialog" class="frame-body" :src="dialog" :style="{ top: dialogTop, left: dialogLeft}" />
    </div>
</template>

<script setup>
  const props = defineProps({
    commentary : String, 
    commentaryColor : String, 
    background : String,
    dialog: String,
    dialogTop: String,
    dialogLeft: String
  })

</script>

<style scoped>

  .frame {  
    background-color: transparent;
    position: relative;

    border: 4px solid black;

    width: 100%;
    height: 100%;

    box-sizing: border-box;

    opacity: 0.3;
  }

  .frame:hover {  
    opacity: 1;
  }

  .frame-back {
    position: absolute;
    left: 0;
    top: 0;

    object-fit: cover;
    z-index: 0;

    width: 100%;
    height: 100%;
  }

  .frame-body {
    position: absolute;
    z-index: 1;
  }

  .frame-commentary {
    position: absolute;
    left: 2px;
    top:  2px;

    font-family: "comic";
    font-weight: normal;
    font-style: normal;

    background-color: white;
    border: 2px solid black;

    padding-left: 6px;
    padding-right: 6px;
    margin: 4px;
  }

</style>