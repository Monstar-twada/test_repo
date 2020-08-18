<template>
  <div class="login-reset-page-wrapper">
    <Logo />
    <div class="reset-form">
      <h2 class="reset-form__title mb5">
        パスワード再設定
      </h2>
      <p class="reset-form__subtitle mb20">
        新しいパスワードを入力してください。
      </p>
      <fg-input
        v-model="password1"
        placeholder="新しいパスワード"
        size="medium"
        class="mb20"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <fg-input
        v-model="password2"
        placeholder="新しいパスワード（確認）"
        size="medium"
        class="mb30"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <fg-button
        :disabled="matchPassword"
        class="reset-form__button"
        width="90%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        >パスワード設定</fg-button
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
  data() {
    return {
      password1: '',
      password2: '',
      showPassword: false,
      matchPassword: true,
    }
  },
  watch: {
    password1(val) {
      this.passwordValidation()
    },
    password2(val) {
      this.passwordValidation()
    },
  },
  methods: {
    passwordValidation() {
      if (this.password1 === this.password2) {
        this.matchPassword = false
      } else {
        this.matchPassword = true
      }
    },
  },
}
</script>

<style lang="scss">
.login-reset-page-wrapper {
  padding-top: 160px;
  .reset-form {
    padding-top: 50px;
    max-width: 290px;
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
    &__button {
      margin: 0 20px;
    }
  }
}
</style>
