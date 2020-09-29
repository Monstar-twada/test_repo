<template>
  <div class="ma-export-dialog" :class="[visible ? '' : '__close']">
    <DialogHeader title="エクスポートしますか？" @close="visible = false" />
    <fg-button
      class="ma-export-dialog-button"
      type="primary"
      bold
      width="240"
      @click="handleExport"
      >はい</fg-button
    >
  </div>
</template>
<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  name: 'ExportDialog',
  components: {
    DialogHeader,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    exportList: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  watch: {
    value(val) {
      this.visible = val
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleExport() {
      const list = this.exportList
      let csv =
        '\uFEFF' +
        '店舗名,対象月,対象者総数,アクション進捗,継続顧客,納車済,車検入庫,本予約,未確定,検討中,買替意向,仮予約,不通,流出先不明,他社流出,買替,車検,廃車\n'
      const line1 =
        '10001,' +
        list.registrationEndMonth +
        ',' +
        list.targetTotalCount +
        ',' +
        list.callTotalCount +
        ',' +
        list.continueTotalCount +
        ',' +
        list.deliveredTotalCount +
        ',' +
        list.carInspectionTotalCount +
        ',' +
        list.reservationTotalCount +
        ',' +
        list.pendingTotalCount +
        ',' +
        list.underReviewCount +
        ',' +
        list.purchaseIntentionTotalCount +
        ',' +
        list.tentiveReservationTotalCount +
        ',' +
        list.failureCount +
        ',' +
        list.outflowUnknownCount +
        ',' +
        list.outflowTotalCount +
        ',' +
        list.outflowReplacementCount +
        ',' +
        list.outflowInspectionCount +
        ',' +
        list.outflowScrappedCount +
        ',' +
        '\n'
      const line2 =
        ',,,' +
        list.callTotalRatio +
        '%,' +
        list.continueTotalRetio +
        '%,' +
        list.deliveredTotalRatio +
        '%,' +
        list.carInspectionTotalRatio +
        '%,' +
        list.reservationTotalRatio +
        '%,' +
        list.pendingTotalRatio +
        '%,' +
        list.underReviewRatio +
        '%,' +
        list.purchaseIntentionTotalRatio +
        '%,' +
        list.tentiveReservationTotalRatio +
        '%,' +
        list.failureRatio +
        '%,' +
        list.outflowUnknownRatio +
        '%,' +
        list.outflowTotalRatio +
        '%,' +
        list.outflowReplacementRatio +
        '%,' +
        list.outflowInspectionRatio +
        '%,' +
        list.outflowScrappedRatio +
        '%,' +
        '\n'
      csv += line1
      csv += line2
      const blob = new Blob([csv], { type: 'text/csv' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'total.csv'
      link.click()
      this.visible = false
    },
  },
}
</script>
<style lang="scss">
.ma-export-dialog {
  display: block;
  position: absolute;
  right: 120px;
  top: 30px;
  width: 340px;
  height: 120px;
  background: $--color-white;
  border-radius: 6px;
  box-shadow: 0 11px 15px -7px $--color-shadow-primary,
    0 24px 38px 3px $--color-shadow-primary,
    0 9px 46px 8px $--color-shadow-primary;
  z-index: 10;
  .dialog-header-wrapper.border {
    border-bottom: none;
  }

  &-button {
    width: 240px;
    margin-left: 50px;
  }
}

.ma-export-dialog.__close {
  display: none;
}
</style>
