<template>
  <div class="global-next-action-wrapper">
    <i class="toggle-button" @click="isCollapsed = !isCollapsed"></i>
    <div class="header-wrapper">
      <h2>ネクストアクション</h2>
      <span class="badge">10</span>
    </div>
    <NextActionBody />
  </div>
</template>

<script>
import NextActionBody from './NextActionBody'
export default {
  name: 'NextActionIndex',
  components: {
    NextActionBody,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isCollapsed: this.value,
    }
  },
  watch: {
    value(val) {
      this.isCollapsed = val
    },
    isCollapsed(val) {
      this.$emit('input', val)
    },
  },
}
</script>

<style lang="scss">
$sideWidth: 210px;

.global-next-action-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: $sideWidth;
  background: $--color-white;
  transition: all 0.3s ease-in-out;
  .toggle-button {
    position: absolute;
    top: 33px;
    left: -12px;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0 0 6px rgba(7, 134, 189, 0.2);
    background: $--color-white url('./img/arrow-right.svg') no-repeat center
      center;
    transition: all 0.3s ease-in-out;
  }

  .header-wrapper {
    display: flex;
    height: 80px;
    align-items: center;
    border-bottom: 1px solid #eff6fa;
    h2 {
      margin: 7px 0 0 18px;
      font-size: 16px;
      color: $--color-primary;
    }
    .badge {
      margin: 7px 0 0 4px;
      padding: 0 5px;
      min-width: 30px;
      display: inline-block;
      background: $--color-warning;
      font-size: 10px;
      font-weight: bold;
      color: $--color-white;
      text-align: center;
      border-radius: 9px;
      height: 18px;
      line-height: 18px;
      font-family: 'Helvetica', Arial;
    }
  }
}

.next-action-is-collapsed {
  .global-next-action-wrapper {
    transform: translateX($sideWidth - 12);
    .toggle-button {
      transform: rotate(180deg);
    }
  }
}
</style>
