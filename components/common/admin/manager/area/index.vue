<template>
  <div class="admin-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <IndexForm />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index'
import IndexForm from '~/components/admin/manager/area/IndexForm'
export default {
  components: {
    Breadcrumbs,
    IndexForm,
  },
  data() {
    return {
      page: '管理  [ エリア設定 ]',
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
