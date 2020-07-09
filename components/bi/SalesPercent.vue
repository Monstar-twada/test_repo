<template>
  <div class="container">
    <ul class="d-flex">
      <h3>新規</h3>
      <li>3%</li>
      <li>3%</li>
      <li>3%</li>
      <li>3%</li>
      <li>3%</li>
      <li>0%</li>
    </ul>
    <ul class="d-flex">
      <h3>リピート</h3>
      <li>85%</li>
      <li>85%</li>
      <li>85%</li>
      <li>85%</li>
      <li>85%</li>
      <li>0%</li>
    </ul>
    <ul class="d-flex">
      <h3>離脱</h3>
      <li>12%</li>
      <li>12%</li>
      <li>12%</li>
      <li>12%</li>
      <li>12%</li>
      <li>0%</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SalesPercent',
}
</script>
<style lang="scss" scoped>
.container {
  ul {
    list-style: none;
    border-bottom: 1px solid $gray-100;
    padding: 10px 0px;
    justify-content: space-between;
    &:last-child {
      border-bottom: none;
    }
    h3 {
      position: absolute;
      color: $blue-200;
      font-size: 10px;
      font-weight: 400;
    }
    li {
      margin-left: 68px;
      font-size: 12px;
      color: $blue-200;
      font-weight: 800;
    }
  }
}
</style>
