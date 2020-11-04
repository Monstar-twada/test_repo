<template>
  <div class="login-forgot-page-wrapper">
    <Logo />
    <div class="forgot-form">
      <h2 class="forgot-form__title mb5">パスワードをお忘れの方</h2>
      <p class="forgot-form__subtitle mb20">
        パスワードのリセット方法をメールにお送りします。
      </p>
      <div class="forgot-form__input-box mb20">
        <h4>メールアドレス</h4>
        <div>
          <fg-input
            v-model="email"
            :class="[
              'forgot-form__input-box__email',
              validationMessage.email ? 'forgot-form__input-box__error' : '',
            ]"
            placeholder="入力ください"
            clearable
          />
          <fg-text
            v-if="validationMessage.email"
            class="forgot-form__input-box__error"
            >{{ validationMessage.email }}</fg-text
          >
        </div>
      </div>
      <div class="forgot-form__input-box mb30">
        <h4>生年月日</h4>
        <fg-calendar
          v-model="birthday"
          class="forgot-form__input-box__calendar"
          width="160px"
          clearable
        ></fg-calendar>
      </div>
      <div class="forgot-form__button">
        <fg-button
          class="mb20"
          width="100%"
          type="primary"
          suffix-icon="arrow-right"
          round
          bold
          @click="handleSend"
          >送信する</fg-button
        >
        <fg-button
          class="forgot-form__button__login"
          suffix-icon="arrow-right"
          type="primary"
          border
          bold
          width="100%"
          @click="nextUrl('/login')"
          >ログインへ戻る</fg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/common/logo/index';
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
      validationMessage: {
        email: '',
        birthday: '',
      },
    };
  },
  watch: {
    email() {
      this.validation();
    },
    birthday() {
      this.validation();
    },
  },
  methods: {
    nextUrl(url) {
      this.$router.push({ path: url });
    },
    isEmailValid() {
      return this.email === ''
        ? ''
        : this.reg.test(this.email)
        ? false
        : ['forgot-form__input-box__error', true];
    },
    isValid() {
      if (this.isEmailValid() === false && this.birthday !== '') {
        return false;
      } else {
        return true;
      }
    },
    validation() {
      let count = 0;
      if (this.email === '') {
        this.validationMessage.email = 'メールアドレスが空欄です';
        count += 1;
      } else if (!this.reg.test(this.email)) {
        this.validationMessage.email = '正しい形式で入力してください';
        count += 1;
      } else this.validationMessage.email = '';
      return count;
    },
    handleSend() {
      const count = this.validation();
      if (count === 0) this.nextUrl('/login/pin');
    },
  },
};
</script>

<style lang="scss">
.login-forgot-page-wrapper {
  .forgot-form {
    padding-top: 50px;
    max-width: 420px;
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
    }

    &__input-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      &__email {
        width: 270px;
      }
      &__error {
        input {
          border: 1px solid $--color-warning;
        }
        div {
          color: $--color-warning;
        }
      }
      &__calendar {
        width: 270px;
      }
      h4 {
        color: $--color-primary;
        width: 100px;
      }
    }
    &__button {
      margin: 0 100px;
      &__login {
        margin-top: 20px;
      }
    }
  }
}
</style>
