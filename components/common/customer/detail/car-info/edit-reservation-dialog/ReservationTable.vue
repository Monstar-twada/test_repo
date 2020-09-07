<template>
  <table
    cellspacing="0"
    cellpadding="0"
    class="customer-reservation-table-wrapper"
  >
    <tr>
      <th></th>
      <th>仮予約</th>
      <th>予約</th>
      <th>入庫</th>
    </tr>
    <tr v-for="(item, i) in list" :key="i">
      <td>{{ item.type }}</td>
      <td class="small">{{ fmtValue(item.tentativeReservation) }}</td>
      <td class="small">{{ fmtValue(item.reservation) }}</td>
      <td class="small">{{ fmtValue(item.warehousing) }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    fmtValue(val) {
      return val ? '○' : 'ー'
    },
  },
}
</script>

<style lang="scss">
.customer-reservation-table-wrapper {
  width: 100%;
  tr {
    th {
      background: #f2f6fa;
      height: 40px;
      border-left: 1px solid #dfe6f0;
      font-size: 12px;
      color: #446ba3;
      border-bottom: 1px solid #dfe6f0;
      font-weight: normal;
      &:first-child {
        border-left-width: 0;
      }
    }
    td {
      text-align: center;
      color: $--color-primary;
      font-size: 12px;
      border-left: 1px solid #dfe6f0;
      border-bottom: 1px solid #dfe6f0;
      height: 40px;
      &:first-child {
        border-left-width: 0;
      }
      &.small {
        font-size: 8px;
      }
    }
  }
}
</style>
