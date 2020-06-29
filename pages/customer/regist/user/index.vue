<template>
  <div class="main-container">
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <UserRegist class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import UserRegist from '~/components/customer/regist/UserRegist.vue'
export default {
  components: {
    Breadcrumbs,
    UserRegist,
  },
  data: () => ({
    page: '顧客管理',
    breadcrumbs: [
      {
        text: 'home',
        to: '/',
      },
      {
        text: '顧客管理',
        to: 'customer',
      },
      {
        text: '顧客登録',
        to: 'customer/regist/user',
      },
    ],
  }),
  layout: 'loggedin',
}
</script>
<style lang="scss" scoped>
.main-container {
  padding: 30px 0px;
  width: 100%;
}
</style>
