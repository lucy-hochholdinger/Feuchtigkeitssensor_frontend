<template>
  <div id="Sensor">
    <!-- Navigation icon back to the homepage -->
    <router-link to="/homepage">
      <span id="arrowback" class="material-icons">
        arrow_back_ios_new
      </span>
    </router-link>
    <!-- Header and sensor visualisation -->
    <div id="sensorName">Sensor 1</div>
    <div class="sensorData d-flex flex-row">
      <div class="barWrapper" v-for="s in sensorData" :key="s._id">
        <!-- Background from the graph -->
        <div class="bar" ref="graphBar"></div>
        <!-- Sensor data visualisation -->
        <div class="bar" :style="{ height: `${calcHeight(s._id, s.val)}px`, backgroundColor: '#1976D2' }"></div>
      </div>
    </div>
    <div class="Werte">Werte</div>
    <!-- In future, all the sensor data should be listed here -->
    <!-- Menu bar -->
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
  </div>
</template>

<script>
// Imports axios to be able to communicate with the backend
import axios from 'axios'

export default {
  name: 'SensorOne',
  props: {},
  components: {},
  data () {
    return {
      sensorData: null,
      loaded: false
    }
  },
  mounted () {
    // Waterdata is shown
    this.waterData()
    this.loaded = true
  },
  methods: {
    waterData () {
      // Request to backend to get the sensor data
      const uri = 'http://localhost:3000/api/getLastWeek'
      axios.post(uri, {
        mac: '24:62:ab:f6:1e:48'
      })
        .then(res => {
          console.log(res.data)
          this.sensorData = res.data
        })
        .catch(function (err) {
          console.log('Error while get waterData: ')
          console.log(err)
        })
    },
    // Calculation to fit the graph
    calcHeight (id, val) {
      if (!this.loaded) return 10
      return (161 - ((val / 40.95)))
    }
  }
}
</script>

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

  .barWrapper {
    position: relative;
    width: 1rem;
    height: 161px;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .bar {
    position: absolute;
    border-radius: 20px;
    bottom: 0px;
    width: 1rem;
    height: 161px;
    background-color: #F0F0F0;
  }

</style>
