<template>
  <button
    class="button"
    :style="ButtonStyle"
    :class="[isWhite ? 'white_style' : 'blue_style']"
  >
    {{ content }}
  </button>
</template>

<script>
export default {
  name: 'ButtonLarge',
  props: {
    content: {
      type: String,
      default: '',
    },
    isWhite: {
      type: Boolean,
      default: false,
    },
    customwidth: {
      type: Number,
      default: 220,
    },
  },
  computed: {
    ButtonStyle() {
      return {
        '--width': this.customwidth + 'px',
      }
    },
  },
}
</script>

<style lang="scss">
.button {
  width: var(--width);
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 20px;
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
}

.blue_style {
  background: $--color-primary-active;
  border: 1px solid $--color-background;
  color: $--color-background;
  &::after {
    border-top: 2px solid $--color-background;
    border-right: 2px solid $--color-background;
  }
}

.white_style {
  border: 1px solid $--color-primary-active;
  background: $--color-white;
  color: $--color-primary-active;
  &::after {
    border-top: 2px solid $--color-primary-active;
    border-right: 2px solid $--color-primary-active;
  }
}
</style>
