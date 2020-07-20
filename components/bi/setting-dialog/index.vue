<template>
  <v-dialog v-model="visible" persistent max-width="450px">
    <v-card class="setting-dialog-card">
      <SettingDialogHeader title="目標設定" @close="visible = false" />
      <v-card-text>
        <div class="setting-dialog-wrapper">
          <div class="setting-dialog-wrapper__box">
            <h4>年間利益目標</h4>
            <div>
              <Input :customheight="30" />
              <span>円</span>
            </div>
          </div>
          <div class="check-info mt10">
            <v-img
              class="mr5"
              :src="require('~/static/customer/warning.svg')"
            ></v-img>
            年間利益目標に到達していません。目標設定を再入力願います。
          </div>
        </div>
      </v-card-text>
      <div class="d-flex">
        <v-card-text class="pa-0 card-padding setting-dialog-border">
          <div class="setting-dialog-wrapper flex-column">
            <h4 class="mb15">過去2年の車検台数</h4>
            <div class="setting-dialog-wrapper__left">
              <h5>前年</h5>
              <div class="mb10">
                <Input :customheight="30" />
                <span>台</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__right">
              <h5>前々年</h5>
              <div>
                <Input :customheight="30" />
                <span>台</span>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="setting-dialog-wrapper flex-column">
            <h4 class="mb15">車検</h4>
            <div class="setting-dialog-wrapper__left">
              <h5>単価</h5>
              <div class="mb10">
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__right">
              <h5>原価</h5>
              <div>
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
          </div>
        </v-card-text>
      </div>
      <div class="d-flex">
        <v-card-text class="pa-0 card-padding setting-dialog-border">
          <div class="setting-dialog-wrapper flex-column">
            <h4 class="mb15">点検</h4>
            <div class="setting-dialog-wrapper__left">
              <h5>台数</h5>
              <div class="mb10">
                <Input
                  :customheight="30"
                  :customfontsize="11"
                  placeholder="前年度の点検数"
                />
                <span>台</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__left">
              <h5>単価</h5>
              <div class="mb10">
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__right">
              <h5>原価</h5>
              <div>
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-text>
          <div class="setting-dialog-wrapper flex-column">
            <h4 class="mb15">点検</h4>
            <div class="setting-dialog-wrapper__left">
              <h5>整備</h5>
              <div class="mb10">
                <Input
                  :customheight="30"
                  :customfontsize="11"
                  placeholder="目標台数"
                />
                <span>台</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__left">
              <h5>単価</h5>
              <div class="mb10">
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
            <div class="setting-dialog-wrapper__right">
              <h5>原価</h5>
              <div>
                <Input :customheight="30" />
                <span>円</span>
              </div>
            </div>
          </div>
        </v-card-text>
      </div>
      <v-card-text>
        <div class="setting-dialog-wrapper">
          <div class="setting-dialog-wrapper__box mt5 m5">
            <h4>顧客維持率</h4>
            <div>
              <Input :customheight="30" />
              <span>%</span>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-text>
        <div class="setting-dialog-wrapper">
          <div class="setting-dialog-wrapper__box mt5 m5">
            <h4>新規獲得率</h4>
            <div>
              <Input :customheight="30" />
              <span>%</span>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card-actions align="center">
        <v-btn color="#1295CE" depressed rounded @click="handleImport"
          >目標を設定する</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SettingDialogHeader from '~/components/bi/setting-dialog/SettingDialogHeader.vue'
import Input from '~/components/common/Input.vue'
export default {
  name: 'ImportDialog',
  components: {
    SettingDialogHeader,
    Input,
  },
  props: {
    value: Boolean,
    isBi: {
      type: Boolean,
      default: false,
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
}
</script>

<style lang="scss">
.v-dialog:not(.v-dialog--fullscreen) {
  max-height: 95% !important;
}
.setting-dialog-card {
  position: relative;
  .v-card__text {
    padding: 20px 30px 20px 15px !important;
    border-bottom: 1px solid $gray-100;
    .remark {
      margin-top: 28px;
      color: $blue-200;
      font-size: 14px;
      font-weight: 400;
    }
    .v-input__control {
      .theme--light.v-icon {
        color: $gray-100;
      }
      .v-input--radio-group__input {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        .v-radio {
          flex: 0 0 50%;
          margin-top: 10px;
          label {
            color: $blue-200;
            font-size: 12px;
          }
        }
      }
    }
    .card-padding {
    }
    .setting-dialog-border {
      border-right: 1px solid $gray-100;
    }
    .setting-dialog-wrapper {
      display: flex;
      flex-direction: column;
      align-items: baseline;
      h4 {
        font-size: 14px;
        color: #1e5199;
      }
      span {
        font-size: 12px;
        color: #1e5199;
      }
      &__box {
        width: 100%;
        justify-content: space-between;
        display: flex;
      }
      &__left,
      &__right {
        display: flex;
        h5 {
          font-size: 12px;
          color: #1e5199;
          width: 45px;
          margin-right: 10px;
        }
      }
      &__right {
      }
      .check-info {
        display: flex;
        align-items: center;
        font-size: 12px;
        color: $pink-100;
      }
    }
  }
  .v-card__actions {
    padding: 0;
    height: 80px;
    justify-content: center;
    .v-btn {
      width: 240px;
      .v-btn__content {
        color: $white-300;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.setting-dialog-border {
  border-right: 1px solid $gray-100 !important;
}
</style>
