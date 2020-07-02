<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <Searchbar />
    <MatterResult />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/matter/Searchbar.vue'
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
          href: '/',
        },
        {
          text: '案件管理',
          href: '/matter',
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
  width: 100%;
}
</style>
