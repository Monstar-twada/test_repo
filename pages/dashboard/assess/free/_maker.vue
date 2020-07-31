<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <BodyContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import BodyContainer from '~/components/assess/free/BodyContainer'

export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    BodyContainer,
  },
  data() {
    return {
      page: '査定',
      breadcrumbs: [
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
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 1080px;
}
</style>
