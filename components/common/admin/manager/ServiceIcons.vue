<template>
  <div class="admin-service-icons-wrapper">
    <i v-for="(icon, i) in icons" :key="i" @click="handleClick(icon)">
      <v-img :src="require('./img/table-icon-' + icon + '.svg')"></v-img>
    </i>
  </div>
</template>

<script>
export default {
  name: 'ServiceIcons',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      icons: ['car', 'cost', 'wrench', 'hammer', 'heart', 'tire'],
    }
  },
  methods: {
    handleClick(type) {
      console.log(type, this.item)
    },
  },
}
</script>

<style lang="scss">
.admin-service-icons-wrapper {
  i {
    display: inline-block;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
