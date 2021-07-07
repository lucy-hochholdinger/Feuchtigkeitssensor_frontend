<template>
  <div id="Registration">
    <div id="bubble4"></div>
    <div id="bubble5"></div>
    <div class="page">Neuer Account</div>
    <form @submit.prevent="registerUser" method="post" novalidate autocomplete="off">
    <input type="text" placeholder="   E-Mail-Adresse" id="emailadress" v-model="emailadress"/>
    <input type="text" placeholder="   Benutzername" id="username" v-model="username" />
    <input type="text" placeholder="   Passwort" id="password" v-model="password"/>
    <button id="registerButton" value="register">Erstellen</button>
    <div class="login"><router-link to="/login">LogIn</router-link></div>
    <div class="textborderunderlineR"></div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Registration',
  props: {
  },
  data () {
    return {
      emailadress: '',
      username: '',
      password: ''
    }
  },
  methods: {
    registerUser: function () {
      console.log(this.username)
      const userData = {
        emailadress: this.emailadress,
        username: this.username,
        password: this.password
      }
      const uri = 'http://localhost:3001/api/register'
      axios.post(uri, userData)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Registration {
    overflow: hidden;
    position: fixed;
    background-color: #7C9D42;
    width: 375px;
    height: 667px;
    top: 0;
    left: 0;
  }

  #bubble4 {
    position: absolute;
    width: 537px;
    height: 458px;
    left: -100px;
    top: -210px;
    border-radius: 100%;

    background: #2B641C;
    transform: rotate(-30deg);
  }

  #bubble5 {
    position: absolute;
    width: 351px;
    height: 313px;
    left: 119px;
    top: 515px;
    border-radius: 100%;

    background: #FFFFFF;
  }

  .page{
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
  #emailadress{
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 273px;

    background: #ffffff;
    border-radius: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #2B641C;
  }
  #username {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 338px;
    background: #ffffff;
    border-radius: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #2B641C;
  }

  #password {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 403px;
    background: #ffffff;
    border-radius: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #2B641C;
  }
  #registerButton{
    position: absolute;
    width: 90px;
    height: 36px;
    left: 234px;
    top: 475px;
    background: #2B641C;
    border-radius: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */
    color: #FFFF;
  }
  .login{
    position: absolute;
    width: 36px;
    height: 15px;
    left: 274px;
    top: 588px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    text-decoration-line: underline;

    color: #012D04;
  }
  .textborderunderlineR{
    position: relative;
    width: 36px;
    height: 0px;
    left: 274px;
    top: 603px;

    border: 1px solid #AAB95A;
  }
</style>
