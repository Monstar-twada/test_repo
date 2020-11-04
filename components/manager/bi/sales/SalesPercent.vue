<template>
  <div class="content pa-0">
    <ul class="d-flex">
      <h3>新規</h3>
      <li v-for="value in newData" :key="value.id">
        {{ value + '%' }}
      </li>
    </ul>
    <ul class="d-flex">
      <h3>リピート</h3>
      <li v-for="value in repeatData" :key="value.id">
        {{ value + '%' }}
      </li>
    </ul>
    <ul class="d-flex">
      <h3>離脱</h3>
      <li v-for="value in withrawData" :key="value.id">
        {{ value + '%' }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'SalesPercent',
  data() {
    return {
      newData: ['12', '16', '19', '20', '18', '0'],
      repeatData: ['88', '84', '81', '80', '82', '0'],
      withrawData: ['5', '7', '5', '9', '12', '0'],
    };
  },
};
</script>
<style lang="scss" scoped>
.content {
  ul {
    list-style: none;
    border-bottom: 1px solid $--color-border;
    padding: 10px 0px;
    justify-content: space-between;
    &:last-child {
      border-bottom: none;
    }
    h3 {
      position: absolute;
      color: $--color-primary;
      font-size: 10px;
      font-weight: 400;
    }
    li {
      margin-left: 68px;
      font-size: 12px;
      color: $--color-primary;
      font-weight: 800;
    }
  }
}
</style>
