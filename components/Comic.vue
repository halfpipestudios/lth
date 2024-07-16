<template>
  <div class="comic">
    
    <Frame 
      class="panel01"
      commentary="MIENTRAS TANTO EN MENDOZA..."
      commentary-color="yellow"
      background="/img/asado.png"
    />

    <Frame 
      class="panel02"
      background="/img/montain.png"
    />

    <Frame 
      class="panel03"
      background="/img/wine.png"
    />

    <Frame 
      class="panel04"
      background="/img/fire.png"
    />

    <Frame 
      class="panel05"
      background="/img/pirate.png"
    />

    <Frame 
      class="panel06"
      background="/img/booking.png"
    />

    <Frame 
      class="panel07"
      commentary="INDICA TUS FECHAS..."
      commentary-color="white"
      background="/img/comic_background.png"
    />

    <Frame 
      class="panel08"
      background="/img/table.png"
    />

    <Frame 
      class="panel09"
      background="/img/room.png"
    />

    <Frame 
      class="panel10"
      background="/img/garden.png"
    />

    <Frame 
      class="panel11"
      background="/img/meeting.png"
    />

    <Frame 
      class="panel12"
      background="/img/tatoo.png"
    />

    <Frame 
      class="panel13"
      background="/img/pool.png"
    />

  </div>
</template>

<style scoped>
  
  .comic {

    background-color: transparent;
    width: 1100px;
    height: 1100px;

    display: grid;
    grid-template-columns: repeat(23, 1fr);
    grid-template-rows: repeat(23, 1fr);

    gap: 10px;
  }

  .panel01 {
    grid-column: 1 / span 6;
    grid-row: 1 / span 10;
  }

  .panel02 {
    grid-column: 7 / span 6;
    grid-row: 1 / span 4;
  }

  .panel03 {
    grid-column: 13 / span 6;
    grid-row: 1 / span 4;
  }

  .panel04 {
    grid-column: 7 / span 12;
    grid-row: 5 / span 6;
  }

  .panel05 {
    grid-column: 19 / span 5;
    grid-row: 1 / span 10;
  }

  .panel06 {
    grid-column: 1 / span 4;
    grid-row: 11 / span 4;
  }

  .panel07 {
    grid-column: 5 / span 15;
    grid-row: 11 / span 4;
  }

  .panel08 {
    grid-column: 20 / span 4;
    grid-row: 11 / span 9;
  }

  .panel09 {
    grid-column: 1 / span 6;
    grid-row: 15 / span 9;
  }

  .panel10 {
    grid-column: 7 / span 6;
    grid-row: 15 / span 9;
  }

  .panel11 {
    grid-column: 13 / span 7;
    grid-row: 15 / span 5;
  }

  .panel12 {
    grid-column: 13 / span 7;
    grid-row: 20 / span 4;
  }

  .panel13 {
    grid-column: 20 / span 4;
    grid-row: 20 / span 4;
  }

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



</style>