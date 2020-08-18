<template>
  <div class="login-complete-page-wrapper">
    <Logo />
    <div class="complete-form">
      <h2 class="complete-form__title mb5">
        パスワードの再設定が完了しました
      </h2>
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
        >ログイン</fg-button
      >
    </div>
  </div>
</template>

<script>
import Logo from '../Logo.vue'
export default {
  components: {
    Logo,
  },
}
</script>

<style lang="scss">
.login-complete-page-wrapper {
  padding-top: 250px;
  .complete-form {
    padding-top: 50px;
    max-width: 350px;
    margin: 0 auto;
    h2,
    p {
      text-align: center;
      color: $blue-200;
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
