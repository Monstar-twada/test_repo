<template>
  <div class="date-viewer-wrapper" :class="[clickable ? 'clickable' : '']">
    <i class="__left" @click="handleClick('left')"></i>
    <span class="text">{{ text }}</span>
    <i class="__right" @click="handleClick('right')"></i>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    clickable: Boolean,
  },
  data() {
    return {
      text: this.value,
    }
  },
  watch: {
    value(val) {
      if (this.text !== val) {
        this.text = val
      }
    },
    text(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleClick(type) {
      if (!this.clickable) return
      console.log(type)
    },
  },
}
</script>

<style lang="scss">
.date-viewer-wrapper {
  display: flex;
  align-items: center;
  &.clickable {
    i {
      cursor: pointer;
    }
  }
  i {
    display: inline-block;
    width: 7px;
    height: 12px;
    background: url('./img/arrow-left.svg') no-repeat center 1px;
    background-size: 100% auto;
    &.__right {
      background-image: url('./img/arrow-right.svg');
    }
  }
  span.text {
    display: inline-block;
    margin: 0 7px;
    font-size: 12px;
    color: $white-300;
  }
}
</style>
