<template>
  <v-dialog v-model="visible" persistent max-width="350px">
    <v-card class="edit-reservation-dialog-card">
      <DialogHeader title="予約・入庫状況" @close="visible = false" />

      <table cellspacing="0" cellpadding="0">
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

      <div class="btn-wrapper">
        <v-btn depressed rounded color="#1295CE" height="40" dark
          >更新 <Arrow
        /></v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
import Arrow from '~/components/customer/detail/memo-edit-dialog/Arrow'
export default {
  components: {
    DialogHeader,
    Arrow,
  },
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      list: [
        {
          type: '6ヶ月',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
        {
          type: '12ヶ月',
          tentativeReservation: false,
          reservation: false,
          warehousing: true,
        },
        {
          type: '18ヶ月',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
        {
          type: '車検',
          tentativeReservation: true,
          reservation: true,
          warehousing: true,
        },
      ],
    }
  },
  computed: {},
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
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
.edit-reservation-dialog-card {
  position: relative;
  table {
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
        color: $blue-200;
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
  .btn-wrapper {
    margin: 30px auto 0;
    padding-bottom: 38px;
    width: 240px;
    display: flex;
    flex-direction: column;
    button {
      position: relative;
      &:first-child {
        margin-bottom: 9px;
      }
      svg {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
  }
}
</style>
