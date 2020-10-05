<template>
  <div class="company_all-shop-index-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Shop />
    <div class="btn-container">
      <fg-button
        suffix-icon="arrow-right"
        type="primary"
        border
        bold
        width="220px"
        bg-color="transparent"
        >戻る</fg-button
      >
    </div>
  </div>
</template>

<script>
import Shop from './Shop'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    Shop,
  },
  data: () => ({
    breadcrumbs: [
      {
        text: '契約企業一覧',
        href: '',
      },
      {
        text: '岡田自動車株式会社',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.company_all-shop-index-wrapper {
  color: #333333;
  .btn-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
