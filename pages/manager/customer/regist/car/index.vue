<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <IndexBodyContainer />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index'
import IndexBodyContainer from '~/components/customer/regist/car/IndexBodyContainer'
export default {
  layout: 'manager',
  components: {
    Breadcrumbs,
    IndexBodyContainer,
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
          href: '/customer/car',
        },
      ],
    }
  },
}
</script>
<style lang="scss"></style>
