<template>
  <i :class="['sort-icon', sort]" @click="sortClick"></i>
</template>

<script>
const DESC = 'desc'
const ASC = 'asc'
export default {
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  data() {
    return {
      sort: this.value,
    }
  },
  watch: {
    value(val) {
      if (this.sort !== val) {
        this.sort = val
      }
    },
    sort(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    sortClick() {
      if (this.sort === DESC) {
        this.sort = ASC
      } else if (this.sort === ASC) {
        this.sort = ''
      } else {
        this.sort = DESC
      }
    },
  },
}
</script>

<style lang="scss">
.table-th-item {
  .sort-icon {
    display: inline-block;
    position: relative;
    margin-left: 4px;
    width: 7px;
    height: 11px;
    cursor: pointer;
    vertical-align: middle;
    &:before,
    &:after {
      position: absolute;
      left: 0;
      width: 7px;
      height: 4px;
      content: '';
      background: url('./img/table-sort-arrow-normal.svg') no-repeat 0 0;
    }
    &:before {
      top: 0;
      transform: rotate(180deg);
    }
    &:after {
      bottom: 0;
    }
    &.desc:before,
    &.asc:after {
      background-image: url('./img/table-sort-arrow.svg');
    }
  }
}
</style>
