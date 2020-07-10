<template>
  <div>
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="customer.svg"
    />
    <div class="customer-info customer-info__profile">
      <CustomerInfo />
    </div>
    <div class="customer-info customer-info__car mt20">
      <CarInfo />
    </div>
    <div class="customer-info customer-info__memo mt20">
      <MemoTable />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import CustomerInfo from '~/components/customer/detail/CustomerInfo.vue'
import CarInfo from '~/components/customer/detail/CarInfo.vue'
import MemoTable from '~/components/customer/detail/MemoTable.vue'
export default {
  components: {
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
        href: '/',
      },
      {
        text: '顧客管理',
        href: '/customer',
      },
      {
        text: '顧客詳細',
        href: '',
      },
    ],
  }),
}
</script>
<style lang="scss">
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
