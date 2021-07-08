<template>
  <div id="Homepage">
    <!-- Backgroundstyle and Header -->
    <div class="Header"></div>
    <div id="bubble6"></div>
    <div id="usernameHeader">Hallo Eugen</div>
    <!-- Icon to log out -->
    <div id="logout" @click="logout">
      <span class="material-icons" :style="{color:'#ffffff'}">
        logout
      </span>
    </div>
    <!-- div for future weather data -->
    <div class="weatherdata"></div>
    <div id="Sensors">Sensoren</div>
    <!-- Router link to the detail page of the first sensor -->
    <router-link to="/homepage/sensor1">
      <div class="sensor1">
        <div class="sensor1text">
          Sensor 1
        </div>
        <div class="sensor1icon">
          <span class="material-icons">
            sensors
          </span>
        </div>
      </div>
    </router-link>
    <!-- Area for future second sensor -->
    <div class="sensor2"></div>
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

export default {
  name: 'Homepage',
  props: {},
  components: {
  },
  data () {
    return {}
  },
  methods: {
    logout () {
      // Token is removed when logging out and you are redirected to the login page
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

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
    letter-spacing: 0.4px;
    color: #FFFFFF;
  }
  #logout{
    position: absolute;
    left: 316px;
    top: 48px;
    color: #ffffff;
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

  .sensor1text {
    position: absolute;
    left: 16px;
    top: 16px;
    color: #000000;
  }

  .sensor1icon {
    position: absolute;
    left: 119px;
    top: 16px;
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
