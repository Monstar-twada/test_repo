<template>
  <div class="login-mailreset-complete-page-wrapper">
    <div>
      <Logo />
    </div>
    <div class="login-mailreset-complete-page-wrapper_message mt25">
      <p class="mt40 mb10">パスワードの再設定が完了しました</p>
      <p class="mb20">次回から新しいパスワードでログインしてください。</p>
    </div>
    <div class="login-mailreset-complete-page-wrapper_btn mt25">
      <fg-button
        class="mb20"
        width="30%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="handleSubmit"
        >ログイン</fg-button
      >
    </div>
  </div>
</template>

<script>
import Logo from '~/components/common/logo/index'
export default {
  components: {
    Logo,
  },
  methods: {
    nextUrl(url) {
      this.$router.push({ path: url })
    },
    handleSubmit() {
      this.nextUrl('/login')
    },
  },
}
</script>

<style lang="scss">
.login-mailreset-complete-page-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  &_message {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > p:first-child {
      font-size: 18px;
      font-weight: bold;
    }
    & > p:last-child {
      font-size: 14px;
    }
  }
  &_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>
