<template>
  <dl class="text-content pt5 pb5">
    <dt :style="TextStyle">{{ label }}</dt>
    <dd :class="{ 'high-light': highLight, flex: flex }">
      {{ content }}
      <img v-if="copyable" src="./img/link.svg" width="10" />
      <slot></slot>
    </dd>
  </dl>
</template>
<script>
export default {
  name: 'TextContent',
  props: {
    label: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    customHeight: {
      type: [Number, String],
      default: 20,
    },
    customFontWeight: {
      type: String,
      default: 'bold',
    },
    highLight: {
      type: Boolean,
      default: false,
    },
    copyable: {
      type: Boolean,
      default: false,
    },
    flex: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    TextStyle() {
      return {
        '--height': this.customHeight + 'px',
        '--weight': this.customFontWeight,
      }
    },
  },
}
</script>
<style lang="scss"></style>
<style lang="scss" scoped>
.text-content {
  width: 100%;
  position: relative;
  color: $blue-200;
  vertical-align: top;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  dt {
    flex: 0 0 80px;
    /*height: var(--height);*/
    display: inline-block;
    font-weight: var(--weight);
  }

  dd {
    flex: 1;
    display: inline-block;
    &.flex {
      display: flex;
      align-items: center;
    }
  }
}
</style>
