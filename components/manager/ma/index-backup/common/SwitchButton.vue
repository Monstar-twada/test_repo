<template>
  <div class="switch-button">
    <v-switch v-model="stateSwitch" inset class="pa-0 ma-0"></v-switch>
  </div>
</template>
<script>
export default {
  name: 'SwitchButton',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      switchFlg: this.value,
    }
  },
  computed: {
    stateSwitch: {
      get() {
        return this.switchFlg
      },
      set() {
        this.switchFlg = !this.switchFlg
      },
    },
  },
  watch: {
    value(val) {
      this.switchFlg = val
    },
    switchFlg(val) {
      this.$emit('input', val)
    },
  },
}
</script>
<style lang="scss">
.switch-button {
  .v-input--selection-controls {
    padding-top: 0 !important;
  }
  .v-input--selection-controls__input {
    width: 68px !important;
    height: 26px;
  }
  .v-input--switch--inset .v-input--switch__track {
    width: 60px !important;
    height: 26px;
    border-radius: 13px;
    opacity: 1 !important;
  }
  .v-input--selection-controls__ripple {
    height: 26px !important;
    width: 26px !important;
    left: -10px !important;
    top: calc(50% - 22px);
  }
  .v-input--switch--inset.v-input--is-dirty
    .v-input--selection-controls__ripple {
    height: 26px !important;
    width: 26px !important;
    left: -8px !important;
    top: calc(50% - 22px);
  }
  .v-input--switch__thumb {
    &:before {
      content: 'OFF';
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
      position: absolute;
      top: 0;
      right: -25px;
      width: 20px;
      height: 16px;
      color: $--color-primary;
    }
  }
  .v-input--switch__thumb.primary--text {
    color: $--color-white !important;
    &:before {
      content: 'ON';
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
      position: absolute;
      top: 0;
      left: -25px;
      width: 20px;
      height: 16px;
      color: $--color-white;
    }
  }
  .v-input--switch__thumb {
    top: calc(50% - 11px);
  }
  .theme--light.v-input--switch .v-input--switch__track {
    color: #e5edf6;
  }
}
.v-application--is-ltr
  .switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--selection-controls__ripple,
.v-application--is-ltr
  .switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--switch__thumb {
  transform: translate(30px, 0) !important;
}
</style>
