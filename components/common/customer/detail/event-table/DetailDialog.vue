<template>
  <fg-dialog
    v-model="visible"
    class="customer-event-table-detail-dialog"
    persistent
    max-width="840px"
    title="活動報告詳細"
  >
    <template v-slot:title-suffix>
      <fg-icon
        class="ml20"
        name="flag"
        :color="item.checkFlag === 0 ? $colors.border : $colors.warning"
      ></fg-icon>
    </template>
    <div class="body-wrapper">
      <fg-row gutter="20" class="info-header">
        <fg-col span="8"> <b>日時</b>{{ date }}</fg-col>
        <fg-col span="6"> <b>対象車両</b>{{ carInfo }}</fg-col>
        <fg-col span="5">
          <b>取引種別</b>{{ transactionTypes[item.transactionType] }}</fg-col
        >
        <fg-col span="5"> <b>チャネル</b>{{ channels[item.channel] }}</fg-col>
      </fg-row>
      <div class="info-body mt25">
        <h3>コメント</h3>
        <div class="mt15">{{ item.comment }}</div>
      </div>
    </div>
    <div class="footer-wrapper">
      <fg-button
        border
        prefix-icon="edit"
        size="mini"
        justify="center"
        width="63"
        @click="handleEdit"
        >編集</fg-button
      >
    </div>
  </fg-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  computed: {
    date() {
      const date = this.$ui.toDate(this.item.activityReportDatetime)
      return date ? this.$ui.formatDate(date, 'yyyy/MM/dd (W) hh:mm') : '-'
    },
    carInfo() {
      const { car } = this.item
      return car ? [car.maker, car.carType].join(' ') : '-'
    },
    transactionTypes() {
      return this.$ui.getBasicData('transaction_type', true)
    },
    channels() {
      return this.$ui.getBasicData('channel', true)
    },
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
    handleEdit() {
      this.$emit('edit', this.item)
    },
  },
}
</script>

<style lang="scss">
.customer-event-table-detail-dialog {
  .body-wrapper {
    margin: 0 34px;
    color: $--color-primary;
    overflow: hidden;
    font-size: 14px;
    .info-header {
      margin-top: 30px;
      b {
        display: inline-block;
        margin-right: 14px;
      }
    }
    .info-body {
      padding-bottom: 20px;
      > div {
        line-height: 1.6em;
      }
    }
  }
  .footer-wrapper {
    position: relative;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 15px;
    border-top: 1px solid $--color-border;
  }
}
</style>
