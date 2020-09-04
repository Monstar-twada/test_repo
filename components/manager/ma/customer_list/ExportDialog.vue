<template>
  <div class="ma-export-dialog" :class="[visible ? '' : '__close']">
    <DialogHeader title="エクスポートしますか？" @close="visible = false" />
    <fg-button
      class="ma-export-dialog-button"
      type="primary"
      bold
      width="240"
      @click="handleImport"
      >はい</fg-button
    >
  </div>
</template>
<script>
import DialogHeader from '~/components/common/dialog-header/index'
export default {
  name: 'ExportDialog',
  components: {
    DialogHeader,
  },
  props: {
    value: {
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
  methods: {
    handleImport() {
      // do something
    },
  },
}
</script>
<style lang="scss">
.ma-export-dialog {
  display: block;
  position: absolute;
  right: 120px;
  top: 30px;
  width: 340px;
  height: 120px;
  background: $--color-white;
  border-radius: 2px;
  box-shadow: 2px 2px $--color-border;
  .dialog-header-wrapper.border {
    border-bottom: none;
  }

  &-button {
    width: 240px;
    margin-left: 50px;
  }
}

.ma-export-dialog.__close {
  display: none;
}
</style>
