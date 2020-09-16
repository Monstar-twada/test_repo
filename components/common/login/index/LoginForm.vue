<template>
  <div class="login-index-page-wrapper">
    <Logo />
    <div class="login-form">
      <div class="mb20">
        <fg-input
          v-model="email"
          placeholder="メールアドレス"
          clearable
          size="medium"
          :class="validationMessage.email ? 'login-form__error' : ''"
        />
        <fg-text v-if="validationMessage.email" class="login-form__error">{{
          validationMessage.email
        }}</fg-text>
      </div>
      <div class="mb30">
        <fg-input
          v-model="password"
          placeholder="パスワード"
          size="medium"
          suffix-icon="eye"
          :suffix-icon-color="showPassword ? $colors.primary : $colors.border"
          :type="showPassword ? 'text' : 'password'"
          :class="validationMessage.password ? 'login-form__error' : ''"
          @click:suffix-icon="showPassword = !showPassword"
        />
        <fg-text v-if="validationMessage.password" class="login-form__error">{{
          validationMessage.password
        }}</fg-text>
      </div>
      <fg-button
        class="login-form__button"
        type="primary"
        suffix-icon="arrow-right"
        round
        bold
        @click="confirm"
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
      > -->
      <nuxt-link
        v-if="getEnv === 'console'"
        to="/login/forgot"
        class="login-form__link mt10"
        >パスワードを忘れた方</nuxt-link
      >
      <div v-if="getEnv === 'console'" class="login-form__separator mt20 mb25">
        <span />
        <span>or</span>
        <span />
      </div>
      <fg-button
        v-if="getEnv === 'console'"
        class="login-form__googlebtn"
        prefix-icon="google"
        border
        bold
        width="220"
        justify="center"
        >Googleでログイン</fg-button
      >
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
      validationMessage: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    getEnv() {
      return this.$isManager
        ? 'manager'
        : this.$isConsole
        ? 'console'
        : 'dashboard'
    },
  },
  watch: {
    email(val) {
      this.validation()
    },
    password(val) {
      this.validation()
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
    validation() {
      let count = 0
      if (this.email === '') {
        this.validationMessage.email = 'メールアドレスが空欄です'
        count += 1
      } else this.validationMessage.email = ''
      if (this.password === '') {
        this.validationMessage.password = 'パスワードが空欄です'
        count += 1
      } else this.validationMessage.password = ''
      return count
    },
    // nextUrl(url) {
    //   this.$store.commit('user/signIn', true)
    //   this.$router.push({ path: url })
    // },
    confirm() {
      const count = this.validation()
      if (count === 0) this.$login.success.call(this)
    },
  },
}
</script>

<style lang="scss">
.login-index-page-wrapper {
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
      input {
        border: 1px solid $--color-warning;
      }
      div {
        color: $--color-warning;
      }
    }
    &__link {
      text-align: center;
      color: $--color-primary-active;
      font-size: 14px;
    }
    &__googlebtn {
      margin: 0 auto;
      color: $--color-primary;
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
