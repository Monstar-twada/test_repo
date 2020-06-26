<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <Searchbar />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/matter/Searchbar.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
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
          to: 'matter',
        },
      ],
    }
  },
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 0px;
  width: 100%;
}
</style>
