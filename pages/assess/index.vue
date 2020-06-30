<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" is-title-btn />
    <Searchbar />
    <AssessResult class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import Searchbar from '~/components/assess/Searchbar.vue'
import AssessResult from '~/components/assess/AssessResult.vue'
export default {
  components: {
    Breadcrumbs,
    Searchbar,
    AssessResult,
  },
  data: () => ({
    page: '査定',
    breadcrumbs: [
      {
        text: 'home',
        to: '/',
      },
      {
        text: '査定管理',
        to: '',
      },
    ],
  }),
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
