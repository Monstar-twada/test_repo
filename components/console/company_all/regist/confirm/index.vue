<template>
  <div class="customer-regist-user-confirm-page">
    <Breadcrumbs :breadcrumbs="breadcrumbs"> </Breadcrumbs>
    <ConfirmWrapper />
  </div>
</template>

<script>
import ConfirmWrapper from './ConfirmWrapper'
import Breadcrumbs from '~/components/console/common/breadcrumbs/index.vue'

export default {
  components: {
    Breadcrumbs,
    ConfirmWrapper,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: '契約企業一覧',
          href: '',
        },
      ],
    }
  },
}
</script>
