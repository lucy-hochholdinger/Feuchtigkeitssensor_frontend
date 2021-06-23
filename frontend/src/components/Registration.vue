<template>
  <div id="Registration">
    <div id="bubble4"></div>
    <div id="bubble5"></div>
    <div class="page">Neuer Account</div>
    <input type="text" placeholder="   Benutzername" id="username" />
    <input type="text" placeholder="   Passwort" id="password" />
    <button id="logInButton">Anmelden</button>
    <div class="passwordForget">Passwort vergessen</div>
    <div class="textborderunderlineP"></div>
    <div class="register">Neu bei uns?</div>
    <div class="textborderunderlineR"></div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  props: {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #Registration {
    overflow: hidden;
    position: relative;
    background-color: #7C9D42;
    width: 375px;
    height: 667px;
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
    top: 466px;
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
  #username {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 322px;
    background: #E4E4E4;
    border-radius: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #757575;
  }

  #password {
    position: absolute;
    width: 271px;
    height: 49px;
    left: 52px;
    top: 387px;
    background: #E4E4E4;
    border-radius: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */
    color: #757575;
  }
  #logInButton{
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
    /* identical to box height */
    color: #FFFF;
  }
  .passwordForget{
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
    .textborderunderlineP{
    position: relative;
    width: 119px;
    height: 0px;
    left: 128px;
    top: 561px;

    border: 1px solid #AAB95A;
  }
  .register{
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
  .textborderunderlineR{
    position: relative;
    width: 75px;
    height: 0px;
    left: 152px;
    top: 585px;

    border: 1px solid #AAB95A;
  }
</style>
