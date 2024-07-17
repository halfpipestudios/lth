<template>
    <div class="frame">

      <img class="frame-back" src="/img/fire.png " alt="">
      
      <div class="frame-commentary">
        ... LUJAN DE CUYO
      </div>

      <div class="frame-body">
        <div class="name-container">
          <img src="/img/emphasis_l.svg" alt="">
          <h1>LEMON TREE HOSTEL</h1>
          <img src="/img/emphasis_r.svg" alt="">
        </div>
      </div>

    </div>
</template>

<script setup>

</script>

<style scoped>

  .name-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    background-color: red;
    border: 4px solid black;
    padding: 4px 8px 4px 8px;

    font-family: "comic";
    font-weight: bold;
    font-style: italic;
    color: white;
  }

  .name-container h1 {
    padding: 0;
    margin: 0;
  }

  .frame {  
    background-color: magenta;
    position: relative;

    border: 4px solid black;

    width: 100%;
    height: 100%;

    box-sizing: border-box;
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
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    z-index: 1;

    width: 100%;
    height: 100%;
  }

  .frame-commentary {
    position: absolute;
    left: 2px;
    top:  2px;

    font-family: "comic";
    font-weight: normal;
    font-style: normal;

    background-color: yellow;
    border: 2px solid black;

    padding-left: 6px;
    padding-right: 6px;
    margin: 4px;
  }

</style>