<template>
  <fg-dialog
    v-model="visible"
    class="customer-change-car-dialog"
    persistent
    max-width="670px"
    title="車両選択"
  >
    <div>
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
          <td>{{ item.carType }}</td>
          <td>{{ item.grade }}</td>
          <td>{{ item | fmtCarNumber }}</td>
        </tr>
      </fg-table-experiment>
    </div>
  </fg-dialog>
</template>

<script>
import { customerMixin } from '~/mixins/customer'

export default {
  mixins: [customerMixin],
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
    currentCarCode: {
      type: [String, Number],
      default: '',
    },
    query: {
      type: Object,
      default: () => {},
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
    handleSelect(item) {
      if (item.carCode !== this.currentCarCode) {
        this.$emit('change', item)
        this.visible = false
      }
    },
  },
}
</script>

<style lang="scss">
.customer-change-car-dialog {
}
</style>
