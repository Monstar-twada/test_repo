<template>
  <div class="login-page-wrapper">
    <div class="slogan-wrapper" />
    <div class="body-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>
<style lang="scss">
.login-page-wrapper {
  .slogan-wrapper {
    background: url('../components/common/login/img/bg-login.png');
    position: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white-300;
    font-size: 50px;
  }
  .body-wrapper {
    margin-left: 50%;
    background: $white-300;
  }
}
</style>
