<template>
  <div class="customer-detail-page-wrapper">
    <Breadcrumbs
      :breadcrumbs="breadcrumbs"
      :page="page"
      title-image="customer.svg"
    >
      <template v-slot:right>
        <fg-button
          prefix-icon="plus"
          justify="center"
          size="small"
          class="mr10"
          width="106"
          style="display: none"
          >車両追加</fg-button
        >
        <fg-button
          prefix-icon="car-line"
          justify="center"
          size="small"
          width="106"
          style="display: none"
          @click="sendingRequestClick"
          >送客依頼</fg-button
        >
      </template>
    </Breadcrumbs>

    <CustomerInfo class="customer-info" :data="customerData" />
    <CarInfo
      :customer-code="query.customerCode"
      @current-car-code="(code) => (currentCarCode = code)"
    />
    <EventTable
      class="customer-info mt30"
      :customer-code="query.customerCode"
      :customer-data="customerData"
      :current-car-code="currentCarCode"
    />
  </div>
</template>

<script>
import Breadcrumbs from '~/components/common/breadcrumbs/index';
import CustomerInfo from '~/components/common/customer/detail/customer-info/index.vue';
import CarInfo from '~/components/common/customer/detail/car-info/index.vue';
import EventTable from '~/components/common/customer/detail/event-table/index.vue';

export default {
  components: {
    Breadcrumbs,
    CustomerInfo,
    CarInfo,
    EventTable,
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
      query: this.$route.query || {},
      customerData: {},
      currentCarCode: null,
    };
  },
  created() {
    this.getDetail();
  },
  methods: {
    sendingRequestClick() {},
    async getDetail() {
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.query.customerCode}`
        );
        this.customerData = {
          ...res,
        };
      } catch (err) {
        this.$alert(err.message);
        console.error(err);
      }
    },
  },
};
</script>

<style lang="scss">
.customer-detail-page-wrapper {
  color: $--color-primary;
  .high-light {
    color: $--color-primary-active;
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
    background-color: $--color-white;
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
