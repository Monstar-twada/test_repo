<template>
  <div class="admin-company-edit-form-container">
    <div class="admin-company-edit-form-container_body">
      <div class="page-title-wrapper">
        <h2>企業情報</h2>
      </div>
      <fg-form label-width="150px">
        <fg-form-item label="会社名" show-suffix-required-icon>
          <fg-input placeholder="株式会社XXXXXX"></fg-input>
        </fg-form-item>
        <fg-form-item label="代表者" show-suffix-required-icon>
          <fg-input placeholder="田中 太郎"></fg-input>
        </fg-form-item>
        <fg-form-item label="郵便番号">
          <fg-input placeholder="1200011" width="160px"></fg-input>
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
        <fg-form-item label="電話番号" show-suffix-required-icon>
          <fg-input placeholder="000-0000-0000"></fg-input>
        </fg-form-item>
        <fg-form-item label="メールアドレス" show-suffix-required-icon>
          <fg-input placeholder="aaaa@cars-enjoy.com"></fg-input>
        </fg-form-item>
        <fg-form-item label="店舗数">
          <fg-input placeholder="30店"></fg-input>
        </fg-form-item>
        <fg-form-item label="社員数">
          <fg-input placeholder="210名"></fg-input>
        </fg-form-item>
        <fg-form-item label="年度">
          <p>4月〜3月</p>
        </fg-form-item>
        <fg-form-item label="銀行口座" class="form-bankaccount">
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input v-model="form.a" placeholder="銀行名"></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="form.b" placeholder="銀行コード"></fg-input>
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input v-model="form.a" placeholder="支店名"></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="form.b" placeholder="支店コード"></fg-input>
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="6">
              <fg-select
                v-model="form.areaName"
                :options="areaItems"
                placeholder="口座種別"
                item-prefix="- "
              />
            </fg-col>
          </fg-row>
          <fg-row gutter="20">
            <fg-col span="18">
              <fg-input
                v-model="form.a"
                placeholder="口座名義人（全角カナ）"
              ></fg-input>
            </fg-col>
            <fg-col span="6">
              <fg-input v-model="form.b" placeholder="口座番号"></fg-input>
            </fg-col>
          </fg-row>
        </fg-form-item>
      </fg-form>
    </div>

    <div class="admin-company-edit-form-container_bottom">
      <fg-button suffix-icon="arrow-right" border bold width="220px"
        >保存</fg-button
      >
      <fg-button width="220px" suffix-icon="arrow-right" bold white-transparent
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
.admin-company-edit-form-container {
  max-width: 712px;
  width: 100%;
  margin: 0 auto;
  color: $--color-primary;
  &_body {
    border-radius: 6px;
    padding: 24px;
    background-color: $--color-white;
    .page-title-wrapper {
      margin-bottom: 20px;
      h2 {
        font-size: 14px;
      }
    }
    .fg-form-item {
      .service-items {
        display: flex;
        align-items: center;
      }

      p {
        font-size: 12px;
        margin-bottom: 0;
      }

      &.form-bankaccount {
        align-items: flex-start;
        .fg-row {
          margin-bottom: 15px;
          &:last-child {
            margin-bottom: 0;
          }
        }
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
