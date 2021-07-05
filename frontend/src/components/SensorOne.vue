<template>
  <div id="Sensor">
    <router-link to="/homepage">
      <span id="arrowback" class="material-icons">
        arrow_back_ios_new
      </span>
    </router-link>
    <div id="sensorName">Sensor 1</div>
    <div class="sensorData">
      <GraphBar></GraphBar>
    </div>
    <div class="Werte">Werte</div>
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
    </div>
    <!-- <div v-bind="currentHeight"></div> -->
  </div>
</template>

<script>
import axios from 'axios'
import GraphBar from '../components/Graphbar.vue'

export default {
  name: 'SensorOne',
  props: {},
  components: {
    GraphBar
  },
  mounted () {
    this.waterData()
  },
  methods: {
    waterData () {
      const uri = 'http://localhost:3002/api/getLastWeek'
      axios.post(uri)
        .then(res => {
          console.log(res)
        })
        .catch(function (err) {
          console.log('Error while get waterData: ')
          console.log(err)
        })
    }
  },
  data () {
    return {
      //  let currentHeight = 100 - (sensorValue / 40.95)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Sensor {
    overflow: hidden;
    position: fixed;
    background-color: #f7f7f7;
    width: 375px;
    height: 667px;
    top: 0;
    left: 0;
  }

  #arrowback {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 24px;
    top: 29px;
  }

  #sensorName {
    position: absolute;
    width: 125px;
    height: 36px;
    left: calc(50% - 125px/2 + 1px);
    top: 24px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    color: #000000;
  }

  .sensorData {
    position: absolute;
    width: 329px;
    height: 251px;
    left: 23px;
    top: 92px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(194, 194, 194, 0.25);
    border-radius: 20px;
  }

  #graygrid1 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 24px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid2 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 62px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid3 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 100px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid4 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 137px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid5 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 175px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid6 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 213px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid7 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 250px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  #graygrid8 {
    position: absolute;
    width: 15px;
    height: 161px;
    left: 288px;
    top: 51px;
    background: #F0F0F0;
    border-radius: 20px;
  }

  .Werte {
    position: absolute;
    width: 71px;
    height: 29px;
    left: 24px;
    right: 24px;
    top: 363px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #000000;
  }

  #menubar {
    position: absolute;
    width: 397px;
    height: 99.5px;
    left: -10px;
    top: 589.5px;
    background-image: url("~@/assets/menubar.svg");
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
