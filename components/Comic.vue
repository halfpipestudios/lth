<template>
  <div class="comic">
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>

    <!-- Reservation Panel -->
    <div class="panel reservation-panel">
      <img class="reservation-panel-background" src="/img/comic_background.jpg" alt="">
      <form class="reservation-form" action="">

        <div class="reservation-input">
          <img src="/img/calendar.png" alt="">
          FECHA DE LLEGADA
          <img src="/img/arrow.png" alt="">
          <input type="date" style="display: none;">
        </div>

        <div class="reservation-input">
          <img src="/img/calendar.png" alt="">
          FECHA DE SALIDA
          <img src="/img/arrow.png" alt="">
          <input type="date" style="display: none;">
        </div>

        <button>RESERVÁ!</button>

      </form>
    </div> 
    
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
    <div class="panel"></div>
  </div>
</template>

<style scoped>
  
  .reservation-input {
    background-color: white;
    border: 2px solid black;
    padding: 10px;
  }

  .reservation-form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    font-family: "comic";
    z-index: 1;
  }

  .reservation-panel {
    /* background-color: orange;
    background-image: url(/img/comic_background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
     */
    opacity: 1;
    
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
    position: relative;
  }

  .reservation-panel-background {
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .comic {
    --cols: 4;
    --rows: 5;
    --ratio: 1.2;

    display: grid;
    gap: 10px;
    grid-template-columns: repeat(var(--cols), 1fr);
    grid-template-rows: repeat(var(--rows), 1fr);
    
    height: 100%;
    aspect-ratio: var(--ratio);

    padding: 20px;
    margin: 0;

    box-sizing:  border-box;
    /* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5); */

    background-image: url(/img/paper.avif)
  }

  .panel:nth-child(n)  {
    background-color: transparent;
    border: 3px solid black;
  }

  .panel:nth-child(1)  {
    grid-column: 1 / span 1;
    grid-row: 1 / span 2;
  }

  .panel:nth-child(2)  {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
  }

  .panel:nth-child(3)  {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }

  .panel:nth-child(4)  {
    grid-column: 4 / span 1;
    grid-row: 1 / span 2;
  }

  .panel:nth-child(5)  {
    grid-column: 2 / span 2;
    grid-row: 2 / span 1;
  }

  .panel:nth-child(6)  {
    grid-column: 1 / span 4;
    grid-row: 3 / span 1;
  }

  .panel:nth-child(7)  {
    grid-column: 1 / span 2;
    grid-row: 4 / span 2;
  }

  .panel:nth-child(8)  {
    grid-column: 3 / span 2;
    grid-row: 4 / span 1;
  }

  .panel:nth-child(9)  {
    grid-column: 3 / span 1;
    grid-row: 5 / span 1;
  }

  .panel:nth-child(10)  {
    grid-column: 4 / span 1;
    grid-row: 5 / span 1;
  }

  @media screen and (max-width: 1110px) {

    .reservation-form {
      flex-direction: row;
    }

    .comic {
      --cols: 2;
      --rows: 5;
      --ratio: .5;

      display: grid;
      gap: 10px;
      grid-template-columns: repeat(var(--cols), 1fr);
      grid-template-rows: repeat(var(--rows), 1fr);
      
      /* height: 660px; */
      width: 84vw;
      height: 90vh;
      aspect-ratio: var(--ratio);
      
    }

    .panel:nth-child(n+7)  {
      display: none;
    }

    .panel:nth-child(1)  {
      grid-column: 1 / span 1;
      grid-row: 1 / span 1;
    }

    .panel:nth-child(2)  {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }

    .panel:nth-child(3)  {
      grid-column: 2 / span 1;
      grid-row: 5 / span 1;
    }

    .panel:nth-child(4)  {
      grid-column: 1 / span 1;
      grid-row: 4 / span 2;
    }

    .panel:nth-child(5)  {
      grid-column: 2 / span 1;
      grid-row: 4 / span 1;
    }

    .panel:nth-child(6)  {
      grid-column: 1 / span 2;
      grid-row: 2 / span 2;
    }

  }

  @media screen and (max-width: 666px) {
    .reservation-form {
      flex-direction: column;
    }
  }


</style>