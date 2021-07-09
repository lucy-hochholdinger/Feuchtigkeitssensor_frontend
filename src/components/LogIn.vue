<template>
  <div id="LogIn">
    <!-- Backgroundstyle and Header -->
    <div id="bubble1"></div>
    <div id="bubble2"></div>
    <div id="bubble3"></div>
    <div class="page">
      Wilkommen zurück
    </div>
    <!-- Login form -->
    <form @submit.prevent="loginUser" method="post" novalidate autocomplete="off">
      <input for="username" type="text" placeholder="   Benutzername" id="username" v-model="username" />
      <input for="password" type="text" placeholder="   Passwort" id="password" v-model="password" />
      <button id="logInButton" value="login">
        Anmelden
      </button>
      <div class="passwordForget">
        Passwort vergessen
      </div>
      <div class="textborderunderlineP"></div>
      <!-- Router link to the registration page -->
      <div class="register">
        <router-link to="/registration">
          Neu bei uns?
        </router-link>
      </div>
      <div class="textborderunderlineR"></div>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  props: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    // Data storage for username and password
    loginUser: function () {
      console.log(this.username)
      const userData = {
        username: this.username,
        password: this.password
      }
      // Request to backend
      const uri = '/api/login'
      this.axios.post(uri, userData)
        .then((response) => {
          console.log('Response from backend: ')
          console.log(response.data)
          // For further work with the token: localStorage.getItem('token')
          localStorage.setItem('token', response.data.token)
          // To get to the homepage when you are logged in
          this.$router.push('/homepage')
        })
        .catch((err) => {
          console.log('Error while registering: ')
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
  #LogIn {
    overflow: hidden;
    position: fixed;
    background-color: #F0F0F0;
    width: 375px;
    height: 667px;
    top: 0;
    left: 0;
  }

  #bubble1 {
    position: absolute;
    width: 274px;
    height: 354px;
    left: 188px;
    top: -56px;
    border-radius: 100%;
    background: #7C9D42;
  }

  #bubble2 {
    position: absolute;
    width: 536.97px;
    height: 457.74px;
    left: -107px;
    top: -200px;
    border-radius: 100%;
    background: #2B641C;
    transform: rotate(-30deg);
  }

  #bubble3 {
    position: absolute;
    width: 330px;
    height: 258px;
    left: -92px;
    top: -192px;
    border-radius: 100%;
    background: #AAB95A;
  }

  .page {
    position: absolute;
    width: 285px;
    height: 131px;
    left: 23px;
    top: 89px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 43px;
    line-height: 50px;
    text-align: left;
    color: #FFFFFF;
  }

  #username {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 322px;
    background: #ffffff;
    border-radius: 22px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #757575;
  }

  #password {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 387px;
    background: #ffffff;
    border-radius: 22px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #757575;
  }

  #logInButton {
    position: absolute;
    width: 90px;
    height: 36px;
    left: 234px;
    top: 459px;
    background: #2B641C;
    border-radius: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #FFFF;
  }

  #logInButton:visited {
    color: #FFFF;
  }

  .passwordForget {
    position: absolute;
    width: 118px;
    height: 15px;
    left: 129px;
    top: 547px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #434343;
  }

  .textborderunderlineP {
    position: relative;
    width: 119px;
    height: 0px;
    left: 128px;
    top: 561px;
    border: 1px solid #AAB95A;
  }

  .register {
    position: relative;
    width: 75px;
    height: 15px;
    left: 153px;
    top: 585px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #434343;
  }

  .textborderunderlineR {
    position: relative;
    width: 75px;
    height: 0px;
    left: 152px;
    top: 585px;
    border: 1px solid #AAB95A;
  }

</style>
