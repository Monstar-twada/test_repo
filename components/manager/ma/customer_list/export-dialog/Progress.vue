<template>
  <div class="customer-import-dialog-progress">
    <h3>データエクスポート中</h3>
    <div class="progress-value">
      <span>{{ value }}</span
      ><span>%</span>
    </div>
    <v-progress-linear
      class="mt30"
      :height="10"
      rounded
      :value="value"
      :background-opacity="0.2"
      color="#1e5199"
    ></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss">
.customer-import-dialog-progress {
  position: absolute;
  z-index: 2;
  top: 58px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: $--color-white;
  padding: 0 24px;
  text-align: center;
  h3 {
    margin-top: 58px;
    color: $--color-primary;
  }
  .progress-value {
    color: $--color-primary;
    span {
      font-weight: bold;
      &:first-child {
        font-size: 30px;
      }
      &:last-child {
        font-size: 12px;
      }
    }
  }
  .v-progress-linear {
  }
}
</style>
