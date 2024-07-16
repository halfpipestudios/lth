<template>
  <div class="comic-frame">
    
    <div class="frame pos01">
      <img class="frame-back" src="/img/asado.png " alt="">
      <div class="frame-commentary yellow">
        MIENTRAS TANTO EN MENDOZA...
      </div>
      <img class="frame-text01" src="/img/asado_text.png" alt="">
    </div>

    <div class="frame pos02"></div>

    <div class="frame pos03" style="overflow: visible;">
      <img class="frame-back" src="/img/wine.png " alt="">
      <img class="frame-text02" src="/img/arde.png " alt="">
    </div>

    <div class="frame pos04"></div>

    <div class="frame pos05">
      
      <img class="frame-back" src="/img/fire.png " alt="">
      <div class="frame-commentary yellow">
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

    <div class="frame pos06"></div>

    <div class="frame pos07">
      <img class="frame-back" src="/img/comic_background.png " alt="">

      <div class="frame-commentary white">
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
    
    <div class="frame pos08"></div>
    <div class="frame pos09"></div>
    <div class="frame pos10"></div>
    <div class="frame pos11"></div>
    <div class="frame pos12"></div>
    <div class="frame pos13"></div>

  </div>
</template>

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

  .comic-frame {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "pos01 pos02 pos03 pos04"
      "pos01 pos05 pos05 pos04"
      "pos06 pos07 pos07 pos08"
      "pos09 pos10 pos11 pos08"
      "pos09 pos10 pos12 pos13";
    
    gap: 16px;
    border: 8px solid black;

    background-color: black;
    
    width: 80%;
    height: 890px;
  }

  .frame {
    width: 100%;
    height: 100%;
  
    border: 1px solid black;
    background-color: white;

    position: relative;

    overflow: hidden;
  }

  .frame-back {
    position: absolute;
    left: 0;
    top: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: 0;
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
  }

  .frame-text01 {
    position: absolute;
    left: 10%;
    bottom: 0;
  }

  .frame-text02 {
    position: absolute;
    left: 0;
    bottom: 40%;
  }

  .yellow {
    background-color: yellow;
  }

  .white {
    background-color: white;
  }


  .pos01 {
    grid-area: pos01;
  }

  .pos02 {
    grid-area: pos02;
  }

  .pos03 {
    grid-area: pos03;
  }

  .pos04 {
    grid-area: pos04;
  }

  .pos05 {
    grid-area: pos05;
  }

  .pos06 {
    grid-area: pos06;
  }

  .pos07 {
    grid-area: pos07;
  }

  .pos08 {
    grid-area: pos08;
  }

  .pos09 {
    grid-area: pos09;
  }

  .pos10 {
    grid-area: pos10;
  }

  .pos11 {
    grid-area: pos11;
    
  }

  .pos12 {
    grid-area: pos12;
  }

  .pos13 {
    grid-area: pos13;
  }

</style>