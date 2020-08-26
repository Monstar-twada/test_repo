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
          <fg-tag size="medium" bg-color="#0786BD">YES</fg-tag>
        </td>
        <td>
          <fg-checkbox :value="true" disabled />
        </td>
        <td>
          <fg-checkbox :value="true" disabled />
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
        },
        {
          text: '車検満了日',
          align: 'center',
        },
        {
          text: '最終取引日',
          align: 'center',
        },
        {
          text: '車検入庫',
          align: 'center',
        },
        {
          text: '本予約',
          align: 'center',
        },
        {
          text: '仮予約',
          align: 'center',
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
  .fg-checkbox.__blue .fg-checkbox-input.__checked .fg-checkbox-inner {
    border-radius: 50%;
    width: 19px;
    height: 19px;
    &:after {
      top: 4px;
      left: 6px;
    }
  }
}
</style>
