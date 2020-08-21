<template>
  <v-dialog v-model="visible" persistent max-width="350px">
    <v-card class="edit-reservation-dialog-card">
      <DialogHeader title="予約・入庫状況" @close="visible = false" />

      <ReservationTable :list="list" />

      <div class="btn-wrapper">
        <fg-button suffix-icon="arrow-right">更新</fg-button>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import ReservationTable from './ReservationTable'
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  components: {
    DialogHeader,
    ReservationTable,
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
}
</script>

<style lang="scss">
.edit-reservation-dialog-card {
  position: relative;
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
