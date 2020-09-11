<template>
  <div class="matter-detail-dialog__header">
    <div class="l">
      <div class="status-group">
        <div class="icon"></div>
        <h2>No.xxxxxx 米田智彦 様</h2>
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
      ></fg-button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import './common/mixins';
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
      .icon {
        position: absolute;
        top: 0;
        left: 0;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        border: 1px solid $--color-border;
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
