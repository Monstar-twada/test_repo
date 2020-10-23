<template>
  <div class="console-company_all-regist-confirm-wrapper">
    <WhiteBox>
      <ColumnTitle>
        <template v-slot:title>
          <h2>企業追加：確認<span>[ 岡田自動車株式会社 ]</span></h2>
        </template>
      </ColumnTitle>
      <fg-form :label-width="labelWidth" split-vertical-line item-spacing="30">
        <fg-form-item label="店舗名">
          {{ 'cars足立' }}
        </fg-form-item>
        <fg-form-item label="郵便番号">
          {{ '000-0000' }}
        </fg-form-item>

        <fg-form-item label="都道府県">
          {{ '東京都' }}
        </fg-form-item>

        <fg-form-item label="市区町村">
          {{ '渋谷区' }}
        </fg-form-item>

        <fg-form-item label="番地など">
          {{ '2丁目' }}
        </fg-form-item>

        <fg-form-item label="建物名・部屋番号など">
          {{ 'カーズマンション' }}
        </fg-form-item>
        <fg-form-item label="電話番号">
          {{ '000-0000-0000' }}
        </fg-form-item>
        <fg-form-item label="メールアドレス">
          {{ 'user@cars-enjoy.com' }}
        </fg-form-item>
        <fg-form-item label="導入サービス">
          <div class="service-items">
            <div
              v-for="(item, i) in serviceItems"
              :key="`${item}-${i}`"
              class="service-items_item"
            >
              <MarkIcon :value="true" :icon-src="item.icon" :text="item.text" />
            </div>
          </div>
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
import MarkIcon from '~/components/common/mark-icon/index'

export default {
  components: {
    ColumnTitle,
    WhiteBox,
    MarkIcon,
  },
  data() {
    return {
      labelWidth: '168px',
      form: {},
      serviceItems: [
        {
          icon: 'car',
          text: '購入',
        },
        {
          icon: 'money',
          text: '整備',
        },
        {
          icon: 'wrench',
          text: '整備',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.console-company_all-regist-confirm-wrapper {
  margin: 0 auto;
  padding: 20px 0;
  width: 712px;
  .customer-column-title-wrapper {
    h2 {
      span {
        margin-left: 10px;
        font-size: 12px;
      }
    }
  }
  .fg-form {
    margin: 10px 20px 0;
    .plus-row-wrapper {
      .fg-row {
        margin-bottom: 15px;
      }
    }
    .fg-form-item {
      .service-items {
        display: flex;
        align-items: center;
        &_item {
          cursor: pointer;
          margin-right: 25px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .mark-icon {
            .icon {
              background-color: #dddddd !important;
              &.__selected {
                background-color: #e50012 !important;
              }
            }
          }
          &_text {
            font-size: 12px;
          }
        }
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
