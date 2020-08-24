<template>
  <div class="admin-area-edit-form-container">
    <div class="admin-area-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>基本情報</h2>
      </div>
      <fg-form label-width="120px">
        <fg-form-item label="店舗名">
          <fg-input placeholder="cars足立"></fg-input>
        </fg-form-item>
        <fg-form-item label="エリア名">
          <fg-select
            v-model="form.areaName"
            :options="areaItems"
            width="160px"
            placeholder="東京エリア"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="郵便番号">
          <div class="input-small-width">
            <fg-input placeholder="1200011"></fg-input>
          </div>
        </fg-form-item>
        <fg-form-item label="都道府県">
          <fg-select
            v-model="form.areaName"
            :options="areaItems"
            width="160px"
            placeholder="東京都"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="市区町村">
          <fg-input placeholder="足立区中央町"></fg-input>
        </fg-form-item>
        <fg-form-item label="番地など">
          <fg-input placeholder="1-20-1"></fg-input>
        </fg-form-item>
        <fg-form-item label="建物名・部屋番号など">
          <fg-input placeholder=""></fg-input>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="0120-161-135"></fg-input>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <fg-input placeholder="aaaa@cars-enjoy.com"></fg-input>
        </fg-form-item>
        <fg-form-item label="導入サービス">
          <div class="service-items"></div>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="admin-area-edit-form-container_bottom">
      <fg-button suffix-icon="arrow-right" border bold width="220"
        >保存</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      areaOptions: {},
      form: {
        name: '',
        areaName: '',
      },
    }
  },
}
</script>

<style lang="scss">
.admin-area-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $blue-200;
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $white-300;
    .fg-form-item {
      display: grid;
      grid-template-columns: 147px 1fr;

      .input-small-width {
        width: 160px;
      }
      .service-items {
        display: flex;
        align-items: center;
      }
    }
  }
  &_bottom {
    margin-top: 40px;
    height: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
