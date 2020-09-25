<template>
  <div class="admin-staff-edit-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    >
      <template v-slot:left>
        <h2>[ スタッフ詳細 ]</h2>
      </template>
    </Breadcrumbs>
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
      page: '管理',
      breadcrumbs: [
        {
          text: '管理',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.admin-staff-edit-container {
  &_body {
    max-width: 712px;
    width: 100%;
    background-color: $--color-white;
    border-radius: 6px;
    color: $--color-primary;
  }
}
</style>
