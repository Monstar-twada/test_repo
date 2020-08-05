<template>
  <div>
    <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
    <UserRegist class="mt30 mb30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index'
import UserRegist from '~/components/common/customer/regist/user/new/userRegist'
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
  layout: 'dashboard',
}
</script>
<style lang="scss" scoped></style>
