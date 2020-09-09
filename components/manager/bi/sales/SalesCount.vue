<template>
  <div class="d-flex justify-space-between mt10">
    <div class="count ml20">
      <h3 class="count--label">新規</h3>
      <h4 class="count--number">609<span>件</span></h4>
      <Increase content="2.5%" />
    </div>
    <div class="count">
      <h3 class="count--label">リピート</h3>
      <h4 class="count--number">3446<span>件</span></h4>
      <Increase content="1.8%" />
    </div>
    <div class="count">
      <h3 class="count--label">離脱</h3>
      <h4 class="count--number">410<span>件</span></h4>
      <Decrease content="1.2%" />
    </div>
  </div>
</template>
<script>
import Increase from '~/components/common/increase/index'
import Decrease from '~/components/common/decrease/index'

export default {
  name: 'SalesStats',
  components: {
    Increase,
    Decrease,
  },
}
</script>
<style lang="scss" scoped>
.count {
  text-align: right;
  &--label {
    font-size: 10px;
    color: $--color-primary-placeholder;
    font-weight: 400;
  }
  &--number {
    font-family: 'Yantramanav';
    font-size: 24px;
    color: $--color-primary;
    font-weight: 900;
    span {
      font-size: 12px;
    }
  }
}
</style>
