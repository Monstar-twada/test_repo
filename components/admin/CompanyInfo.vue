<template>
  <div class="admin-company-info-wrapper">
    <div class="header-wrapper">
      <h2>会社情報</h2>
    </div>
    <div class="info-wrapper">
      <dl>
        <dt>会社名</dt>
        <dd>{{ item.company_name }}</dd>
        <dd class="katakana">{{ item.company_katakana }}</dd>
      </dl>
      <dl>
        <dt>所在地</dt>
        <dd>{{ item.postcode }}</dd>
        <dd>{{ item.address }}</dd>
      </dl>
      <dl>
        <dt>電話番号</dt>
        <dd>{{ item.tel }}</dd>
      </dl>
      <dl>
        <dt>メールアドレス</dt>
        <dd>{{ item.mail }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyInfo',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.admin-company-info-wrapper {
  .info-wrapper {
    margin: 20px;
    dl {
      padding: 12px 0;
      color: $blue-200;
      font-size: 0.75rem;
      border-top: 1px solid $gray-100;
      dt {
        font-weight: 600;
        margin-bottom: 4px;
      }
      dd {
        margin-top: 2px;
        &.katakana {
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
