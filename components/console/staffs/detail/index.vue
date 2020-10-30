<template>
  <div class="staffs-detail-wrapper">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <Form />
  </div>
</template>

<script>
import Form from './Form.vue'
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
        text: '管理',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.staffs-detail-wrapper {
  color: #333333;
}
</style>
