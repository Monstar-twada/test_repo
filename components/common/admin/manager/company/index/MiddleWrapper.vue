<template>
  <div class="company-middle-wrapper">
    <div class="header-wrapper">
      <h2>フィードバック</h2>
    </div>
    <div class="company-middle-wrapper_body">
      <div class="company-middle-wrapper_body_row">
        <fg-select width="168px" placeholder="内容種別"></fg-select>
      </div>
      <div class="company-middle-wrapper_body_row">
        <fg-input
          v-model="inputValue8"
          placeholder="システムの改善点や機能開発要望など、ご意見はこちらから
お送りください。可能な限り対応するよう尽力いたします。"
          type="textarea"
        />
      </div>
    </div>
    <div class="company-middle-wrapper_bottom">
      <fg-button type="primary" bold width="240px">送信</fg-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiddleWrapper',
  data() {
    return {
      currentItem: {},
      headers: [],
    }
  },
  methods: {
    moveToForm() {
      this.$router.push({
        path: `/admin/area/new`,
      })
    },
    moveToEdit(id) {
      this.$router.push({
        path: `/admin/area/edit/${id}`,
      })
    },
  },
}
</script>

<style lang="scss">
.company-middle-wrapper {
  flex: 1;
  background: #fff;
  border-radius: 6px;
  max-width: 420px;
  width: 100%;
  max-height: 440px;
  height: auto;
  color: $blue-200;
  margin: 10px;
  &_body {
    padding: 20px 30px;
    border-bottom: 1px solid $gray-600;
    &_row {
      margin-bottom: 24px;
      & > .fg-input {
        padding: 0;
        & > textarea {
          padding: 10px;
        }
      }
    }
  }
  &_bottom {
    height: 88px;
    display: flex;
    justify-content: center;
    align-items: center;
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
