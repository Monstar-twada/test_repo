<template>
  <div class="admin-area-edit-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <Form />
  </div>
</template>

<script>
import Form from './Form'
import Breadcrumbs from '~/components/common/breadcrumbs/index'

export default {
  components: {
    Breadcrumbs,
    Form,
  },
  data() {
    return {
      page: '管理 [ 企業情報詳細 ]',
      breadcrumbs: [
        {
          text: '管理',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
