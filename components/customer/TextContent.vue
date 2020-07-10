<template>
  <dl class="text-content pt5 pb5">
    <dt :style="TextStyle">{{ label }}</dt>
    <dd>{{ content }}</dd>
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
    customheight: {
      type: [Number, String],
      default: 20,
    },
    customfontweight: {
      type: String,
      default: 'bold',
    },
  },
  computed: {
    TextStyle() {
      return {
        '--height': this.customheight + 'px',
        '--weight': this.customfontweight,
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
    width: 30%;
    height: var(--height);
    display: inline-block;
    font-weight: var(--weight);
  }

  dd {
    width: 65%;
    display: inline-block;
  }
}
</style>
