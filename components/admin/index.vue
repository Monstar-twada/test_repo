<template>
  <div class="admin-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <Shop />
    <Staff />
  </div>
</template>

<script>
import Shop from './Shop'
import Staff from './Staff'
import Breadcrumbs from '~/components/breadcrumbs/index'
export default {
  components: {
    Breadcrumbs,
    Shop,
    Staff,
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

<style lang="scss"></style>
