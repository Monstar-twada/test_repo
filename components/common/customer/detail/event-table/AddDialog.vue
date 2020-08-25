<template>
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
          <fg-date-setter :value="form.date"></fg-date-setter>
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
      <fg-button type="primary" width="240px" bold @click="save"
        >活動報告を追加する</fg-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    value: Boolean,
  },
  data() {
    return {
      carModel: '',
      visible: this.value,
      form: {
        date: +new Date(),
        content: '',
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
.customer-detail-event-add-dialog {
  position: fixed;
  z-index: 99;
  bottom: 50px;
  right: 10px;
  width: 740px;
  max-width: 100%;
  background: $white-300;
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
    color: $blue-200;
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
</style>
