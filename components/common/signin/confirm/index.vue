<template>
  <div class="signin-index-page-wrapper">
    <Header title="新規アカウント登録" />
    <div class="signin-index-form-wrapper">
      <fg-form label-width="250px" split-vertical-line>
        <fg-form-item label="会社名">
          <p>株式会社ファーストグループ</p>
        </fg-form-item>
        <fg-form-item label="氏名">
          <p>大倉 秀樹</p>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <p>オオクラ ヒデキ</p>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <p>03-3960-7776</p>
        </fg-form-item>
        <fg-form-item label="職種">
          <div class="signin-index-form-items">
            <div v-for="(item, i) in icons" :key="`${item.title}-${i}`">
              <div
                v-if="selectedJob.includes(i)"
                class="signin-index-form-item"
              >
                <div class="signin-index-form-item_img">
                  <fg-avatar
                    :src="require(`../img/${item.icon}-icon-white.svg`)"
                    :size="25"
                    fillet
                  ></fg-avatar>
                </div>
                <div class="signin-index-form-item_title">
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="資格">
          <fg-tag selected>1級小型自動車整備士</fg-tag>
        </fg-form-item>
        <fg-form-item label="生年月日">
          <p>1989/1/1</p>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <p>aaaa@cars-enjoy.com</p>
        </fg-form-item>
        <fg-form-item label="パスワード">
          <p>････････</p>
        </fg-form-item>
      </fg-form>
      <div class="signin-index-submit-button">
        <fg-button type="primary" suffix-icon="arrow-right" bold width="220px"
          >登録</fg-button
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
      selectedJob: [0, 1, 2],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.signin-index-page-wrapper {
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
