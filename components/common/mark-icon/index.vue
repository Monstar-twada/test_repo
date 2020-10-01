<template>
  <div class="mark-icon">
    <div class="icon" :class="selected ? '__selected' : ''">
      <img :src="require(`./img/${iconSrc}.svg`)" />
    </div>
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'MarkIcon',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    iconSrc: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selected: this.value,
    }
  },
  watch: {
    value(val) {
      this.selected = val
    },
    selected(val) {
      this.$emit('input', val)
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.mark-icon {
  width: 80px;
  height: 80px;
  text-align: center;
  margin: 0 -20px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: flex-start;
  .icon {
    width: 40px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $--color-primary-placeholder;
    border-radius: 5px;

    img {
      width: 25px;
    }
  }
  .icon.__selected {
    background: $--color-primary;
  }
  span {
    width: 100%;
    text-align: center;
    font-size: 12px;
    font-weight: normal;
  }
}
</style>
