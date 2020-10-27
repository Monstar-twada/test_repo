<template>
  <div class="template-index-table-container">
    <div class="template-index-table-container_title">
      <h2>テンプレート登録</h2>
    </div>
    <div class="template-index-table-container_table">
      <div
        v-for="(item, i) in items"
        :key="`item-${i}`"
        class="template-index-table-container_table_row"
      >
        <p>{{ item.title }}</p>
        <fg-button size="mini" width="63" border prefix-icon="edit"
          >編集</fg-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'ログイン案内メール',
          link: '',
        },
        {
          title: 'ユーザID通知メール',
          link: '',
        },
        {
          title: '送客メール',
          link: '',
        },
        {
          title: '退会完了メール',
          link: '',
        },
        {
          title: '出品完了メール',
          link: '',
        },
        {
          title: 'パスワード再設定メール',
          link: '',
        },
        {
          title: 'フィードバック送付完了メール',
          link: '',
        },
        {
          title: 'メンテナンス連絡メール',
          link: '',
        },
      ],
    }
  },
  watch: {},
  methods: {},
}
</script>

<style lang="scss">
.template-index-table-container {
  background-color: #fff;
  max-width: 560px;
  width: 100%;
  border-radius: 6px;
  &_title {
    padding: 25px 20px;
    h2 {
      font-size: 18px;
      font-weight: bold;
    }
  }
  &_table {
    &_row {
      border-top: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      padding: 25px 20px 25px 45px;
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
