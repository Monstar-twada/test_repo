<template>
  <div class="ma-export-dialog" :class="[visible ? '' : '__close']">
    <DialogHeader title="エクスポートしますか？" @close="visible = false" />
    <v-btn color="blue" depressed rounded @click="handleImport">はい</v-btn>
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
  mounted() {
    console.log('visible', this.visible)
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
  background: $white-300;
  border-radius: 2px;
  box-shadow: 2px 2px $gray-100;
  .dialog-header-wrapper.border {
    border-bottom: none;
  }

  .v-btn {
    width: 240px;
    margin-left: 50px;
  }
  .v-btn__content {
    color: $white-300;
  }
}

.ma-export-dialog.__close {
  display: none;
}
</style>
