<template>
  <div class="login-complete-page-wrapper">
    <Logo />
    <div class="complete-form">
      <h2 class="complete-form__title mb5">パスワードの再設定が完了しました</h2>
      <p class="complete-form__subtitle mb40">
        次回から新しいパスワードでログインしてください。
      </p>
      <fg-button
        class="complete-form__button"
        width="220px"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="nextUrl('/login')"
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
  },
}
</script>

<style lang="scss">
.login-complete-page-wrapper {
  .complete-form {
    padding-top: 50px;
    max-width: 350px;
    margin: 0 auto;
    h2,
    p {
      text-align: center;
      color: $--color-primary;
    }
    &__title {
      font-weight: 700;
      font-family: 'Noto Sans JP';
    }
    &__subtitle {
      font-size: 14px;
      font-weight: 400;
    }
    &__button {
      margin: 0 60px;
    }
  }
}
</style>
