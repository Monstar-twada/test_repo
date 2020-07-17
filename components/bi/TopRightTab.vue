<template>
  <div ref="el" class="bi-home-top-right-tab-wrapper">
    <div
      v-for="(item, i) in items"
      :key="i"
      class="item"
      @click="handleClick(i)"
    >
      {{ item.text }}
    </div>
    <i ref="line" class="line"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      index: this.value,
      elItems: [],
    }
  },
  watch: {
    value(val) {
      if (this.index !== val) {
        this.index = val
      }
    },
    index(val) {
      this.$emit('input', val)
    },
  },
  mounted() {
    this.initItems()
    this.resetLinePosition()
  },
  methods: {
    initItems() {
      const el = this.$refs.el
      this.elItems = Array.prototype.slice.call(el.querySelectorAll('.item'), 0)
    },
    handleClick(i) {
      if (this.index === i) return
      this.index = i
      this.resetLinePosition()
    },
    resetLinePosition() {
      const el = this.elItems[this.index]
      if (!el) return
      const line = this.$refs.line
      line.style.width = el.offsetWidth + 'px'
      line.style.transform = `translateX(${el.offsetLeft}px)`
    },
  },
}
</script>

<style lang="scss">
.bi-home-top-right-tab-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  .item {
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    color: $white-300;
    margin-left: 30px;
    &:first-child {
      margin-left: 0;
    }
  }
  .line {
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 1px;
    background: $white-300;
    transition: all 0.3s ease-in-out;
  }
}
</style>
