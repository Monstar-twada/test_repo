<template>
  <transition name="fg-zoom-in-right-bottom">
    <div v-show="visible" class="customer-detail-event-add-dialog">
      <div class="header-wrapper">
        <fg-button
          icon="plus"
          size="small"
          border
          circle
          @click="visible = false"
        ></fg-button>
      </div>
      <div class="body-wrapper">
        <fg-row gutter="30" class="info-header">
          <fg-col span="7">
            <b>日時</b>
            <fg-date-picker
              v-model="form.activityReportDatetime"
              format="yyyy/MM/dd (W) hh:mm"
              value-format="yyyy-MM-dd hh:mm"
            ></fg-date-picker>
          </fg-col>
          <fg-col span="7">
            <b>対象車両</b>
            <fg-select
              v-model="form.carCode"
              placeholder="選択"
              :items="cars"
            />
          </fg-col>
          <fg-col span="5">
            <b>取引種別</b>
            <fg-select
              v-model="form.transactionType"
              :items="transactionTypes"
              placeholder="選択"
            />
          </fg-col>
          <fg-col span="5">
            <b>チャネル</b>
            <fg-select
              v-model="form.channel"
              placeholder="選択"
              :items="channels"
            />
          </fg-col>
        </fg-row>
        <div class="check-wrapper mt25">
          <h3>要チェック</h3>
          <fg-checkbox v-model="form.checkFlag" label="チェック"></fg-checkbox>
        </div>
        <div class="info-body mt25">
          <h3>コメント</h3>
          <div class="mt15">
            <fg-input
              v-model="form.comment"
              class="event-textarea"
              type="textarea"
            ></fg-input>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <fg-button
          type="primary"
          width="240px"
          bold
          :disabled="isDisabled"
          @click="save"
          >活動報告を追加する</fg-button
        >
      </div>
    </div>
  </transition>
</template>

<script>
import { DEF_FORM } from './constants'

export default {
  props: {
    value: Boolean,
    cars: {
      type: Array,
      default: () => [],
    },
    customerData: {
      type: Object,
      default: () => {},
    },
    currentCarCode: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: this.value,
      form: {
        ...DEF_FORM,
        carCode: this.currentCarCode,
      },
      isDisabled: false,
    }
  },
  computed: {
    transactionTypes() {
      return this.$ui.getBasicData('transaction_type')
    },
    channels() {
      return this.$ui.getBasicData('channel')
    },
  },
  watch: {
    value(val) {
      if (this.visible !== val) {
        this.visible = val
      }
      if (val) {
        const { myStoreCode } = this.customerData
        this.form.contactStoreCode = myStoreCode
        // currentCarCode
        if (this.currentCarCode && this.currentCarCode !== this.form.carCode) {
          this.form.carCode = this.currentCarCode
        }
      }
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    save() {
      if (this.isDisabled) return
      this.isDisabled = true
      const form = { ...this.form }
      form.checkFlag = +form.checkFlag
      this.$api
        .post(
          `/v1/customers/${this.customerData.customerCode}/activityReports`,
          form
        )
        .then(() => {
          this.visible = false
          this.$alert('活動報告追加成功しました！')
          this.$emit('change')
          this.isDisabled = false
        })
        .catch((err) => {
          if (err) this.$alert(err.message)
          this.isDisabled = false
        })
    },
  },
}
</script>

<style lang="scss">
.customer-detail-event-add-dialog {
  position: fixed;
  z-index: 99;
  bottom: 50px;
  right: 10px;
  width: 740px;
  max-width: 100%;
  background: $--color-white;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(7, 134, 189, 0.3);
  .header-wrapper {
    padding: 20px 20px 0;
    display: flex;
    justify-content: flex-end;
    .fg-button {
      transform: rotate(45deg);
    }
  }
  .body-wrapper {
    margin: 0 34px;
    color: $--color-primary;
    overflow: hidden;
    font-size: 14px;
    .info-header {
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
    .event-textarea textarea {
      line-height: 1.6em;
    }
  }
  .footer-wrapper {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 27px;
  }
}

.transition-right-bottom-in-enter-active,
.transition-right-bottom-in-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: right bottom;
}
.transition-right-bottom-in-enter,
.transition-right-bottom-in-leave-active {
  opacity: 0;
  transform: scale(0);
}
</style>
