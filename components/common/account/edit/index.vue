<template>
  <div class="signin-index-page-wrapper">
    <Header title="アカウント情報" />
    <div class="signin-index-form-wrapper">
      <fg-form label-width="140px">
        <fg-form-item label="会社名">
          <p>株式会社ファーストグループ</p>
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
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input placeholder="姓"></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input placeholder="名"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <fg-row gutter="20" type="flex">
            <fg-col span="12">
              <fg-input placeholder="セイ"></fg-input>
            </fg-col>
            <fg-col span="12">
              <fg-input placeholder="メイ"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="cars Manager ID">
          <p>df1s13823400</p>
        </fg-form-item>
        <fg-form-item label="権限">
          <p>スタッフ</p>
        </fg-form-item>
        <fg-form-item label="職種">
          <div class="signin-index-form-items">
            <div v-for="(item, i) in icons" :key="`${item.title}-${i}`">
              <!-- <div class="signin-index-form-item">
                <div class="signin-index-form-item_img">
                  <fg-avatar
                    :src="require(`./img/${item.icon}-icon-white.svg`)"
                    size="25"
                    fillet
                  ></fg-avatar>
                </div>
                <div class="signin-index-form-item_title">
                  <p>{{ item.title }}</p>
                </div>
              </div> -->
              <MarkIcon :value="true" :icon-src="item.icon" :text="item.text" />
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="資格">
          <fg-row gutter="20" type="flex">
            <fg-col span="21">
              <fg-input placeholder="例）1級小型自動車整備士"></fg-input>
            </fg-col>
            <fg-col span="3">
              <fg-button circle border icon="less" width="30px" />
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="3">
              <fg-button circle border icon="plus" width="30px" />
            </fg-col>
          </fg-row>
        </fg-form-item>
        <fg-form-item label="生年月日">
          <fg-calendar width="160px" placeholder="1989/1/1"></fg-calendar>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="03-3960-7776"></fg-input>
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
import Header from '~/components/common/account/common/Header';
import MarkIcon from '~/components/common/mark-icon/index';
export default {
  components: {
    Header,
    MarkIcon,
  },
  data() {
    return {
      showPassword1: false,
      showPassword2: false,
      icons: [
        {
          text: '購入',
          icon: 'car',
        },
        {
          text: '売却',
          icon: 'money',
        },
        {
          text: '整備',
          icon: 'wrench',
        },
        {
          text: '鈑金',
          icon: 'hammer',
        },
        {
          text: '保険',
          icon: 'heart',
        },
        {
          text: 'アクセサリー',
          icon: 'tire',
        },
        {
          text: '車検',
          icon: 'paper',
        },
      ],
    };
  },
  methods: {
    avatarChange() {},
  },
};
</script>

<style lang="scss">
.signin-index-page-wrapper {
  height: 100%;
  .signin-index-form-wrapper {
    .fg-form {
      padding: 20px 40px;
    }
    .signin-index-form-items {
      display: flex;
      justify-content: space-between;
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
