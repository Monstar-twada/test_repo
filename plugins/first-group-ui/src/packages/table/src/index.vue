<template>
  <div class="fg-table">
    <div class="fg-table__table-wrapper">
      <table :class="fullTableClass">
        <thead :class="fullTableHeadClass">
          <tr>
            <TableColumnHeader
              v-for="column in columns"
              :key="column.show"
              :sort="sort"
              :column="column"
              @click="changeSorting(column)"
            ></TableColumnHeader>
          </tr>
        </thead>
        <tbody :class="fullTableBodyClass">
          <TableRow
            v-for="row in displayedRows"
            :key="row.vueTableComponentInternalRowId"
            :row="row"
            :columns="columns"
            @rowClick="emitRowClick"
          ></TableRow>
        </tbody>
      </table>
    </div>

    <div style="display: none;">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Column from './js/column.js'
import Row from './js/row.js'
import { classList } from './js/utils.js'
import TableColumnHeader from './TableColumnHeader'
import TableRow from './TableRow'

export default {
  name: 'FgTable',
  components: {
    TableColumnHeader,
    TableRow,
  },

  props: {
    data: {
      type: Array,
      default: () => {
        return []
      },
    },
    tableClass: {
      type: String,
      default: '',
    },
    theadClass: {
      type: String,
      default: '',
    },
    tbodyClass: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    columns: [],
    rows: [],
    sortRows: [],
    sort: {
      fieldName: '',
      order: '',
    },
  }),

  computed: {
    fullTableClass() {
      return classList('fg-table__table', this.tableClass)
    },

    fullTableHeadClass() {
      return classList('fg-table__table__head', this.theadClass)
    },

    fullTableBodyClass() {
      return classList('fg-table__table__body', this.tbodyClass)
    },

    usesLocalData() {
      return Array.isArray(this.data)
    },

    displayedRows() {
      return this.sortedRows
    },

    sortedRows() {
      if (!this.usesLocalData) {
        return this.rows
      }

      if (this.sort.fieldName === '') {
        return this.rows
      }

      if (this.sort.order === '') {
        return this.rows
      }

      if (this.columns.length === 0) {
        return this.rows
      }

      const sortColumn = this.getColumn(this.sort.fieldName)

      if (!sortColumn) {
        return this.rows
      }

      const sortedRow = this.sortRows

      return sortedRow.sort(
        sortColumn.getSortPredicate(this.sort.order, this.columns)
      )
    },
  },

  watch: {
    data() {
      if (this.usesLocalData) {
        this.mapDataToRows()
      }
    },
  },

  mounted() {
    const columnComponents = this.$slots.default
      .filter((column) => column.componentInstance)
      .map((column) => column.componentInstance)

    this.columns = columnComponents.map((column) => new Column(column))

    columnComponents.forEach((columnCom) => {
      Object.keys(columnCom.$options.props).forEach((prop) =>
        columnCom.$watch(prop, () => {
          this.columns = columnComponents.map((column) => new Column(column))
        })
      )
    })

    this.mapDataToRows()
  },

  methods: {
    mapDataToRows() {
      this.rows = this.getRowsData()
      this.sortRows = this.getRowsData()
    },

    getRowsData() {
      const data = this.prepareLocalData()
      let rowId = 0

      return data
        .map((rowData) => {
          rowData.vueTableComponentInternalRowId = rowId++
          return rowData
        })
        .map((rowData) => new Row(rowData, this.columns))
    },

    prepareLocalData() {
      return this.data
    },

    changeSorting(column) {
      if (this.sort.fieldName !== column.show) {
        this.sort.fieldName = column.show
        this.sort.order = 'asc'
      } else if (this.sort.order === '') {
        this.sort.order = 'asc'
      } else {
        this.sort.order = this.sort.order === 'asc' ? 'desc' : ''
      }

      if (!this.usesLocalData) {
        this.mapDataToRows()
      }
    },

    getColumn(columnName) {
      return this.columns.find((column) => column.show === columnName)
    },

    emitRowClick(row) {
      this.$emit('rowClick', row)
    },
  },
}
</script>

<style lang="scss">
*,
*:after,
*:before {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.fg-table {
  display: flex;
  flex-direction: column;
  border-spacing: 0;
  margin-top: 20px;
}

.fg-table__table {
  min-width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  border-spacing: 0;
  &-wrapper {
    overflow-x: auto;
    width: 100%;
    border-radius: 6px;
  }
  thead {
    tr {
      th {
        vertical-align: middle;
        text-align: center;
        font-size: 12px;
        font-weight: normal;
        height: 40px;
        padding: 0;
        white-space: nowrap;
        color: $--color-primary;
        background-color: $--color-white;
        border-bottom: 1px $--color-border solid;
      }
      th.fg-table__th--sort span {
        display: inline-block;
        margin-left: 4px;
      }

      th.fg-table__th--sort span:before {
        content: '';
        position: absolute;
        top: calc(50% - 10px);
        width: 4px;
        height: 4px;
        border-top: 4px solid $--color-border;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        transform: rotate(180deg);
      }

      th.fg-table__th--sort span:after {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        width: 4px;
        height: 4px;
        border-top: 4px solid $--color-border;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
      }

      th.fg-table__th--sort-asc {
        font-weight: bold;
        span:before {
          border-top: 4px solid $--color-primary;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }
      }

      th.fg-table__th--sort-desc {
        font-weight: bold;

        span:after {
          border-top: 4px solid $--color-primary;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
        }
      }
    }

    &.thead-bg {
      tr {
        th {
          border-bottom: none;
          background-color: $--color-background;
        }
      }
    }
  }
  tbody {
    tr {
      height: 70px;
      background-color: $--color-white;
      &:not(:last-child) {
        border-bottom: 1px $--color-border solid;
      }

      td {
        font-size: 12px;
        padding: 0 5px;
        color: $--color-primary;

        &:not(:last-child):after {
          content: '';
          position: absolute;
          width: 1px;
          height: 70%;
          top: 15%;
          right: 0;
          background: $--color-border;
        }
        &.left {
          text-align: left;
        }

        &.center {
          text-align: center;
        }

        &.right {
          text-align: right;
        }
      }
    }

    &.tbody-bg {
      tr {
        border-bottom: none;
        &:nth-child(even) {
          background-color: $--color-background;
        }
      }
    }
  }
}
</style>
