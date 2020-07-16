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
            <h2>パスワード再設定</h2>
            <h3 class="mt20">
              新しいパスワードを入力してください。
            </h3>
          </v-row>
          <v-row justify="center" align="center">
            <Input
              class="mt20"
              name="new_password"
              placeholder="新しいパスワード"
              :customwidth="270"
            />
            <Input
              class="mt20"
              name="new_password_confrim"
              placeholder="新しいパスワード（確認）"
              :customwidth="270"
            />
            <ButtonLarge class="mt30" content="パスワード設定" />
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
import LoginBg from '~/components/common/LoginBg.vue'
import Logo from '~/components/common/Logo.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
import Input from '~/components/common/Input.vue'

export default {
  layout: 'login',
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

  h2,
  h3 {
    color: $blue-300;
  }
}
</style>
