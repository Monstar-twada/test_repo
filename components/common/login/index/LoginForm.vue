<template>
  <div class="login-index-page-wrapper">
    <Logo />
    <div class="login-form">
      <fg-input
        v-model="email"
        placeholder="メールアドレス"
        clearable
        size="medium"
        :class="['mb20', isEmailValid()]"
      />
      <fg-input
        v-model="password"
        placeholder="パスワード"
        size="medium"
        class="mb30"
        suffix-icon="eye"
        :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
        :type="showPassword ? 'text' : 'password'"
        @click:suffix-icon="showPassword = !showPassword"
      />
      <fg-button
        class="login-form__button"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        :disabled="isValid()"
        @click="nextUrl('/customer')"
        >ログイン</fg-button
      >
      <!-- <nuxt-link to="/login/forgot" class="login-form__link mt25">
        メールアドレスを忘れた方
      </nuxt-link>
      <nuxt-link to="/login/forgot" class="login-form__link mt10">
        パスワードを忘れた方
      </nuxt-link>
      <nuxt-link to="/login/forgot" class="login-form__link mt25"
        >メールアドレスを忘れた方</nuxt-link
      >
      <nuxt-link to="/login/forgot" class="login-form__link mt10"
        >パスワードを忘れた方</nuxt-link
      >
      <div class="login-form__separator mt20 mb25">
        <span />
        <span>or</span>
        <span />
      </div>
      <fg-button
        class="login-form__googlebtn"
        prefix-icon="google"
        border
        bold
        width="220"
        justify="center"
        >Googleでログイン</fg-button
      > -->
    </div>
    <div class="login-form__requirements mt25">
      <p>[ 推奨環境 ]</p>
      <p>OS: Windows 10以上 / Mac OS 10.12以上</p>
      <p>ブラウザ:Google Chrome 最新版 / Edge 最新版</p>
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
    nextUrl(url) {
      this.$store.commit('user/signIn', true)
      this.$router.push({ path: url })
    },
  },
}
</script>

<style lang="scss">
.login-index-page-wrapper {
  padding-top: 95px;
  .login-form {
    padding-top: 50px;
    max-width: 270px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    &__button {
      margin: 0 20px;
    }
    &__error {
      input[type='text'] {
        border: 1px solid red;
      }
    }
    &__link {
      text-align: center;
      color: $--color-primary-active;
      font-size: 14px;
    }
    &__googlebtn {
      margin: 0 auto;
    }
    &__separator {
      display: flex;
      span {
        text-align: center;
        color: $--color-primary;
        position: relative;
        &:first-child {
          border-bottom: 1px solid $--color-border;
          display: block;
          width: 48%;
          margin-bottom: 10px;
        }
        &:last-child {
          border-bottom: 1px solid $--color-border;
          display: block;
          width: 48%;
          margin-bottom: 10px;
        }
        &:nth-child(2) {
          margin: 0 10px;
        }
      }
    }
    &__requirements {
      text-align: center;
      color: $--color-primary-placeholder;
    }
  }
}
</style>
