<template>
  <div class="setting-header-wrapper" :class="noBorder ? '' : 'border'">
    <div class="d-flex">
      <h2>{{ title }}</h2>
      <SwitchButton
        class="pa-0 ma-0 setting-header-wrapper__toggle"
        @eventtriggered="doEvent"
      ></SwitchButton>
    </div>
    <div class="d-flex">
      <Select placeholder="2019年" class="mr-5" />
      <CloseButton @click="$emit('close')" />
    </div>
  </div>
</template>

<script>
import CloseButton from '~/components/common/dialog-header/CloseButton'
import Select from '~/components/common/Select.vue'
import SwitchButton from '~/components/bi/setting-dialog/SwitchButton'
export default {
  name: 'DialogHeader',
  components: {
    CloseButton,
    Select,
    SwitchButton,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      stateSwitch: false,
    }
  },
  methods: {
    doEvent() {
      this.stateSwitch = !this.stateSwitch
      this.$emit('eventtriggered')
    },
  },
}
</script>

<style lang="scss" scoped>
.setting-header-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  &.border {
    border-bottom: 1px solid $gray-100;
  }
  height: 58px;
  &__toggle {
    position: absolute;
    left: 115px;
    top: 18px;
  }
  h2 {
    color: $blue-200;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dialog-close-button {
    top: 14px;
    right: 24px;
  }
}
</style>
