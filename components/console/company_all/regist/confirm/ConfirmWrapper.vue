<template>
  <div class="console-company_all-regist-confirm-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h3>企業追加：確認</h3>
        </template>
      </ColumnTitle>
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="0">
        <fg-form-item label="会社名">
          {{ '株式会社XXXXXX' }}
        </fg-form-item>
        <fg-form-item label="代表者">
          {{ '田中 太郎' }}
        </fg-form-item>

        <fg-form-item label="郵便番号">
          {{ '1200011' }}
        </fg-form-item>

        <fg-form-item label="都道府県">
          {{ '東京都' }}
        </fg-form-item>

        <fg-form-item label="市区町村">
          {{ '足立区中央町' }}
        </fg-form-item>

        <fg-form-item label="番地など">
          {{ '1-20-1' }}
        </fg-form-item>
        <fg-form-item label="建物名・部屋番号など"> </fg-form-item>
        <fg-form-item label="電話番号">
          {{ '000-0000-0000' }}
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          {{ 'aaaa@cars-enjoy.com' }}
        </fg-form-item>
        <fg-form-item label="店舗数">
          {{ '30店' }}
        </fg-form-item>
        <fg-form-item label="社員数">
          {{ '210名' }}
        </fg-form-item>
        <fg-form-item label="年度">
          {{ '046-875-9498' }}
        </fg-form-item>
        <fg-form-item label="銀行口座">
          {{ 'みずほ銀行(001)  渋谷支店(210) 普通  タナカタロウ 0123456' }}
        </fg-form-item>
      </fg-form>
    </WhiteBox>
    <div class="footer-button-wrapper">
      <fg-button
        suffix-icon="arrow-right"
        bold
        width="220px"
        type="primary"
        @click="handleSubmit"
        >追加</fg-button
      >
      <fg-button
        width="220px"
        suffix-icon="arrow-right"
        border
        bold
        type="primary"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
import WhiteBox from '~/components/console/company_all/common/WhiteBox'
import ColumnTitle from '~/components/console/company_all/common/ColumnTitle'

export default {
  components: {
    ColumnTitle,
    WhiteBox,
  },
  data() {
    return {
      labelWidth: '168px',
      form: {},
    }
  },
}
</script>

<style lang="scss">
.console-company_all-regist-confirm-wrapper {
  margin: 0 auto;
  padding: 20px 0;
  width: 712px;
  .fg-form {
    margin: 10px 20px 0;
    .plus-row-wrapper {
      .fg-row {
        margin-bottom: 15px;
      }
    }
  }
  .footer-button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-top: 10px;
    .fg-button {
      display: flex;
      margin-top: 20px;
    }
  }
}
</style>
