<template>
  <div class="company_all-shop-edit-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Form />
  </div>
</template>

<script>
import Form from './Form'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  layout: 'console',
  components: {
    Breadcrumbs,
    Form,
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
.company_all-shop-edit-wrapper {
  color: #333333;
  .btn-container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
  }
}
</style>
