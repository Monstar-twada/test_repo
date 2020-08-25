<template>
  <v-dialog v-model="visible" persistent scrollable max-width="670px">
    <v-card class="change-car-dialog-card">
      <DialogHeader title="車両選択" @close="visible = false" />
      <fg-pagination
        v-model="query.page"
        class="mt15 mb15 ml25 mr25"
        :total="data.total"
        :page-size="query.limit"
        theme="blue"
      />
      <fg-table-experiment
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
          @click="handleSelect(item)"
        >
          <td>{{ item.maker }}</td>
          <td>{{ item.class }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ fmtCarNumber(item) }}</td>
        </tr>
      </fg-table-experiment>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
import { fmtCarNumber } from '~/components/common/customer/common/helper'

export default {
  components: {
    DialogHeader,
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
    query: Object,
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
    }
  },
  computed: {
    list() {
      return this.data.results || []
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
        this.visible = false
      }
    },
  },
}
</script>

<style lang="scss">
.change-car-dialog-card {
  position: relative;
  color: $blue-200 !important;
}
</style>
