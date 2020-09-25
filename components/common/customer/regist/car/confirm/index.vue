<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <ConfirmBodyContainer />
  </div>
</template>

<script>
import ConfirmBodyContainer from './ConfirmBodyContainer'
import Breadcrumbs from '~/components/common/breadcrumbs/index'
export default {
  components: {
    Breadcrumbs,
    ConfirmBodyContainer,
  },
  data() {
    return {
      page: '顧客管理 [ 車両登録 ]',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '/customer',
        },
        {
          text: '車両登録',
          // href: '/customer/car',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
