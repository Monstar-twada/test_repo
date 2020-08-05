<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="customer.svg"
    />
    <ConfirmBodyContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index'
import ConfirmBodyContainer from '~/components/common/customer/regist/user/confirm/ConfirmBodyContainer.vue'
export default {
  layout: 'dashboard',
  components: {
    Breadcrumbs,
    ConfirmBodyContainer,
  },
  data() {
    return {
      page: '顧客管理 [ 顧客登録 ]',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '/customer',
        },
        {
          text: '車両登録',
          href: '/customer/car',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
