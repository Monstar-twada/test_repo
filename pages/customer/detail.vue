<template>
  <v-app>
    <Sidebar />
    <div class="main-container">
      <Breadcrumbs :breadcrumbs="breadcrumbs" :page="page" />
      <!------------ Customer Info --------------->
      <div class="customer-info customer-info__profile">
        <CustomerInfo />
      </div>
      <!------------ Car Info --------------->
      <div class="customer-info customer-info__car mt20">
        <CarInfo />
      </div>
      <!------------ Memo Table --------------->
      <div class="customer-info customer-info__memo mt20 mb50">
        <MemoTable />
      </div>
    </div>
  </v-app>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import CustomerInfo from '~/components/customer/detail/CustomerInfo.vue'
import CarInfo from '~/components/customer/detail/CarInfo.vue'
import MemoTable from '~/components/customer/detail/MemoTable.vue'
export default {
  components: {
    Sidebar,
    Breadcrumbs,
    CustomerInfo,
    CarInfo,
    MemoTable,
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
        text: '顧客詳細',
        to: 'detail',
      },
    ],
  }),
}
</script>
<style lang="scss">
.v-application {
  background: url('~static/common/full.png') !important;
  background-size: cover !important;
  background-repeat: repeat !important;
}
.v-application--wrap {
  flex-direction: row !important;
}

.main-container {
  padding: 30px 70px 0px;
  width: 100%;
}
</style>
<style lang="scss" scoped>
.customer-info {
  width: 100%;
  background-color: $white-300;
  border-radius: 5px;
  &__profile {
    overflow: hidden;
  }

  &__car {
    overflow: hidden;
  }

  &__memo {
    overflow: hidden;
  }
}
</style>
