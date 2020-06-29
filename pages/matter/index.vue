<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <Searchbar />
    <MatterResult />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/Searchbar.vue'
import MatterResult from '~/components/matter/MatterResult'

export default {
  components: {
    Breadcrumbs,
    Searchbar,
    MatterResult,
  },
  data() {
    return {
      page: '案件管理',
      breadcrumbs: [
        {
          text: 'home',
          to: '/',
        },
        {
          text: '案件管理',
          to: '/matter',
        },
      ],
    }
  },
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  max-width: 1080px;
}
</style>
