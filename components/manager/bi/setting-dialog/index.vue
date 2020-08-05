<template>
  <v-dialog v-model="visible" persistent :max-width="maxWidth()">
    <v-card class="setting-dialog-card">
      <SettingDialogHeader
        title="目標設定"
        @close="visible = false"
        @eventtriggered="performAction"
      />
      <keep-alive>
        <DetailsCard v-if="toggle" />
        <SimpleCard v-else />
      </keep-alive>
    </v-card>
  </v-dialog>
</template>

<script>
import DetailsCard from './DetailsCard'
import SimpleCard from './SimpleCard'
import SettingDialogHeader from '~/components/manager/bi/setting-dialog/SettingDialogHeader.vue'
export default {
  name: 'ImportDialog',
  components: {
    SettingDialogHeader,
    DetailsCard,
    SimpleCard,
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
      toggle: false,
      visible: this.value,
      width: '450px',
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
    performAction() {
      this.toggle = !this.toggle
    },
    maxWidth() {
      if (this.toggle) {
        this.width = '950px'
        return this.width
      } else {
        this.width = '450px'
        return this.width
      }
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
