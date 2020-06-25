<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
      <BodyContainer />
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import BodyContainer from '~/components/assess/free/BodyContainer'

export default {
  components: {
    Sidebar,
    Breadcrumbs,
    BodyContainer,
  },
  data() {
    return {
      page: '査定',
      breadcrumbs: [
        {
          text: 'home',
          to: '/',
        },
        {
          text: '査定',
          to: '/assess',
        },
        {
          text: '新規査定',
          to: '/matter',
        },
        {
          text: 'フリー車種検索',
          to: 'フリー車種検索',
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.v-application {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}
.v-application--wrap {
  flex-direction: row !important;
}
</style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 1080px;
}
</style>
