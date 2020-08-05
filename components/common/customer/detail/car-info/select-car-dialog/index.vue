<template>
  <v-dialog v-model="visible" persistent scrollable max-width="670px">
    <v-card class="change-car-dialog-card">
      <DialogHeader title="車両選択" @close="visible = false" />
      <GlobalPagination
        v-model="currentPage"
        class="mt15 mb15 ml25 mr25"
        :total="data.total"
        :page-size="pageSize"
        theme="blue"
      />
      <GlobalTable
        :headers="tableHeaders"
        body-height="450px"
        :list="list"
        head-font-weight-normal
        head-background
        td-space-vertical-line
        stripe
      >
        <tr
          v-for="(item, i) in list"
          :key="i"
          class="cur"
          :class="item.isSelected ? 'is-selected' : ''"
          @click="handleSelect(item)"
        >
          <td>{{ item.maker }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ fmtCarNumber(item) }}</td>
        </tr>
      </GlobalTable>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
import GlobalTable from '~/components/common/customer/custom-table/index'
import GlobalPagination from '~/components/common/global-pagination/index'
import { fmtCarNumber } from '~/components/common/customer/helper'

export default {
  components: {
    DialogHeader,
    GlobalPagination,
    GlobalTable,
  },
  props: {
    value: Boolean,
    data: {
      type: Object,
      default() {
        return {
          total: 0,
        }
      },
    },
    currentCar: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      visible: this.value,
      tableHeaders: [
        { text: 'メーカー', width: 120 },
        { text: '車種', width: 120 },
        { text: 'グレード' },
        { text: '登録ナンバー', width: 150 },
      ],
      currentPage: 1,
      pageSize: 10,
    }
  },
  computed: {
    list() {
      const currentCarId = this.currentCar.carId
      let list = this.data.results || []
      list = list.map((item) => {
        return {
          ...item,
          isSelected: item.carId === currentCarId,
        }
      })
      return list.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      )
    },
  },
  watch: {
    value(val) {
      if (this.visible !== val) {
        this.visible = val
      }
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    fmtCarNumber,
    handleSelect(item) {
      if (item.carId !== this.currentCar.carId) {
        this.$emit('change', item)
        // this.list = this.list.map((v) => {
        //   v.isSelected = v.carId === item.carId
        //   return v
        // })
        this.visible = false
      }
    },
  },
}
</script>

<style lang="scss">
.change-car-dialog-card {
  position: relative;
}
</style>
