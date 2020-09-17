<template>
  <tr ref="index-1" @click="$emit('rowClick', row)">
    <TableCell
      v-for="column in visibleColumns"
      :key="column.id"
      :row="row"
      :column="column"
    ></TableCell>
  </tr>
</template>

<script>
import TableCell from './TableCell'

export default {
  components: {
    TableCell,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    columns: {
      type: Array,
      default: () => {
        return []
      },
    },
    row: {
      type: Object,
      default: () => {
        return {}
      },
    },
    groupBy: {
      type: String,
      default: null,
    },
  },

  computed: {
    visibleColumns() {
      return this.columns.filter(
        (column) => !column.hidden && column.show !== this.groupBy
      )
    },

    getGroupByIndex() {
      return this.columns.findIndex((column) => column.show === this.groupBy)
    },
  },

  watch: {
    value(val) {
      this.gronpByName = val
    },
    groupByName(val) {
      this.$emit('input', val)
    },
  },

  created() {
    // this.groupByColumnName = this.row.data[this.groupBy]
    // console.log('this.groupBy', this.groupBy)
    // console.log('groupByColumnName', this.groupByColumnName)
    // console.log('columns', this.columns)
    // console.log('groupByName', this.beforeRow)
  },
  methods: {},
}
</script>
