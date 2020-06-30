<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <AssessExpertBar />
    <div class="d-flex">
      <ResultInformation />
      <ResultPrice />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import AssessExpertBar from '~/components/AssessExpertBar.vue'
import ResultInformation from '~/components/assess/ResultInformation.vue'
import ResultPrice from '~/components/assess/ResultPrice.vue'
export default {
  components: {
    Breadcrumbs,
    AssessExpertBar,
    ResultInformation,
    ResultPrice,
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
          to: 'matter',
        },
        {
          text: '新規査定',
          to: '査定入力',
        },
      ],
    }
  },
  layout: 'loggedin',
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.main-container {
  padding: 30px 70px 100px;
  width: 100%;
}
</style>
