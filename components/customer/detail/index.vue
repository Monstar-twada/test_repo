<template>
  <div class="customer-detail-page-wrapper">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="customer.svg"
    >
      <template v-slot:right>
        <SendingRequestButton @click="sendingRequestClick" />
      </template>
    </Breadcrumbs>

    <CustomerInfo class="customer-info" :data="customerData" />
    <CarInfo class="customer-info mt30" :customer-id="query.id" />
    <MemoTable class="customer-info mt30" :customer-id="query.id" />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index'
import CustomerInfo from '~/components/customer/detail/CustomerInfo.vue'
import CarInfo from '~/components/customer/detail/car-info/index.vue'
import MemoTable from '~/components/customer/detail/MemoTable.vue'
import SendingRequestButton from '~/components/customer/detail/button/SendingRequest'
export default {
  layout: 'manager',
  // middleware: 'authenticated',
  components: {
    Breadcrumbs,
    CustomerInfo,
    CarInfo,
    MemoTable,
    SendingRequestButton,
  },
  data() {
    return {
      page: '顧客管理',
      breadcrumbs: [
        {
          text: '顧客管理',
          href: '/customer',
          nuxt: true,
        },
        {
          text: '顧客詳細',
          href: '',
        },
      ],
      query: $nuxt.$route.query || {},
      customerData: {
        enquete: {},
      },
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    sendingRequestClick() {},
    async getDetail() {
      try {
        const res = await this.$api.get(`/v1/customer/${this.query.id}`)
        // console.log('customer detail index.vue', res)
        this.customerData = {
          ...res.customer,
          enquete: res.enquete || {},
        }
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>
<style lang="scss">
.customer-detail-page-wrapper {
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
