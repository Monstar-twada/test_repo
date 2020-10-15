<template>
  <div class="car-select-table-wrapper">
    <ColumnTitle title="車両一覧" border>
      <fg-button
        size="small"
        type="icon"
        circle
        border
        icon="plus"
        @click="addCarVisible = true"
      />
    </ColumnTitle>
    <fg-pagination
      v-model="query.page"
      class="m20"
      :total="carListData.total"
      :page-size="query.limit"
      theme="blue"
    />
    <fg-table-experiment
      :headers="headers"
      :list="list"
      head-font-weight-normal
      head-background
      td-space-vertical-line
      stripe
      small-header
      @sort-change="sortChange"
    >
      <tr v-for="(item, i) in list" :key="i" @click="clickRow(item)">
        <td>{{ item.maker }}</td>
        <td>{{ item.carType }}</td>
        <td>{{ item | fmtCarNumber }}</td>
        <td>{{ item.registrationFirstDate | fmtDate }}</td>
        <td>{{ item.registrationEndDate | fmtDate }}</td>
        <td>{{ item.sellingDatetime | fmtDate }}</td>
        <td>
          <fg-tag
            size="medium"
            width="60px"
            round
            bold
            :color="
              item.carInspectionFlag === 1 ? '#fff' : $colors.primaryActive
            "
            :bg-color="
              item.carInspectionFlag === 1 ? $colors.primaryActive : '#DFE6F0'
            "
            >{{ item.carInspectionFlag === 1 ? 'YES' : 'No' }}</fg-tag
          >
        </td>
        <td>
          <span v-if="item.reservationFlag === 1" class="temp-checkbox">
            <fg-icon name="hook" color="#fff"></fg-icon>
          </span>
        </td>
        <td>
          <span v-if="item.tentiveReservationFlag === 1" class="temp-checkbox">
            <fg-icon name="hook" color="#fff"></fg-icon>
          </span>
        </td>
        <td>{{ item.activityCount }}</td>
      </tr>
    </fg-table-experiment>
  </div>
</template>

<script>
import { CAR_LIST_QUERY } from '../common/base'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { customerMixin } from '~/mixins/customer'

export default {
  components: {
    ColumnTitle,
  },
  mixins: [customerMixin],
  props: {
    customerCode: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      addCarVisible: false,
      headers: [
        {
          text: 'メーカー',
          align: 'center',
        },
        {
          text: '車種',
          align: 'center',
        },
        {
          text: '登録ナンバー',
          align: 'center',
        },
        {
          text: '初度登録年月',
          align: 'center',
          sortable: true,
          field: 'registrationFirstDate',
        },
        {
          text: '車検満了日',
          align: 'center',
          sortable: true,
          field: 'registrationEndDate',
        },
        {
          text: '最終取引日',
          align: 'center',
          sortable: true,
          field: 'sellingDatetime',
        },
        {
          text: '車検入庫',
          align: 'center',
          sortable: true,
          field: 'carInspectionFlag',
        },
        {
          text: '本予約',
          align: 'center',
          sortable: true,
          width: 100,
          field: 'reservationFlag',
        },
        {
          text: '仮予約',
          align: 'center',
          sortable: true,
          width: 100,
          field: 'tentiveReservationFlag',
        },
        {
          text: '活動報告',
          align: 'center',
          width: 100,
        },
      ],
      query: {
        ...CAR_LIST_QUERY,
      },
      carListData: {},
    }
  },
  computed: {
    list() {
      return this.carListData.results || []
    },
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.getCarList()
      },
    },
  },
  created() {
    this.getCarList()
    // To be called function when Activity added
    this.$root.$on('getCarList', () => {
      this.getCarList()
    })
  },
  methods: {
    clickRow(row) {
      this.$emit('change', row)
    },
    async getCarList() {
      const params = {
        ...this.query,
      }
      // sort
      params.sort = this.$ui.fmtSort(this.query.sort)
      // offset
      params.offset = (params.page - 1) * params.limit
      delete params.page
      try {
        const res = await this.$api.get(
          `/v1/customers/${this.customerCode}/cars`,
          params
        )
        this.carListData = res || {}
        // cache cars, use to 活動報告編集
        // if (this.query.page === 1) {
        this.$ui.setCache('cars_customer_' + this.customerCode, res)
        // }
      } catch (err) {
        this.$ui.error('[CarTable.vue::getCarList]', err)
        this.$alert(err.message)
      }
    },
    sortChange(field, sort) {
      this.query.sort[field] = sort
      this.query.page = 1
    },
  },
}
</script>

<style lang="scss">
.car-select-table-wrapper {
  .temp-checkbox {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    background: $--color-primary;
  }
}
</style>
