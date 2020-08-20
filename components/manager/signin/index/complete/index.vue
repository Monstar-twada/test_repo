<template>
  <div class="signin-page-wrapper">
    <div class="signin-page-wrapper__header">
      <Logo :logo-width="85" />
      <h1>新規アカウント登録</h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/common/logo/index'
export default {
  components: {
    Logo,
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.signin-page-wrapper {
  margin: 30px 65px 0px;
  &__header {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin-left: 40px;
      color: $blue-200;
    }
  }
}
</style>
