<template>
  <v-app>
    <v-container class="fill-height login_container" fluid>
      <v-col cols="6">
        <!-- <LoginBg /> -->
      </v-col>
      <v-col cols="6">
        <div class="login_form">
          <!-- <Logo /> -->
          <v-row justify="center" align="center" class="mt50">
            <h2>パスワードをお忘れの方</h2>
            <h3 class="mt20">
              パスワードのリセット方法をメールにお送りします。
            </h3>
          </v-row>
          <v-row justify="center" align="center">
            <Input class="mt20" name="ID" placeholder="ID" :customwidth="270" />
            <Input
              class="mt20"
              name="mailaddress"
              placeholder="メールアドレス"
              :customwidth="270"
            />
            <ButtonLarge class="mt30" content="送信する" />
            <nuxt-link class="mt20" to="../login">
              <ButtonLarge content="ログインへ戻る" :is-white="true" />
            </nuxt-link>
          </v-row>
        </div>
      </v-col>
    </v-container>
  </v-app>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import LoginBg from '~/components/common/LoginBg.vue'
// import Logo from '~/components/common/Logo.vue'
import ButtonLarge from '~/components/common/ButtonLarge.vue'
import Input from '~/components/common/Input.vue'

export default {
  layout: 'login',
  components: {
    // LoginBg,
    // Logo,
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
  width: 330px;
  margin: 0 auto;
  text-align: center;

  h2,
  h3 {
    color: $blue-300;
  }
}
</style>
