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
import DialogHeader from '~/components/common/dialog-header/index';
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
    };
  },
  watch: {
    value(val) {
      this.visible = val;
    },
    visible(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    handleExport() {
      const list = this.exportList;
      const storelist = this.$ui.getCache('store_list');
      let csv =
        '\uFEFF' +
        '店舗名,対象月,対象者総数,アクション進捗,継続顧客,納車済,車検入庫,本予約,未確定,検討中,買替意向,仮予約,不通,流出先不明,他社流出,買換,車検,廃車\n';
      const line1 =
        storelist[0].text +
        ',' +
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
        '\n';
      const line2 =
        ',,,' +
        this.fmtRatio(list.callTotalRatio) +
        ',' +
        this.fmtRatio(list.continueTotalRatio) +
        ',' +
        this.fmtRatio(list.deliveredTotalRatio) +
        ',' +
        this.fmtRatio(list.carInspectionTotalRatio) +
        ',' +
        this.fmtRatio(list.reservationTotalRatio) +
        ',' +
        this.fmtRatio(list.pendingTotalRatio) +
        ',' +
        this.fmtRatio(list.underReviewRatio) +
        ',' +
        this.fmtRatio(list.purchaseIntentionTotalRatio) +
        ',' +
        this.fmtRatio(list.tentiveReservationTotalRatio) +
        ',' +
        this.fmtRatio(list.failureRatio) +
        ',' +
        this.fmtRatio(list.outflowUnknownRatio) +
        ',' +
        this.fmtRatio(list.outflowTotalRatio) +
        ',' +
        this.fmtRatio(list.outflowReplacementRatio) +
        ',' +
        this.fmtRatio(list.outflowInspectionRatio) +
        ',' +
        this.fmtRatio(list.outflowScrappedRatio) +
        '\n';
      csv += line1;
      csv += line2;
      const blob = new Blob([csv], { type: 'text/csv' });
      const fileName = `対象者リスト進捗率_${this.$route.query.date}.csv`;
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.setAttribute('download', fileName);
      link.click();
      this.visible = false;
    },

    fmtRatio(ratio) {
      return Math.round(ratio * 100) + '%';
    },
  },
};
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
