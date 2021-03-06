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
              @change="checkFormVal()"
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
              @change="checkFormVal()"
            />
          </fg-col>
          <fg-col span="5">
            <b>チャネル</b>
            <fg-select
              v-model="form.channel"
              placeholder="選択"
              :items="channels"
              @change="checkFormVal()"
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
              @change="checkFormVal()"
            ></fg-input>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <fg-button
          type="primary"
          width="240px"
          bold
          :disabled="!isSubmitting"
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
      default: null,
    },
  },
  data() {
    return {
      visible: this.value,
      form: {
        ...DEF_FORM,
        carCode: this.currentCarCode,
      },
      isSubmitting: false,
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
        // currentCarCode
        if (this.currentCarCode && this.currentCarCode !== this.form.carCode) {
          this.form.carCode = this.currentCarCode
        }
        // 「担当店舗コード」と「担当者コード」のセット
        // 取得方法：QAのNo.11を参照してください
        // https://docs.google.com/spreadsheets/d/1AntambplP9bKb0RSyx-Fsv8n2rjSjSHyHFIEfha4L_c/edit#gid=0
        // this.form.contactStoreCode = ''
        // this.form.contactStaffCode = ''
      }
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
  created() {
    this.form.contactStoreCode = $nuxt.$store.state.auth.storeCode
    this.form.contactStaffCode = $nuxt.$store.state.auth.userCode
  },
  methods: {
    resetForm() {
      const reset = {
        ...DEF_FORM,
        carCode: this.currentCarCode,
      }
      this.form = reset
      if (this.currentCarCode && this.currentCarCode !== this.form.carCode) {
        this.form.carCode = this.currentCarCode
      }
      this.form.contactStoreCode = $nuxt.$store.state.auth.storeCode
      this.form.contactStaffCode = $nuxt.$store.state.auth.userCode
    },
    checkFormVal() {
      let index = 0
      for (const key in this.form) {
        if (
          this.form[key] === '' &&
          (key !== 'carCode' || key !== 'checkFlag')
        ) {
          index += 1
        }
      }
      this.isSubmitting = index === 0
    },
    async save() {
      if (!this.isSubmitting) return
      const form = { ...this.form }
      form.checkFlag = +form.checkFlag
      // eslint-disable-next-line promise/param-names
      const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms))
      await this.$api
        .post(
          `/v1/customers/${this.customerData.customerCode}/activityReports`,
          form
        )
        .then(() => {
          this.visible = false
          this.isSubmitting = false
          this.resetForm()
        })
        .catch((err) => {
          if (err) this.$alert(err.message)
          this.isSubmitting = false
        })
      this.$alert('活動報告追加成功しました！')
      await delay()
      this.$root.$emit('getCarList')
      this.$emit('change')
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
