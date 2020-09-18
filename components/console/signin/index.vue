<template>
  <div class="console-signin-index-page-wrapper">
    <Header title="新規アカウント登録" />
    <div class="signin-index-form-wrapper">
      <fg-form label-width="140px">
        <fg-form-item label="所属部署">
          <fg-row gutter="20">
            <fg-col span="12">
              <fg-select
                v-model="selectValue1"
                :items="options1"
                placeholder=""
              />
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="氏名">
          <fg-row gutter="20">
            <fg-col span="12">
              <fg-input placeholder="姓"></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input placeholder="名"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <fg-row gutter="20">
            <fg-col span="12">
              <fg-input placeholder="セイ"></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input placeholder="メイ"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="生年月日">
          <fg-calendar width="160px" placeholder=""></fg-calendar>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="000-0000-0000"></fg-input>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <fg-input placeholder="aaaa@cars-enjoy.com"></fg-input>
        </fg-form-item>
        <fg-form-item label="初期パスワード">
          <fg-input
            v-model="password"
            placeholder="password"
            suffix-icon="eye"
            :suffix-icon-color="showPassword ? '#FF2B3D' : '#DFE6F0'"
            :type="showPassword1 ? 'text' : 'password'"
            :offset-right="30"
            @click:suffix-icon="showPassword = !showPassword"
          />
        </fg-form-item>
        <fg-form-item label="初期パスワード(確認)">
          <fg-input
            v-model="password"
            placeholder="password"
            suffix-icon="eye"
            :suffix-icon-color="showPassword ? '#FF2B3D' : '#DFE6F0'"
            :type="showPassword2 ? 'text' : 'password'"
            :offset-right="30"
            @click:suffix-icon="showPassword = !showPassword"
          />
        </fg-form-item>
      </fg-form>
      <div class="signin-index-submit-button">
        <fg-button type="primary" suffix-icon="arrow-right" bold width="220px"
          >確認</fg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/common/signin/common/Header'
export default {
  components: {
    Header,
  },
  data() {
    return {
      showPassword1: false,
      showPassword2: false,
      icons: [
        {
          title: '購入',
          icon: 'car',
        },
        {
          title: '売却',
          icon: 'money',
        },
        {
          title: '整備',
          icon: 'wrench',
        },
        {
          title: '鈑金',
          icon: 'hammer',
        },
        {
          title: '保険',
          icon: 'heart',
        },
        {
          title: 'アクセサリー',
          icon: 'tire',
        },
        {
          title: '車検',
          icon: 'paper',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.console-signin-index-page-wrapper {
  margin-top: 30px;
  .signin-index-form-wrapper {
    .fg-form {
      padding: 20px 40px;
    }
    .signin-index-form-items {
      display: flex;
      .signin-index-form-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-right: 25px;
        &_img {
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $--color-primary;
          border-radius: 6px;
          .fg-avatar {
            width: 25px;
          }
        }
      }
    }
  }
  .signin-index-submit-button {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
      margin-bottom: 20px;
    }
  }
}
</style>
