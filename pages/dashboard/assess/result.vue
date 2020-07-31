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
import AssessExpertBar from '~/components/AssessExpertBar.vue'
import ResultInformation from '~/components/assess/ResultInformation.vue'
import ResultPrice from '~/components/assess/ResultPrice.vue'
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
