<template>
  <div class="company-left-wrapper">
    <div class="header-wrapper">
      <h2>企業情報</h2>
      <div class="admin-btn">
        <fg-button
          width="63"
          border
          size="mini"
          prefix-icon="edit"
          @click="moveToEdit"
        >
          編集
        </fg-button>
      </div>
    </div>
    <div class="company-left-wrapper_body">
      <div class="main-row">
        <div class="main-row_left">
          会社名
        </div>
        <div class="main-row_right">
          株式会社XXXXXX
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          代表者
        </div>
        <div class="main-row_right">
          田中 太郎
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          設立
        </div>
        <div class="main-row_right">
          1960年
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          本社所在地
        </div>
        <div class="main-row_right">
          <p>〒120-0011</p>
          <p>東京都足立区中央本町1-20-1</p>
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          電話番号
        </div>
        <div class="main-row_right">
          000-0000-0000
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          メールアドレス
        </div>
        <div class="main-row_right">
          aaaa@cars-enjoy.com
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          店舗数
        </div>
        <div class="main-row_right">
          30店
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          社員数
        </div>
        <div class="main-row_right">
          210名
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          年度
        </div>
        <div class="main-row_right">
          4月〜3月
        </div>
      </div>
      <div class="main-row">
        <div class="main-row_left">
          口座情報
        </div>
        <div class="main-row_right">
          〇〇銀行 〇〇支店
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftWrapper',
  data() {
    return {
      currentItem: {},
      headers: [],
    }
  },
  methods: {
    moveToEdit() {
      this.$router.push({
        path: `/admin/company/edit/`,
      })
    },
  },
}
</script>

<style lang="scss">
.company-left-wrapper {
  flex: 1;
  background: #fff;
  border-radius: 6px;
  max-width: 420px;
  width: 100%;
  max-height: 591px;
  color: $blue-200;
  margin: 10px;
  &_body {
    padding: 20px 30px;
    .main-row {
      display: grid;
      grid-template-columns: 100px 1fr;
      align-items: center;
      padding: 10px;
      &_left {
        font-weight: bold;
        font-size: 12px;
      }
      &_right {
        padding-left: 30px;
        color: $blue-500;
        font-size: 12px;
        & > p {
          font-size: 12px;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
