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
  components: {
    Breadcrumbs,
    IndexBodyContainer,
  },
  data() {
    return {
      page: '顧客管理 [ 車両登録 ]',
      breadcrumbs: [
        {
          text: 'home',
          href: '/',
        },
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
