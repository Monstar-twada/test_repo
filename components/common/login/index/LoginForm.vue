<template>
  <div class="login-index-page-wrapper">
    <Logo />
    <div class="login-form">
      <div class="mb20">
        <fg-input
          v-model="form.email"
          placeholder="メールアドレス"
          clearable
          size="medium"
          :class="emailError ? 'login-form__error' : ''"
          @keyup.native.enter="login"
        />
        <fg-text v-if="validationMessage.email" class="login-form__error">{{
          validationMessage.email
        }}</fg-text>
      </div>
      <div class="mb30">
        <fg-input
          v-model="form.password"
          placeholder="パスワード"
          size="medium"
          suffix-icon="eye"
          :suffix-icon-color="showPassword ? $colors.primary : $colors.border"
          :type="showPassword ? 'text' : 'password'"
          :class="passwordError ? 'login-form__error' : ''"
          @click:suffix-icon="showPassword = !showPassword"
          @keyup.native.enter="login"
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
        @click="login"
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
import { mapGetters } from 'vuex'
import Logo from '~/components/common/logo/index'
export default {
  components: {
    Logo,
  },
  // USER
  // shinobu.takai@firstgroup.jp
  // (Kw2!u_NA3~D
  data() {
    return {
      form: {
        // email: 'test01@ml.local',
        // password: '845yVs@hj9K*',
        email: '',
        password: '',
      },
      emailError: false,
      passwordError: false,
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
    ...mapGetters('auth', ['isAuthenticated']),
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
  // checks if already logged in AWS COGNITO
  async beforeCreate() {
    // console.log(this.$store)
    try {
      // await this.$store.dispatch('auth/load')
      if (this.isAuthenticated === false) {
        await this.$store.dispatch('auth/load')
      }
    } catch (err) {
      console.error({ err })
    }
  },
  methods: {
    validation() {
      const { email, password } = this.form
      let count = 0
      if (email === '') {
        this.emailError = true
        this.validationMessage.email = 'メールアドレスが空欄です'
        count += 1
      } else this.validationMessage.email = ''
      if (password === '') {
        this.passwordError = true
        this.validationMessage.password = 'パスワードが空欄です'
        count += 1
      } else this.validationMessage.password = ''
      return count
    },
    async login() {
      const count = this.validation()
      if (count === 0) {
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('auth/login', this.form)
          this.$nuxt.$loading.finish()
          this.$login.success.call(this)
        } catch (error) {
          if (
            // eslint-disable-next-line no-constant-condition
            error.message === 'Incorrect username or password.' ||
            error.message === "PreAuthentication failed with error 'email'."
          ) {
            this.count += 1
            this.emailError = true
            this.passwordError = true
            this.validationMessage.password =
              'メールアドレスまたはパスワードが一致しないか、ユーザーが存在しません'
            console.error({ error })
          } else {
            this.$alert(error.message)
            console.error({ error })
          }
        }
      }
    },
  },
}
</script>

<style lang="scss">
.login-index-page-wrapper {
  margin-top: -10%;
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
        white-space: normal !important;
        overflow: visible !important;
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
      font-size: 14px;
      text-align: center;
      color: $--color-primary-placeholder;
    }
  }
}
</style>
