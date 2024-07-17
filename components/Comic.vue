<template>
  <div class="comic">
    
    <Frame 
      class="panel01"
      commentary="MIENTRAS TANTO EN MENDOZA..."
      commentary-color="yellow"
      background="/img/asado.png"
    
      dialog="/img/dialog1.svg"
      dialog-top=28%
      dialog-left=10%
    
    />

    <Frame 
      class="panel02"
      background="/img/montain.png"

      dialog="/img/dialog2.svg"
      dialog-top=20%
      dialog-left=40%
    />

    <Frame 
      class="panel03"
      background="/img/wine.png"

      dialog="/img/dialog3.svg"
      dialog-top=-18%
      dialog-left=-4px
    />

    <LogoFrame class="panel04"/>

    <Frame 
      class="panel05"
      background="/img/pirate.png"
    />

    <Frame 
      class="panel06"
      background="/img/booking.png"
    />

    <ReserveFrame class="panel07" />

    <Frame 
      class="panel08"
      background="/img/table.png"

      dialog="/img/dialog6.svg"
      dialog-top=70%
      dialog-left=24%
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

      dialog="/img/dialog5.svg"
      dialog-top=40%
      dialog-left=40%
    />

    <Frame 
      class="panel13"
      background="/img/pool.png"
    />

  </div>
</template>

<style scoped>
  
  .comic {

    --comic-w: 1300px;
    --comic-h: 1100px;

    background-color: transparent;
    width: var(--comic-w);
    height: var(--comic-h);

    display: grid;
    grid-template-columns: repeat(23, 1fr);
    grid-template-rows: repeat(calc(23 * var(--comic-h) / var(--comic-w)), 1fr);

    gap: 14px;

    padding-top: 14px;
  }

  .panel01 {
    grid-column: 1 / span 6;
    grid-row: 1 / span 8;
  }

  .panel02 {
    grid-column: 7 / span 6;
    grid-row: 1 / span 3;
  }

  .panel03 {
    grid-column: 13 / span 6;
    grid-row: 1 / span 3;
  }

  .panel04 {
    grid-column: 7 / span 12;
    grid-row: 4 / span 5;
  }

  .panel05 {
    grid-column: 19 / span 5;
    grid-row: 1 / span 8;
  }

  .panel06 {
    grid-column: 1 / span 4;
    grid-row: 9 / span 4;
  }

  .panel07 {
    grid-column: 5 / span 15;
    grid-row: 9 / span 4;
  }

  .panel08 {
    grid-column: 20 / span 4;
    grid-row: 9 / span 8;
  }

  .panel09 {
    grid-column: 1 / span 6;
    grid-row: 13 / span 8;
  }

  .panel10 {
    grid-column: 7 / span 6;
    grid-row: 13 / span 8;
  }

  .panel11 {
    grid-column: 13 / span 7;
    grid-row: 13 / span 4;
  }

  .panel12 {
    grid-column: 13 / span 7;
    grid-row: 17 / span 4;
  }

  .panel13 {
    grid-column: 20 / span 4;
    grid-row: 17 / span 4;
  }

</style>