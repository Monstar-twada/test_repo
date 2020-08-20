<template>
  <div class="login-forgot-page-wrapper">
    <Logo />
    <div class="forgot-form">
      <h2 class="forgot-form__title mb5">
        パスワードをお忘れの方
      </h2>
      <p class="forgot-form__subtitle mb20">
        パスワードのリセット方法をメールにお送りします。
      </p>
      <div class="forgot-form__input-box mb20">
        <h4>メールアドレス</h4>
        <fg-input
          v-model="email"
          :class="['forgot-form__input-box__email', isEmailValid()]"
          placeholder="入力ください"
          clearable
        />
      </div>
      <div class="forgot-form__input-box mb30">
        <h4>生年月日</h4>
        <fg-calendar
          v-model="birthday"
          class="forgot-form__input-box__calendar"
          width="100%"
          clearable
        ></fg-calendar>
      </div>
      <div class="forgot-form__button">
        <fg-button
          :disabled="isValid()"
          class="mb20"
          width="100%"
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
          width="100%"
          >ログインへ戻る</fg-button
        >
      </div>
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
      birthday: '',
      success: true,
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
    birthday(val) {
      this.isValid()
    },
  },
  methods: {
    isEmailValid() {
      return this.email === ''
        ? ''
        : this.reg.test(this.email)
        ? false
        : ['forgot-form__input-box__error', true]
    },
    isValid() {
      if (this.isEmailValid() === false && this.birthday !== '') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss">
.login-forgot-page-wrapper {
  padding-top: 160px;
  .forgot-form {
    padding-top: 50px;
    max-width: 420px;
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
    }

    &__input-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__email {
        width: 270px;
      }
      &__error {
        input[type='text'] {
          border: 1px solid red;
        }
      }
      &__calendar {
        width: 270px;
      }
      h4 {
        color: $blue-200;
      }
    }
    &__button {
      margin: 0 100px;
    }
  }
}
</style>
