<template>
  <div class="main-container">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="result.svg"
    />
    <div>
      <IndexBodyContainer />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import IndexBodyContainer from '~/components/customer/regist/car/IndexBodyContainer'
export default {
  layout: 'loggedin',
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
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  margin: 0 75px;
  width: 100%;
  max-width: 1080px;
}
</style>
