<template>
  <div class="templates-edit-wrapper">
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
        text: '送客管理',
        href: '',
      },
    ],
  }),
}
</script>

<style lang="scss">
.templates-edit-wrapper {
  color: #333333;
}
</style>
