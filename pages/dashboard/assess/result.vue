<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <AssessExpertBar />
    <div class="d-flex">
      <ResultInformation />
      <ResultPrice />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index.vue'
import AssessExpertBar from '~/components/dashboard/assess/AssessExpertBar.vue'
import ResultInformation from '~/components/dashboard/assess/ResultInformation.vue'
import ResultPrice from '~/components/dashboard/assess/ResultPrice.vue'
export default {
  layout: 'dashboard',
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
}
</script>
