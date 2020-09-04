<template>
  <div class="setting-switch-button">
    <v-switch v-model="stateSwitch" inset class="pa-0 ma-0"></v-switch>
  </div>
</template>
<script>
export default {
  name: 'SwitchButton',
  data() {
    return {
      stateSwitch: true,
    }
  },
  watch: {
    stateSwitch(newValue) {
      this.$emit('eventtriggered')
    },
  },
}
</script>
<style lang="scss">
.v-application--is-ltr
  .switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--switch__thumb {
  transform: translate(30px, 0) !important;
}
.setting-switch-button {
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
    background: $--color-primary-active !important;
  }
  .v-input--selection-controls__ripple {
    height: 26px !important;
    width: 26px !important;
    left: -10px !important;
    top: calc(50% - 21px);
  }
  .v-input--switch--inset.v-input--is-dirty
    .v-input--selection-controls__ripple {
    height: 26px !important;
    width: 26px !important;
    left: 0px !important;
    top: -8px !important;
  }
  .v-input--switch__thumb {
    &:before {
      content: '詳細';
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
      position: absolute;
      top: 0;
      right: -35px;
      width: 30px;
      height: 16px;
      color: $--color-white;
    }
  }
  .v-input--switch__thumb.primary--text {
    color: $--color-white !important;
    &:before {
      content: '簡単';
      font-size: 12px;
      font-weight: bold;
      line-height: 1.5;
      position: absolute;
      top: 0;
      left: -25px;
      width: 30px;
      height: 16px;
      color: $--color-white;
    }
  }
}
.v-application--is-ltr
  .setting-switch-button
  .v-input--switch--inset.v-input--is-dirty
  .v-input--switch__thumb {
  transform: translate(30px, 0) !important;
}
</style>
