<template>
  <v-app>
    <v-container class="fill-height login_container" fluid>
      <v-col cols="6">
        <LoginBg />
      </v-col>
      <v-col cols="6">
        <div class="login_form">
          <Logo />
          <v-row justify="center" align="center" class="mt50">
            <Input name="ID" placeholder-text="ID" />
            <Input
              class="mt20"
              type="password"
              name="password"
              placeholder-text="パスワード"
            />
            <ButtonLarge class="mt30" content="ログイン" />
            <nuxt-link class="mt25" to="/login/forgot"
              ><h3>パスワードを忘れた方はこちら</h3>
            </nuxt-link>
          </v-row>
          <v-row justify="center" align="center" class="mt20 note">
            <h3>[ 推奨環境 ]</h3>
            <h3>OS: Windows 10以上 / Mac OS 10.12以上</h3>
            <h3>ブラウザ:Google Chrome 最新版 / Edge 最新版</h3>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import LoginBg from '~/components/common/LoginBg.vue'
import Logo from '~/components/common/Logo.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
import Input from '~/components/common/Input.vue'

export default {
  components: {
    LoginBg,
    Logo,
    ButtonLarge,
    Input,
  },
}
</script>

<style lang="scss" scoped>
.login_container {
  padding: 0;

  .col-6 {
    padding: 0;
  }
}

.login_form {
  width: 300px;
  margin: 0 auto;
  text-align: center;

  .note {
    color: $blue-500;
    h3 {
      width: 100%;
      text-align: center;
      line-height: 1.5;
    }
  }
}
</style>
