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
        class="mb20"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <div class="reset-form__error__wrapper"></div>
      <fg-text
        v-if="validationMessage.password"
        class="reset-form__error mb30"
        >{{ validationMessage.password }}</fg-text
      >
      <fg-button
        class="reset-form__button"
        width="90%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="confirm"
        >パスワード設定</fg-button
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
  data() {
    return {
      password1: '',
      password2: '',
      showPassword: false,
      matchPassword: true,
      reg: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      validationMessage: {
        password: '',
      },
    }
  },
  watch: {
    password1(val) {
      this.validation()
    },
    password2(val) {
      this.validation()
    },
  },
  methods: {
    nextUrl(url) {
      this.$router.push({ path: url })
    },
    passwordValidation() {
      if (this.password1 === this.password2) {
        this.matchPassword = false
      } else {
        this.matchPassword = true
      }
    },
    validation() {
      let count = 0
      if (
        this.password1 === '' ||
        this.password2 === '' ||
        this.password1 !== this.password2
      ) {
        this.validationMessage.password = 'パスワードが空欄か一致していません。'
        count += 1
      } else if (!this.reg.test(this.password1)) {
        this.validationMessage.password =
          'パスワードは英数混合で8文字以上で設定してください。'
        count += 1
      } else this.validationMessage.password = ''
      return count
    },
    confirm() {
      const count = this.validation()
      if (count === 0) this.nextUrl('/login/complete')
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
      color: $--color-primary;
    }
    &__title {
      font-weight: 700;
      font-family: 'Noto Sans JP';
    }
    &__button {
      margin: 0 20px;
    }
    &__error {
      input {
        border: 1px solid $--color-warning;
      }
      div {
        color: $--color-warning;
        text-align: center;
      }
    }
  }
}
</style>
