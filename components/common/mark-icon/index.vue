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
    selscted(val) {
      this.$emit('input', val)
    },
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.mark-icon {
  width: 40px;
  text-align: center;
  .icon {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $--color-primary;
    border-radius: 5px;

    img {
      width: 25px;
    }
  }
  span {
    width: 40px;
    font-size: 12px;
    font-weight: normal;
    color: $--color-primary;
  }
}
</style>
