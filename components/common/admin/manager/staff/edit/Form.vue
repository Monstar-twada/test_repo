<template>
  <div class="admin-staff-edit-form-container">
    <div class="admin-staff-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>基本情報</h2>
      </div>
      <fg-form label-width="120px">
        <fg-form-item label="権限">
          <div class="scrollable">
            asdf
          </div>
        </fg-form-item>
        <fg-form-item label="所属店舗">
          <fg-select
            v-model="form.areaName"
            :options="areaItems"
            width="160px"
            placeholder="cars板橋"
            item-prefix="- "
          />
        </fg-form-item>
        <fg-form-item label="写真">
          <fg-avatar :src="form.avatarUrl" size="80" fillet></fg-avatar>
        </fg-form-item>
        <fg-form-item label="氏名">
          <div class="input-small-column">
            <div class="input-small-column-width">
              <fg-input placeholder="大倉"></fg-input>
            </div>
            <div class="input-small-column-width">
              <fg-input placeholder="秀樹"></fg-input>
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="フリガナ">
          <div class="input-small-column">
            <div class="input-small-column-width">
              <fg-input placeholder="オオクラ"></fg-input>
            </div>
            <div class="input-small-column-width">
              <fg-input placeholder="ヒデキ"></fg-input>
            </div>
          </div>
        </fg-form-item>
        <fg-form-item label="cars Manager ID">
          <p class="just-text">df1s082829</p>
        </fg-form-item>
        <fg-form-item label="職種">
          <p class="just-text">df1s082829</p>
        </fg-form-item>
        <fg-form-item label="権限">
          <fg-radio-group>
            <fg-radio label="スタッフ" value="1"></fg-radio>
            <fg-radio label="マネージャー" value="2"></fg-radio>
            <fg-radio label="オーナー" value="2"></fg-radio>
          </fg-radio-group>
        </fg-form-item>
        <fg-form-item label="資格">
          <fg-input
            placeholder="1級小型自動車整備士、1級大型自動車整備士、1級二輪自動車整備士"
          ></fg-input>
        </fg-form-item>
        <fg-form-item label="電話番号">
          <fg-input placeholder="03-3960-7776"></fg-input>
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          <fg-input placeholder="aaaa@cars-enjoy.com"></fg-input>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="admin-staff-edit-form-container_bottom">
      <fg-button suffix-icon="arrow-right" border bold width="220"
        >保存</fg-button
      >
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220"
        >削除</fg-button
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
        avatarUrl:
          'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700073372,1831939333&fm=26&gp=0.jpg',
      },
    }
  },
}
</script>

<style lang="scss">
.admin-staff-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $blue-200;
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $white-300;
    .page-title-wrapper {
      h2 {
        font-size: 14px;
      }
    }
    .fg-form-item {
      display: grid;
      grid-template-columns: 147px 1fr;
      align-items: center;
      .just-text {
        margin-bottom: 0;
        font-size: 12px;
      }
      .input-small-column {
        display: flex;
        align-items: center;
        &-width {
          width: 120px;
          margin-right: 15px;
        }
      }
      .service-items {
        display: flex;
        align-items: center;
      }
      .scrollable {
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
