<template>
  <div id="Homepage">
    <div class="Header"></div>
    <div id="bubble6"></div>
    <div id="usernameHeader">Hallo Eugen</div>
    <div class="weatherdata"></div>
    <div id="Sensors">Sensoren</div>
    <div class="sensor1"></div>
    <div class="sensor2"></div>
    <div id="menubar">
   <span class="material-icons">
          home
    </span>
    <img src="@/assets/menubar.svg">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Homepage',
  props: {},
  components: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Homepage {
    overflow: hidden;
    position: fixed;
    background-color: #f7f7f7;
    width: 375px;
    height: 667px;
    top: 0;
    left: 0;
  }
  .Header{
    position: absolute;
    width: 375px;
    height: 97px;
    left: 0px;
    top: 0px;
    margin: 0%;

    background: #7C9D42;
  }
  #bubble6{
    position: absolute;
    width: 201px;
    height: 160px;
    left: 227px;
    top: -80px;
    border-radius: 100%;

    background: #AAB95A;
  }
  #usernameHeader{
    position: absolute;
    width: 105px;
    height: 16px;
    left: 16px;
    top: 52px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    /* identical to box height, or 89% */

    letter-spacing: 0.4px;

    color: #FFFFFF;
  }
  .weatherdata{
    position: absolute;
    width: 329px;
    height: 163px;
    left: 23px;
    top: 116px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }
  #Sensors{
    position: absolute;
    width: 79px;
    height: 16px;
    left: 23px;
    top: 306px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 16px;
    /* identical to box height, or 89% */

    letter-spacing: 0.4px;

    color: #161616;
  }
  .sensor1{
    position: absolute;
    width: 160px;
    height: 128px;
    left: 21px;
    top: 333px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }
  .sensor2{
    position: absolute;
    width: 160px;
    height: 128px;
    left: 192px;
    top: 333px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }
  #menubar{
    position: absolute;
    width: 397px;
    height: 99.5px;
    left: -10px;
    top: 589.5px;
  }
  .material-icons {
  position: absolute;
  height: 16px;
  width: 100%;
  margin: auto;
  color: #161616;
  }
</style>
