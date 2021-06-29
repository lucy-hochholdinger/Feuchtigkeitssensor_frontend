<template>
  <div id="Sensor">
    <div id="sensorName">Sensor 1</div>
    <div class="sensorData"></div>
    <div id="menubar">
      <span id="homebutton" class="material-icons">
        home
      </span>
      <div class="homebuttontext">STARTSEITE</div>
      <div class="addcircle"></div>
      <span id="addbutton" class="material-icons">
        add
      </span>
      <span id="profilebutton" class="material-icons">
        person
      </span>
      <div class="profilebuttontext">PROFIL</div>
      <img src="@/assets/menubar.svg">
    </div>
    <div v-bind="currentWidth"></div>
  </div>
</template>

<script>
  export default {
    name: 'Homepage',
    props: {},
    components: {},
    data() {
      return {
        let currentWidth = 100 - (sensorValue / 40.95)
      }
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

  .Header {
    position: absolute;
    width: 375px;
    height: 97px;
    left: 0px;
    top: 0px;
    margin: 0%;

    background: #7C9D42;
  }

  #bubble6 {
    position: absolute;
    width: 201px;
    height: 160px;
    left: 227px;
    top: -80px;
    border-radius: 100%;

    background: #AAB95A;
  }

  #usernameHeader {
    position: absolute;
    width: 105px;
    height: 16px;
    left: 24px;
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

  .weatherdata {
    position: absolute;
    width: 329px;
    height: 163px;
    left: 23px;
    top: 116px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }

  #Sensors {
    position: absolute;
    width: 79px;
    height: 16px;
    left: 24px;
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

  .sensor1 {
    position: absolute;
    width: 160px;
    height: 128px;
    left: 21px;
    top: 333px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }

  .sensor2 {
    position: absolute;
    width: 160px;
    height: 128px;
    left: 192px;
    top: 333px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }

  #menubar {
    position: absolute;
    width: 397px;
    height: 99.5px;
    left: -10px;
    top: 589.5px;
  }

  #homebutton {
    width: 25px;
    height: 24px;
    left: 48px;
    top: 32px;
    color: #000000;
  }

  .homebuttontext {
    position: absolute;
    width: 60px;
    height: 16px;
    left: 29px;
    top: 55px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    /* identical to box height, or 160% */

    text-align: center;
    letter-spacing: 0.4px;

    color: #012D04;
  }

  #addbutton {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 187px;
    top: 30px;
    color: #ffffff;
  }

  .addcircle {
    position: relative;
    width: 58px;
    height: 58px;
    left: 170px;
    top: 13px;

    background: #AAB95A;
    border-radius: 100%;
  }

  #profilebutton {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 315px;
    top: 32px;

    color: #BDBDBD;
  }

  .profilebuttontext {
    position: absolute;
    width: 35px;
    height: 16px;
    left: 311px;
    top: 55px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    /* identical to box height, or 160% */

    text-align: center;
    letter-spacing: 0.4px;

    color: #BDBDBD;
  }

  .material-icons {
    position: absolute;
    height: 20px;
    width: 20px;
    margin: auto;
    color: #161616;
  }

</style>
