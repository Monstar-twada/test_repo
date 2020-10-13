<template>
  <div class="console-signin-index-page-wrapper">
    <Header title="アカウント編集" />
    <div class="signin-index-form-wrapper">
      <fg-form label-width="140px">
        <fg-form-item label="所属部署" placeholder="">
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
        <fg-form-item label="お客様の写真">
          <fg-image-processor
            width="80px"
            height="80px"
            :options="{ width: 720, height: 720 }"
            url
            @change="avatarChange"
          ></fg-image-processor>
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
        <fg-form-item label="管理コンソールID">
          <p>df1s13823400</p>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="03-3960-7776"></fg-input>
        </fg-form-item>
        <fg-form-item label="生年月日">
          <fg-calendar width="160px" placeholder="1989/1/1"></fg-calendar>
        </fg-form-item>
      </fg-form>
      <div class="signin-index-submit-button">
        <fg-button type="primary" suffix-icon="arrow-right" bold width="220px"
          >更新</fg-button
        >
        <fg-button
          suffix-icon="arrow-right"
          type="primary"
          border
          bold
          width="220px"
          >戻る</fg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/common/account/common/Header'
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
          // background-color: $blue-200;
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
