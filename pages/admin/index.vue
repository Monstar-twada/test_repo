<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="setting.svg"
    />
    <BodyContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import BodyContainer from '~/components/admin/BodyContainer'

export default {
  layout: 'loggedin',
  components: {
    Breadcrumbs,
    BodyContainer,
  },
  data() {
    return {
      page: '管理',
      breadcrumbs: [
        {
          text: 'home',
          to: '/',
        },
        {
          text: '管理',
          to: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 1080px;
}
</style>
