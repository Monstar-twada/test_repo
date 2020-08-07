<template>
  <div class="login-page-wrapper">
    <div class="slogan-wrapper">
      Slogan
    </div>
    <div class="body-wrapper">
      <h1>Login Logo</h1>
      <nuxt-child></nuxt-child>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.login-page-wrapper {
  .slogan-wrapper {
    background: $blue-200;
    position: fixed;
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
