<template>
    <div class="frame">

      <img class="frame-back" src="/img/comic_background.png " alt="">
      
      <div class="frame-commentary">
        INDICA TUS FECHAS...
      </div>

      <form class="frame-body" action="">
        <div class="comic-input">
          <img src="/img/calendar.png" alt="">
          FECHA DE LLEGADA
          <img src="/img/arrow.png" alt="">
          <input type="date" style="display: none;">
        </div>
        <div class="comic-input">
          <img src="/img/calendar.png" alt="">
          FECHA DE SALIDA
          <img src="/img/arrow.png" alt="">
          <input type="date" style="display: none;">
        </div>
        <button>RESERVÁ!</button>
      </form>
    </div>
</template>

<script setup>


</script>

<style scoped>

    .comic-input {
        background-color: white;
        border: 2px solid black;
        font-family: "comic";
        padding: 8px;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
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

        background-color: white;
        border: 2px solid black;

        padding-left: 6px;
        padding-right: 6px;
        margin: 4px;
    }

</style>