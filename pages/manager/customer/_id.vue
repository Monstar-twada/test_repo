<template>
  <div class="customer-detail-wrapper">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="customer.svg"
    >
      <template v-slot:right>
        <SendingRequestButton @click="sendingRequestClick" />
      </template>
    </Breadcrumbs>

    <CustomerInfo class="customer-info" />
    <CarInfo class="customer-info mt30" />
    <MemoTable class="customer-info mt30" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/breadcrumbs/index'
import CustomerInfo from '~/components/customer/detail/CustomerInfo.vue'
import CarInfo from '~/components/customer/detail/CarInfo.vue'
import MemoTable from '~/components/customer/detail/MemoTable.vue'
import SendingRequestButton from '~/components/customer/detail/button/SendingRequest'
export default {
  layout: 'manager',
  middleware: 'authenticated',
  components: {
    Breadcrumbs,
    CustomerInfo,
    CarInfo,
    MemoTable,
    SendingRequestButton,
  },
  data: () => ({
    page: '顧客管理',
    breadcrumbs: [
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
  methods: {
    sendingRequestClick() {},
  },
}
</script>
<style lang="scss">
.customer-detail-wrapper {
  .high-light {
    color: $blue-100;
  }
  .right-border {
    position: relative;
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 1px;
      height: 100%;
      background: #e5edf6;
    }
  }
  .customer-info {
    width: 100%;
    background-color: $white-300;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
