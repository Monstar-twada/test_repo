<template>
  <tr @click="$emit('rowClick', row)">
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
  },

  computed: {
    visibleColumns() {
      return this.columns.filter((column) => !column.hidden)
    },
  },

  created() {
    console.log('row', this.row)
  },
}
</script>
