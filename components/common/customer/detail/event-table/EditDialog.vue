<template>
  <v-dialog v-model="visible" persistent max-width="840px">
    <v-card class="customer-event-table-edit-dialog">
      <DialogHeader title="活動報告編集" @close="visible = false" />
      <div class="body-wrapper">
        <fg-row gutter="30" class="info-header">
          <fg-col span="7">
            <b>日時</b>
            <fg-date-setter value="2020/09/02 (水) 14:34"></fg-date-setter>
          </fg-col>
          <fg-col span="7">
            <b>対象車両</b>
            <fg-select />
          </fg-col>
          <fg-col span="4">
            <b>取引種別</b>
            <fg-select placeholder="選択" />
          </fg-col>
          <fg-col span="6">
            <b>チャネル</b>
            <fg-select />
          </fg-col>
        </fg-row>
        <div class="check-wrapper mt25">
          <h3>要チェック</h3>
          <fg-checkbox label="チェック"></fg-checkbox>
        </div>
        <div class="info-body mt25">
          <h3>コメント</h3>
          <div class="mt15">
            <fg-input v-model="form.content" type="textarea"></fg-input>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <fg-button type="primary" width="240px" @click="save">保存</fg-button>
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
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      form: {
        content: `ギアアップの不具合を感じるとのことで入庫されたが、テスターを当てても、特に該当するような症状は見受けられず、何度か走行テストも実施した結果、万が一あり得るとしたら触媒の劣化であることが考察されたが、テストで取り替えるにはあまりに高いので、50万相当の工賃がかかる旨と若干の違和感を感じるかもしれないが、走行に問題が生じているわけではない旨を説明し車は戻していたが、再度やはりおかしいとの問い合わせ。`,
      },
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
    save() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss">
.customer-event-table-edit-dialog {
  position: relative;
  .body-wrapper {
    margin: 0 34px;
    color: $blue-200;
    overflow: hidden;
    font-size: 14px;
    .info-header {
      margin-top: 30px;
      b {
        display: block;
        margin-bottom: 8px;
      }
    }
    .check-wrapper {
      display: flex;
      align-items: center;
      .fg-checkbox {
        margin-left: 27px;
      }
    }
    .info-body {
      padding-bottom: 20px;
    }
  }
  .footer-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0 27px;
    border-top: 1px solid $gray-100;
  }
}
</style>
