<template>
  <div class="login-mailreset-page-wrapper">
    <Logo />
    <div class="mailreset-form">
      <h2 class="mailreset-form__title mb5">
        メールアドレス再設定
      </h2>
      <p class="mailreset-form__subtitle mb20">
        新しいメールアドレスを入力してください。
      </p>
      <fg-input
        v-model="email1"
        placeholder="新しいメールアドレス"
        size="medium"
        class="mb20"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <fg-input
        v-model="email2"
        placeholder="新しいメールアドレス（確認）"
        size="medium"
        class="mb20"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <fg-text
        v-if="validationMessage.email"
        class="mailreset-form__error mb30"
        >{{ validationMessage.email }}</fg-text
      >
      <fg-button
        class="mailreset-form__button mb20"
        width="90%"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="confirm"
        >メールアドレスを設定</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        class="mailreset-form__button"
        type="primary"
        border
        bold
        width="90%"
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
      email1: '',
      email2: '',
      showPassword: false,
      matchPassword: true,
      // eslint-disable-next-line no-useless-escape
      reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      validationMessage: {
        email: '',
      },
    }
  },
  watch: {
    email1(val) {
      this.validation()
    },
    email2(val) {
      this.validation()
    },
  },
  methods: {
    passwordValidation() {
      if (this.email1 === this.email2) {
        this.matchPassword = false
      } else {
        this.matchPassword = true
      }
    },
    validation() {
      let count = 0
      if (
        this.email1 === '' ||
        this.email2 === '' ||
        this.email1 !== this.email2
      ) {
        this.validationMessage.email =
          'メールアドレスが空欄か一致していません。'
        count += 1
      } else if (!this.reg.test(this.email1)) {
        this.validationMessage.email = '正しい形式で入力してください'
        count += 1
      } else this.validationMessage.email = ''
      return count
    },
    confirm() {
      console.log('@@@@@@@')
      const count = this.validation()
      if (count === 0) console.log('submitted')
    },
  },
}
</script>

<style lang="scss">
.login-mailreset-page-wrapper {
  padding-top: 160px;
  .mailreset-form {
    padding-top: 50px;
    max-width: 320px;
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
      margin: 0 20px 20px;
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
