<template>
  <fg-dialog
    v-model="visible"
    class="matter-detail-dialog"
    max-width="800px"
    persistent
    header-height="117"
  >
    <template v-slot:header>
      <DetailHeader :type="type" @close="visible = false" />
    </template>

    <Buy v-if="type === 'buy'" />
    <Sale v-if="type === 'sale'" />
    <Inspection v-if="type === 'inspection'" />
  </fg-dialog>
</template>

<script>
import DetailHeader from './common/Header'
import Buy from './Buy'
import Sale from './Sale'
import Inspection from './Inspection'
import './common/tasks/index.scss'

export default {
  components: {
    Buy,
    Sale,
    Inspection,
    DetailHeader,
  },
  props: {
    value: Boolean,
    // 購入 buy, 売却 sale, 車検 inspection
    type: {
      type: String,
      default: 'buy',
    },
    // 未着手中タスク not-start, 提案中タスク proposal, 作業中タスク started, 見送 lose, 支払処理 done
    status: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  watch: {
    value(val) {
      if (this.visible !== val) {
        this.visible = val
      }
    },
    visible(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss">
.matter-detail-dialog {
  .fg-dialog__body {
    margin: 2px 2px 2px 0;
  }
}
</style>
