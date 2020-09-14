<template>
  <div class="matter-detail-dialog__header">
    <div class="l">
      <div class="status-group">
        <HeaderTypeIcon :type="type" />
        <h2>{{ title }}</h2>
        <div class="desc">トヨタプリウス</div>
      </div>
    </div>
    <div class="r">
      <fg-button prefix-icon="car-line" border size="small">送客依頼</fg-button>
      <fg-button
        icon="plus"
        border
        circle
        size="small"
        style="transform: rotate(45deg);"
        @click="$emit('close')"
      ></fg-button>
    </div>
  </div>
</template>

<script>
import HeaderTypeIcon from './HeaderTypeIcon'
import { SEND_TYPES } from './constants'
export default {
  components: {
    HeaderTypeIcon,
  },
  props: {
    type: {
      type: String,
      default: 'buy',
    },
  },
  computed: {
    title() {
      const item = SEND_TYPES[this.type] || {}
      return `【${item.text}】No.xxxxxx 米田智彦 様`
    },
  },
}
</script>

<style lang="scss">
@import './mixins';
.matter-detail-dialog__header {
  position: relative;
  height: 117px;
  overflow: hidden;
  @include borderBottom();
  .l {
    margin: 45px 0 0 20px;
    .status-group {
      position: relative;
      padding: 0 0 0 62px;
      .type-item {
        position: absolute;
        top: 0;
        left: 0;
      }
      .desc {
        color: $--color-primary-placeholder;
        font-size: 10px;
      }
    }
  }
  .r {
    position: absolute;
    right: 20px;
    top: 37px;
    font-size: 0;
    .fg-button {
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
    }
  }
}
</style>
