<template>
  <div id="LogIn">
  <div class="bubble1"></div>
  <div class="bubble2"></div>
  <div class="bubble3"></div>
  <input type="text" placeholder="   Raum" id="usernameBox"/>
  <div class="textboxunderline">
    <div class="username">Benutzername</div>
  </div>
  <div class="passwordBox">
    <div class="password"></div>
  </div>

  </div>
</template>

<script>
export default {
  name: 'LogIn',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#LogIn {
position: relative;
background-color: #F0F0F0;
width: 375px;
height: 667px;
}
.bubble1{
position: absolute;
width: 274px;
height: 354px;
left: 188px;
top: -56px;
border-radius: 100%;
background: #7C9D42;
}
.bubble2{
position: absolute;
width: 536.97px;
height: 457.74px;
left: -187px;
top: -49.52px;
border-radius: 100%;
background: #2B641C;
transform: rotate(-30deg);
}
.bubble3{
position: absolute;
width: 330px;
height: 258px;
left: -92px;
top: -192px;
border-radius: 100%;
background: #AAB95A;
}
#usernameBox{
position: absolute;
width: 271px;
height: 49px;
left: 52px;
top: 322px;
background: #E4E4E4;
border-radius: 12px;
}
.username{
position: absolute;
width: 271px;
height: 49px;
left: 52px;
top: 322px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
/* identical to box height */
color: #757575;
}
.passwordBox{
position: absolute;
width: 271px;
height: 49px;
left: 52px;
top: 387px;
background: #E4E4E4;
border-radius: 12px;
}
</style>
