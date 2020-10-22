<template>
  <div class="customer-detail-memo-wrapper">
    <ColumnTitle title="活動報告" border> </ColumnTitle>

    <fg-pagination
      v-model="query.page"
      class="m20"
      :total="total"
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
      body-min-height="300px"
      @sort-change="sortChange"
    >
      <tr v-for="(item, i) in list" :key="i" @click="clickRow(item)">
        <td>
          <TableDate :value="item.activityReportDatetime" />
        </td>
        <td>
          <fg-icon
            name="flag"
            :color="item.checkFlag === 0 ? $colors.border : $colors.warning"
          ></fg-icon>
        </td>
        <td>
          <template v-if="item.car">
            {{ item.car.maker }}<br />
            {{ item.car.carType }}
          </template>
        </td>
        <td>{{ transactionTypes[item.transactionType] }}</td>
        <td>{{ channels[item.channel] }}</td>
        <td>
          <fg-text :rows="2" :line-height="1.6" unit="em">
            {{ item.comment }}
          </fg-text>
        </td>
        <td>
          {{ item.store.storeName }}<br />
          {{ item.staff | fmtCustomerName }}
        </td>
        <td>
          <div class="flex">
            <fg-button
              icon="trash"
              border
              size="mini"
              style="width: 24px;"
              @click="delEvent(item, $event)"
            ></fg-button>
          </div>
        </td>
      </tr>
    </fg-table-experiment>

    <EditDialog
      v-model="editVisible"
      :item="currentItem"
      :cars="carList"
      @change="handleChange"
    />

    <DetailDialog
      v-model="detailVisible"
      :item="currentItem"
      @edit="handleEdit"
    />
    <transition name="fg-zoom-in-right-bottom">
      <AddButton v-show="!addVisible" @click="addVisible = true" />
    </transition>
    <AddDialog
      v-model="addVisible"
      :cars="carList"
      :customer-data="customerData"
      :current-car-code="currentCarCode"
      @change="handleChange"
    />
  </div>
</template>
<script>
import { ACTIVITY_LIST_QUERY } from './constants'
import AddDialog from './AddDialog'
import EditDialog from './EditDialog'
import DetailDialog from './DetailDialog'
import AddButton from './add-button/index'
import TableDate from './TableDate'
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { customerMixin } from '~/mixins/customer'

export default {
  components: {
    AddDialog,
    EditDialog,
    ColumnTitle,
    DetailDialog,
    AddButton,
    TableDate,
  },
  mixins: [customerMixin],
  props: {
    customerCode: {
      type: [String, Number],
      default: '',
    },
    customerData: {
      type: Object,
      default: () => {},
    },
    currentCarCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      headers: [
        { text: '日時', width: 120 },
        {
          text: 'チェック',
          width: 100,
          // sortable: true,
          // sortactive: true,
          field: 'checkFlag',
        },
        {
          text: '対象車両',
          width: 100,
          // sortable: true,
          // sortactive: true,
          field: 'carCode',
        },
        {
          text: '取引種別',
          width: 100,
          // sortable: true,
          // sortactive: true,
          field: 'transactionType',
        },
        {
          text: 'チャネル',
          width: 100,
          // sortable: true,
          // sortactive: true,
          field: 'channel',
        },
        { text: 'コメント' },
        {
          text: '担当者',
          width: 100,
          // sortable: true,
          // sortactive: true,
          field: 'contactStaffCode',
        },
        { text: '', width: 60 },
      ],
      query: {
        ...ACTIVITY_LIST_QUERY,
      },
      total: 0,
      list: [],
      addVisible: false,
      editVisible: false,
      detailVisible: false,
      currentItem: {},
      carList: [],
    }
  },
  computed: {
    transactionTypes() {
      return this.$ui.getBasicData('transaction_type', true)
    },
    channels() {
      return this.$ui.getBasicData('channel', true)
    },
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.getList()
      },
    },
    editVisible(val) {
      if (val) this.getCarList()
    },
    addVisible(val) {
      if (val) this.getCarList()
    },
  },
  created() {
    this.getList()
  },
  methods: {
    async getList() {
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
          `/v1/customers/${this.customerCode}/activityReports`,
          params
        )
        this.list = (res.results || []).map((item) => item.activity)
        this.total = res.total
      } catch (err) {
        this.$ui.error('[event-table/index.vue]', err)
        this.$alert(err.message)
      }
    },
    clickRow(row) {
      this.currentItem = row
      this.detailVisible = true
    },
    handleEdit() {
      this.detailVisible = false
      this.editVisible = true
    },
    sortChange(field, sort) {
      this.headers.map((item) => {
        item.sortactive = item.field === field
      })
      for (const item in this.query.sort) {
        this.query.sort[item] = item === field ? sort : ''
      }
      this.query.page = 1
    },
    async delEvent(item, e) {
      e.stopPropagation()
      // eslint-disable-next-line promise/param-names
      const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms))
      try {
        await this.$confirm('この活動情報を削除してもよろしいですか？')
        await this.$api.delete(
          `/v1/customers/${item.customerCode}/activityReports/${item.activityId}`
        )
        // this.$alert('削除成功！')
      } catch (err) {
        if (err) this.$alert(err.message)
      }
      await delay()
      this.getCarList()
      this.getList()
      this.$root.$emit('getCarList')
    },
    getCarList() {
      try {
        /* eslint-disable prefer-const */
        let { results } =
          this.$ui.getCache('cars_customer_' + this.customerCode) || {}
        // let { total, results } =
        //   this.$ui.getCache('cars_customer_' + this.customerCode) || {}
        // if (!Array.isArray(results) || results.length !== total) {
        //   results = await this._getAllCars()
        //   this.$ui.setCache('cars_customer_' + this.customerCode, {
        //     total: results.length,
        //     results,
        //   })
        // }
        this.carList = results.map((item) => {
          return {
            text:
              item.text ||
              `${item.maker ? item.maker : ''} ${
                item.carType ? item.carType : ''
              }`,
            value: item.value || item.carCode,
          }
        })
      } catch (err) {
        console.error(err)
      }
    },
    _getAllCars() {
      return new Promise((resolve, reject) => {
        const limit = 500
        let page = 1
        let arr = []
        let $this = this
        function getData() {
          $this.$api
            .get(`/v1/customers/${$this.customerCode}/cars`, {
              limit,
              offset: (page - 1) * limit,
            })
            .then(({ total, results }) => {
              arr = arr.concat(results)
              if (total && arr.length < total) {
                page++
                getData()
              } else {
                resolve(arr)
              }
            })
            .catch(reject)
        }
        getData()
      })
    },
    handleChange() {
      this.query = {
        ...ACTIVITY_LIST_QUERY,
      }
    },
  },
}
</script>

<style lang="scss">
.customer-detail-memo-wrapper {
  .edit-button {
    cursor: pointer;
  }
}
</style>
