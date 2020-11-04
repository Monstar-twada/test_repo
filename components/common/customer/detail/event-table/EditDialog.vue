<template>
  <fg-dialog
    v-model="visible"
    class="customer-event-table-edit-dialog"
    title="活動報告編集"
    persistent
    max-width="840px"
  >
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
          <fg-select v-model="form.carCode" :items="cars" placeholder="選択" />
        </fg-col>
        <fg-col span="4">
          <b>取引種別</b>
          <fg-select
            v-model="form.transactionType"
            :items="transactionTypes"
            placeholder="選択"
          />
        </fg-col>
        <fg-col span="6">
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
        :disabled="isDisabled"
        @click="save"
        >保存</fg-button
      >
    </div>
  </fg-dialog>
</template>

<script>
import { DEF_FORM } from './constants';

export default {
  props: {
    value: Boolean,
    item: {
      type: Object,
      default: () => {},
    },
    cars: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      visible: this.value,
      form: {
        ...DEF_FORM,
      },
      isDisabled: false,
    };
  },
  computed: {
    transactionTypes() {
      return this.$ui.getBasicData('transaction_type');
    },
    channels() {
      return this.$ui.getBasicData('channel');
    },
  },
  watch: {
    value(val) {
      this.visible = val;
      if (val) {
        this.form = {
          ...this.item,
          activityReportDatetime: this.item.activityReportDatetime,
          checkFlag: +this.item.checkFlag,
        };
      }
    },
    visible(val) {
      this.$emit('input', val);
    },
  },
  created() {
    this.form.contactStoreCode = $nuxt.$store.state.auth.storeCode;
    this.form.contactStaffCode = $nuxt.$store.state.auth.userCode;
  },
  methods: {
    async save() {
      if (this.isDisabled) return;
      this.isDisabled = true;
      const form = {};
      Object.keys(DEF_FORM).forEach((key) => {
        form[key] = this.form[key];
      });
      form.checkFlag = +form.checkFlag;
      // eslint-disable-next-line promise/param-names
      const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));
      await this.$api
        .put(
          `/v1/customers/${this.form.customerCode}/activityReports/${this.form.activityId}`,
          form
        )
        .then(() => {
          this.visible = false;
          this.isDisabled = false;
        })
        .catch((err) => {
          if (err) this.$alert(err.message);
          this.isDisabled = false;
        });
      this.$alert('活動報告編集成功しました！');
      await delay();
      this.$emit('change');
    },
  },
};
</script>

<style lang="scss">
.customer-event-table-edit-dialog {
  .body-wrapper {
    margin: 0 34px;
    color: $--color-primary;
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
    padding: 20px 0 27px;
    border-top: 1px solid $--color-border;
  }
}
</style>
