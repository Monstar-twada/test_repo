<template>
  <div class="login-mailreset-pin-page-wrapper">
    <Logo />
    <div class="pin-form">
      <h2>認証コード入力</h2>
      <h3>新しいメールアドレス</h3>
      <h3 class="mb20">{{ email }}</h3>
    </div>
    <div class="pin-form__pin-input">
      <fg-code-input v-model="code" width="300" />
    </div>
    <div class="pin-form__requirements mt25">
      <p>新しいメールアドレス宛に送信した</p>
      <p class="mb20">6桁の「認証コード」を入力して送信してください。</p>
      <fg-text v-if="validationMessage.code" class="pin-form__error">{{
        validationMessage.code
      }}</fg-text>
    </div>
    <div class="pin-form__buttons mt25">
      <fg-button
        class="mb20"
        width="30%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="handleSubmit"
        >送信する</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="30%"
        @click="nextUrl('/login/forgot')"
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
      code: '',
      email: 'aaaa@cars-enjoy.com',
      validationMessage: {
        code: '',
      },
    }
  },
  methods: {
    nextUrl(url) {
      this.$router.push({ path: url })
    },
    isValid() {
      if (this.code.length === 6) {
        return false
      } else {
        return true
      }
    },
    validation() {
      let count = 0
      if (this.code.length !== 6) {
        this.validationMessage.code = 'すべての確認コードを入力してください'
        count += 1
      } else this.validationMessage.code = ''
      return count
    },
    handleSubmit() {
      const count = this.validation()
      if (count === 0) this.nextUrl('/login/mailreset/complete')
    },
  },
}
</script>

<style lang="scss">
.login-mailreset-pin-page-wrapper {
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
      color: $--color-primary;
      margin-bottom: 35px;
    }
    h3 {
      color: $--color-primary;
      font-weight: 400;
    }
    &__button {
      margin: 0 20px;
    }
    &__error {
      input[type='text'] {
        border: 1px solid red;
      }
      div {
        color: $--color-warning;
      }
    }
    &__pin-input {
      display: flex;
      justify-content: center;
    }
    &__requirements {
      text-align: center;
      color: $--color-primary;
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
