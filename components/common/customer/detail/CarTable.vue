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
    >
      <tr v-for="(item, i) in list" :key="i" @click="clickRow(item)">
        <td>{{ item.maker }}</td>
        <td>{{ item.class }}</td>
        <td>{{ fmtCarNumber(item) }}</td>
        <td>2020/09/20</td>
        <td>2020/09/20</td>
        <td>2020/09/02</td>
        <td>
          <fg-tag
            size="medium"
            width="60px"
            round
            bold
            :color="i % 4 === 1 ? '#fff' : '$--color-primary-active'"
            :bg-color="i % 4 === 1 ? '$--color-primary-active' : '#DFE6F0'"
            >{{ i % 4 === 1 ? 'YES' : 'No' }}</fg-tag
          >
        </td>
        <td>
          <span v-if="i % 4 === 1" class="temp-checkbox">
            <fg-icon name="hook" color="#fff"></fg-icon>
          </span>
        </td>
        <td>
          <span v-if="i % 3 === 0" class="temp-checkbox">
            <fg-icon name="hook" color="#fff"></fg-icon>
          </span>
        </td>
        <td>10</td>
      </tr>
    </fg-table-experiment>
  </div>
</template>

<script>
import ColumnTitle from '~/components/common/customer/common/ColumnTitle'
import { fmtCarNumber } from '~/components/common/customer/common/helper'

export default {
  components: {
    ColumnTitle,
  },
  props: {
    customerId: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    console.log(JSON.stringify(this.carListData, null, 2))
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
        },
        {
          text: '車検満了日',
          align: 'center',
          sortable: true,
        },
        {
          text: '最終取引日',
          align: 'center',
          sortable: true,
        },
        {
          text: '車検入庫',
          align: 'center',
          sortable: true,
        },
        {
          text: '本予約',
          align: 'center',
          sortable: true,
          width: 100,
        },
        {
          text: '仮予約',
          align: 'center',
          sortable: true,
          width: 100,
        },
        {
          text: '活動報告',
          align: 'center',
        },
      ],
      query: {
        page: 1,
        limit: 10,
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
  },
  methods: {
    fmtCarNumber,
    clickRow(row) {
      this.$emit('change', row)
    },
    async getCarList() {
      const { page, limit } = this.query
      const params = {
        limit,
        offset: (page - 1) * limit,
      }
      try {
        const res = await this.$api.get(
          `/v1/customer/${this.customerId}/car`,
          params
        )
        console.log('getCarList', res)
        this.carListData = res || {}
      } catch (e) {
        console.error(e)
      }
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
