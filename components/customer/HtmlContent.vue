<template>
  <dl class="text-content pt5 pb5">
    <dt :style="TextStyle" v-html="label"></dt>
    <dd v-html="content"></dd>
  </dl>
</template>
<script>
export default {
  name: 'HtmlContent',
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
      type: Number,
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
  overflow: hidden;

  dt {
    width: 30%;
    height: var(--height);
    display: inline-block;
    font-weight: var(--weight);
  }

  dd {
    width: 65%;
    display: inline-block;

    dd >>> .family {
      width: 300px;
      background: #111;
    }
  }
}
</style>
