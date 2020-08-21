<template>
  <v-dialog v-model="visible" persistent max-width="840px">
    <v-card class="customer-event-table-detail-dialog">
      <DialogHeader title="活動報告詳細" @close="visible = false">
        <fg-icon class="ml20" name="flag" :color="$colors.warning"></fg-icon>
      </DialogHeader>
      <div class="body-wrapper">
        <fg-row gutter="20" class="info-header">
          <fg-col span="8"> <b>日時</b>2020/09/02 (水) 14:34</fg-col>
          <fg-col span="6"> <b>対象車両</b>トヨタプリウス</fg-col>
          <fg-col span="5"> <b>取引種別</b>車検</fg-col>
          <fg-col span="5"> <b>チャネル</b>電話</fg-col>
        </fg-row>
        <div class="info-body mt25">
          <h3>コメント</h3>
          <div class="mt15">
            ギアアップの不具合を感じるとのことで入庫されたが、テスターを当てても、特に該当するような症状は見受けられず、何
            度か走行テストも実施した結果、万が一あり得るとしたら触媒の劣化であることが考察されたが、テストで取り替えるには
            あまりに高いので、50万相当の工賃がかかる旨と若干の違和感を感じるかもしれないが、走行に問題が生じているわけでは
            ない旨を説明し車は戻していたが、再度やはりおかしいとの問い合わせ。
          </div>
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
    </v-card>
  </v-dialog>
</template>

<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  components: {
    DialogHeader,
  },
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
      carModel: '',
      visible: this.value,
      carModels: ['A', 'B', 'C'],
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
    handleEdit() {
      this.$emit('edit', this.item)
    },
  },
}
</script>

<style lang="scss">
.customer-event-table-detail-dialog {
  position: relative;
  .body-wrapper {
    margin: 0 34px;
    color: $blue-200;
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
        line-height: 18px;
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
    border-top: 1px solid $gray-100;
  }
}
</style>
