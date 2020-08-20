<template>
  <div class="signin-page-wrapper">
    <div class="signin-page-wrapper__header">
      <Logo :logo-width="85" />
      <h1>新規アカウント登録</h1>
    </div>
    <div class="signin-form">
      <fg-row>
        <fg-col span="24">
          <fg-form
            ref="form"
            :model="form"
            label-position="left"
            label-width="150px"
          >
            <fg-form-item label="会社名" class="signin-form__company">
              <fg-row>
                <fg-col span="12">
                  <h5>株式会社ファーストグループ</h5>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- name -->
            <fg-form-item label="氏名">
              <fg-row gutter="20">
                <fg-col span="12">
                  <fg-input
                    v-model="form.firstName"
                    placeholder="姓"
                  ></fg-input>
                </fg-col>
                <fg-col span="12">
                  <fg-input v-model="form.LastName" placeholder="名"></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- furigana -->
            <fg-form-item label="フリガナ">
              <fg-row gutter="20">
                <fg-col span="12">
                  <fg-input
                    v-model="form.furiganaFirstName"
                    placeholder="セイ"
                  ></fg-input>
                </fg-col>
                <fg-col span="12">
                  <fg-input
                    v-model="form.furiganaLastName"
                    placeholder="メイ"
                  ></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- telephone number -->
            <fg-form-item label="電話番号">
              <fg-row>
                <fg-col span="24">
                  <fg-input
                    v-model="form.telephone"
                    placeholder="000-0000-0000"
                    sss
                  ></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- category -->
            <fg-form-item label="職種">
              <fg-row>
                <fg-col span="24">
                  <fg-input v-model="form.telephone" sss></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- category -->
            <fg-form-item label="資格">
              <fg-row>
                <fg-col span="24">
                  <fg-input v-model="form.telephone" sss></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- calendar  -->
            <fg-form-item label="生年月日">
              <fg-row>
                <fg-col span="12">
                  <fg-calendar
                    v-model="form.birthday"
                    placeholder="1989/1/1"
                    width="100%"
                    clearable
                  ></fg-calendar>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- email address -->
            <fg-form-item label="メールアドレス">
              <fg-row>
                <fg-col span="24">
                  <fg-input
                    v-model="form.email"
                    placeholder="aaaa@cars-enjoy.com"
                    sss
                  ></fg-input>
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- password  -->
            <fg-form-item label="初期パスワード">
              <fg-row>
                <fg-col span="24">
                  <fg-input
                    v-model="form.password"
                    placeholder="パスワード"
                    suffix-icon="eye"
                    :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:suffix-icon="showPassword = !showPassword"
                  />
                </fg-col>
              </fg-row>
            </fg-form-item>
            <!-- passwordconfirm -->
            <fg-form-item label="初期パスワード(確認)">
              <fg-row>
                <fg-col span="24">
                  <fg-input
                    v-model="form.passwordconfirm"
                    placeholder="パスワード確認"
                    suffix-icon="eye"
                    :suffix-icon-color="showPassword ? '#1E5199' : '#DFE6F0'"
                    :type="showPassword ? 'text' : 'password'"
                    @click:suffix-icon="showPassword = !showPassword"
                  />
                </fg-col>
              </fg-row>
            </fg-form-item>
            <fg-form-item>
              <fg-button
                type="primary"
                suffix-icon="arrow-right"
                width="40%"
                round
                bold
                disabled
                >Submit</fg-button
              >
            </fg-form-item>
          </fg-form>
        </fg-col>
      </fg-row>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/common/logo/index'
export default {
  name: 'SignIndex',
  components: {
    Logo,
  },
  data() {
    return {
      showPassword: false,
      form: {
        firstName: '',
        lastName: '',
        furiganaFirstName: '',
        furiganaLastName: '',
        telephone: '',
        birthday: '',
        email: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
}
</script>

<style lang="scss">
.signin-page-wrapper {
  margin: 30px 65px 0px;
  &__header {
    max-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      margin-left: 40px;
      color: $blue-200;
    }
  }
}
.signin-form {
  color: $blue-200;
  &__company {
    h5 {
      height: 50px;
      display: flex;
      align-items: center;
    }
  }
}
</style>
