<template>
  <div class="login-index-page-wrapper">
    <Logo />
    <div class="pin-form">
      <h2>認証コード入力</h2>
      <h3>ご登録のメールアドレス</h3>
      <h3>aaaa@cars-enjoy.com</h3>
    </div>
    <div class="pin-form__requirements mt25">
      <p>ご登録のメールアドレス宛に送信した</p>
      <p>6桁の「認証コード」を入力して送信してください。</p>
    </div>
    <div class="pin-form__buttons mt25">
      <fg-button
        class="mb20"
        width="30%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        >送信する</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="30%"
        >戻る</fg-button
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
      email: '',
      password: '',
      // eslint-disable-next-line no-useless-escape
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      showPassword: false,
      matchPassword: true,
    }
  },
  watch: {
    email(val) {
      this.isValid()
    },
    psasword(val) {
      this.isValid()
    },
  },
  methods: {
    isEmailValid() {
      return this.email === ''
        ? ''
        : this.reg.test(this.email)
        ? false
        : ['login-form__error', true]
    },
    isValid() {
      if (this.isEmailValid() === false && this.password !== '') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss">
.login-index-page-wrapper {
  padding-top: 95px;
  .pin-form {
    padding-top: 50px;
    max-width: 270px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
    h2 {
      color: $blue-200;
      margin-bottom: 35px;
    }
    h3 {
      color: $blue-200;
      font-weight: 400;
    }
    &__button {
      margin: 0 20px;
    }
    &__error {
      input[type='text'] {
        border: 1px solid red;
      }
    }
    &__requirements {
      text-align: center;
      color: $blue-200;
    }
    &__buttons {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
